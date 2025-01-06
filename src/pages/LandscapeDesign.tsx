import { ArrowLeft, Trees, Flower2, Shovel, Sun, Cloud, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WaterAnimation } from "@/components/landscape/WaterAnimation";
import { HeroSection } from "@/components/landscape/HeroSection";

const LandscapeDesign = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
      <header className="bg-gradient-to-b from-green-800 via-green-700 to-green-600 py-4 px-6 shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-2 rounded-full">
              <Trees className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">GREEN HORIZONS</h1>
          </div>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white"
            onClick={scrollToContact}
          >
            Contact Now
          </Button>
        </div>
      </header>

      <WaterAnimation />
      
      <HeroSection onGetQuote={scrollToContact} />

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: "Landscape Design",
                description: "Custom garden layouts and expert plant selection",
              },
              {
                icon: Flower2,
                title: "Garden Installation",
                description: "Professional planting and garden bed creation",
              },
              {
                icon: Shovel,
                title: "Hardscaping",
                description: "Patios, walkways, and retaining walls",
              },
              {
                icon: Droplets,
                title: "Irrigation Systems",
                description: "Water-efficient sprinkler installation",
              },
              {
                icon: Sun,
                title: "Outdoor Living",
                description: "Beautiful outdoor entertainment spaces",
              },
              {
                icon: Cloud,
                title: "Maintenance",
                description: "Regular garden care and seasonal cleanup",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow group"
              >
                <service.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-green-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
              "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Landscape project ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today for a free consultation and quote
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-green-800 hover:bg-green-100"
          >
            Get Started <Phone className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandscapeDesign;
