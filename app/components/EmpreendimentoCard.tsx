"use client";

import Link from "next/link";

interface Props {
  nome: string;
  local: string;
  rentabilidade: string;
  url: string;
  imagem: string;
}

export default function EmpreendimentoCard({ nome, local, rentabilidade, url, imagem }: Props) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{nome}</h3>
        <p className="text-gray-600">{local}</p>
        <p className="text-green-600 font-semibold mt-2">Rentabilidade: {rentabilidade}</p>
        <Link href={url}>
          <p className="text-sm mt-4 text-blue-600 hover:underline">Ver detalhes</p>
        </Link>
      </div>
    </div>
  );
}