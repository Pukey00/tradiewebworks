import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UpdateRequestDialogProps {
  website: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  updateRequest: string;
  onUpdateRequestChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const UpdateRequestDialog = ({
  website,
  open,
  onOpenChange,
  updateRequest,
  onUpdateRequestChange,
  onSubmit,
  isSubmitting,
}: UpdateRequestDialogProps) => {
  if (!website) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Request Website Update
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Business Name</h4>
            <p className="mt-1 text-lg font-medium">{website.businessName}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Update Details</h4>
            <Textarea
              placeholder="Please describe the updates you'd like to make to your website..."
              value={updateRequest}
              onChange={(e) => onUpdateRequestChange(e.target.value)}
              className="min-h-[150px]"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              onClick={onSubmit}
              className="bg-tradie-orange hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};