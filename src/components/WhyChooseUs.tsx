import { Wrench, Clock, Smartphone, DollarSign } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Built for Tradies",
      description: "Websites designed specifically for tradies, by people who understand your business",
      icon: Wrench,
    },
    {
      title: "Quick Setup",
      description: "Get online in less than a week - no mucking around",
      icon: Clock,
    },
    {
      title: "Mobile Friendly",
      description: "Looks great on phones, tablets, and computers",
      icon: Smartphone,
    },
    {
      title: "Fair Prices",
      description: "Low affordable monthly fees to suit your business",
      icon: DollarSign,
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tradie-navy">
            Why Choose Tradie Web Works?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We speak your language and understand your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <benefit.icon className="h-12 w-12 text-tradie-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-tradie-navy mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};