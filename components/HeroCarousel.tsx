'use client';

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

const images = [
  "/carrossel1.jpg",
  "/carrossel2.jpg",
  "/carrossel3.jpg",
];

export default function HeroCarousel() {
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const slider = document.getElementById("carousel-img") as HTMLImageElement;
      if (slider) {
        index = (index + 1) % images.length;
        slider.src = images[index];
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full">
      <img
        id="carousel-img"
        src={images[0]}
        alt="Banner"
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          Invista em Imóveis a partir de R$1.000,00
        </h1>
        <p className="text-lg mt-4 mb-6 max-w-xl">
          A solidez de uma obra real. A inovação de investir com um clique.
        </p>
        <div className="flex gap-4">
          <Button className="bg-green-500 text-white hover:bg-green-600 text-lg px-6 py-3">
            Invista Agora
          </Button>
          <a href="#como-funciona">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-6 py-3">
              Saiba Mais
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
