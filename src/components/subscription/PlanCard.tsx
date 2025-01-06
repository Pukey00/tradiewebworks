import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  icon: LucideIcon;
  id: string;
  currentPlan?: string;
  onSelectPlan: (planId: string) => void;
  isLoading: boolean;
}

export const PlanCard = ({
  title,
  price,
  features,
  icon: Icon,
  id,
  currentPlan,
  onSelectPlan,
  isLoading
}: PlanCardProps) => {
  return (
    <Card 
      className={`border-2 ${currentPlan === id ? 'border-tradie-orange' : 'hover:border-tradie-orange'}`}
    >
      <CardHeader>
        <Icon className="h-8 w-8 mb-2 text-tradie-orange" />
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="text-xl font-bold text-tradie-navy">{price}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className="w-full mt-4 bg-tradie-orange hover:bg-tradie-orange/90"
          onClick={() => onSelectPlan(id)}
          disabled={isLoading || currentPlan === id}
        >
          {currentPlan === id ? 'Current Plan' : 'Switch to Plan'}
        </Button>
      </CardContent>
    </Card>
  );
};