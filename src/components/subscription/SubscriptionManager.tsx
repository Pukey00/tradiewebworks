import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SubscriptionPlans } from "./SubscriptionPlans";
import { ConfirmSubscriptionDialog } from "./ConfirmSubscriptionDialog";
import { sendSubscriptionUpdateEmail } from "@/utils/emailService";

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
  onOpenChange,
}: SubscriptionManagerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePlanSelect = (planId: string) => {
    console.log('Selected plan:', planId);
    setSelectedPlanId(planId);
    setShowConfirmation(true);
  };

  const handleConfirmPlanChange = async () => {
    if (!selectedPlanId || !websiteId) {
      console.error('Missing required data:', { selectedPlanId, websiteId });
      return;
    }

    setIsLoading(true);
    try {
      // Send email notification about subscription update
      await sendSubscriptionUpdateEmail({
        businessName,
        newPlan: selectedPlanId,
        previousPlan: currentPlan || 'No previous plan'
      });

      toast({
        title: "Success",
        description: "Your subscription has been updated successfully.",
      });

      onOpenChange(false);
    } catch (error) {
      console.error('Error updating subscription:', error);
      toast({
        title: "Error",
        description: "Failed to update subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setShowConfirmation(false);
    }
  };

  return (
    <>
      <SubscriptionPlans
        currentPlan={currentPlan}
        onSelectPlan={handlePlanSelect}
        isLoading={isLoading}
      />

      <ConfirmSubscriptionDialog
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        onConfirm={handleConfirmPlanChange}
        selectedPlanId={selectedPlanId}
        isLoading={isLoading}
      />
    </>
  );
};