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

interface ConfirmSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  selectedPlan: {
    title: string;
    price: string;
  } | null;
  isLoading: boolean;
}

export const ConfirmSubscriptionDialog = ({
  open,
  onOpenChange,
  onConfirm,
  selectedPlan,
  isLoading
}: ConfirmSubscriptionDialogProps) => {
  if (!selectedPlan) return null;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Subscription Change</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to switch to the {selectedPlan.title} ({selectedPlan.price})?
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
            {isLoading ? "Updating..." : "Confirm Change"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};