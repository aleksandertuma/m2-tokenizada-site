"use client";

import { useEffect, useState } from "react";
import EmpreendimentoSelector from "@/components/conversao/EmpreendimentoSelector";
import InvestimentoInfo from "@/components/conversao/InvestimentoInfo";
import TokenSimulator from "@/components/conversao/TokenSimulator";
import InvestForm from "@/components/conversao/InvestForm";
import InvestButton from "@/components/conversao/InvestButton";
import { Empreendimento } from "@/types/empreendimento";
import { useSearchParams } from "next/navigation";

export default function ConversaoPage() {
  const [empreendimentos, setEmpreendimentos] = useState<Empreendimento[]>([]);
  const searchParams = useSearchParams();
  const idFromUrl = searchParams.get("id");
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/empreendimentos");
      const data = await response.json();
      setEmpreendimentos(data);

      if (idFromUrl && data.find((e: Empreendimento) => e.id === idFromUrl)) {
        setSelectedId(idFromUrl);
      } else {
        setSelectedId(data[0]?.id || "");
      }
    }

    fetchData();
  }, [idFromUrl]);

  const empreendimento = empreendimentos.find((e) => e.id === selectedId);

  if (!empreendimento) return <p className="text-center p-4">Carregando dados...</p>;

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
        retornoAnual={empreendimento.percentualRetornoAnual}
        indiceCorrecao={empreendimento.indiceCorrecao}
        descricao={empreendimento.descricao}
      />

      <TokenSimulator
        precoToken={empreendimento.precoToken}
        retornoAnual={empreendimento.retornoNumerico}
      />

      <InvestForm />

      <InvestButton
        nome={empreendimento.nome}
        precoToken={empreendimento.precoToken}
      />
    </main>
  );
}
