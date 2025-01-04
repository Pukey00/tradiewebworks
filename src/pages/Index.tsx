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
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
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