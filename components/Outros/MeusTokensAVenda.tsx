"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function MeusTokensAVenda() {
  const [quantidade, setQuantidade] = useState(1);
  const [preco, setPreco] = useState("");
  const [empreendimento, setEmpreendimento] = useState("Helena Garden");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui futuramente enviaremos os dados para o backend
    alert(`Token à venda: ${quantidade} x R$ ${preco} no ${empreendimento}`);
    setPreco("");
    setQuantidade(1);
  };

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Colocar Tokens à Venda</h3>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Empreendimento</label>
          <select
            className="border rounded px-3 py-2"
            value={empreendimento}
            onChange={(e) => setEmpreendimento(e.target.value)}
          >
            <option>Helena Garden</option>
            <option>Residencial Dionísio</option>
            <option>Ilha do Boi</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Quantidade</label>
          <input
            type="number"
            min={1}
            className="border rounded px-3 py-2"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Preço por Token (R$)</label>
          <input
            type="number"
            min={1}
            step="0.01"
            className="border rounded px-3 py-2"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-3 flex justify-end">
          <Button type="submit">Colocar à Venda</Button>
        </div>
      </form>
    </section>
  );
}
