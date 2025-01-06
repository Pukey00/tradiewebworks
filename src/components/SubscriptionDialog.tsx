import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Globe, Rocket } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan?: string;
  websiteId?: string;
}

export const SubscriptionDialog = ({ 
  open, 
  onOpenChange, 
  currentPlan,
  websiteId 
}: SubscriptionDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

  const handleCancelSubscription = async () => {
    if (!websiteId) {
      toast({
        title: "Error",
        description: "Website ID is missing",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        selectedPlan: null,
        status: "cancelled"
      });

      console.log("Subscription cancelled for website:", websiteId);
      
      toast({
        title: "Subscription Cancelled",
        description: "Your subscription has been cancelled successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePlan = async (planId: string) => {
    if (!websiteId) {
      toast({
        title: "Error",
        description: "Website ID is missing",
        variant: "destructive",
      });
      return;
    }

    if (planId === currentPlan) {
      toast({
        description: "You are already subscribed to this plan.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        selectedPlan: planId,
        status: "active"
      });

      console.log("Plan updated for website:", websiteId, "New plan:", planId);
      
      toast({
        title: "Plan Updated",
        description: "Your subscription has been updated successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error changing plan:", error);
      toast({
        title: "Error",
        description: "Failed to update plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Manage Subscription
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border-2 ${currentPlan === plan.id ? 'border-tradie-orange' : 'hover:border-tradie-orange'}`}
            >
              <CardHeader>
                <plan.icon className="h-8 w-8 mb-2 text-tradie-orange" />
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <div className="text-xl font-bold text-tradie-navy">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-4 bg-tradie-orange hover:bg-tradie-orange/90"
                  onClick={() => handleChangePlan(plan.id)}
                  disabled={isLoading || currentPlan === plan.id}
                >
                  {currentPlan === plan.id ? 'Current Plan' : 'Switch to Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 border-t pt-6">
          <Button
            variant="destructive"
            onClick={handleCancelSubscription}
            disabled={isLoading}
            className="w-full"
          >
            Cancel Subscription
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};