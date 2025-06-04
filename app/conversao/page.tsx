"use client";

import React, { useState } from "react";
import EmpreendimentoSelector from "@/components/conversao/EmpreendimentoSelector";
import InvestimentoInfo from "@/components/conversao/InvestimentoInfo";
import TokenSimulator from "@/components/conversao/TokenSimulator";
import InvestForm from "@/components/conversao/InvestForm";
import InvestButton from "@/components/conversao/InvestButton";
import CheckoutButton from "@/components/conversao/CheckoutButton";

import { empreendimentos } from "@/data/empreendimentos";

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
        retornoAnual={empreendimento.retorno}
        indiceCorrecao={empreendimento.indice}
        descricao={empreendimento.descricao}
      />

      <TokenSimulator
        precoToken={empreendimento.preco}
        retornoAnual={parseFloat(empreendimento.retorno.replace("%", ""))}
      />

      <InvestForm />

<InvestButton nome={empreendimento.nome} precoToken={empreendimento.preco} />
    </main>
  );
}
