"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-green-600 font-bold text-xl">
            M2 Tokenizada
          </div>

          {/* Botão hamburguer */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Links visíveis apenas no desktop */}
          <div className="hidden md:flex md:space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/como-funciona">Como Funciona</Link>
            <Link href="/sobre-a-m2">Sobre a M2</Link>
            <Link href="/para-seu-negocio">Para Seu Negócio</Link>
            <Link href="/empreendimentos">Empreendimentos</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/area-do-cliente">Área do Cliente</Link>
          </div>
        </div>

        {/* Links visíveis no mobile quando o menu estiver aberto */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/como-funciona">Como Funciona</Link>
            <Link href="/sobre-a-m2">Sobre a M2</Link>
            <Link href="/para-seu-negocio">Para Seu Negócio</Link>
            <Link href="/empreendimentos">Empreendimentos</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/area-do-cliente">Área do Cliente</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
