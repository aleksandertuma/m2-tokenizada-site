// lib/emails/sendEmailRelatorio.ts

import emailjs from "@emailjs/nodejs";

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID_RELATORIO!;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;

interface EmailRelatorioPayload {
  nome: string;
  email: string;
  assunto: string;
  corpoHtml: string;
}

export async function sendEmailRelatorio(payload: EmailRelatorioPayload) {
  const templateParams = {
    to_name: payload.nome,
    to_email: payload.email,
    subject: payload.assunto,
    html_content: payload.corpoHtml,
  };

  try {
    console.log("📤 Enviando relatório com os seguintes dados:", templateParams);

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    });

    console.log("✅ Email enviado com sucesso:", response.status, response.text);
  } catch (error: any) {
    console.error("❌ Erro ao enviar email do relatório:", error?.message || error);
    throw error;
  }
}