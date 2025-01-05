import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { createCheckoutSession } from "@/utils/stripe";
import { useToast } from "@/hooks/use-toast";

interface PlanCardProps {
  plan: {
    id: string;
    title: string;
    setupPrice: string;
    monthlyFee: string;
    features: string[];
    priceId?: string; // Add this for Stripe integration
  };
  selectedPlan: string;
  onSelect: (planId: string) => void;
}

export const PlanCard = ({ plan, selectedPlan, onSelect }: PlanCardProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!plan.priceId) {
      toast({
        title: "Configuration Error",
        description: "This plan is not properly configured for payments.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    try {
      await createCheckoutSession(plan.priceId);
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card 
      className={`border-2 transition-colors ${
        selectedPlan === plan.id ? 'border-tradie-orange' : 'hover:border-tradie-orange'
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
          onClick={handleSubscribe}
          variant={selectedPlan === plan.id ? "default" : "outline"}
          className="w-full"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Subscribe to ${plan.title}`
          )}
        </Button>
      </CardContent>
    </Card>
  );
};