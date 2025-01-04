import { Server, Globe, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      title: "Basic Plan",
      setupPrice: "$200",
      monthlyFee: "$30/month",
      features: [
        "One-page website",
        "Custom domain setup",
        "Basic SEO",
      ],
      icon: Server,
    },
    {
      title: "Standard Plan",
      setupPrice: "$300",
      monthlyFee: "$50/month",
      features: [
        "Multi-page website (up to 3 pages)",
        "Custom domain setup",
        "SEO optimization",
        "Contact form integration"
      ],
      icon: Globe,
    },
    {
      title: "Premium Plan",
      setupPrice: "$500",
      monthlyFee: "$75/month",
      features: [
        "Multi-page website (up to 5 pages)",
        "Custom domain setup",
        "Advanced SEO",
        "Blog integration",
        "Ongoing maintenance"
      ],
      icon: Rocket,
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
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-tradie-orange transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-tradie-orange mx-auto" />
                <CardTitle className="text-2xl font-bold text-center">{service.title}</CardTitle>
                <div className="space-y-2 text-center">
                  <p className="text-lg font-semibold">{service.setupPrice} setup</p>
                  <p>
                    <span className="text-tradie-orange font-bold text-base">FREE SETUP</span>
                    <span className="block text-gray-500">if you subscribe to the monthly plan now!</span>
                  </p>
                  <p className="text-3xl font-bold text-tradie-navy">{service.monthlyFee}</p>
                </div>
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