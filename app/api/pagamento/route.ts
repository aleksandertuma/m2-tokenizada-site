// app/api/pagamento/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { title, quantity, price } = body;

  const accessToken = "APP_USR-3807204280200512-060221-4d93569998b67010e0fc97b9113c2d40-2255255714";

  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          title,
          quantity,
          currency_id: "BRL",
          unit_price: Number(price),
        },
      ],
      back_urls: {
        success: "https://seusite.com/sucesso",
        failure: "https://seusite.com/erro",
      },
      auto_return: "approved",
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json({ init_point: data.init_point });
  } else {
    console.error("Erro Mercado Pago:", data);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}
