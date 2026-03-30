// "use client";

// import { ArrowDown } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const cards = [
//   {
//     id: 1,
//     title: "Hawaiian Shirts",
//     desc: "Dress up in summer vibe",
//     offer: "UPTO 50% OFF",
//     image: "/hawaiin.png",
//     textColor: "text-white",
//     overlay: "bg-black/10",
//     align: "text-left",
//   },
//   {
//     id: 2,
//     title: "Printed T-Shirt",
//     desc: "New Designs Every Week",
//     offer: "UPTO 40% OFF",
//     tag: "Limited Stock",
//     image: "/printed.png",
//     textColor: "text-white",
//     overlay: "bg-black/10",
//     align: "text-center",
//   },
//   {
//     id: 3,
//     title: "Cargo Joggers",
//     desc: "Move with style & comfort",
//     offer: "UPTO 50% OFF",
//     image: "/cargo.png",
//     textColor: "text-black",
//     overlay: "bg-black/10",
//     align: "text-center",
//   },
//   {
//     id: 4,
//     title: "Urban Shirts",
//     desc: "Live In Comfort",
//     offer: "FLAT 60% OFF",
//     image: "/urbanshirt.png",
//     textColor: "text-black",
//     overlay: "bg-black/10",
//     span: "md:col-span-2",
//     align: "text-center",
//   },
//   {
//     id: 5,
//     title: "Oversized T-Shirts",
//     desc: "Street Style Icon",
//     offer: "FLAT 60% OFF",
//     image: "/oversized.png",
//     textColor: "text-black",
//     overlay: "bg-black/10",
//     align: "text-center",
//   },
// ];

// export default function BigSavingZone() {
//   const [titleVisible, setTitleVisible] = useState(false);
//   const [visibleCards, setVisibleCards] = useState<boolean[]>(
//     new Array(cards.length).fill(false),
//   );

//   const titleRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target === titleRef.current && entry.isIntersecting) {
//             setTitleVisible(true);
//           }

//           const cardIndex = cardRefs.current.findIndex(
//             (ref) => ref === entry.target,
//           );

//           if (cardIndex >= 0 && entry.isIntersecting) {
//             setVisibleCards((prev) => {
//               if (prev[cardIndex]) return prev;
//               const next = [...prev];
//               next[cardIndex] = true;
//               return next;
//             });
//           }
//         });
//       },
//       {
//         threshold: 0.25,
//       },
//     );

//     if (titleRef.current) observer.observe(titleRef.current);
//     cardRefs.current.forEach((ref) => ref && observer.observe(ref));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* TITLE */}
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
//             Big Saving Zone
//           </h2>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {cards.map((card, index) => {
//             const isVisible = visibleCards[index];
//             const cardPositionClass =
//               card.id === 1
//                 ? "self-start"
//                 : card.id === 4 || card.id === 5
//                   ? "self-center md:self-end"
//                   : "self-end";

//             const contentAlignment =
//               card.id === 1
//                 ? "self-start md:self-start"
//                 : card.id === 4 || card.id === 5
//                   ? "self-center md:self-end"
//                   : "self-end";

//             const textAlignment =
//               card.id === 1
//                 ? "text-left"
//                 : card.id === 4 || card.id === 5
//                   ? "text-center"
//                   : "text-right";

//             const contentPadding =
//               card.id === 1
//                 ? "md:pl-6"
//                 : card.id === 4 || card.id === 5
//                   ? "md:pr-10"
//                   : "md:pr-6";

//             return (
//               <div
//                 key={card.id}
//                 ref={(el) => {
//                   cardRefs.current[index] = el;
//                 }}
//                 className={`relative h-[290px] rounded-xl overflow-hidden px-5 py-10 flex flex-col justify-between transition-all duration-700 ease-out ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-8"
//                 } ${card.span || ""} ${cardPositionClass}`}
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
//                 {/* BACKGROUND IMAGE */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${card.image})`,
//                   }}
//                 />

//                 {/* OVERLAY */}
//                 <div className={`absolute inset-0 ${card.overlay}`} />

//                 {/* CONTENT */}
//                 <div
//                   className={`w-1/2 ${contentAlignment} ${textAlignment} ${contentPadding}`}
//                 >
//                   <div className={`relative z-10 ${card.textColor}`}>
//                     {card.tag && (
//                       <p className="text-xs mb-3 bg-black/70 px-2 py-1.5 inline-block rounded text-white">
//                         {card.tag}
//                       </p>
//                     )}

//                     <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

//                     <p className="text-xs mb-2">{card.desc}</p>

//                     <p className="text-sm font-semibold mb-4">{card.offer}</p>
//                   </div>

//                   <div className="flex flex-col items-center justify-center gap-2 text-center my-5">
//                     <ArrowDown
//                       className={`w-5 h-5 animate-bounce ${card.textColor}`}
//                     />{" "}
//                   </div>

//                   {/* BUTTON */}
//                   <button
//                     className={`relative z-10 border px-5 py-1.5 text-[10.5px] font-semibold ${
//                       card.textColor === "text-white"
//                         ? "border-white text-white"
//                         : "border-black text-black"
//                     } ${card.align}`}
//                   >
//                     SHOP NOW
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Hawaiian Shirts",
    desc: "Dress up in summer vibe",
    offer: "UPTO 50% OFF",
    image: "/hawaiin.png",
    textColor: "text-white",
    overlay: "bg-black/10",
    align: "text-left",
  },
  {
    id: 2,
    title: "Printed T-Shirt",
    desc: "New Designs Every Week",
    offer: "UPTO 40% OFF",
    tag: "Limited Stock",
    image: "/printed.png",
    textColor: "text-white",
    overlay: "bg-black/10",
    align: "text-center",
  },
  {
    id: 3,
    title: "Cargo Joggers",
    desc: "Move with style & comfort",
    offer: "UPTO 50% OFF",
    image: "/cargo.png",
    textColor: "text-black",
    overlay: "bg-black/10",
    align: "text-center",
  },
  {
    id: 4,
    title: "Urban Shirts",
    desc: "Live In Comfort",
    offer: "FLAT 60% OFF",
    image: "/urbanshirt.png",
    textColor: "text-black",
    overlay: "bg-black/10",
    span: "md:col-span-2",
    align: "text-center",
  },
  {
    id: 5,
    title: "Oversized T-Shirts",
    desc: "Street Style Icon",
    offer: "FLAT 60% OFF",
    image: "/oversized.png",
    textColor: "text-black",
    overlay: "bg-black/10",
    align: "text-center",
  },
];

export default function BigSavingZone() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(cards.length).fill(false),
  );

  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // TITLE
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }

          // CARDS
          const index = cardRefs.current.findIndex(
            (ref) => ref === entry.target,
          );

          if (index >= 0 && entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <div
          ref={titleRef}
          className="flex items-center gap-2 mb-8 overflow-hidden"
        >
          <div className="w-[6px] h-6 bg-purple-600 rounded-sm"></div>

          <h2
            className={`text-2xl font-bold text-black/70 transition-all duration-700 ease-out ${
              titleVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            Big Saving Zone
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative h-[250px] md:h-[290px] rounded-xl overflow-hidden px-5 ${
                index === 1 || index === 4
                  ? "pb-10 pt-5.5 md:py-10 md:pb-0 pt-0"
                  : "py-10"
              }  flex flex-col justify-between transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              } ${card.span || ""} ${card.align || ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />

              {/* OVERLAY */}
              <div className={`absolute inset-0 ${card.overlay}`} />

              {/* CONTENT */}
              <div
                className={`w-1/2 ${
                  card.align === "text-left"
                    ? "self-start"
                    : card.id === 4 || card.id === 5
                      ? "self-end"
                      : "self-end"
                }`}
              >
                <div className={`relative z-10 ${card.textColor}`}>
                  {card.tag && (
                    <p className="text-xs mb-3 bg-black/70 px-2 py-1.5 inline-block rounded text-white">
                      {card.tag}
                    </p>
                  )}

                  <h3
                    className={`font-semibold mb-2 ${
                      index === 3 ? "text-lg md:text-xl lg:text-2xl" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p className="text-xs mb-2">{card.desc}</p>

                  <p className="text-sm font-semibold mb-4">{card.offer}</p>
                </div>

                {/* ARROW */}
                <div
                  className={`flex flex-col justify-center gap-2 my-5 ${
                    card.align === "text-left"
                      ? "items-start ml-[25%]"
                      : "items-center"
                  }`}
                >
                  {" "}
                  <ArrowDown
                    className={`w-5 h-5 animate-bounce ${card.textColor}`}
                  />
                </div>

                {/* BUTTON */}
                <button
                  className={`relative z-10 border px-5 py-1.5 text-[10.5px] font-semibold cursor-pointer ${
                    card.textColor === "text-white"
                      ? "border-white text-white"
                      : "border-black text-black"
                  } ${card.align}`}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
