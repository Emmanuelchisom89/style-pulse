"use client";

import Image from "next/image";

const brands = [
  { img: "/nike.png" },
  { img: "/hm.png" },
  { img: "/levis.png" },
  { img: "/uspolo.png" },
  { img: "/puma.png" },
];

export default function TopBrands() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#3C4242] rounded-lg py-12 px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Top Brands Deal
          </h2>

          <p className="text-sm mb-8">
            Up To <span className="text-yellow-400 font-semibold">50% off</span>{" "}
            on brands
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-md px-6 py-3 flex items-center justify-center"
              >
                <Image
                  src={brand.img}
                  alt="brand"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
