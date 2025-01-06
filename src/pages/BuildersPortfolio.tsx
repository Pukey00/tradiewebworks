import { ArrowLeft, Building, Home, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuildersPortfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-b from-tradie-navy via-[#2A2F3F] to-[#403E43] py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/examples">
            <Button variant="ghost" className="text-white hover:text-opacity-80">
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Builder's Portfolio</h1>
        </div>
      </header>

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
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white group">
              View Portfolio <Building className="ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/80 hover:bg-white/10 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#777] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
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
                icon: Wrench,
                title: "Renovations",
                description: "Complete property transformations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildersPortfolio;