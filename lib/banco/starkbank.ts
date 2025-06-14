import starkbank from "starkbank";
import { PixPayment } from "starkbank/dist/pix/payment";

// Inicialização da conta da M2 Tokenizada no Stark Bank
starkbank.user = new starkbank.Project({
  id: process.env.STARKBANK_PROJECT_ID!,
  privateKey: process.env.STARKBANK_PRIVATE_KEY!,
  environment: "production", // ou "sandbox" se for ambiente de testes
});

// Interface esperada
interface RepassePix {
  valorCentavos: number;
  chavePix: string;
  descricao: string;
  taxId: string; // CPF ou CNPJ sem pontuação
  nomeRecebedor: string; // Nome da empresa (para o banco)
}

export async function repassarPix({
  valorCentavos,
  chavePix,
  descricao,
  taxId,
  nomeRecebedor,
}: RepassePix) {
  try {
    const pagamento: PixPayment = new starkbank.PixPayment({
      amount: valorCentavos,
      keyId: chavePix,
      taxId: taxId,
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
