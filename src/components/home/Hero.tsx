"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Value Pack",
    subtitle: "T-Shirt / Tops",
    description: "cool / colorful / comfy",
    image: "/heroS1.png",
  },
  {
    id: 2,
    title: "Winter Collection",
    subtitle: "Jackets / Hoodies",
    description: "warm / stylish / bold",
    image: "/heroS2.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      {/* BACKGROUND IMAGES (CROSSFADE) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center 8%", // adjust this if needed
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-4 h-full flex items-center">
        <div key={current} className="max-w-lg text-white animate-fade">
          <p className="text-md md:text-lg mb-4">{slides[current].subtitle}</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {slides[current].title}
          </h1>

          <p className="text-md md:text-lg mb-6">
            {slides[current].description}
          </p>

          <button className="text-sm md:text-base bg-white text-black px-6 lg:px-10 py-2 rounded-sm font-medium">
            Shop Now
          </button>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        title="left"
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white z-10"
      >
        <ChevronLeft size={35} />
      </button>

      {/* RIGHT ARROW */}
      <button
        title="right"
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
      >
        <ChevronRight size={35} />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded-full transition-all ${
              index === current ? "bg-purple-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
