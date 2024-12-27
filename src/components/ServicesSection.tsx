import { Hammer, Globe, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      title: "Basic Builder",
      price: "$997",
      features: ["One-page website", "Mobile responsive", "Contact form", "Business hours", "Service area map"],
      icon: Hammer,
    },
    {
      title: "Professional Tradie",
      price: "$1,497",
      features: ["Everything in Basic", "Photo gallery", "Customer reviews", "Service list", "Social media links"],
      icon: Globe,
    },
    {
      title: "Master Craftsman",
      price: "$1,997",
      features: ["Everything in Professional", "Online quotes", "Project showcase", "Blog section", "SEO optimization"],
      icon: Phone,
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tradie-navy">
            Simple Pricing, Quality Results
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the package that fits your business
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-tradie-orange transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-tradie-orange mx-auto" />
                <CardTitle className="text-2xl font-bold text-center">{service.title}</CardTitle>
                <p className="text-3xl font-bold text-center text-tradie-navy">{service.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};