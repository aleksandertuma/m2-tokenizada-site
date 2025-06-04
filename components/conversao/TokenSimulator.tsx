"use client";

import React, { useState } from "react";

interface TokenSimulatorProps {
  precoToken: number;
  retornoAnual: number;
  maxTokensDisponiveis?: number;
}

const TokenSimulator: React.FC<TokenSimulatorProps> = ({
  precoToken,
  retornoAnual,
  maxTokensDisponiveis = 10000, // fallback seguro
}) => {
  const [quantidade, setQuantidade] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor >= 1 && valor <= maxTokensDisponiveis) {
      setQuantidade(valor);
    }
  };

  const investimentoTotal = precoToken * quantidade;
  const retornoEstimado = investimentoTotal * (retornoAnual / 100);

  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Quantidade de Tokens (disponíveis: {maxTokensDisponiveis})
      </label>
      <input
        type="number"
        min="1"
        max={maxTokensDisponiveis}
        value={quantidade}
        onChange={handleChange}
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
