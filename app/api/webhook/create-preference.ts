// app/api/webhook/create-preference.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { empreendimentos } from "@/data/empreendimentos";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      nome,
      email,
      telefone,
      cpf,
      endereco,
      empreendimentoId,
      quantidadeTokens,
    } = req.body;

    // Buscar dados do empreendimento
    const empreendimento = empreendimentos.find((e) => e.id === empreendimentoId);

    if (!empreendimento) {
      return res.status(400).json({ error: "Empreendimento não encontrado" });
    }

    const valorUnitario = empreendimento.precoToken;
    const valorTotal = valorUnitario * quantidadeTokens;

    // Criar registro da compra no Firestore
    const compraRef = await addDoc(collection(db, "compras"), {
      nome,
      email,
      telefone,
      cpf,
      endereco,
      empreendimento: empreendimento.nome,
      empreendimentoId,
      quantidadeTokens,
      valorUnitario,
      valorTotal,
      aceitouTermos: true,
      status: "pendente",
      createdAt: Timestamp.now(),
    });

    const externalReference = compraRef.id;

    // Criar preferência no Mercado Pago
    const preference = {
      items: [
        {
          id: `token-${empreendimentoId}`,
          title: `Token ${empreendimento.nome}`,
          description: `Investimento em token do projeto ${empreendimento.nome}`,
          quantity: quantidadeTokens,
          unit_price: valorUnitario,
          currency_id: "BRL",
        },
      ],
      payer: {
        email,
        name: nome,
      },
      external_reference: externalReference,
      metadata: {
        email,
        empreendimentoId,
        nome,
        quantidadeTokens,
      },
      back_urls: {
        success: "https://m2-tokenizada-site-teste01.vercel.app/sucesso",
        failure: "https://m2-tokenizada-site-teste01.vercel.app/erro",
        pending: "https://m2-tokenizada-site-teste01.vercel.app/pendente",
      },
      auto_return: "approved",
      notification_url: "https://m2-tokenizada-site-teste01.vercel.app/api/webhook",
    };

    const preferenceClient = new Preference(client);
    const result = await preferenceClient.create({ body: preference });

    return res.status(200).json({
      id: result.id,
      init_point: result.init_point,
    });
  } catch (error: any) {
    console.error("❌ Erro ao criar preferência:", error.message || error);
    return res.status(500).json({ error: "Erro ao criar preferência" });
  }
}
