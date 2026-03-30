import Image from "next/image";
import Link from "next/link";

export default function PromoCards() {
  return (
    <section className="py-15">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
        <Link href="/shop">
          <div className="group relative h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
            <Image
              src="/pcard4.png"
              alt="Promo card 1"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        <Link href="/shop">
          <div className="group relative h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
            <Image
              src="/pcard5.png"
              alt="Promo card 2"
              fill
              className="object-cover"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
