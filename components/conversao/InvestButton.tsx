"use client";

import React from "react";

interface InvestButtonProps {
  nome: string;
  precoToken: number;
}

const InvestButton: React.FC<InvestButtonProps> = ({ nome, precoToken }) => {
  const handleInvest = async () => {
    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `Token ${nome}`,
          quantity: 1,
          price: precoToken,
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao gerar link de pagamento.");
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Erro ao processar o pagamento.");
    }
  };

  return (
    <button
      onClick={handleInvest}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
    >
      Investir Agora
    </button>
  );
};

export default InvestButton;
