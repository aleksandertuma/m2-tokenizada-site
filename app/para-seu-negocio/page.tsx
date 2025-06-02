// app/para-seu-negocio/page.tsx
"use client";

export default function ParceirosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      
      {/* Cabeçalho */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Para Seu Negócio</h1>
        <p className="text-lg text-gray-600">
          Ofereça tokenização para os seus empreendimentos com segurança, inovação e acesso facilitado.
        </p>
      </section>

      {/* Vantagens */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Captação Rápida</h2>
          <p className="text-gray-600">
            Acelere o fluxo de caixa com liquidez por meio de tokens digitais acessíveis.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Transparência e Confiança</h2>
          <p className="text-gray-600">
            Todos os dados e contratos disponíveis em blockchain, com segurança jurídica.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Expansão de Mercado</h2>
          <p className="text-gray-600">
            Alcance investidores de todo o Brasil com uma oferta digital e inclusiva.
          </p>
        </div>
      </section>

      {/* Chamada para parceria */}
      <section className="bg-green-50 p-10 rounded-xl text-center space-y-6">
        <h2 className="text-2xl font-bold text-green-700">
          Pronto para tokenizar seus empreendimentos?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Seja um parceiro da M2 Tokenizada e ofereça aos seus clientes uma forma moderna de investir e financiar imóveis.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Quero conversar com a M2
        </button>
      </section>

    </main>
  );
}