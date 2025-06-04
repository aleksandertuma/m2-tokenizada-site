"use client";

import React, { useState } from "react";

interface InvestButtonProps {
  nome: string;
  precoToken: number;
}

const InvestButton: React.FC<InvestButtonProps> = ({ nome, precoToken }) => {
  const [loading, setLoading] = useState(false);

  const handleInvest = async () => {
    setLoading(true);

    const nomeCompleto = (document.getElementById("nome") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const telefone = (document.getElementById("telefone") as HTMLInputElement)?.value;
    const cpf = (document.getElementById("cpf") as HTMLInputElement)?.value;
    const endereco = (document.getElementById("endereco") as HTMLInputElement)?.value;
    const aceitou = (document.getElementById("termos") as HTMLInputElement)?.checked;

    if (!nomeCompleto || !email || !telefone || !cpf || !endereco || !aceitou) {
      alert("Por favor, preencha todos os campos e aceite os termos.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `Token ${nome}`,
          quantity: 1,
          price: precoToken,
          nomeCompleto,
          email,
          telefone,
          cpf,
          endereco,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleInvest}
      disabled={loading}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
    >
      {loading ? "Processando..." : "Investir Agora"}
    </button>
  );
};

export default InvestButton;
