import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubscriptionManager } from "./subscription/SubscriptionManager";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan?: string;
  websiteId?: string;
  businessName: string;
}

export const SubscriptionDialog = ({ 
  open, 
  onOpenChange, 
  currentPlan,
  websiteId,
  businessName
}: SubscriptionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Manage Subscription
          </DialogTitle>
        </DialogHeader>
        
        <SubscriptionManager
          currentPlan={currentPlan}
          websiteId={websiteId}
          businessName={businessName}
          onOpenChange={onOpenChange}
        />
      </DialogContent>
    </Dialog>
  );
};