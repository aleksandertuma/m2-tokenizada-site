import emailjs from "@emailjs/browser";
import { configuracoes } from "@/data/configuracoes";

interface DadosFalha {
  empreendimento: string;
  valor: number; // em centavos
  chavePix: string;
  erro: string;
  compraId: string;
  data: string;
}

export async function enviarEmailFalhaRepasse(dados: DadosFalha) {
  const templateParams = {
    to_email: configuracoes.emailFinanceiro,
    empreendimento: dados.empreendimento,
    valor: (dados.valor / 100).toFixed(2),
    chavePix: dados.chavePix,
    erro: dados.erro,
    compraId: dados.compraId,
    data: dados.data,
  };

  try {
    await emailjs.send(
      "service_j2pbfcq",
      "template_repasse_falhou",
      templateParams,
      "yZ9ey2BhjCSYbpfE3"
    );
    console.log("📨 Email de falha de repasse enviado com sucesso");
  } catch (erro) {
    console.error("❌ Erro ao enviar e-mail de falha de repasse:", erro);
  }
}
