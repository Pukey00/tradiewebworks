import { ArrowLeft, Building, Home, Tool, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuildersPortfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/examples">
            <Button variant="ghost" className="text-white hover:text-opacity-80">
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Builder's Portfolio</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quality Construction Services
          </h1>
          <p className="text-xl mb-8">
            Building dreams into reality with excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              View Portfolio <Building className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Residential",
                description: "Custom homes and renovations",
              },
              {
                icon: Building,
                title: "Commercial",
                description: "Office buildings and retail spaces",
              },
              {
                icon: Tool,
                title: "Renovations",
                description: "Complete property transformations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-slate-800 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Start Your Construction Project
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Let's discuss your vision
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BuildersPortfolio;