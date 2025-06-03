"use client";

import React from "react";

interface InvestimentoInfoProps {
  nome: string;
  retornoAnual: string;
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
      <h2 className="text-xl font-semibold mb-2">{nome}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Retorno Anual:</strong> {retornoAnual}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Índice de Correção:</strong> {indiceCorrecao}
      </p>
      <p className="text-gray-700">{descricao}</p>
    </div>
  );
};

export default InvestimentoInfo;
