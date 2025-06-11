import type { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig } from "mercadopago";
import { Preference } from "mercadopago/dist/clients/preference";

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { valor, userEmail, userFirstName, userLastName } = req.body;

    const preference = {
      items: [
        {
          id: "token-helena-garden",
          title: "Token Helena Garden",
          description: "Investimento em token imobiliário do projeto Helena Garden",
          category_id: "services",
          quantity: 1,
          currency_id: "BRL",
          unit_price: parseFloat(valor),
        }
      ],
      payer: {
        email: userEmail,
        name: userFirstName,
        surname: userLastName,
      },
      external_reference: userEmail,
      notification_url: "https://m2-tokenizada-site-teste01.vercel.app/api/webhook",
      back_urls: {
        success: "https://m2-tokenizada-site-teste01.vercel.app/sucesso",
        failure: "https://m2-tokenizada-site-teste01.vercel.app/erro",
        pending: "https://m2-tokenizada-site-teste01.vercel.app/pendente",
      },
      auto_return: "approved",
    };

const preferenceClient = new Preference(client);
const result = await preferenceClient.create({ body: preference });

    return res.status(200).json({ id: result.id });
  } catch (error) {
    console.error("Erro ao criar preferência:", error);
    return res.status(500).json({ error: "Erro ao criar preferência" });
  }
}

