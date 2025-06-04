"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; 

import HeroCarousel from "@/components/Outros/HeroCarousel";
import HowItWorks from "@/components/Outros/HowItWorks";
import AudienceOptions from "@/components/Outros/AudienceOptions";
import TestimonialsCarousel from "@/components/Outros/TestimonialsCarousel";
import InvestmentStats from "@/components/Outros/InvestmentStats";
import BlockchainSection from "@/components/Outros/BlockchainSection";
import ContactForm from "@/components/Outros/ContactForm";
import FooterNav from "@/components/Outros/FooterNav";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

<section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
        <div className="space-y-3 text-center">
          <Image
            src="/images/token.jpg"
            alt="Inovação no mercado"
            width={400}
            height={300}
            className="rounded-xl mx-auto shadow"
          />
          <h3 className="text-xl font-semibold">Inovação</h3>
          <p className="text-gray-600 text-sm">
            A tokenização traz o futuro do mercado imobiliário para o presente.
          </p>
        </div>

        <div className="space-y-3 text-center">
          <Image
            src="/images/segurançadigital3.jpg"
            alt="Segurança e confiabilidade"
            width={400}
            height={300}
            className="rounded-xl mx-auto shadow"
          />
          <h3 className="text-xl font-semibold">Segurança</h3>
          <p className="text-gray-600 text-sm">
            Registro em blockchain para garantir rastreabilidade e proteção ao investidor.
          </p>
        </div>

        <div className="space-y-3 text-center">
          <Image
            src="/images/inovação1.jpg"
            alt="Propósito da empresa"
            width={400}
            height={300}
            className="rounded-xl mx-auto shadow"
          />
          <h3 className="text-xl font-semibold">Propósito</h3>
          <p className="text-gray-600 text-sm">
            Democratizar o acesso a projetos de alto padrão e rentabilidade.
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona">
        <HowItWorks />
      </section>

      {/* Público-alvo */}
      <AudienceOptions />

      {/* Depoimentos */}
      <TestimonialsCarousel />

      {/* Estatísticas */}
      <InvestmentStats />

      {/* Blockchain */}
      <BlockchainSection />

      {/* Contato */}
      <ContactForm />
    </>
  );
}

