"use client";

import React from "react";

const InvestButton: React.FC = () => {
  const handleInvest = async () => {
    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Token Helena Garden",
          quantity: 1,
          price: 100, // valor unitário do token em reais
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point; // redireciona para o pagamento
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
