"use client";

import { ReactNode } from "react";

interface VantagemCardProps {
  icone: ReactNode;
  titulo: string;
  descricao: string;
}

export default function VantagemCard({ icone, titulo, descricao }: VantagemCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
      <div className="text-green-600 text-4xl mb-4">{icone}</div>
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p className="text-gray-600 text-sm">{descricao}</p>
    </div>
  );
}