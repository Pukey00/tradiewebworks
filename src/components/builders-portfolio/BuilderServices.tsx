import { Building, Home, Wrench, Phone, Clock, Shield, Hammer, PaintBucket, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes and major renovations",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Office buildings and retail spaces",
  },
  {
    icon: Wrench,
    title: "Renovations",
    description: "Complete property transformations",
  },
  {
    icon: Hammer,
    title: "Extensions",
    description: "Home additions and expansions",
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "High-quality interior work",
  },
  {
    icon: Shield,
    title: "Project Management",
    description: "End-to-end project coordination",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time project completion",
  },
  {
    icon: Ruler,
    title: "Custom Design",
    description: "Architectural design services",
  },
  {
    icon: Building,
    title: "Multi-Unit Development",
    description: "Apartment and unit developments",
  },
];

export const BuilderServices = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#777] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
};