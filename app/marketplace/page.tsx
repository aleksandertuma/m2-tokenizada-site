"use client";

export default function Marketplace() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Marketplace de Tokens</h1>
      <p className="text-gray-700 mb-6">
        Aqui você pode encontrar tokens disponíveis para compra ou venda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exemplo de token */}
        <div className="border rounded p-4 shadow">
          <h2 className="text-xl font-semibold">Helena Garden</h2>
          <p className="text-sm text-gray-600">R$ 100,00 por token</p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Comprar
          </button>
        </div>
        {/* Você pode repetir isso para mais projetos */}
      </div>
    </main>
  );
}
