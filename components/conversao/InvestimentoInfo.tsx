"use client";

import React from "react";

interface InvestimentoInfoProps {
  nome: string;
  retornoAnual: number;
  indiceCorrecao: string;
  descricao: string;
}

const InvestimentoInfo: React.FC<InvestimentoInfoProps> = ({
  nome,
  retornoAnual,
  indiceCorrecao,
  descricao,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <h2 className="text-2xl font-bold text-green-700 mb-2">{nome}</h2>
      <div className="text-gray-700 space-y-1">
        <p><strong>📈 Retorno Anual:</strong> {retornoAnual}%</p>
        <p><strong>📊 Índice de Correção:</strong> {indiceCorrecao}</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default InvestimentoInfo;
