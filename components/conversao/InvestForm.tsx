"use client";

import React from "react";

const InvestForm: React.FC = () => {
  return (
    <form className="bg-white p-4 rounded-md shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Seus Dados</h3>

      <input
        type="text"
        placeholder="Nome completo"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="tel"
        placeholder="Telefone"
        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
      />
    </form>
  );
};

export default InvestForm;
