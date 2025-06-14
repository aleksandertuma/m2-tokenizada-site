// app/api/cron/relatorio-rendimento/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { empreendimentos } from "@/data/empreendimentos";
import { sendEmail } from "@/lib/sendEmail";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "compras"));
    const compras = snapshot.docs.map(doc => doc.data());

    const relatorioPorEmail: Record<string, any[]> = {};

    for (const compra of compras) {
      if (compra.status !== "pago") continue;

      const { email, nome, empreendimento, quantidadeTokens } = compra;
      const emp = empreendimentos.find(e => e.id === empreendimento);
      if (!emp) continue;

      const retornoAnual = emp.percentualRetornoAnual || 0;
      const retornoTrimestral = retornoAnual / 4;
      const rendimento = (quantidadeTokens * retornoTrimestral) / 100;

      if (!relatorioPorEmail[email]) relatorioPorEmail[email] = [];

      relatorioPorEmail[email].push({
        nome,
        empreendimento: emp.nome,
        tokens: quantidadeTokens,
        rendimento: rendimento.toFixed(2),
        retornoPercentualTrimestral: retornoTrimestral.toFixed(2),
      });
    }

    for (const email in relatorioPorEmail) {
      const lista = relatorioPorEmail[email];
      const nome = lista[0].nome;
      let html = `<h2>Olá, ${nome}</h2><p>Segue o relatório trimestral de seus rendimentos:</p><ul>`;

      for (const item of lista) {
        html += `<li><strong>${item.empreendimento}:</strong> ${item.tokens} tokens → rendimento estimado de <strong>R$ ${item.rendimento}</strong> (${item.retornoPercentualTrimestral}% no trimestre)</li>`;
      }

      html += `</ul><p>Este é um valor estimado com base no retorno informado. Em caso de dúvida, entre em contato com nossa equipe.</p>`;

      await sendEmail({
        nome,
        email,
        assunto: "Relatório Trimestral de Rendimento",
        corpoHtml: html,
      });
    }

    return NextResponse.json({ status: "ok", enviados: Object.keys(relatorioPorEmail).length });
  } catch (error: any) {
    console.error("Erro ao gerar relatório:", error);
    return NextResponse.json({ erro: error.message }, { status: 500 });
  }
}
