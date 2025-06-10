import { Wallet } from "ethers";
import { v4 as uuid } from "uuid";

export function gerarDadosCliente() {
  const carteira = Wallet.createRandom();

  const enderecoCarteira = carteira.address;
  const chavePrivada = carteira.privateKey;
  const senha = uuid().slice(0, 8); // Gera uma senha de 8 caracteres
  const usuario = uuid(); // Gera um ID único

  return { enderecoCarteira, chavePrivada, senha, usuario };
}

