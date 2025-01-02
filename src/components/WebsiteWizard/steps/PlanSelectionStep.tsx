import { WizardData } from "../WebsiteWizard";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PlanSelectionStep = ({ data, setData }: StepProps) => {
  const plans = [
    {
      id: "basic",
      title: "Basic Plan",
      price: "$15/month",
      features: ["Hosting only", "No updates or support"],
    },
    {
      id: "standard",
      title: "Standard Plan",
      price: "$30/month",
      features: [
        "Hosting",
        "1 content update/month",
        "Basic SEO optimization",
        "Email support"
      ],
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: "$50/month",
      features: [
        "Hosting",
        "Unlimited content updates",
        "Advanced SEO optimization",
        "Priority email support"
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Select Your Plan</h2>
        <p className="text-gray-600">Choose the plan that best fits your needs</p>
      </div>

      <RadioGroup
        value={data.selectedPlan}
        onValueChange={(value) => setData({ ...data, selectedPlan: value })}
        className="grid md:grid-cols-3 gap-8"
      >
        {plans.map((plan) => (
          <div key={plan.id}>
            <RadioGroupItem
              value={plan.id}
              id={plan.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={plan.id}
              className="block cursor-pointer"
            >
              <Card className={`border-2 h-full transition-colors ${
                data.selectedPlan === plan.id ? 'border-tradie-orange' : 'hover:border-tradie-orange peer-focus:border-tradie-orange'
              }`}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-2xl font-bold text-tradie-navy mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};