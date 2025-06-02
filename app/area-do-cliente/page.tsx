"use client";

export default function AreaDoCliente() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Área do Cliente</h1>
        <p className="text-gray-600 mt-2">
          Acompanhe seus investimentos e documentos com total transparência.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Tokens Adquiridos</h2>
          <p className="text-3xl font-bold text-green-600">R$ 7.500,00</p>
          <p className="text-sm text-gray-500 mt-1">25 tokens</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Rendimentos</h2>
          <p className="text-3xl font-bold text-green-600">R$ 940,00</p>
          <p className="text-sm text-gray-500 mt-1">Acumulados até o momento</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Próximo Pagamento</h2>
          <p className="text-lg font-medium">30/06/2025</p>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Contratos</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b pb-2">
            <span>Contrato Helena Garden</span>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 underline text-sm"
            >
              Baixar PDF
            </a>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>Contrato de Tokenização</span>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 underline text-sm"
            >
              Baixar PDF
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}