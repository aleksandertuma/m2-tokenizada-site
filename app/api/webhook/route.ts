import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection,doc,getDoc,updateDoc } from "firebase/firestore";
import { Wallet } from "ethers";
import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "@/lib/sendEmail";
import { empreendimentos } from "@/data/empreendimentos";
import { repassarPix } from "@/lib/banco/starkbank";
import { registrarLogRepasse } from "@/lib/logs/logsRepasses";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);

    console.log("✅ Webhook recebido:", JSON.stringify(body, null, 2));

    if (
      body.type === "payment" &&
      body.data &&
      (body.action === "payment.created" || body.action === "payment.updated")
    ) {
      const paymentId = String(body.data.id);

      // Buscar os detalhes do pagamento via API do Mercado Pago
      const paymentDetails = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN!}`,
        },
      }).then(res => res.json());

      if (paymentDetails.status !== "approved") {
        console.warn("⚠️ Pagamento ainda não aprovado:", paymentDetails.status);
        return NextResponse.json({ message: "Pagamento não aprovado" });
      }

      const compraId = paymentDetails.external_reference;
      const compraRef = doc(db, "compras", compraId);
      const compraSnap = await getDoc(compraRef);

      if (!compraSnap.exists()) {
        console.error("❌ Compra não encontrada com ID:", compraId);
        return NextResponse.json({ error: "Compra não encontrada" }, { status: 404 });
      }

      const dados = compraSnap.data();

      const empreendimento = empreendimentos.find(e => e.id === dados.empreendimentoId);
      if (!empreendimento) {
        return NextResponse.json({ error: "Empreendimento não encontrado" }, { status: 400 });
      }

      // Calcular valores
      const valorTotal = dados.valorTotal;
      const percentualM2 = empreendimento.percentualM2 || 5;
      const valorRepasse = valorTotal * ((100 - percentualM2) / 100);

      // Criar carteira e senha do cliente
      const senha = uuidv4().slice(0, 8);
      const wallet = Wallet.createRandom();

      // Atualizar compra no Firestore
      await updateDoc(compraRef, {
        status: "pago",
        statusWebhook: "sucesso",
        pagamentoConfirmadoEm: new Date(),
        paymentId,
        senha,
        enderecoCarteira: wallet.address,
        chavePrivada: wallet.privateKey,
        valorRepasse,
      });

      // Verifica se o empreendimento possui dados de repasse
      const temDadosDeRepasse =
        empreendimento.chavePix &&
        empreendimento.taxId &&
        empreendimento.nomeRecebedor;

      if (temDadosDeRepasse) {
        try {
          await repassarPix({
            valorCentavos: Math.round(valorRepasse * 100),
            chavePix: empreendimento.chavePix,
            descricao: `Repasse automático - ${empreendimento.nome}`,
            taxId: empreendimento.taxId,
            nomeRecebedor: empreendimento.nomeRecebedor,
          });

          await registrarLogRepasse({
            empreendimentoId: empreendimento.id,
            compraId,
            valorCentavos: Math.round(valorRepasse * 100),
            chavePix: empreendimento.chavePix,
            nomeRecebedor: empreendimento.nomeRecebedor,
            taxId: empreendimento.taxId,
            descricao: `Repasse automático - ${empreendimento.nome}`,
            status: "concluido",
          });

          await updateDoc(compraRef, { repasseStatus: "concluido" });
          console.log("✅ Repasse realizado com sucesso via Stark Bank.");
        } catch (erro: any) {
          await registrarLogRepasse({
            empreendimentoId: empreendimento.id,
            compraId,
            valorCentavos: Math.round(valorRepasse * 100),
            chavePix: empreendimento.chavePix,
            nomeRecebedor: empreendimento.nomeRecebedor,
            taxId: empreendimento.taxId,
            descricao: `Repasse automático - ${empreendimento.nome}`,
            status: "falhou",
            erro: erro.message || "Erro desconhecido",
          });

          await updateDoc(compraRef, { repasseStatus: "falhou" });
          console.warn("⚠️ Repasse falhou, mas compra confirmada.");
        }
      } else {
        await updateDoc(compraRef, {
          repasseStatus: "pendente",
          motivoFalha: "dados bancários ausentes no empreendimento",
        });
        console.warn("⚠️ Dados bancários ausentes. Nenhum PIX foi enviado.");
      }

      // Enviar e-mail com carteira
      await sendEmail({
        nome: dados.nome,
        email: dados.email,
        empreendimento: empreendimento.nome,
        quantidadeTokens: dados.quantidadeTokens,
        valorPago: valorTotal,
        senha,
        enderecoCarteira: wallet.address,
        chavePrivada: wallet.privateKey,
      });

      console.log("✅ E-mail enviado com sucesso.");
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ message: "Evento ignorado" });
  } catch (error: any) {
    console.error("❌ Erro no webhook:", error.message || error);
    return NextResponse.json({ error: "Erro interno no webhook" }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
