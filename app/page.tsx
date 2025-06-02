"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Bem-vindo à M2 Tokenizada</h1>
        <p className="text-lg text-gray-600">
          Investimentos imobiliários de forma digital e acessível.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/HELENA GARDEN">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Ver Helena Garden
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Transparência</h2>
          <p className="text-gray-700">
            Acompanhe o progresso das obras, remuneração e todos os dados do seu token.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Baixo Valor Inicial</h2>
          <p className="text-gray-700">
            Comece a investir com apenas R$ 500,00 e receba lucros trimestrais.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Nosso Propósito</h3>
        <p className="text-gray-600">
          Democratizar o acesso ao mercado imobiliário através da tecnologia de tokenização,
          criando oportunidades de alto padrão para todos.
        </p>
      </section>
    </main>
  );
}
