// app/sobre-a-m2/page.tsx

"use client";

import Image from "next/image";

export default function SobreAM2() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Sobre a M2 Tokenizada</h1>
        <p className="text-gray-600 text-lg">
          Somos uma startup que transforma o mercado imobiliário com tecnologia,
          acessibilidade e total transparência.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inovação e Acesso</h2>
          <p className="text-gray-700">
            Através da tokenização, tornamos possível que qualquer pessoa invista no setor
            imobiliário com valores a partir de R$ 500, de forma simples e digital.
          </p>
        </div>
        <Image
          src="/images/inovação1.jpg"
          alt="Inovação no mercado imobiliário"
          width={600}
          height={400}
          className="rounded-xl shadow"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/segurançaobra1.jpg"
          alt="Segurança e confiabilidade"
          width={600}
          height={400}
          className="rounded-xl shadow"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Segurança e Transparência</h2>
          <p className="text-gray-700">
            Toda operação é registrada em blockchain, garantindo segurança, rastreabilidade
            e total transparência para os investidores.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nosso Propósito</h2>
          <p className="text-gray-700">
            Democratizar o investimento em imóveis e permitir que todos tenham acesso a
            projetos de alto padrão e rendimento atrativo.
          </p>
        </div>
        <Image
          src="/images/proposito1.jpg"
          alt="Propósito da empresa"
          width={600}
          height={400}
          className="rounded-xl shadow"
        />
      </section>
    </main>
  );
}
