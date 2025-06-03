export default function InvestmentStats() {
  const stats = [
    { label: "Retorno estimado", value: "17% ao ano" },
    { label: "Obras tokenizadas", value: "5 empreendimentos" },
    { label: "Investidores", value: "2.476 pessoas" },
    { label: "Capital captado", value: "R$ 12.400.000" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Dados que mostram resultado</h2>
        <p className="text-gray-600 mb-10">Nosso histórico reflete confiança, resultado e transparência.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-2xl font-bold text-green-600">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
