"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  nome: string;
  precoToken: number;
  quantidade: number;
  userData: {
    nome: string;
    email: string;
    telefone: string;
  };
}

export default function CheckoutButton({ nome, precoToken, quantidade, userData }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // 1. Registrar a compra no sistema
      const registroResponse = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeCliente: userData.nome,
          email: userData.email,
          telefone: userData.telefone,
          empreendimento: nome,
          quantidade,
          valorTotal: quantidade * precoToken,
        }),
      });

      const registro = await registroResponse.json();

      if (registro.status !== "ok") {
        throw new Error("Erro ao registrar a compra");
      }

      // 2. Redirecionar para o pagamento
      const pagamentoResponse = await fetch("/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `Token ${nome}`,
          quantity: quantidade,
          price: precoToken,
        }),
      });

      const data = await pagamentoResponse.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao iniciar pagamento.");
      }
    } catch (error) {
      console.error("Erro no processo de checkout:", error);
      alert("Erro no processo de investimento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Redirecionando..." : "Investir agora"}
      </button>
    </div>
  );
}
