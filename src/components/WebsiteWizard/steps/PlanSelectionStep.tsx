import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WizardData } from "../WebsiteWizard";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { POST } from "@/api/submit-website-request";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;
  onOpenChange: (open: boolean) => void;
}

export const PlanSelectionStep = ({ data, setData, onBack, onOpenChange }: StepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Save to Firestore
      const websiteData = {
        ...data,
        userId: user.uid,
        status: "pending",
        createdAt: new Date(),
        userEmail: user.email,
      };

      await addDoc(collection(db, "websites"), websiteData);

      // Send email notification
      await POST(new Request("", { 
        method: "POST",
        body: JSON.stringify(data)
      }));

      toast({
        title: "Success!",
        description: "Your website request has been submitted successfully.",
      });

      // Close the wizard and navigate back to dashboard
      onOpenChange(false);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error submitting website request:", error);
      toast({
        title: "Error",
        description: "Failed to submit your website request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const plans = [
    {
      id: "basic",
      title: "Basic Plan",
      setupPrice: "$200",
      monthlyFee: "$30/month",
      features: [
        "One-page website",
        "Custom domain setup",
        "Basic SEO",
      ],
    },
    {
      id: "standard",
      title: "Standard Plan",
      setupPrice: "$300",
      monthlyFee: "$50/month",
      features: [
        "Multi-page website (up to 3 pages)",
        "Custom domain setup",
        "SEO optimization",
        "Contact form integration",
      ],
    },
    {
      id: "premium",
      title: "Premium Plan",
      setupPrice: "$500",
      monthlyFee: "$75/month",
      features: [
        "Multi-page website (up to 5 pages)",
        "Custom domain setup",
        "Advanced SEO",
        "Blog integration",
        "Ongoing maintenance",
      ],
    },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[600px]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Step 4 of 4 - Select Your Plan</h2>
        <p className="text-gray-600">Choose the plan that best fits your business needs. You can always upgrade or change your plan later.</p>
        <p className="mt-2 text-tradie-orange font-semibold">
          Limited Time Offer - Free Setup (Ends 01/05/2025)
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-8 pr-4">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`border-2 transition-colors ${
                  data.selectedPlan === plan.id ? 'border-tradie-orange' : 'hover:border-tradie-orange'
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-lg font-semibold">{plan.setupPrice} setup</p>
                    <div className="bg-tradie-orange/10 p-3 rounded-lg">
                      <p>
                        <span className="text-tradie-orange font-bold text-lg">FREE SETUP</span>
                        <span className="block text-gray-500">if you subscribe to the monthly plan now!</span>
                        <span className="text-xs text-gray-500 mt-1 block">Offer ends 01/05/2025</span>
                      </p>
                    </div>
                    <p className="text-xl font-bold text-tradie-navy">{plan.monthlyFee}</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setData({ ...data, selectedPlan: plan.id })}
                    variant={data.selectedPlan === plan.id ? "default" : "outline"}
                    className="w-full"
                  >
                    Select {plan.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Want to See How Your Website Will Look?</h3>
            <p className="text-gray-600 mb-4">
              Get a free demo of your website based on the details you've entered so far. No commitment required!
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full md:w-auto"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Your Website...
                </>
              ) : (
                "Request Free Demo"
              )}
            </Button>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!data.selectedPlan || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};