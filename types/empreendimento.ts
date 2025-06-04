export interface Empreendimento {
  id: string;
  nome: string;
  descricao: string;
  precoToken: number;
  totalTokens: number;
  tokensVendidos: number;
  retornoAnual: string;
  indiceCorrecao: string;
  retornoNumerico: number;
  investimentoMinimo: number;
  localizacao: string;
  mapa?: string;
}
