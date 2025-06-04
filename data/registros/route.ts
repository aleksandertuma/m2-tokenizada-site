import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'registros', 'compras.json');

export async function POST(request: Request) {
  const novaCompra = await request.json();

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const compras = JSON.parse(data);
    compras.push({
      ...novaCompra,
      dataHora: new Date().toISOString(),
    });

    await fs.writeFile(filePath, JSON.stringify(compras, null, 2));
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Erro ao registrar compra:", error);
    return NextResponse.json({ status: "erro", error });
  }
}
