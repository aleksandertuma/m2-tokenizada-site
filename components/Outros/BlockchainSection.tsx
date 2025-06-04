export default function BlockchainSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Por que Blockchain?</h2>
          <p className="text-gray-700 mb-6">
            A tokenização permite transformar um imóvel em frações digitais, chamadas tokens. Isso garante segurança,
            rastreabilidade, liquidez e transparência para quem investe.
          </p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // substitua pelo link real
            target="_blank"
            className="inline-block mt-2 text-green-600 font-medium hover:underline"
          >
            Ver vídeo explicativo
          </a>
        </div>
        <img
          src="/blockchain.png"
          alt="Blockchain explicação"
          className="w-full h-auto rounded-xl shadow"
        />
      </div>
    </section>
  );
}
