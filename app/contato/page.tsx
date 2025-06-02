"use client";

export default function ContatoPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Fale com a gente</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Preencha o formulário abaixo para entrar em contato com a equipe da M2 Tokenizada.
        </p>
      </section>

      {/* Formulário */}
      <section>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Assunto"
            className="p-3 border border-gray-300 rounded w-full"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="p-3 border border-gray-300 rounded w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          >
            Enviar mensagem
          </button>
        </form>
      </section>
    </main>
  );
}