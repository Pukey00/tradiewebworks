import { Button } from "@/components/ui/button";
import { Building, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BuildersHeader } from "@/components/builders/BuildersHeader";
import { BuildersHero } from "@/components/builders/BuildersHero";
import { BuildersServices } from "@/components/builders/BuildersServices";

const ConstructionPro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <BuildersHeader />
      <BuildersHero scrollToContact={scrollToContact} />
      <BuildersServices />

      {/* Projects Showcase */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/photo-149630734${item}3780-42ee777d4833`}
                  alt={`Project ${item}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="text-gray-200">Commercial Construction</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              className="bg-orange-500 hover:bg-orange-600"
              size="lg"
            >
              View All Projects <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "25+ Years Experience", description: "Decades of construction excellence" },
              { title: "Licensed & Insured", description: "Full coverage for your peace of mind" },
              { title: "Quality Guaranteed", description: "Superior workmanship on every project" },
              { title: "On-Time Delivery", description: "We respect your timeline and budget" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default ConstructionPro;