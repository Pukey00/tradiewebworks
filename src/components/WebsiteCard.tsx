import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface WebsiteCardProps {
  website: any;
  onViewDetails: (website: any) => void;
}

export const WebsiteCard = ({ website, onViewDetails }: WebsiteCardProps) => {
  const websiteUrl = website.websiteUrl || website.url;

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
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Website:</span>
          {websiteUrl ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                  >
                    Visit site <ExternalLink className="h-3 w-3" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <span className="text-sm text-gray-500 italic">Not available yet</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span className="italic">Traffic Analytics - Coming Soon</span>
        </div>
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