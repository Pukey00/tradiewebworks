import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { sendSubscriptionUpdateEmail } from "@/api/send-subscription-update-email";
import { SubscriptionPlans } from "./SubscriptionPlans";
import { ConfirmSubscriptionDialog } from "./ConfirmSubscriptionDialog";

interface SubscriptionManagerProps {
  currentPlan?: string;
  websiteId?: string;
  businessName: string;
  onOpenChange: (open: boolean) => void;
}

export const SubscriptionManager = ({ 
  currentPlan,
  websiteId,
  businessName,
  onOpenChange 
}: SubscriptionManagerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

      await sendSubscriptionUpdateEmail({
        businessName,
        previousPlan: currentPlan || null,
        newPlan: null,
        status: "cancelled"
      });

      console.log("Subscription cancelled for website:", websiteId);
      
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

      await sendSubscriptionUpdateEmail({
        businessName,
        previousPlan: currentPlan || null,
        newPlan: selectedPlanId,
        status: "active"
      });

      console.log("Plan updated for website:", websiteId, "New plan:", selectedPlanId);
      
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

  return (
    <>
      <SubscriptionPlans
        currentPlan={currentPlan}
        onSelectPlan={handlePlanSelection}
        onCancelSubscription={handleCancelSubscription}
        isLoading={isLoading}
      />

      <ConfirmSubscriptionDialog
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        onConfirm={handleConfirmPlanChange}
        selectedPlan={selectedPlanId}
        isLoading={isLoading}
      />
    </>
  );
};