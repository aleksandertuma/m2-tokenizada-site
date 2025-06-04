"use client";

interface HeaderProps {
  titulo: string;
  subtitulo?: string;
}

export default function Header({ titulo, subtitulo }: HeaderProps) {
  return (
    <header className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-green-600">{titulo}</h1>
      {subtitulo && (
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">{subtitulo}</p>
      )}
    </header>
  );
}

