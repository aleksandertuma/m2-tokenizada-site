"use client";

import React, { useState } from "react";

interface TokenSimulatorProps {
  precoToken: number;
  retornoAnual: number;
}

const TokenSimulator: React.FC<TokenSimulatorProps> = ({ precoToken, retornoAnual }) => {
  const [quantidade, setQuantidade] = useState(1);

  const investimentoTotal = precoToken * quantidade;
  const retornoEstimado = investimentoTotal * (retornoAnual / 100);

  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade de Tokens</label>
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
      <div className="mt-4 text-gray-700">
        <p>💰 Investimento total: <strong>R$ {investimentoTotal.toFixed(2)}</strong></p>
        <p>📈 Retorno estimado/ano: <strong>R$ {retornoEstimado.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default TokenSimulator;
