import { ArrowLeft, Wrench, Droplet, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PlumbingPro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#0FA0CE] py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/examples">
            <Button variant="ghost" className="text-white hover:text-opacity-80">
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Plumbing Pro</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0FA0CE] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Plumbing Services
          </h1>
          <p className="text-xl mb-8">
            Available 24/7 for all your plumbing emergencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F97316] hover:bg-orange-600 text-white">
              Call Now <Phone className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white/10">
              Book Online
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
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
          <Button size="lg" className="bg-[#F97316] hover:bg-orange-600 text-white">
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PlumbingPro;