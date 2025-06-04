import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Função utilitária para salvar os dados em um arquivo JSON
function salvarRegistro(data: any) {
  const filePath = path.join(process.cwd(), "data", "registros.json");

  let registros: any[] = [];

  // Lê registros existentes, se houver
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    try {
      registros = JSON.parse(fileContent);
    } catch (e) {
      registros = [];
    }
  }

  // Adiciona novo registro
  registros.push(data);

  // Salva tudo novamente
  fs.writeFileSync(filePath, JSON.stringify(registros, null, 2), "utf8");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Você pode fazer validações básicas aqui
    if (!body.nome || !body.email || !body.empreendimento || !body.quantidade || !body.total) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
    }

    salvarRegistro({
      ...body,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Registro salvo com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao registrar:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
