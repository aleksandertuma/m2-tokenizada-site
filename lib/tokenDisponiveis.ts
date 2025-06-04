// lib/tokensDisponiveis.ts

export const tokensDisponiveis = {
  "Helena Garden": 5000,
  "Ilha do Boi": 3000,
};

export function getTokensDisponiveis(nomeEmpreendimento: string) {
  return tokensDisponiveis[nomeEmpreendimento] || 0;
}

export function atualizarTokens(nomeEmpreendimento: string, quantidadeComprada: number) {
  if (tokensDisponiveis[nomeEmpreendimento] !== undefined) {
    tokensDisponiveis[nomeEmpreendimento] = Math.max(
      0,
      tokensDisponiveis[nomeEmpreendimento] - quantidadeComprada
    );
  }
}
