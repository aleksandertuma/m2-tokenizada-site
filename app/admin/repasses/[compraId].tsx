"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";

interface RepasseDetalhado {
  empreendimentoId: string;
  compraId: string;
  valorCentavos: number;
  chavePix: string;
  nomeRecebedor: string;
  taxId: string;
  descricao: string;
  status: "concluido" | "pendente" | "falhou";
  erro?: string;
  criadoEm?: { seconds: number; nanoseconds: number };
}

export default function RepasseDetalhadoPage({ params }: { params: { compraId: string } }) {
  const [repasse, setRepasse] = useState<RepasseDetalhado | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRepasse = async () => {
      const ref = doc(db, "repasses", params.compraId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setRepasse(snap.data() as RepasseDetalhado);
      }
      setLoading(false);
    };
    fetchRepasse();
  }, [params.compraId]);

  return (
    <div className="p-4">
      <Button onClick={() => router.back()} className="mb-4">← Voltar</Button>

      {loading ? (
        <p>Carregando...</p>
      ) : repasse ? (
        <Card className="p-6">
          <h1 className="text-xl font-bold mb-2">Detalhes do Repasse</h1>
          <p><strong>Empreendimento:</strong> {repasse.empreendimentoId}</p>
          <p><strong>Valor:</strong> R$ {(repasse.valorCentavos / 100).toFixed(2)}</p>
          <p><strong>Chave PIX:</strong> {repasse.chavePix}</p>
          <p><strong>Recebedor:</strong> {repasse.nomeRecebedor}</p>
          <p><strong>CPF/CNPJ:</strong> {repasse.taxId}</p>
          <p><strong>Descrição:</strong> {repasse.descricao}</p>
          <p><strong>Data:</strong> {repasse.criadoEm ? new Date(repasse.criadoEm.seconds * 1000).toLocaleString() : "—"}</p>

          {repasse.erro && (
            <p className="text-red-600"><strong>Erro:</strong> {repasse.erro}</p>
          )}

          <div className="mt-4">
            <Badge variant={repasse.status === "concluido" ? "default" : repasse.status === "falhou" ? "destructive" : "secondary"}>
              {repasse.status.toUpperCase()}
            </Badge>
          </div>
        </Card>
      ) : (
        <p>Repasse não encontrado.</p>
      )}
    </div>
  );
}
