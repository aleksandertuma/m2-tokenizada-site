import Link from "next/link";

export default function FooterNav() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} M2 Tokenizada</p>
        <nav className="flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/como-funciona">Como Funciona</Link>
          <Link href="/empreendimentos">Empreendimentos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </footer>
  );
}
