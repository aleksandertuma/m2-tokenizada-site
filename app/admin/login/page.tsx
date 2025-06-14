// app/admin/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@m2tokenizada.com") || senha !== "m2@admin") {
      setErro("Credenciais inválidas");
      return;
    }

    // Cookies simples (não seguro para produção)
    document.cookie = `m2-email=${email}; path=/`;
    document.cookie = `m2-auth=ok; path=/`;
    router.push("/admin/repasses");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login Administrativo</h2>

        <input
          type="email"
          placeholder="Email corporativo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {erro && <p className="text-red-600 text-sm mb-3 text-center">{erro}</p>}

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
