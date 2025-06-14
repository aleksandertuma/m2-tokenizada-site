// data/empreendimentos.ts

import { Empreendimento } from "@/types/empreendimento";

export const empreendimentos: Empreendimento[] = [
  {
    id: "helena",
    nome: "Helena Garden",
    precoToken: 10,
    quantidadeTotalTokens: 5000,
    tokensDisponiveis: 1400, // ← adicionado controle de estoque atual
    retornoAnual: 12,
    retornoNumerico: 12, // ← usado para simulação
    investimentoMinimo: 3000, // ← valor mínimo para investir
    indiceCorrecao: "IPCA", // ← convertido de número para string
    percentualM2: 5,
    chavePix: "helena.pix@banco.com.br",
    taxId: "12345678000199",
    nomeRecebedor: "Helena SPE LTDA",
    cnpj: "12.345.678/0001-99",
    cidade: "Vitória - ES",
    etapaObra: "Fundações",
    status: "Ativo",
    imagens: [
      "/imagens/helena1.jpg",
      "/imagens/helena2.jpg"
    ],
    mapa: "/mapas/helena.png", // ← novo campo
    descricao: "Empreendimento moderno em localização privilegiada com design sofisticado e alto potencial de valorização."
  },

  {
    id: "boavista",
    nome: "Residencial Boa Vista",
    precoToken: 150,
    quantidadeTotalTokens: 8000,
    tokensDisponiveis: 8000, // ← novo campo, começa cheio
    retornoAnual: 10,
    retornoNumerico: 10,
    investimentoMinimo: 2000,
    indiceCorrecao: "CDI",
    percentualM2: 4,
    chavePix: "boavista.pix@banco.com",
    taxId: "11111111000188",
    nomeRecebedor: "Boa Vista Construtora LTDA",
    cnpj: "11.111.111/0001-88",
    cidade: "Serra - ES",
    etapaObra: "Lançamento",
    status: "Em breve",
    imagens: [
      "/imagens/boavista1.jpg"
    ],
    mapa: "/mapas/boavista.png",
    descricao: "Oportunidade de investimento com liquidez, ótimo custo-benefício e alta atratividade regional."
  }
];
