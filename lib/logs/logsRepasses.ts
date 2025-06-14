import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { enviarEmailFalhaRepasse } from "@/lib/emails/enviarEmailFalhaRepasse";

interface LogRepasse {
  empreendimentoId: string;
  compraId: string;
  valorCentavos: number;
  chavePix: string;
  nomeRecebedor: string;
  taxId: string;
  descricao: string;
  status: "concluido" | "falhou";
  erro?: string;
}

export async function registrarLogRepasse(log: LogRepasse) {
  try {
    await addDoc(collection(db, "repasses"), {
      ...log,
      criadoEm: Timestamp.now(),
    });

    console.log(`📌 Log de repasse registrado com status: ${log.status}`);

    if (log.status === "falhou") {
      await enviarEmailFalhaRepasse({
        empreendimento: log.empreendimentoId,
        valor: log.valorCentavos,
        chavePix: log.chavePix,
        erro: log.erro || "Erro desconhecido",
        compraId: log.compraId,
        data: new Date().toLocaleString(),
      });
    }
  } catch (error: any) {
    console.error("❌ Falha ao registrar log de repasse:", error.message || error);
  }
}
