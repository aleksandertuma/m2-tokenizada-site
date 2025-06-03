"use client";

export default function SobrePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Sobre a M2 Tokenizada</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Uma nova forma de investir em imóveis com tecnologia e confiança.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold">Missão</h2>
          <p className="text-gray-700 mt-2">
            Democratizar o acesso ao mercado imobiliário com segurança, inovação e rentabilidade.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Visão</h2>
          <p className="text-gray-700 mt-2">
            Ser referência nacional em investimentos imobiliários tokenizados.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Valores</h2>
          <p className="text-gray-700 mt-2">
            Ética, transparência, inovação e compromisso com o investidor.
          </p>
        </div>
      </section>

      {/* Sobre a empresa */}
      <section className="text-center bg-gray-100 p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A M2 Tokenizada é uma iniciativa da Tuma Construtora e Incorporadora com o objetivo de aproximar pessoas de oportunidades reais de investimento no mercado imobiliário, utilizando blockchain como garantia de segurança e transparência.
        </p>
      </section>
    </main>
  );
}