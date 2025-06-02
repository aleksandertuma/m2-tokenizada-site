"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Simulação de imagens e dados
const carouselImages = ["/helena1.jpg", "/helena2.jpg", "/helena3.jpg"];
const obraImages = ["/obra1.jpg", "/obra2.jpg", "/obra3.jpg"];

export default function HelenaGardenPage() {
  const [slide, setSlide] = useState(0);

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
          <h2 className="text-2xl font-bold">Helena Garden</h2>
          <p className="text-gray-600">Empreendimento de alto padrão localizado na Praia do Canto, Vitória/ES.</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Rentabilidade esperada: 15% a.a.</li>
            <li>Valor do token: R$ 100,00</li>
            <li>Investimento mínimo: R$ 500</li>
            <li>Remuneração trimestral via wallet</li>
          </ul>
          <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Investir Agora</Button>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.07046538066!2d-40.290225685037694!3d-20.31285348637181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c217d762ed%3A0x3200a7c2c973307b!2sPraia%20do%20Canto!5e0!3m2!1spt-BR!2sbr!4v1685473895804!5m2!1spt-BR!2sbr"
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
