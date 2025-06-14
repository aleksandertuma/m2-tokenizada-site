"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { empreendimentos } from "@/data/empreendimentos";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

export default function DashboardPage() {
  const [totalInvestido, setTotalInvestido] = useState(0);
  const [totalTokens, setTotalTokens] = useState(0);
  const [comissaoM2, setComissaoM2] = useState(0);
  const [repasses, setRepasses] = useState({ concluido: 0, pendente: 0, falhou: 0 });
  const [dadosGrafico, setDadosGrafico] = useState<{ nome: string; tokensVendidos: number }[]>([]);

  useEffect(() => {
    async function carregarDados() {
      const comprasSnap = await getDocs(collection(db, "compras"));
      let totalR$ = 0;
      let tokens = 0;
      let comissao = 0;

      // contador por empreendimento
      const contagemTokens: Record<string, number> = {};

      comprasSnap.forEach(doc => {
        const dados = doc.data();
        if (dados.status === "pago") {
          const empreendimento = empreendimentos.find(e => e.id === dados.empreendimentoId);
          const percentualM2 = empreendimento?.percentualM2 || 5;

          totalR$ += dados.valorTotal || 0;
          tokens += dados.quantidadeTokens || 0;
          comissao += (dados.valorTotal || 0) * (percentualM2 / 100);

          if (dados.empreendimentoId) {
            contagemTokens[dados.empreendimentoId] = (contagemTokens[dados.empreendimentoId] || 0) + (dados.quantidadeTokens || 0);
          }
        }
      });

      setTotalInvestido(totalR$);
      setTotalTokens(tokens);
      setComissaoM2(comissao);

      const repassesSnap = await getDocs(collection(db, "repasses"));
      const contagem: any = { concluido: 0, pendente: 0, falhou: 0 };

      repassesSnap.forEach(doc => {
        const status = doc.data().status;
        if (status === "concluido") contagem.concluido++;
        else if (status === "falhou") contagem.falhou++;
        else contagem.pendente++;
      });

      setRepasses(contagem);

      const grafico = empreendimentos.map(e => ({
        nome: e.nome,
        tokensVendidos: contagemTokens[e.id] || 0,
      }));

      setDadosGrafico(grafico);
    }

    carregarDados();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Geral da M2</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card title="Total Investido" value={`R$ ${totalInvestido.toFixed(2)}`} />
        <Card title="Tokens Vendidos" value={totalTokens.toString()} />
        <Card title="Comissão M2" value={`R$ ${comissaoM2.toFixed(2)}`} />
        <Card title="Repasses Concluídos" value={repasses.concluido.toString()} />
        <Card title="Repasses Pendentes" value={repasses.pendente.toString()} />
        <Card title="Repasses com Erro" value={repasses.falhou.toString()} />
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold mb-2">Tokens Vendidos por Empreendimento</h2>
        <div className="w-full h-[300px] bg-white p-4 rounded-md shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dadosGrafico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tokensVendidos" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
