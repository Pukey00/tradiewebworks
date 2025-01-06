import { ArrowLeft, Zap, Shield, Phone, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const ElectricSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#1A1F2C] py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/examples">
            <Button variant="ghost" className="text-white hover:text-[#1EAEDB]">
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Electric Solutions</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1A1F2C] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="bg-[#1EAEDB]/10 rounded-lg py-2 px-4">
                  <p className="text-[#1EAEDB] font-medium">Licensed & Insured</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Professional Electrical Services
              </h1>
              <p className="text-xl text-gray-300">
                Expert electrical solutions for your home and business. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white">
                  Contact Now <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10"
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Electrical Repairs",
                description: "Fast and reliable electrical repair services for any issue",
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
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <service.icon className="w-12 h-12 text-[#1EAEDB] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 px-6" id="contact">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ElectricSolutions;
