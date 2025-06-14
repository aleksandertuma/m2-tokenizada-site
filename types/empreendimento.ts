export interface Empreendimento {
  id: string;
  nome: string;
  descricao: string;
  precoToken: number;
  quantidadeTotalTokens: number;
  percentualRetornoAnual: number;
  percentualM2: number;
  chavePix: string;
  taxId: string;
  nomeRecebedor: string;
  cnpj: string;
  cidade: string;
  etapaObra: string;
  status: string;
  imagens: string[];
}
