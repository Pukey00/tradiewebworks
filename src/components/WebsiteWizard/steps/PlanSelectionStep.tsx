import { WizardData } from "../WebsiteWizard";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PlanSelectionStep = ({ data, setData }: StepProps) => {
  const [showSummary, setShowSummary] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-website-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "We'll review your information and send you a preview soon!",
        });
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (showSummary) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-tradie-navy">Website Request Summary</h2>
          <p className="text-gray-600">Please review your information before submission</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold">Business Information</h3>
            <p>Business Name: {data.businessName}</p>
            <p>Industry: {data.industry}</p>
            <p>Location: {data.location}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold">Services</h3>
            <ul className="list-disc list-inside">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {data.testimonials.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold">Testimonials</h3>
              {data.testimonials.map((testimonial, index) => (
                <div key={index} className="mt-2">
                  <p>"{testimonial.quote}"</p>
                  <p className="text-sm">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold">Contact Information</h3>
            <p>Email: {data.contactEmail}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold">Selected Plan</h3>
            <p>{plans.find(p => p.id === data.selectedPlan)?.title}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setShowSummary(false)} className="w-full">
            Back
          </Button>
          <Button onClick={handleSubmit} className="w-full">
            Submit Request
          </Button>
        </div>
      </div>
    );
  }

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

      <Button 
        onClick={() => setShowSummary(true)} 
        className="w-full mt-4"
      >
        Request Built Preview
      </Button>
    </div>
  );
};