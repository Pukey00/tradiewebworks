import { Server, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlanCard } from "./PlanCard";

interface SubscriptionPlansProps {
  currentPlan?: string;
  onSelectPlan: (planId: string) => void;
  onCancelSubscription: () => void;
  isLoading: boolean;
}

export const SubscriptionPlans = ({
  currentPlan,
  onSelectPlan,
  onCancelSubscription,
  isLoading
}: SubscriptionPlansProps) => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$30/month",
      features: ["One-page website", "Custom domain setup", "Basic SEO"],
      icon: Server,
      id: "basic"
    },
    {
      title: "Standard Plan",
      price: "$50/month",
      features: [
        "Multi-page website (up to 3 pages)",
        "Custom domain setup",
        "SEO optimization",
        "Contact form integration"
      ],
      icon: Globe,
      id: "standard"
    },
    {
      title: "Premium Plan",
      price: "$75/month",
      features: [
        "Multi-page website (up to 5 pages)",
        "Custom domain setup",
        "Advanced SEO",
        "Blog integration",
        "Ongoing maintenance"
      ],
      icon: Rocket,
      id: "premium"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            currentPlan={currentPlan}
            onSelectPlan={onSelectPlan}
            isLoading={isLoading}
          />
        ))}
      </div>

      <div className="border-t pt-6">
        <Button
          variant="destructive"
          onClick={onCancelSubscription}
          disabled={isLoading}
          className="w-full"
        >
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
};