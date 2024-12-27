import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
};

export default Index;