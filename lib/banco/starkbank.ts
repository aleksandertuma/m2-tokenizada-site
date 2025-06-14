// lib/banco/starkbank.ts

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
  // Simulação apenas para manter o sistema funcionando
  console.log("🔁 Simulando repasse PIX:");
  console.log("➡️ Valor:", valorCentavos);
  console.log("➡️ Chave PIX:", chavePix);
  console.log("➡️ Descrição:", descricao);
  console.log("➡️ Tax ID:", taxId);
  console.log("➡️ Nome Recebedor:", nomeRecebedor);

  // Simula um retorno como se o StarkBank tivesse retornado sucesso
  return {
    status: "simulado",
    message: "Repassado com sucesso (modo simulação)",
    timestamp: new Date().toISOString(),
  };
}
