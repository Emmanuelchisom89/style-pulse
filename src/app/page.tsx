import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PromoCards from "@/components/home/PromoCards";
import NewArrivals from "@/components/home/NewArrivals";
import BigSavingZone from "@/components/home/BigSavingZone";
import SplitBanner from "@/components/home/SplitBanner";
import Categories from "@/components/home/Categories";
import TopBrands from "@/components/home/TopBrands";
import InTheLimelight from "@/components/home/InTheLimelight";
import Feedback from "@/components/home/Feedback";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PromoCards />
      <NewArrivals />
      <BigSavingZone />
      <SplitBanner />
      <Categories />
      <TopBrands />
      <InTheLimelight />
      <Feedback />
      <Footer />
    </main>
  );
}
