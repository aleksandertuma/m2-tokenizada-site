"use client";

import Link from "next/link";

interface Props {
    titulo: string;
  imagem: string;
  localizacao: string;
  rentabilidade: string;
  href: string;
};

export default function EmpreendimentoCard({
  titulo,
  imagem,
  localizacao,
  rentabilidade,
  href,
}: Props) {
  return (
    <div className="border rounded shadow p-4">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{titulo}</h2>
      <p className="text-gray-600">{localizacao}</p>
      <p className="text-green-600 font-bold">{rentabilidade}</p>
      <a href={href} className="text-blue-500 hover:underline mt-2 inline-block">
        Ver mais
      </a>
    </div>
  );
}