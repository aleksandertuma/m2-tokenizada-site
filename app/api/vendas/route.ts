import { NextResponse } from "next/server";

let vendas: any[] = []; // Memória temporária

export async function POST(req: Request) {
  const body = await req.json();
  vendas.push(body);
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(vendas);
}
