'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function AudienceOptions() {
  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Qual é o seu perfil?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition">
            <CardContent className="p-6">
              <img src="/investir.jpg" alt="Investidor" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eu quero <span className="text-green-600">Investir</span></h3>
              <p className="text-gray-600 mb-4">
                Acesse as oportunidades de investimento em obras reais com retorno transparente.
              </p>
              <Button onClick={() => router.push("/conversao")}>Começar</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition">
            <CardContent className="p-6">
              <img src="/negocio.jpg" alt="Parceiro de negócio" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eu quero <span className="text-green-600">para meu negócio</span></h3>
              <p className="text-gray-600 mb-4">
                Traga sua obra e utilize a tokenização para captar recursos com agilidade.
              </p>
              <Button onClick={() => router.push("/para-seu-negocio")} variant="outline">
                Conhecer solução
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
