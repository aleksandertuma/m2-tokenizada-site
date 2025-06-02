"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-600">
          M2 Tokenizada
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/como-funciona" className="text-gray-700 hover:text-green-600">Como Funciona</Link>
          <Link href="/sobre" className="text-gray-700 hover:text-green-600">Sobre a M2</Link>
          <Link href="/para-seu-negocio" className="text-gray-700 hover:text-green-600">Para Seu Negócio</Link>
          <Link href="/empreendimentos" className="text-gray-700 hover:text-green-600">Empreendimentos</Link>
          <Link href="/marketplace" className="text-gray-700 hover:text-green-600">Marketplace</Link>
          <Link href="/contato" className="text-gray-700 hover:text-green-600">Contato</Link>
          <Link href="/cliente" className="text-gray-700 hover:text-green-600">Área do Cliente</Link>
        </nav>
      </div>
    </header>
  );
}