import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { BuildersHeader } from "@/components/builders/BuildersHeader";
import { BuildersHero } from "@/components/builders/BuildersHero";
import { BuildersServices } from "@/components/builders/BuildersServices";

const BuildersPortfolio = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BuildersHeader />
      <BuildersHero scrollToContact={scrollToContact} />
      <BuildersServices />

      {/* CTA Section */}
      <section className="bg-[#F1F1F1] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Contact us now for a free consultation
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-[#1A1F2C]"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default BuildersPortfolio;