// app/api/tokens-disponiveis/route.ts

import { NextResponse } from "next/server";

// Simulação de dados (isso depois será substituído por dados reais do contrato ou banco de dados)
const tokensData = [
  {
    id: "helena",
    tokensDisponiveis: 5000,
  },
  {
    id: "ilha",
    tokensDisponiveis: 5000,
  },
];

export async function GET() {
  return NextResponse.json(tokensData);
}
