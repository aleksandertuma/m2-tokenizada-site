"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export default function MarketplacePage() {
  const [filtro, setFiltro] = useState("Todos");
  const [tokensAVenda, setTokensAVenda] = useState<any[]>([]);
  const empreendimentos = ["Todos", "Helena Garden", "Ilha do Boi"];

  useEffect(() => {
    fetch("/api/tokens-venda")
      .then((res) => res.json())
      .then((data) => setTokensAVenda(data));
  }, []);

  const tokensFiltrados =
    filtro === "Todos"
      ? tokensAVenda
      : tokensAVenda.filter((t) => t.empreendimento === filtro);

  const calcularValorizacao = (precoAtual: number, precoCompra: number) => {
    const diferenca = precoAtual - precoCompra;
    const percentual = (diferenca / precoCompra) * 100;
    return percentual;
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Marketplace de Tokens</h1>
        <p className="text-gray-600">
          Compre tokens de outros investidores de forma rápida e segura.
        </p>
      </section>

      <section className="flex flex-wrap gap-4 justify-center">
        {empreendimentos.map((nome) => (
          <Button
            key={nome}
            variant={filtro === nome ? "default" : "outline"}
            onClick={() => setFiltro(nome)}
          >
            {nome}
          </Button>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {tokensFiltrados.map((token, index) => {
          const valorizacao = calcularValorizacao(token.preco, token.precoCompra);
          const corValorizacao = valorizacao >= 0 ? "text-green-600" : "text-red-600";
          const sinal = valorizacao >= 0 ? "+" : "";

          return (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md flex flex-col justify-between"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{token.empreendimento}</h2>
                <p className="text-gray-600">Vendedor: {token.vendedor}</p>
                <p className="text-gray-700">Quantidade: {token.quantidade}</p>
                <p className="text-gray-800">
                  Valor atual:{" "}
                  <span className="font-semibold">R$ {token.preco.toFixed(2)}</span>
                </p>
                <p className="text-gray-500">
                  Valor de compra: R$ {token.precoCompra.toFixed(2)}
                </p>
                <p className={`font-medium ${corValorizacao}`}>
                  Valorização: {sinal}
                  {valorizacao.toFixed(2)}%
                </p>
              </div>
              <Button>Comprar</Button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
