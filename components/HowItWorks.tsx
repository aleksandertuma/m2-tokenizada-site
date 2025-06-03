import { Icons } from "@/components/icons";

export default function HowItWorks() {
  const steps = [
    {
      title: "Escolha o projeto",
      description: "Veja as obras disponíveis. Começamos com Helena Garden, obra concreta, já em execução.",
      icon: "📄",
    },
    {
      title: "Conecte sua Carteira",
      description: "Use MetaMask ou outra carteira compatível. Você escolhe o valor e confirma em um clique.",
      icon: "🔗",
    },
    {
      title: "Receba seu Token",
      description: "Seu token representa sua participação, registrado na blockchain e entregue.",
      icon: "🪙",
    },
    {
      title: "Acompanhe e Cresça com a Obra",
      description: "Veja a evolução da obra. Receba retorno no final.",
      icon: "📈",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Como investir pela M2 em 4 passos simples</h2>
        <p className="text-gray-600 mb-10">
          Você investe, acompanha a obra e participa do futuro — tudo com transparência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
