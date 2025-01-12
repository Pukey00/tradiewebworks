import { ArrowLeft, Wrench, Droplet, Phone, Clock, Hammer, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const PlumbingPro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back to Examples Header */}
      <div className="bg-white py-2 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link to="/examples">
            <Button 
              variant="ghost" 
              className="bg-[#0000001a] backdrop-blur-sm text-black hover:bg-[#00000033] transition-colors"
            >
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
        </div>
      </div>

      {/* Mock Business Header */}
      <header className="bg-gradient-to-b from-[#1A1F2C] to-[#0FA0CE] py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#F97316] p-2 rounded-full">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#F1F1F1]">Melbourne Master Plumbers</h1>
          </div>
          <Button 
            className="bg-[#F97316] hover:bg-orange-600 text-white"
            onClick={scrollToContact}
          >
            Contact Now
          </Button>
        </div>
      </header>

      {/* Dynamic Water Animation */}
      <div className="relative bg-gradient-to-b from-[#0FA0CE] to-[#0c7da0] pb-2 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="relative">
                  <Droplet 
                    className="h-8 w-8 text-white/80 animate-droplet-fall"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </div>
                <div 
                  className="h-1 w-32 bg-white/30 rounded-full relative overflow-hidden"
                >
                  <div 
                    className="h-full w-16 bg-white/80 rounded-full animate-water-flow"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 px-6">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/ad075642-99b2-4e53-8384-51cbbae9f0b6.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, #0c7da0 0%, #0FA0CE 100%)',
            opacity: 0.85,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Plumbing Services
            </h1>
            <p className="text-xl mb-8">
              Available 24/7 for all your plumbing emergencies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-orange-600 text-white"
                onClick={scrollToContact}
              >
                Contact Now <Phone className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-[#1A1F2C] bg-white hover:bg-white/90"
                onClick={scrollToServices}
              >
                View Services
              </Button>
            </div>
            <p className="mt-6 text-xl font-semibold">
              Call us: 1300 123 456
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0FA0CE]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Emergency Repairs",
                description: "24/7 emergency plumbing services for your peace of mind",
              },
              {
                icon: Droplet,
                title: "Leak Detection",
                description: "Advanced technology to find and fix leaks quickly",
              },
              {
                icon: Clock,
                title: "Maintenance",
                description: "Regular maintenance to prevent future problems",
              },
              {
                icon: Hammer,
                title: "Renovations",
                description: "Complete bathroom and kitchen plumbing renovations",
              },
              {
                icon: Shield,
                title: "Gas Fitting",
                description: "Licensed gas fitting and appliance installation",
              },
              {
                icon: Home,
                title: "Hot Water Systems",
                description: "Installation and repair of all hot water systems",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-[#0FA0CE] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F1F1F1] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0FA0CE]">
            Ready to Fix Your Plumbing Issues?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Contact us now for a free quote
          </p>
          <Button 
            size="lg" 
            className="bg-[#F97316] hover:bg-orange-600 text-white"
            onClick={scrollToContact}
          >
            Contact Now
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PlumbingPro;