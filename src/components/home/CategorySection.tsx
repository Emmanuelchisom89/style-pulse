"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useInViewAnimation from "@/hooks/useInViewAnimation";

type Category = {
  title: string;
  image: string;
};

type Props = {
  heading: string;
  data: Category[];
};

export default function CategorySection({ heading, data }: Props) {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <div
          ref={ref}
          className="flex items-center gap-2 mb-10 overflow-hidden"
        >
          <div className="w-[6px] h-5 md:h-6 bg-purple-600 rounded-sm"></div>

          <h2
            className={`text-xl md:text-2xl font-bold text-black/70 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {heading}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* IMAGE */}
              <div className="relative h-[260px] md:h-[290px] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">Explore Now!</p>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
