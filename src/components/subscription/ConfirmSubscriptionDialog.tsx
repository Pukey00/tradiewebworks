import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { plans } from "@/components/WebsiteWizard/steps/PlanSelectionStep/planData";

interface ConfirmSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  selectedPlanId: string | null;
  isLoading: boolean;
}

export const ConfirmSubscriptionDialog = ({
  open,
  onOpenChange,
  onConfirm,
  selectedPlanId,
  isLoading
}: ConfirmSubscriptionDialogProps) => {
  if (!selectedPlanId) return null;

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId);
  
  if (!selectedPlan) return null;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Subscription Change</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to switch to the {selectedPlan.title} ({selectedPlan.monthlyFee})?
            Your subscription will be updated immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-tradie-orange hover:bg-tradie-orange/90"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Confirm Change"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};