import { ArrowLeft, Trees, Flower2, Shovel, Sun, Cloud, Phone, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WaterAnimation } from "@/components/landscape/WaterAnimation";
import { HeroSection } from "@/components/landscape/HeroSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LandscapeHeader } from "@/components/landscape/LandscapeHeader";

const LandscapeDesign = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
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

      {/* Main Site Header */}
      <LandscapeHeader />

      {/* Rest of the components */}
      {/* Hero Section with Diagonal Split */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600 transform -skew-y-6 origin-top-left" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 z-10">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Your Outdoor Space
              </h1>
              <p className="text-xl opacity-90">
                Professional landscape design that brings your vision to life
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-white text-green-800 hover:bg-green-50"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative z-10">
              <img 
                src="/lovable-uploads/384e0977-be75-43b6-a65c-a2356336b86a.png"
                alt="Landscape Design"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid with Hover Effects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: "Garden Design",
                description: "Custom layouts and expert plant selection for your perfect garden"
              },
              {
                icon: Flower2,
                title: "Planting",
                description: "Professional installation of trees, shrubs, and flowers"
              },
              {
                icon: Shovel,
                title: "Hardscaping",
                description: "Beautiful patios, walkways, and retaining walls"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-green-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Gallery */}
      <section className="py-24 bg-green-50">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Our Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="inline-flex gap-6 px-6 pb-6">
            {[
              "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
              "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
              "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
            ].map((image, index) => (
              <div
                key={index}
                className="relative group first:ml-[calc(50vw-24rem)] last:mr-[calc(50vw-24rem)]"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-[400px] h-[300px] object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end p-6">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>

      {/* Contact Section with Natural Elements */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-green-600/90" />
        <WaterAnimation />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Let's Create Your Dream Garden
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandscapeDesign;
