"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

interface ModalComprarTokensProps {
  aberto: boolean;
  onClose: () => void;
  token: {
    empreendimento: string;
    preco: number;
    quantidade: number;
    vendedor: string;
  };
}

export default function ModalComprarTokens({
  aberto,
  onClose,
  token,
}: ModalComprarTokensProps) {
  const [comprando, setComprando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleComprar = () => {
    setComprando(true);
    setTimeout(() => {
      setComprando(false);
      setMensagem("Compra realizada com sucesso!");
      setTimeout(() => {
        setMensagem("");
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Comprar Tokens</h2>
        <p>
          <strong>Empreendimento:</strong> {token.empreendimento}
        </p>
        <p>
          <strong>Preço por Token:</strong> R$ {token.preco.toFixed(2)}
        </p>
        <p>
          <strong>Quantidade:</strong> {token.quantidade}
        </p>
        <p>
          <strong>Vendedor:</strong> {token.vendedor}
        </p>

        <div className="mt-6 space-x-4">
          <Button onClick={handleComprar} disabled={comprando}>
            {comprando ? "Processando..." : "Confirmar Compra"}
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </div>

        {mensagem && <p className="mt-4 text-green-600">{mensagem}</p>}
      </div>
    </div>
  );
}
