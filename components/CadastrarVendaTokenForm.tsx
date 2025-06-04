"use client";

import { useState } from "react";

export default function CadastrarVendaTokenForm() {
  const [empreendimento, setEmpreendimento] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      empreendimento,
      preco: parseFloat(preco),
      quantidade: parseInt(quantidade),
      vendedor: "Usuário Atual", // Pode ser substituído por autenticação real
    };

    const res = await fetch("/api/vendaTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setMensagem("Tokens cadastrados com sucesso!");
      setEmpreendimento("");
      setPreco("");
      setQuantidade("");
    } else {
      setMensagem("Erro ao cadastrar tokens.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Empreendimento</label>
        <input
          value={empreendimento}
          onChange={(e) => setEmpreendimento(e.target.value)}
          placeholder="Ex: Helena Garden"
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Preço por Token (R$)</label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Quantidade</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Cadastrar à Venda
      </button>

      {mensagem && <p className="text-sm text-gray-700 mt-2">{mensagem}</p>}
    </form>
  );
}
