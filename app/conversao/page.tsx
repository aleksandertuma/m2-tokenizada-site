"use client";

import React, { useState } from "react";
import EmpreendimentoSelector from "@/components/conversao/EmpreendimentoSelector";
import InvestimentoInfo from "@/components/conversao/InvestimentoInfo";
import TokenSimulator from "@/components/conversao/TokenSimulator";
import InvestForm from "@/components/conversao/InvestForm";
import InvestButton from "@/components/conversao/InvestButton";
import CheckoutButton from "@/components/conversao/CheckoutButton";

const empreendimentos = [
  {
    id: "helena",
    nome: "Helena Garden",
    retornoAnual: "12%",
    indiceCorrecao: "IPCA + 6%",
    descricao: "Empreendimento localizado em Bento Ferreira com studios modernos.",
    precoToken: 100,
    retornoNumerico: 12,
  },
  {
    id: "ilha",
    nome: "Ilha do Boi Exclusive",
    retornoAnual: "15%",
    indiceCorrecao: "IGP-M + 4%",
    descricao: "Casas de alto padrão na Ilha do Boi com vista privilegiada.",
    precoToken: 200,
    retornoNumerico: 15,
  },
];

export default function ConversaoPage() {
  const [selectedId, setSelectedId] = useState(empreendimentos[0].id);
  const empreendimento = empreendimentos.find((e) => e.id === selectedId)!;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Invista Agora</h1>

      <EmpreendimentoSelector
        empreendimentos={empreendimentos}
        selected={selectedId}
        onSelect={setSelectedId}
      />

      <InvestimentoInfo
        nome={empreendimento.nome}
        retornoAnual={empreendimento.retornoAnual}
        indiceCorrecao={empreendimento.indiceCorrecao}
        descricao={empreendimento.descricao}
      />

      <TokenSimulator
        precoToken={empreendimento.precoToken}
        retornoAnual={empreendimento.retornoNumerico}
      />

      <InvestForm />

      <InvestButton />
    </main>
  );
}
