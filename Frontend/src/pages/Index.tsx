import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyLIC from "@/components/WhyLIC";
import PremiumCalculator from "@/components/PremiumCalculator";
import QuickLinks from "@/components/QuickLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-72 transition-all duration-300">
        <Hero />
        <About />
        <Services />
        <WhyLIC />
        <PremiumCalculator />
        <QuickLinks />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
