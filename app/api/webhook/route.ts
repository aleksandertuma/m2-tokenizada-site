import { NextResponse } from "next/server";
import crypto from "crypto";

// ⚠️ Substitua pela sua chave secreta real:
const WEBHOOK_SECRET = "049461f45f2eafbee46f21232bea88f96fcd3db7385d55eeca3026152373ab23";

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  if (!signature) {
    console.warn("❌ Assinatura ausente.");
    return NextResponse.json({ error: "Assinatura ausente" }, { status: 401 });
  }

  // Gera hash HMAC com a chave secreta
  const expectedSignature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  // Valida assinatura
  if (signature !== expectedSignature) {
    console.warn("❌ Assinatura inválida.");
    return NextResponse.json({ error: "Assinatura inválida" }, { status: 403 });
  }

  // Parse do body
  const body = JSON.parse(rawBody);
  console.log("✅ Webhook recebido com sucesso:", body);

  // Aqui você pode salvar no banco de dados, notificar o cliente, etc.
  return NextResponse.json({ received: true });
}