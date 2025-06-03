"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; 

import HeroCarousel from "@/components/HeroCarousel";
import HowItWorks from "@/components/HowItWorks";
import AudienceOptions from "@/components/AudienceOptions";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import InvestmentStats from "@/components/InvestmentStats";
import BlockchainSection from "@/components/BlockchainSection";
import ContactForm from "@/components/ContactForm";
import FooterNav from "@/components/FooterNav";

export default function HomePage() {
  return (
    <>
      {/* Hero inicial com carrossel */}
      <HeroCarousel />

      {/* Seção complementar do seu texto atual */}
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-16">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Bem-vindo à M2 Tokenizada</h1>
          <p className="text-lg text-gray-600">
            Investimentos imobiliários de forma digital e acessível.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/conversao">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Investir Agora
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Transparência</h2>
            <p className="text-gray-700">
              Acompanhe o progresso das obras, remuneração e todos os dados do seu token.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Baixo Valor Inicial</h2>
            <p className="text-gray-700">
              Comece a investir com apenas R$ 500,00 e receba lucros trimestrais.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Nosso Propósito</h3>
          <p className="text-gray-600">
            Democratizar o acesso ao mercado imobiliário através da tecnologia de tokenização,
            criando oportunidades de alto padrão para todos.
          </p>
        </section>
      </main>

      {/* Blocos estruturados */}
      <HowItWorks />
      <AudienceOptions />
      <TestimonialsCarousel />
      <InvestmentStats />
      <BlockchainSection />
      <ContactForm />
      <FooterNav />
    </>
  );
}
