"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const images = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Avança automaticamente a cada 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {index === current && (
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Invista em Imóveis a partir de R$1.000,00.
              </h2>
              <p className="text-white text-lg mb-6">
                A solidez de uma obra real. A inovação de investir com um clique.
              </p>
              <div className="flex gap-4">
                <Link href="/conversao">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Invista Agora
                  </Button>
                </Link>
                <a href="#como-funciona">
                  <Button variant="outline" className="text-white border-white">
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Setas de navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 text-white text-3xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 text-white text-3xl"
      >
        ›
      </button>
    </section>
  );
}

