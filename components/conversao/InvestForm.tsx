"use client";

import React, { useState } from "react";

const InvestForm: React.FC = () => {
  const [aceitouTermos, setAceitouTermos] = useState(false);

  return (
    <form className="bg-white p-4 rounded-md shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Seus Dados</h3>

      <input
        type="text"
        placeholder="Nome completo"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="CPF"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Endereço completo"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
        required
      />

      <div className="mt-4 flex items-start gap-2">
        <input
          type="checkbox"
          id="termos"
          checked={aceitouTermos}
          onChange={(e) => setAceitouTermos(e.target.checked)}
          className="mt-1"
          required
        />
        <label htmlFor="termos" className="text-sm text-gray-700">
          Li e aceito os
          <a
            href="/documentos/termos.pdf"
            target="_blank"
            className="text-blue-600 underline ml-1"
          >
            Termos e Condições
          </a>
          e o
          <a
            href="/documentos/contrato.pdf"
            target="_blank"
            className="text-blue-600 underline ml-1"
          >
            Contrato de Investimento
          </a>
          .
        </label>
      </div>
    </form>
  );
};

export default InvestForm;
