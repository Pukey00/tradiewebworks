import { WizardData } from "../WebsiteWizard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Globe, Rocket } from "lucide-react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  showPlanSelection: boolean;
}

const plans = [
  {
    title: "Basic Plan",
    price: "$15/month",
    features: ["Hosting only", "No updates or support"],
    icon: Server,
  },
  {
    title: "Standard Plan",
    price: "$30/month",
    features: [
      "Hosting",
      "1 content update/month",
      "Basic SEO optimization",
      "Email support"
    ],
    icon: Globe,
  },
  {
    title: "Premium Plan",
    price: "$50/month",
    features: [
      "Hosting",
      "Unlimited content updates",
      "Advanced SEO optimization",
      "Priority email support"
    ],
    icon: Rocket,
  },
];

export const PreviewStep = ({ data, showPlanSelection }: StepProps) => {
  if (showPlanSelection) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-tradie-navy">Choose Your Plan</h2>
          <p className="text-gray-600">Select the plan that best fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Card key={plan.title} className="border-2 hover:border-tradie-orange transition-colors cursor-pointer">
              <CardContent className="pt-6">
                <plan.icon className="h-12 w-12 mb-4 text-tradie-orange mx-auto" />
                <h3 className="text-xl font-bold text-center mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold text-center text-tradie-navy mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4">Select Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Website Preview</h2>
        <p className="text-gray-600">Here's how your website will look</p>
      </div>

      <div className="border rounded-lg p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-tradie-navy">{data.businessName}</h1>
          <p className="text-xl text-gray-600 mt-2">{data.industry} Services in {data.location}</p>
        </div>

        <div className="grid gap-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="grid grid-cols-2 gap-4">
              {data.services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {data.gallery.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Work</h2>
              <div className="grid grid-cols-3 gap-4">
                {data.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </section>
          )}

          {data.testimonials.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
              <div className="grid gap-4">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="italic">"{testimonial.quote}"</p>
                    <p className="font-medium mt-2">
                      - {testimonial.name}
                      {testimonial.business && `, ${testimonial.business}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Email: {data.contactEmail}</p>
            <p>Service Area: {data.location}</p>
          </section>
        </div>
      </div>
    </div>
  );
};