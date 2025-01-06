import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SubscriptionPlans } from "./SubscriptionPlans";
import { ConfirmSubscriptionDialog } from "./ConfirmSubscriptionDialog";
import { sendSubscriptionUpdateEmail } from "@/api/send-subscription-update-email";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

  const handleCancelSubscription = async () => {
    if (!websiteId) {
      console.error('Missing websiteId');
      return;
    }

    setIsLoading(true);
    try {
      // Update website status in Firestore
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        status: "pending cancellation"
      });

      // Send email notification about subscription cancellation
      await sendSubscriptionUpdateEmail({
        businessName,
        previousPlan: currentPlan || null,
        newPlan: null,
        status: 'cancelled'
      });

      toast({
        title: "Subscription Cancelled",
        description: "Your cancellation request will be processed within 24 hours. No further charges will be made to your account.",
      });

      onOpenChange(false);
    } catch (error) {
      console.error('Error cancelling subscription:', error);
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setShowConfirmation(false);
    }
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
        previousPlan: currentPlan || null,
        status: 'updated'
      });

      toast({
        title: "Success",
        description: "Your subscription change request will be processed within 24 hours. Your billing will be adjusted accordingly.",
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
        onCancelSubscription={handleCancelSubscription}
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