import { NextResponse } from "next/server";

export async function GET() {
  const tokens = [
    {
      empreendimento: "Helena Garden",
      preco: 110,
      precoCompra: 100,
      quantidade: 1,
      vendedor: "Carlos Silva",
    },
    {
      empreendimento: "Ilha do Boi",
      preco: 120,
      precoCompra: 130,
      quantidade: 1,
      vendedor: "Ana Costa",
    },
    {
      empreendimento: "Helena Garden",
      preco: 115,
      precoCompra: 110,
      quantidade: 2,
      vendedor: "Lucas Almeida",
    },
  ];

  return NextResponse.json(tokens);
}
