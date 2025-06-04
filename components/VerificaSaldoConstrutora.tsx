"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Simulação de saldo. Substituir pelo fetch real da blockchain no futuro.
const saldoDisponivel = 0; // 0 tokens restantes da construtora

export default function VerificaSaldoConstrutora() {
  const [temTokens, setTemTokens] = useState(true);

  useEffect(() => {
    // Aqui você irá conectar na blockchain ou contrato para pegar o saldo real
    setTemTokens(saldoDisponivel > 0);
  }, []);

  if (!temTokens) {
    return (
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded">
        <p className="font-medium">
          Tokens esgotados.
        </p>
        <p className="text-sm mt-1">
          Todos os tokens disponíveis pela construtora já foram vendidos.
          <br />
          Você pode verificar o <Link href="/marketplace" className="underline text-green-600 hover:text-green-800">Marketplace</Link> para adquirir de outros investidores.
        </p>
      </div>
    );
  }

  return (
    <Link href="/conversao">
      <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
        Investir Agora
      </Button>
    </Link>
  );
}
