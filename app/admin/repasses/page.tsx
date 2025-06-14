"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/Button";
import { repassarPix } from "@/lib/banco/starkbank";
import { registrarLogRepasse } from "@/lib/logs/logsRepasses";
import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { LogoutButton } from "@/components/admin/LogoutButton";

interface Repasse {
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

export default function RepassesPage() {
  const [repasses, setRepasses] = useState<Repasse[]>([]);
  const [filtrados, setFiltrados] = useState<Repasse[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFiltro, setStatusFiltro] = useState<string>("todos");
  const [empreendimentoFiltro, setEmpreendimentoFiltro] = useState<string>("todos");

  useEffect(() => {
    const fetchRepasses = async () => {
      const ref = query(collection(db, "repasses"), orderBy("criadoEm", "desc"));
      const snapshot = await getDocs(ref);
      const lista: Repasse[] = snapshot.docs.map(doc => doc.data() as Repasse);
      setRepasses(lista);
      setFiltrados(lista);
      setLoading(false);
    };
    fetchRepasses();
  }, []);

  useEffect(() => {
    const filtrados = repasses.filter(repasse => {
      const statusCond = statusFiltro === "todos" || repasse.status === statusFiltro;
      const empCond = empreendimentoFiltro === "todos" || repasse.empreendimentoId === empreendimentoFiltro;
      return statusCond && empCond;
    });
    setFiltrados(filtrados);
  }, [statusFiltro, empreendimentoFiltro, repasses]);

  const empreendimentosUnicos = Array.from(new Set(repasses.map(r => r.empreendimentoId)));

  const handleReprocessar = async (repasse: Repasse) => {
    try {
      await repassarPix({
        valorCentavos: repasse.valorCentavos,
        chavePix: repasse.chavePix,
        descricao: repasse.descricao,
        taxId: repasse.taxId,
        nomeRecebedor: repasse.nomeRecebedor,
      });

      await registrarLogRepasse({
        ...repasse,
        status: "concluido",
      });

      await updateDoc(doc(db, "compras", repasse.compraId), {
        repasseStatus: "concluido",
      });

      alert("Repasse reprocessado com sucesso!");
    } catch (erro: any) {
      await registrarLogRepasse({
        ...repasse,
        status: "falhou",
        erro: erro.message || "Erro desconhecido",
      });

      alert("Erro ao reprocessar repasse: " + erro.message);
    }
  };

  function exportarCSV() {
    const linhas = filtrados.map(rep => ({
      Data: new Date(rep.criadoEm?.seconds * 1000).toLocaleString(),
      Empreendimento: rep.empreendimentoId,
      Valor: `R$ ${(rep.valorCentavos / 100).toFixed(2)}`,
      ChavePix: rep.chavePix,
      Status: rep.status,
      Erro: rep.erro || "-",
      CompraID: rep.compraId,
    }));

    const csv = Papa.unparse(linhas);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "repasses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function exportarPDF() {
    const doc = new jsPDF();
    const colunas = ["Data", "Empreendimento", "Valor", "Chave Pix", "Status", "Erro", "CompraID"];
    const linhas = filtrados.map(rep => [
      new Date(rep.criadoEm?.seconds * 1000).toLocaleString(),
      rep.empreendimentoId,
      `R$ ${(rep.valorCentavos / 100).toFixed(2)}`,
      rep.chavePix,
      rep.status,
      rep.erro || "-",
      rep.compraId,
    ]);

    doc.text("Relatório de Repasses", 14, 15);
    (doc as any).autoTable({
      startY: 20,
      head: [colunas],
      body: linhas,
      styles: { fontSize: 8 },
    });

    doc.save("repasses.pdf");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Repasses Registrados</h1>

      <div className="flex gap-4 mb-6">
        <Select onValueChange={setStatusFiltro} defaultValue="todos">
          <option value="todos">Todos</option>
          <option value="concluido">Concluídos</option>
          <option value="pendente">Pendentes</option>
          <option value="falhou">Falhos</option>
        </Select>

        <Select onValueChange={setEmpreendimentoFiltro} defaultValue="todos">
          <option value="todos">Todos os Empreendimentos</option>
          {empreendimentosUnicos.map(emp => (
            <option key={emp} value={emp}>{emp}</option>
          ))}
        </Select>

        <Button onClick={exportarCSV}>Exportar CSV</Button>
        <Button onClick={exportarPDF}>Exportar PDF</Button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="space-y-4">
          {filtrados.map((repasse, index) => (
            <Card key={index} className="p-4 border">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{repasse.empreendimentoId}</h2>
                  <p>Valor: R$ {(repasse.valorCentavos / 100).toFixed(2)}</p>
                  <p>Chave PIX: {repasse.chavePix}</p>
                  <p>Recebedor: {repasse.nomeRecebedor}</p>
                  <p>Descrição: {repasse.descricao}</p>
                  <p>Data: {repasse.criadoEm ? new Date(repasse.criadoEm.seconds * 1000).toLocaleString() : ""}</p>
                  {repasse.erro && (
                    <p className="text-red-600">Erro: {repasse.erro}</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant={repasse.status === "concluido" ? "default" : repasse.status === "falhou" ? "destructive" : "secondary"}>
                    {repasse.status.toUpperCase()}
                  </Badge>
                  {repasse.status === "falhou" && (
                    <Button size="sm" onClick={() => handleReprocessar(repasse)}>
                      Reprocessar
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
