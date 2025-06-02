// app/como-funciona/page.tsx
"use client";

export default function ComoFuncionaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      
      {/* Introdução */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Como Funciona</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Entenda como funciona o processo de investimento com a M2 Tokenizada.
        </p>
      </section>

      {/* Passo a passo */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Escolha o Empreendimento</h2>
          <p className="text-gray-600">Veja os projetos disponíveis e escolha onde investir.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Compre Tokens</h2>
          <p className="text-gray-600">Invista com valores a partir de R$ 500,00.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Receba Lucros</h2>
          <p className="text-gray-600">Ganhe trimestralmente com o rendimento do projeto.</p>
        </div>
      </section>

      {/* Segurança e transparência */}
      <section className="text-center bg-gray-100 p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Segurança e Transparência</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Toda a jornada é acompanhada por tecnologia blockchain. Você pode ver a custódia dos tokens, os contratos assinados e o progresso da obra em tempo real.
        </p>
      </section>
    </main>
  );
}