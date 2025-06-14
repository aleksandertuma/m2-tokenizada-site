// lib/banco/starkbank.ts

import { PixPayment } from "starkbank/dist/pix/payment";

let starkbank: typeof import("starkbank") | null = null;

// Verifica se as credenciais estão presentes antes de importar
if (
  process.env.STARKBANK_PROJECT_ID &&
  process.env.STARKBANK_PRIVATE_KEY &&
  process.env.STARKBANK_ENVIRONMENT
) {
  starkbank = require("starkbank");

  starkbank.user = new starkbank.Project({
    id: process.env.STARKBANK_PROJECT_ID!,
    privateKey: process.env.STARKBANK_PRIVATE_KEY!,
    environment: process.env.STARKBANK_ENVIRONMENT as "sandbox" | "production",
  });
} else {
  console.warn("⚠️ StarkBank não configurado. Repasse automático será ignorado.");
}

// Interface esperada
interface RepassePix {
  valorCentavos: number;
  chavePix: string;
  descricao: string;
  taxId: string;
  nomeRecebedor: string;
}

export async function repassarPix({
  valorCentavos,
  chavePix,
  descricao,
  taxId,
  nomeRecebedor,
}: RepassePix) {
  if (!starkbank) {
    throw new Error("StarkBank não está configurado no ambiente.");
  }

  try {
    const pagamento: PixPayment = new starkbank.PixPayment({
      amount: valorCentavos,
      keyId: chavePix,
      taxId,
      name: nomeRecebedor,
      description: descricao,
      tags: ["repasse-m2", "automatizado"],
    });

    const resultado = await starkbank.pixPayment.create({ payments: [pagamento] });

    console.log("✅ PIX enviado com sucesso:", resultado);
    return resultado;
  } catch (erro: any) {
    console.error("❌ Erro ao enviar PIX:", erro.message || erro);
    throw erro;
  }
}
