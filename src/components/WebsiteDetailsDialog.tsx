import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WebsiteDetailsDialogProps {
  website: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestUpdate: () => void;
}

export const WebsiteDetailsDialog = ({ 
  website, 
  open, 
  onOpenChange,
  onRequestUpdate 
}: WebsiteDetailsDialogProps) => {
  if (!website) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Website Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{website.businessName}</h3>
            <Badge variant={website.status === "pending" ? "pending" : "default"}>
              {website.status === "pending" ? "PENDING" : website.status || "PENDING"}
            </Badge>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Business Information</h4>
              <div className="mt-1 space-y-2">
                <p className="text-sm">Industry: {website.industry || "Not specified"}</p>
                <p className="text-sm">Service Area: {website.location || "Not specified"}</p>
                <p className="text-sm">Email: {website.email || "Not specified"}</p>
                <p className="text-sm">Phone: {website.phoneNumber || "Not specified"}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500">Website Plan</h4>
              <p className="mt-1 text-sm">{website.selectedPlan || "Not selected"}</p>
            </div>

            {website.tagline && (
              <div>
                <h4 className="text-sm font-medium text-gray-500">Business Tagline</h4>
                <p className="mt-1 text-sm">{website.tagline}</p>
              </div>
            )}

            <div className="pt-4">
              <Button 
                onClick={onRequestUpdate}
                className="w-full bg-tradie-orange hover:bg-orange-600"
              >
                Request Website Update
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};