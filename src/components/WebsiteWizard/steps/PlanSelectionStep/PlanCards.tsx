import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { WizardData } from "../../WebsiteWizard";
import { plans } from "./planData";

interface PlanCardsProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PlanCards = ({ data, setData }: PlanCardsProps) => {
  return (
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
  );
};