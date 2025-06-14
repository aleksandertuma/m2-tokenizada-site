"use client";

import { useState, useEffect} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { empreendimentos } from "@/data/empreendimentos";
import { Empreendimento } from "@/types/empreendimento";

// Encontra o empreendimento com id 'helena'
const empreendimentoData = empreendimentos.find((e) => e.id === "helena") as Empreendimento;

const carouselImages = ["/helena1.jpg", "/helena2.jpg", "/helena3.jpg"];
const obraImages = ["/obra1.jpg", "/obra2.jpg", "/obra3.jpg"];

export default function HelenaGardenPage() {
  const [slide, setSlide] = useState(0);

const [tokensDisponiveis, setTokensDisponiveis] = useState<number | null>(null);

useEffect(() => {
  const fetchTokens = async () => {
    const res = await fetch("/api/tokens-disponiveis");
    const data = await res.json();
    const tokenData = data.find((e: any) => e.id === "helena");
    setTokensDisponiveis(tokenData?.tokensDisponiveis ?? 0);
  };
  fetchTokens();
}, []);

  const next = () => setSlide((slide + 1) % carouselImages.length);
  const prev = () => setSlide((slide - 1 + carouselImages.length) % carouselImages.length);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* Carrossel de Imagens */}
      <section className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={carouselImages[slide]}
          alt="Imagem do Helena Garden"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <Button onClick={prev} variant="ghost"><ArrowLeft /></Button>
          <Button onClick={next} variant="ghost"><ArrowRight /></Button>
        </div>
      </section>

      {/* Informações para Investidor */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{empreendimentoData.nome}</h2>
          <p className="text-gray-600">{empreendimentoData.descricao}</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Rentabilidade esperada: {empreendimentoData.retornoAnual}</li>
            <li>Valor do token: R$ {empreendimentoData.precoToken.toFixed(2)}</li>
            <li>Remuneração trimestral via wallet</li>
            <li className="font-semibold">Tokens disponíveis: {tokensDisponiveis}</li>
          </ul>
          {tokensDisponiveis > 0 ? (
  <a
    href={`/conversao?id=${empreendimentoData.id}`}
    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center"
  >
    Investir Agora
  </a>
) : (
  <Button className="mt-4 bg-gray-400 text-white cursor-not-allowed" disabled>
    Vendas Encerradas
  </Button>
)}
        </div>
      </section>

      {/* Galeria da Obra */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Acompanhamento da Obra</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {obraImages.map((src, i) => (
            <div key={i} className="relative aspect-square rounded overflow-hidden">
              <Image src={src} alt={`Foto ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Mapa com Localização */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Localização</h3>
        <iframe
          src={empreendimentoData.mapa}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
