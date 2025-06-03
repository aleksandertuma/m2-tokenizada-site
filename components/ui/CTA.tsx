"use client";

interface CTAProps {
  titulo: string;
  descricao: string;
  textoBotao: string;
  onClick?: () => void;
}

export default function CTA({ titulo, descricao, textoBotao, onClick }: CTAProps) {
  return (
    <section className="bg-green-600 text-white py-16 px-6 text-center rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
      <p className="mb-6 max-w-xl mx-auto text-lg">{descricao}</p>
      <button
        onClick={onClick}
        className="bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
      >
        {textoBotao}
      </button>
    </section>
  );
}