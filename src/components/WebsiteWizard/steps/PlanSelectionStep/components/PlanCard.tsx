import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Plan } from "../types";

interface PlanCardProps {
  plan: Plan;
  selectedPlan: string;
  onSelect: (planId: string) => void;
}

const getPlanBadgeColor = (planId: string) => {
  const colors = {
    basic: "bg-[#9b87f5] hover:bg-[#9b87f5]/90",
    standard: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
    premium: "bg-[#D946EF] hover:bg-[#D946EF]/90"
  };
  return colors[planId as keyof typeof colors] || colors.basic;
};

export const PlanCard = ({ plan, selectedPlan, onSelect }: PlanCardProps) => {
  const planTypeCapitalized = plan.title.charAt(0).toUpperCase() + plan.title.slice(1);
  const badgeColor = getPlanBadgeColor(plan.id);

  return (
    <Card 
      className={cn(
        "border-2 transition-colors bg-[#F1F0FB]",
        selectedPlan === plan.id ? 'border-[#9b87f5]' : 'hover:border-[#9b87f5]/60'
      )}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Badge 
            className={cn(
              "px-3 py-1 text-white font-semibold",
              badgeColor
            )}
          >
            {planTypeCapitalized}
          </Badge>
        </div>
        <div className="space-y-2 mb-4">
          <p className="text-lg font-semibold text-[#1A1F2C]">{plan.setupPrice} setup</p>
          <div className="bg-tradie-orange/10 p-3 rounded-lg">
            <p>
              <span className="text-tradie-orange font-bold text-lg">FREE SETUP</span>
              <span className="block text-[#403E43]">if you subscribe to the monthly plan now!</span>
              <span className="text-xs text-[#403E43] mt-1 block">Offer ends 01/05/2025</span>
            </p>
          </div>
          <p className="text-xl font-bold text-[#1A1F2C]">{plan.monthlyFee}</p>
        </div>
        <div className="space-y-2 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-[#403E43]">{feature}</span>
            </div>
          ))}
        </div>
        <Button
          onClick={() => onSelect(plan.id)}
          variant={selectedPlan === plan.id ? "default" : "outline"}
          className={cn(
            "w-full",
            selectedPlan === plan.id ? badgeColor : "hover:" + badgeColor
          )}
        >
          Select {planTypeCapitalized}
        </Button>
      </CardContent>
    </Card>
  );
};