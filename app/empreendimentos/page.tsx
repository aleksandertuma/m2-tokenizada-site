// app/empreendimentos/page.tsx
"use client";

import EmpreendimentoCard from "../../components/Outros/EmpreendimentoCard";

export default function EmpreendimentosPage() {
  const empreendimentos = [
    {
      titulo: "Helena Garden",
      imagem: "https://via.placeholder.com/400x250.png?text=Helena+Garden",
      localizacao: "Ilha do Boi - Vitória/ES",
      rentabilidade: "12% a.a.",
      href: "/empreendimentos/helena-garden",
    },
    {
      titulo: "Solar Vitória",
      imagem: "https://via.placeholder.com/400x250.png?text=Solar+Vitória",
      localizacao: "Praia do Canto - Vitória/ES",
      rentabilidade: "10% a.a.",
      href: "#",
    },
    {
      titulo: "M2 Studios",
      imagem: "https://via.placeholder.com/400x250.png?text=M2+Studios",
      localizacao: "Bento Ferreira - Vitória/ES",
      rentabilidade: "9,5% a.a.",
      href: "#",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Empreendimentos</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {empreendimentos.map((emp, index) => (
          <EmpreendimentoCard key={index} {...emp} />
        ))}
      </div>
    </main>
  );
}