// app/api/pagamento/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, quantity, price } = body;

  // ✅ Validação básica
  if (!title || !quantity || isNaN(Number(price))) {
    console.error("❌ Dados inválidos para pagamento:", { title, quantity, price });
    return NextResponse.json({ error: "Dados inválidos para pagamento" }, { status: 400 });
  }

  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN!;

  console.log("✅ Criando pagamento com:", {
    title,
    quantity,
    price: Number(price),
  });

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
        success: "https://m2-tokenizada-site-teste01.vercel.app/sucesso",
        failure: "https://m2-tokenizada-site-teste01.vercel.app/erro",
      },
      auto_return: "approved",
    }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log("✅ Link gerado com sucesso:", data.init_point);
    return NextResponse.json({ init_point: data.init_point });
  } else {
    console.error("❌ Erro Mercado Pago:", data);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}
