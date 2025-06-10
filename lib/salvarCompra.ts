import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Wallet } from "ethers"; // substituindo o generateWallet

interface CompraPayload {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  empreendimento: string;
  quantidadeTokens: number;
  valorPago: number;
}

export async function salvarCompra(payload: CompraPayload) {
  const senha = uuidv4().slice(0, 8); // senha simples
  const wallet = Wallet.createRandom(); // carteira Ethereum

  await addDoc(collection(db, "compras"), {
    ...payload,
    senha,
    enderecoCarteira: wallet.address,
    chavePrivada: wallet.privateKey,
    data: Timestamp.now(),
    status: "pago", // só use "pago" se a compra for realmente confirmada aqui
  });

  return {
    ...payload,
    senha,
    enderecoCarteira: wallet.address,
    chavePrivada: wallet.privateKey,
  };
}
