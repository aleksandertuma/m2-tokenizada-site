import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (
      !body.nome ||
      !body.email ||
      !body.telefone ||
      !body.cpf ||
      !body.endereco ||
      !body.empreendimento ||
      !body.quantidadeTokens ||
      body.aceitouTermos !== true
    ) {
      return NextResponse.json({ error: "Campos obrigatórios faltando ou termos não aceitos" }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "compras"), {
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      cpf: body.cpf,
      endereco: body.endereco,
      empreendimento: body.empreendimento,
      quantidadeTokens: body.quantidadeTokens,
      aceitouTermos: body.aceitouTermos,
      status: "pendente",
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 200 });

  } catch (error) {
    console.error("Erro ao registrar:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
