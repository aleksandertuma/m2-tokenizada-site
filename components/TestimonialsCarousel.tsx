'use client';

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Fernanda Lima",
    text: "Investi com a M2 e pude acompanhar o progresso da obra em tempo real. Incrível!",
    image: "/pessoas/f1.jpg",
  },
  {
    name: "Carlos Mendes",
    text: "Nunca imaginei investir em imóveis com R$1.000 e tão rápido!",
    image: "/pessoas/m1.jpg",
  },
  {
    name: "Juliana Rocha",
    text: "Tudo muito transparente, recomendo a plataforma para amigos.",
    image: "/pessoas/f2.jpg",
  },
  {
    name: "Pedro Azevedo",
    text: "Minha primeira experiência com tokenização e foi muito positiva.",
    image: "/pessoas/m2.jpg",
  },
  {
    name: "Aline Ferreira",
    text: "Excelente para quem quer diversificar sem complicação.",
    image: "/pessoas/f3.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Depoimentos</h2>
        <div className="flex flex-col items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <p className="italic text-gray-700 max-w-xl">“{testimonial.text}”</p>
          <strong className="mt-2">{testimonial.name}</strong>
        </div>
      </div>
    </section>
  );
}
