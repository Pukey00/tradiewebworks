import { ArrowLeft, Zap, Shield, Phone, Wrench, ArrowRight, Power, Lightbulb, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const ElectricSolutions = () => {
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

      {/* Business Header */}
      <header className="bg-[#333333] py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#F97316] p-2 rounded-full">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">VoltTech Solutions</h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white">
            <a href="#services" className="hover:text-[#0EA5E9] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#0EA5E9] transition-colors">Contact</a>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90">
              Emergency Call
            </Button>
          </div>
        </div>
      </header>

      {/* Dynamic Circuit Border */}
      <div className="relative bg-[#333333] pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-6">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center group-hover:bg-[#0EA5E9]/20 transition-colors">
                  <Zap className="w-8 h-8 text-[#0EA5E9] animate-pulse" />
                </div>
                <div className="absolute inset-0 border-2 border-[#0EA5E9] rounded-full animate-[border-dance_4s_linear_infinite] group-hover:border-[#F97316] transition-colors"></div>
              </div>
            ))}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#333333] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="bg-[#0EA5E9]/10 rounded-lg py-2 px-4">
                  <p className="text-[#0EA5E9] font-medium">Licensed & Insured</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Professional Electrical Services
              </h1>
              <p className="text-xl text-gray-300">
                Expert electrical solutions for your home and business. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
                  Contact Now <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-[#333333] bg-white hover:bg-white/90"
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/3864948c-37c6-4fb9-a2df-91f07ad91a11.png"
                alt="Professional electrician working on electrical panel"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Emergency Repairs",
                description: "24/7 emergency electrical repair services for homes and businesses",
              },
              {
                icon: Shield,
                title: "Safety Inspections",
                description: "Comprehensive electrical safety audits and certifications",
              },
              {
                icon: Wrench,
                title: "Installations",
                description: "Professional installation of electrical systems and fixtures",
              },
              {
                icon: Power,
                title: "Panel Upgrades",
                description: "Electrical panel replacements and circuit breaker installations",
              },
              {
                icon: Lightbulb,
                title: "Lighting Solutions",
                description: "Indoor and outdoor lighting installation and maintenance",
              },
              {
                icon: CircuitBoard,
                title: "Smart Home Systems",
                description: "Installation and setup of smart home electrical components",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:border-[#0EA5E9]"
              >
                <service.icon className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#333333]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ElectricSolutions;
