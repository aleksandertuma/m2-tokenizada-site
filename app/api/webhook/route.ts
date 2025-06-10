import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, updateDoc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Wallet } from "ethers";
import { sendEmail } from "@/lib/sendEmail";

// Chave secreta do webhook do Mercado Pago
const WEBHOOK_SECRET = "049461f45f2eafbee46f21232bea88f96fcd3db7385d55eeca3026152373ab23";

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  if (!signature) {
    console.warn("❌ Assinatura ausente.");
    return NextResponse.json({ error: "Assinatura ausente" }, { status: 401 });
  }

  const expectedSignature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.warn("❌ Assinatura inválida.");
    return NextResponse.json({ error: "Assinatura inválida" }, { status: 403 });
  }

  const body = JSON.parse(rawBody);
  console.log("✅ Webhook recebido com sucesso:", body);

  if (
  body.type === "payment" &&
  body.data &&
  (body.action === "payment.updated" || body.action === "payment.created")
)
 {
    const paymentId = body.data.id;

    try {
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
        return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
      }

      const senha = uuidv4().slice(0, 8);
      const wallet = Wallet.createRandom();

      await updateDoc(doc.ref, {
        status: "pago",
        pagamentoConfirmadoEm: Timestamp.now(),
        paymentId,
        senha,
        enderecoCarteira: wallet.address,
        chavePrivada: wallet.privateKey,
      });

      console.log("✅ Firestore atualizado com sucesso");

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

    } catch (error) {
      console.error("❌ Erro ao processar webhook:", error);
      return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
