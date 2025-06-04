import { NextResponse } from "next/server";
import { empreendimentos } from "@/data/empreendimentos";

export async function GET() {
  return NextResponse.json(empreendimentos);
}
