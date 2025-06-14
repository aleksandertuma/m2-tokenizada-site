// types/empreendimento.ts

export interface Empreendimento {
  id: string;
  nome: string;
  descricao: string;
  precoToken: number;
  quantidadeTotalTokens: number;
  tokensDisponiveis: number;         // ← novo: estoque atual da construtora
  retornoAnual: number;              // ← usado para exibição (%)
  retornoNumerico: number;           // ← usado para cálculo bruto
  investimentoMinimo: number;        // ← mínimo para investir
  indiceCorrecao: string;            // ex: "IPCA", "CDI"
  percentualM2: number;              // participação da M2
  chavePix: string;
  taxId: string;
  nomeRecebedor: string;
  cnpj: string;
  cidade: string;
  etapaObra: string;
  status: string;
  imagens: string[];                 // carrossel de imagens
  mapa: string;                      // imagem de mapa (opcional ou obrigatório)
}
