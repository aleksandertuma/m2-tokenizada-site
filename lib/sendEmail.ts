import emailjs from "@emailjs/nodejs";

// ⚠️ Assegure que essas variáveis estejam definidas no painel da Vercel (Settings > Environment Variables)
const SERVICE_ID = "service_j2pbfcq";
const TEMPLATE_ID = "template_sxck4x6";
const PUBLIC_KEY = process.env.EMAILJS_PRIVATE_KEY!;

interface EmailPayload {
  nome: string;
  email: string;
  empreendimento: string;
  quantidadeTokens: number;
  valorPago: number;
  senha: string;
  enderecoCarteira: string;
  chavePrivada: string;
}

export async function sendEmail(payload: EmailPayload) {
  try {
    const templateParams = {
      to_name: payload.nome,
      to_email: payload.email,
      empreendimento: payload.empreendimento,
      quantidadeTokens: payload.quantidadeTokens,
      valorPago: payload.valorPago.toFixed(2),
      senha: payload.senha,
      enderecoCarteira: payload.enderecoCarteira,
      chavePrivada: payload.chavePrivada,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    });

    console.log("✅ Email enviado com sucesso:", response.status, response.text);
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error);
    throw error;
  }
}
