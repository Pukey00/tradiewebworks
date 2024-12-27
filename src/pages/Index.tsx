import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;