"use client";

import React from "react";

interface Empreendimento {
  id: string;
  nome: string;
}

interface EmpreendimentoSelectorProps {
  empreendimentos: Empreendimento[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function EmpreendimentoSelector({
  empreendimentos,
  selected,
  onSelect,
}: EmpreendimentoSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Escolha o empreendimento:</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="border p-2 rounded w-full"
      >
        {empreendimentos.map((e) => (
          <option key={e.id} value={e.id}>
            {e.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
