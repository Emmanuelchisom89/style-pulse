// "use client";

// import useInViewAnimation from "@/hooks/useInViewAnimation";
// import Image from "next/image";
// import { Star } from "lucide-react";

// const feedbacks = [
//   {
//     name: "Floyd Miles",
//     img: "/user1.png",
//     text: "This Fashion store exceeded my expectations! Not only do they have stylish clothing, but they also offer great deals and discounts.",
//   },
//   {
//     name: "Ronald Richards",
//     img: "/user2.png",
//     text: "Absolutely love shopping at this Fashion store! The quality of their clothing is top-notch.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user3.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
// ];

// export default function Feedback() {
//   const { ref, isVisible } = useInViewAnimation();

//   return (
//     <section className="py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* TITLE */}
//         <div ref={ref} className="flex items-center gap-2 mb-8 overflow-hidden">
//           <div className="w-[6px] h-6 bg-purple-600 rounded-sm"></div>

//           <h2
//             className={`text-2xl font-bold text-black/70 transition-all duration-700 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             Feedback
//           </h2>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {feedbacks.map((f, i) => (
//             <div key={i} className="border rounded-xl p-5 bg-white shadow-sm">
//               {/* HEADER */}
//               <div className="flex items-center justify-between mb-4">
//                 <Image
//                   src={f.img}
//                   alt={f.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                 />

//                 {/* STARS */}
//                 <div className="flex gap-1 text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//               </div>

//               <h4 className="font-semibold mb-2">{f.name}</h4>

//               <p className="text-xs text-gray-600 leading-relaxed">{f.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* DOTS */}
//         <div className="flex justify-center mt-6 gap-2">
//           <span className="w-2 h-2 bg-black rounded-full"></span>
//           <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import useInViewAnimation from "@/hooks/useInViewAnimation";
// import Image from "next/image";
// import { Star } from "lucide-react";
// import { useEffect, useState } from "react";

// const feedbacks = [
//   {
//     name: "Floyd Miles",
//     img: "/user1.png",
//     text: "This Fashion store exceeded my expectations! Not only do they have stylish clothing, but they also offer great deals and discounts.",
//   },
//   {
//     name: "Ronald Richards",
//     img: "/user2.png",
//     text: "Absolutely love shopping at this Fashion store! The quality of their clothing is top-notch.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user3.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
//   {
//     name: "Savannah Yusuf",
//     img: "/user4.png",
//     text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
//   },
// ];

// export default function Feedback() {
//   const { ref, isVisible } = useInViewAnimation();

//   const [current, setCurrent] = useState(0);

//   const cardsPerView = 3;
//   const totalSlides = Math.ceil(feedbacks.length / cardsPerView);

//   // AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % totalSlides);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   return (
//     <section className="py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* TITLE */}
//         <div ref={ref} className="flex items-center gap-2 mb-8 overflow-hidden">
//           <div className="w-[6px] h-6 bg-purple-600 rounded-sm"></div>

//           <h2
//             className={`text-2xl font-bold text-black/70 transition-all duration-700 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             Feedback
//           </h2>
//         </div>

//         {/* CAROUSEL */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${current * 100}%)`,
//             }}
//           >
//             {Array.from({ length: totalSlides }).map((_, slideIndex) => {
//               const start = slideIndex * cardsPerView;
//               const visibleItems = feedbacks.slice(start, start + cardsPerView);

//               return (
//                 <div
//                   key={slideIndex}
//                   className="min-w-full grid md:grid-cols-3 gap-6"
//                 >
//                   {visibleItems.map((f, i) => (
//                     <div
//                       key={i}
//                       className="border rounded-xl p-5 bg-white shadow-sm"
//                     >
//                       {/* HEADER */}
//                       <div className="flex items-center justify-between mb-4">
//                         <Image
//                           src={f.img}
//                           alt={f.name}
//                           width={40}
//                           height={40}
//                           className="rounded-full"
//                         />

//                         {/* STARS */}
//                         <div className="flex gap-1 text-yellow-400">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} size={14} fill="currentColor" />
//                           ))}
//                         </div>
//                       </div>

//                       <h4 className="font-semibold mb-2">{f.name}</h4>

//                       <p className="text-xs text-gray-600 leading-relaxed">
//                         {f.text}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* DOTS */}
//         <div className="flex justify-center mt-6 gap-2">
//           {Array.from({ length: totalSlides }).map((_, i) => (
//             <button
//               title="btn"
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-2 h-2 rounded-full transition ${
//                 current === i ? "bg-black" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import useInViewAnimation from "@/hooks/useInViewAnimation";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { useEffect, useState } from "react";

const feedbacks = [
  {
    name: "Floyd Miles",
    img: "/user1.png",
    rating: 5,
    text: "This Fashion store exceeded my expectations! Not only do they have stylish clothing, but they also offer great deals and discounts.",
  },
  {
    name: "Ronald Richards",
    img: "/user2.png",
    rating: 4,
    text: "Absolutely love shopping at this Fashion store! The quality of their clothing is top-notch.",
  },
  {
    name: "Savannah Yusuf",
    img: "/user3.png",
    rating: 3.5,
    text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
  },
  {
    name: "Savannah Yusuf",
    img: "/user4.png",
    rating: 4.5,
    text: "I recently discovered this Fashion store, and I'm so glad I did! Their collection is trendy and unique.",
  },
  {
    name: "User Five",
    img: "/user4.png",
    rating: 3,
    text: "Nice experience overall.",
  },
  {
    name: "User Six",
    img: "/user4.png",
    rating: 5,
    text: "Amazing quality!",
  },
  {
    name: "User Seven",
    img: "/user4.png",
    rating: 4.5,
    text: "Will shop again.",
  },
  {
    name: "User Eight",
    img: "/user4.png",
    rating: 2.5,
    text: "Could be better.",
  },
  {
    name: "User Nine",
    img: "/user4.png",
    rating: 4,
    text: "Solid products.",
  },
];

export default function Feedback() {
  const { ref, isVisible } = useInViewAnimation();

  const [current, setCurrent] = useState(0);

  const cardsPerView = 3;
  const totalSlides = Math.ceil(feedbacks.length / cardsPerView);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-12">
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
            Feedback
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * cardsPerView;
              const visibleItems = feedbacks.slice(start, start + cardsPerView);

              return (
                <div
                  key={slideIndex}
                  className="min-w-full grid md:grid-cols-3 gap-6"
                >
                  {visibleItems.map((f, i) => (
                    <div
                      key={i}
                      className="border rounded-xl p-5 bg-white shadow-sm"
                    >
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-4">
                        <Image
                          src={f.img}
                          alt={f.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />

                        {/* STARS */}
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => {
                            const starNumber = i + 1;

                            if (f.rating >= starNumber) {
                              return (
                                <Star key={i} size={14} fill="currentColor" />
                              );
                            }

                            if (f.rating >= starNumber - 0.5) {
                              return (
                                <StarHalf
                                  key={i}
                                  size={14}
                                  fill="currentColor"
                                />
                              );
                            }

                            return (
                              <Star
                                key={i}
                                size={14}
                                className="text-gray-300"
                              />
                            );
                          })}
                        </div>
                      </div>

                      <h4 className="font-semibold mb-2">{f.name}</h4>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              title="btn"
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${
                current === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
