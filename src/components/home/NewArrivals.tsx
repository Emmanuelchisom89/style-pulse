// "use client";

// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// export default function NewArrivals() {
//   const [titleVisible, setTitleVisible] = useState(false);

//   const titleRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         // TITLE
//         if (entry.target === titleRef.current && entry.isIntersecting) {
//           setTitleVisible(true);
//         }

//         if (titleRef.current) observer.observe(titleRef.current);
//       });
//     });

//     if (titleRef.current) observer.observe(titleRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const newProducts = [
//     { img: "/new1.png", title: "Active Wears" },
//     { img: "/new2.png", title: "Full Sleeve" },
//     { img: "/new3.png", title: "Active T-Shirts" },
//     { img: "/new4.png", title: "Urban Shirts" },
//     { img: "/new1.png", title: "More Style" },
//     { img: "/new1.png", title: "More Style" },
//   ];

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;

//     const scrollAmount = 300;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-12">
//       <div className="max-w-6xl mx-auto px-4 relative">
//         {/* Title*/}
//         <div
//           ref={titleRef}
//           className="flex items-center gap-2 mb-8 overflow-hidden"
//         >
//           <div className="w-[6px] h-6 bg-purple-600 rounded-sm"></div>

//           <h2
//             className={`text-2xl font-bold text-black/70 transition-all duration-700 ease-out ${
//               titleVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             New Arrival
//           </h2>
//         </div>

//         {/* LEFT ARROW */}
//         <button
//           title="left"
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           title="right"
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
//         >
//           <ChevronRight size={20} />
//         </button>

//         {/* SCROLL CONTAINER */}
//         <div
//           ref={scrollRef}
//           className="md:pl-3 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide mx-auto"
//         >
//           {newProducts.map((p, index) => (
//             <div key={index} className="min-w-[200px] flex-shrink-0">
//               <div className="relative h-[230px] rounded-xl overflow-hidden">
//                 <Image
//                   src={p.img}
//                   alt={p.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <p className="mt-4 text-sm font-semibold text-gray-700">
//                 {p.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import useInViewAnimation from "@/hooks/useInViewAnimation";

export default function NewArrivals() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewAnimation();

  const scrollRef = useRef<HTMLDivElement>(null);

  const newProducts = [
    { img: "/new1.png", title: "Active Wears" },
    { img: "/new2.png", title: "Full Sleeve" },
    { img: "/new3.png", title: "Active T-Shirts" },
    { img: "/new4.png", title: "Urban Shirts" },
    { img: "/new1.png", title: "More Style" },
    { img: "/new1.png", title: "More Style" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* TITLE + MOBILE ARROWS */}
        <div className="flex items-center justify-between mb-8">
          {/* LEFT SIDE */}
          <div
            ref={titleRef}
            className="flex items-center gap-2 overflow-hidden"
          >
            <div className="w-[6px] h-5 md:h-6 bg-purple-600 rounded-sm"></div>

            <h2
              className={`text-xl md:text-2xl font-bold text-black/70 transition-all duration-700 ease-out ${
                titleVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              New Arrival
            </h2>
          </div>

          {/* MOBILE ARROWS */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              title="mobile-left"
              onClick={() => scroll("left")}
              className="bg-white shadow-sm rounded-full p-2"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              title="mobile-right"
              onClick={() => scroll("right")}
              className="bg-white shadow-sm rounded-full p-2"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* DESKTOP ARROWS */}
        <button
          title="left"
          onClick={() => scroll("left")}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          title="right"
          onClick={() => scroll("right")}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="md:pl-3 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {newProducts.map((p, index) => (
            <div key={index} className="min-w-[200px] flex-shrink-0">
              <div className="relative h-[230px] rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-700">
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
