"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CadastrarVendaTokenForm from "@/components/Outros/CadastrarVendaTokenForm";

export default function AreaDoCliente() {
  const empreendimentos = [
    {
      nome: "Helena Garden",
      tokens: 15,
      valor: 4500,
      link: "#",
    },
    {
      nome: "Residencial Dionísio",
      tokens: 10,
      valor: 3000,
      link: "#",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Título principal */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Área do Cliente</h1>
        <p className="text-gray-600 mt-2">
          Acompanhe seus investimentos com total transparência e praticidade.
        </p>
      </section>

      {/* Painel de informações rápidas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Tokens Adquiridos</h2>
          <p className="text-3xl font-bold text-green-600">R$ 7.500,00</p>
          <p className="text-sm text-gray-500 mt-1">25 tokens</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Rendimentos</h2>
          <p className="text-3xl font-bold text-green-600">R$ 940,00</p>
          <p className="text-sm text-gray-500 mt-1">Acumulados até o momento</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Próximo Pagamento</h2>
          <p className="text-lg font-medium text-gray-700">30/06/2025</p>
        </div>
      </section>

      {/* Investimentos por empreendimento */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6">Meus Investimentos</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {empreendimentos.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2">{item.nome}</h4>
                <p className="text-gray-700 mb-1">Tokens: {item.tokens}</p>
                <p className="text-gray-700 mb-4">
                  Valor Investido: R$ {item.valor.toFixed(2)}
                </p>
              </div>
              <a
                href={item.link}
                className="text-green-600 hover:underline text-sm self-start"
              >
                Ver detalhes
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contratos */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Contratos</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-800">Contrato Helena Garden</span>
            <a href="#" className="text-green-600 hover:underline text-sm">
              Baixar PDF
            </a>
          </li>
          <li className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-800">Contrato de Tokenização</span>
            <a href="#" className="text-green-600 hover:underline text-sm">
              Baixar PDF
            </a>
          </li>
        </ul>
      </section>

      {/* Andamento da obra */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Acompanhamento da Obra</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Fundação</span>
            <span>100%</span>
          </div>
          <div className="flex justify-between">
            <span>Estrutura</span>
            <span>80%</span>
          </div>
          <div className="flex justify-between">
            <span>Acabamento</span>
            <span>25%</span>
          </div>
        </div>
      </section>

      {/* Tokens à venda */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Meus Tokens à Venda</h3>
        <CadastrarVendaTokenForm />
      </section>

      {/* Chamada para ação */}
      <section className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Quer investir mais?</h3>
        <Button>Ver novos empreendimentos</Button>
      </section>
    </main>
  );
}
