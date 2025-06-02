// app/empreendimentos/page.tsx
"use client";

import EmpreendimentoCard from "../components/EmpreendimentoCard";

export default function EmpreendimentosPage() {
  const empreendimentos = [
    {
      titulo: "Helena Garden",
      imagem: "https://via.placeholder.com/400x250.png?text=Helena+Garden",
      localizacao: "Ilha do Boi - Vitória/ES",
      rentabilidade: "12% a.a.",
      href: "/empreendimentos/helena-garden",
    },
    // Você pode adicionar mais empreendimentos aqui
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">Empreendimentos</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {empreendimentos.map((emp, index) => (
          <EmpreendimentoCard key={index} {...emp} />
        ))}
      </div>
    </main>
  );
}
