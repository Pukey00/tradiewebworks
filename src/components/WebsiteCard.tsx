import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebsiteCardProps {
  website: any;
  onViewDetails: (website: any) => void;
}

export const WebsiteCard = ({ website, onViewDetails }: WebsiteCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg">{website.businessName || "Untitled Website"}</h3>
        <Badge 
          variant={website.status === "pending" ? "pending" : "default"}
          className="uppercase"
        >
          {website.status === "pending" ? "PENDING" : website.status || "PENDING"}
        </Badge>
      </div>
      
      <div className="space-y-2 mb-4">
        {website.industry && (
          <p className="text-sm text-gray-600">Industry: {website.industry}</p>
        )}
        {website.location && (
          <p className="text-sm text-gray-600">Service Area: {website.location}</p>
        )}
        <p className="text-sm text-gray-600">Plan: {website.selectedPlan || "Not selected"}</p>
      </div>

      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
        onClick={() => onViewDetails(website)}
      >
        <ExternalLink className="h-4 w-4" />
        View Details
      </Button>
    </Card>
  );
};