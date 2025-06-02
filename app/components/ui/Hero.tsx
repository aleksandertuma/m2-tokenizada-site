"use client";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  textoBotao: string;
  onClick?: () => void;
  imagemUrl?: string;
}

export default function Hero({
  titulo,
  subtitulo,
  textoBotao,
  onClick,
  imagemUrl,
}: HeroProps) {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      <div className="max-w-2xl mx-auto md:mx-0">
        <h1 className="text-4xl font-bold text-green-600 mb-4">{titulo}</h1>
        <p className="text-gray-700 text-lg mb-6">{subtitulo}</p>
        <button
          onClick={onClick}
          className="bg-green-600 text-white font-semibold py-3 px-6 rounded hover:bg-green-700 transition"
        >
          {textoBotao}
        </button>
      </div>

      {imagemUrl && (
        <img
          src={imagemUrl}
          alt="Ilustração"
          className="w-full max-w-md mt-10 md:mt-0 md:ml-12 rounded-lg shadow-lg"
        />
      )}
    </section>
  );
}