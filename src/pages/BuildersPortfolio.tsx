import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { BuilderHero } from "@/components/builders-portfolio/BuilderHero";
import { BuilderServices } from "@/components/builders-portfolio/BuilderServices";

const BuildersPortfolio = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BuilderHero onContactClick={scrollToContact} />

      {/* Dynamic Construction Animation */}
      <div className="relative bg-gradient-to-b from-[#403E43] to-[#555] h-32 overflow-hidden">
        {/* Logo and Business Name */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white/90 rounded transform -rotate-45 flex items-center justify-center">
                <Building className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              APEX BUILDERS
            </h2>
          </div>
        </div>

        {/* Animated construction beams */}
        <div className="absolute inset-0 flex justify-around items-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-full bg-gradient-to-b from-yellow-400 to-orange-500 transform -skew-x-12 animate-border-dance"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
        
        {/* Floating construction elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full opacity-60" />
            </div>
          ))}
        </div>

        {/* Additional geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div 
                className={`
                  ${i % 2 === 0 ? 'w-6 h-6 rotate-45' : 'w-4 h-4'}
                  bg-gradient-to-br from-gray-300 to-white
                  opacity-30
                `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#555] to-[#777] text-white py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Quality Construction Services
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Building dreams into reality with excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-[#1A1F2C] group">
              View Portfolio <Building className="ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 hover:bg-white/10 text-[#1A1F2C]"
              onClick={scrollToContact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <BuilderServices />

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
