// data/empreendimentos.ts

export const empreendimentos = [
  {
    id: "helena",
    nome: "Helena Garden",
    precoToken: 10, // Valor unitário do token
    quantidadeTotalTokens: 5000, // Estoque total
    retornoAnual: 12, // Retorno prometido ao investidor
    indiceCorrecao: IPCA + 5,
    percentualM2: 5, // Comissão da M2 Tokenizada (em %)
    chavePix: "helena.pix@banco.com.br", // Chave PIX da SPE
    taxId: "12345678000199", // CNPJ da SPE (sem pontuação)
    nomeRecebedor: "Helena SPE LTDA", // Nome legal da SPE (aparece no comprovante)
    cnpj: "12.345.678/0001-99", // Para exibição administrativa
    cidade: "Vitória - ES",
    etapaObra: "Fundações",
    status: "Ativo",
    imagens: [
      "/imagens/helena1.jpg",
      "/imagens/helena2.jpg",
    ],
    descricao: "Empreendimento moderno em localização privilegiada com design sofisticado e alto potencial de valorização.",
  },

  {
    id: "boavista",
    nome: "Residencial Boa Vista",
    precoToken: 150,
    quantidadeTotalTokens: 8000,
    retornoAnual: 10,
    indiceCorrecao: IPCA + 5,
    percentualM2: 4,
    chavePix: "boavista.pix@banco.com",
    taxId: "11111111000188",
    nomeRecebedor: "Boa Vista Construtora LTDA",
    cnpj: "11.111.111/0001-88",
    cidade: "Serra - ES",
    etapaObra: "Lançamento",
    status: "Em breve",
    imagens: [
      "/imagens/boavista1.jpg",
    ],
    descricao: "Oportunidade de investimento com liquidez, ótimo custo-benefício e alta atratividade regional.",
  },
];
