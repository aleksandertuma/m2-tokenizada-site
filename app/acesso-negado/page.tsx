// app/acesso-negado/page.tsx

export default function AcessoNegado() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800">
      <h1 className="text-3xl font-bold mb-4">Acesso Negado</h1>
      <p className="text-lg mb-6">Você não tem permissão para acessar esta área.</p>
      <a
        href="/"
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Voltar para o início
      </a>
    </div>
  );
}
