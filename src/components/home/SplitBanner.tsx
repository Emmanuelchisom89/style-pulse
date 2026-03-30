"use client";

const banners = [
  {
    id: 1,
    title: "WE MADE YOUR EVERYDAY FASHION BETTER!",
    desc: "In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7",
    button: "Shop Now",
    image: "/sb1.png",
    overlay: "bg-black/40",
    textColor: "text-white",
    hasContent: true,
  },
  {
    id: 2,
    image: "/sb2.png",
    hasContent: false,
  },
];

export default function SplitBanner() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-3 md:gap-0">
        {banners.map((banner) => (
          <div key={banner.id} className="relative h-[300px]  overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            />

            {/* OVERLAY (only if exists) */}
            {banner.overlay && (
              <div className={`absolute inset-0 ${banner.overlay}`} />
            )}

            {/* CONTENT */}
            {banner.hasContent && (
              <div className="relative z-10 flex items-center h-full p-8">
                <div className={`max-w-md ${banner.textColor}`}>
                  <h3 className="text-xl font-semibold mb-4">{banner.title}</h3>

                  <p className="text-sm mb-6">{banner.desc}</p>

                  <button className="bg-white text-black px-5 py-2 rounded-md text-sm">
                    {banner.button}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
