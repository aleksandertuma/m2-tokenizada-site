import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  Timestamp
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Wallet } from "ethers";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);

    console.log("✅ Webhook recebido:", JSON.stringify(body, null, 2));

    if (
      body.type === "payment" &&
      body.data &&
      (body.action === "payment.updated" || body.action === "payment.created")
    ) {
      const paymentId = String(body.data.id);

      // Buscar a compra pendente
      const comprasRef = collection(db, "compras");
      const q = query(comprasRef, where("status", "==", "pendente"));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        console.warn("⚠️ Nenhuma compra pendente encontrada.");
        return NextResponse.json({ message: "Nada a atualizar" });
      }

      const doc = snapshot.docs[0];
      const dados = doc.data();

      if (
        !dados.nome ||
        !dados.email ||
        !dados.empreendimento ||
        !dados.quantidadeTokens ||
        !dados.total
      ) {
        console.error("❌ Dados incompletos no Firestore:", dados);

        await updateDoc(doc.ref, {
          statusWebhook: "erro",
          erroWebhook: "Dados incompletos no Firestore",
          pagamentoConfirmadoEm: Timestamp.now(),
        });

        return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
      }

      const senha = uuidv4().slice(0, 8);
      const wallet = Wallet.createRandom();

      await updateDoc(doc.ref, {
        status: "pago",
        statusWebhook: "sucesso",
        pagamentoConfirmadoEm: Timestamp.now(),
        paymentId,
        senha,
        enderecoCarteira: wallet.address,
        chavePrivada: wallet.privateKey,
      });

      console.log("✅ Firestore atualizado com sucesso");

      try {
        await sendEmail({
          nome: dados.nome,
          email: dados.email,
          empreendimento: dados.empreendimento,
          quantidadeTokens: dados.quantidadeTokens,
          valorPago: Number(dados.total),
          senha,
          enderecoCarteira: wallet.address,
          chavePrivada: wallet.privateKey,
        });

        console.log("✅ E-mail enviado com sucesso");
      } catch (emailError) {
        console.error("❌ Erro ao enviar e-mail:", emailError);

        await updateDoc(doc.ref, {
          statusWebhook: "erro",
          erroWebhook: "Falha no envio de e-mail",
        });

        return NextResponse.json({ error: "Falha ao enviar e-mail" }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    console.log("ℹ️ Webhook recebido mas ignorado por tipo/ação não reconhecida.");
    return NextResponse.json({ ignored: true });
  } catch (error) {
    console.error("❌ Erro global no webhook:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
