import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowItWorksSection } from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          <HeroSection />
          <HowItWorksSection />
          <WhyChooseUs />
          <ServicesSection />
          <TestimonialsSection />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;