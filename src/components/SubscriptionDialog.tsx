import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Server, Globe, Rocket } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { PlanCard } from "./subscription/PlanCard";
import { ConfirmSubscriptionDialog } from "./subscription/ConfirmSubscriptionDialog";

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
      
      // Invalidate and refetch websites query
      await queryClient.invalidateQueries({ queryKey: ['websites'] });
      
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

  const handlePlanSelection = (planId: string) => {
    if (planId === currentPlan) {
      toast({
        description: "You are already subscribed to this plan.",
      });
      return;
    }
    setSelectedPlanId(planId);
    setShowConfirmation(true);
  };

  const handleConfirmPlanChange = async () => {
    if (!websiteId || !selectedPlanId) return;

    setIsLoading(true);
    try {
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        selectedPlan: selectedPlanId,
        status: "active"
      });

      console.log("Plan updated for website:", websiteId, "New plan:", selectedPlanId);
      
      // Invalidate and refetch websites query
      await queryClient.invalidateQueries({ queryKey: ['websites'] });
      
      toast({
        title: "Plan Updated",
        description: "Your subscription has been updated successfully.",
      });
      setShowConfirmation(false);
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

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Manage Subscription
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                {...plan}
                currentPlan={currentPlan}
                onSelectPlan={handlePlanSelection}
                isLoading={isLoading}
              />
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

      <ConfirmSubscriptionDialog
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        onConfirm={handleConfirmPlanChange}
        selectedPlan={selectedPlan || null}
        isLoading={isLoading}
      />
    </>
  );
};