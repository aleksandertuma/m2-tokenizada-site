// components/InvestmentStats.tsx

export default function InvestmentStats() {
  const stats = [
    { label: "Retorno anual projetado", value: "12%" },
    { label: "Investidores ativos", value: "1.200+" },
    { label: "Obras tokenizadas", value: "15 empreendimentos" },
    { label: "Distribuído por trimestre", value: "R$ 150 mil" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md text-center min-h-[120px] flex flex-col justify-center"
          >
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
