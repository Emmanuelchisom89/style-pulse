"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import useInViewAnimation from "@/hooks/useInViewAnimation";

const products = [
  {
    title: "Black Sweatshirt with...",
    brand: "Jhanvi's Brand",
    price: "$123.00",
    img: "/p1.png",
  },
  {
    title: "line Pattern Black H...",
    brand: "AS's Brand",
    price: "$37.00",
    img: "/p2.png",
  },
  {
    title: "Black Shorts",
    brand: "MM's Brand",
    price: "$37.00",
    img: "/p3.png",
  },
  {
    title: "Levender Hoodie with...",
    brand: "Nike's Brand",
    price: "$119.00",
    img: "/p4.png",
  },
];

export default function InTheLimelight() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <div ref={ref} className="flex items-center gap-2 mb-8 overflow-hidden">
          <div className="w-[6px] h-6 bg-purple-600 rounded-sm"></div>

          <h2
            className={`text-2xl font-bold text-black/70 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            In The Limelight
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative h-[260px] md:h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />

                {/* HEART ICON */}
                <button
                  title="favourite"
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm"
                >
                  <Heart size={16} className="hidden md:block" />
                  <Heart size={12} className="md:hidden" />
                </button>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <div>
                  <p className="text-xs md:text-sm font-semibold">{p.title}</p>
                  <p className="text-[9px] md:text-xs text-gray-500">
                    {p.brand}
                  </p>
                </div>

                <span className="text-xs md:text-sm font-semibold bg-gray-200 px-2 py-1 rounded">
                  {p.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
