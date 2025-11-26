import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialOffers from "@/components/SpecialOffers";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <Hero />
        <SpecialOffers />
        <BestSellers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
