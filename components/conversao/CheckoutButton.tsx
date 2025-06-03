"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [quantidade, setQuantidade] = useState(1);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Token Helena Garden",
          quantity: quantidade,
          price: 100, // substitua pelo valor unitário real
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao iniciar pagamento.");
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Ocorreu um erro ao redirecionar para o pagamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
        className="border px-4 py-2 rounded w-32"
        placeholder="Quantidade"
      />
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
