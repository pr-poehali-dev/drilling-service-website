import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesList from "@/components/ServicesList";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesList />
        <AboutPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
