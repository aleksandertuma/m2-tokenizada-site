"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-2">M2 Tokenizada</h2>
          <p className="text-sm">Investimentos imobiliários acessíveis e digitais.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/como-funciona" className="hover:text-green-600">Como Funciona</Link></li>
            <li><Link href="/empreendimentos" className="hover:text-green-600">Empreendimentos</Link></li>
            <li><Link href="/marketplace" className="hover:text-green-600">Marketplace</Link></li>
            <li><Link href="/contato" className="hover:text-green-600">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <p className="text-sm">Vitória - ES</p>
          <p className="text-sm">contato@m2tokenizada.com.br</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {currentYear} M2 Tokenizada. Todos os direitos reservados.
      </div>
    </footer>
  );
}