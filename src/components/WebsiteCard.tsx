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
import { cn } from "@/lib/utils";

interface WebsiteCardProps {
  website: any;
  onViewDetails: (website: any) => void;
}

const getPlanBadgeColor = (planType: string) => {
  const colors = {
    basic: "bg-[#9b87f5] hover:bg-[#9b87f5]/90",
    standard: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
    premium: "bg-[#D946EF] hover:bg-[#D946EF]/90"
  };
  return colors[planType.toLowerCase() as keyof typeof colors] || colors.basic;
};

export const WebsiteCard = ({ website, onViewDetails }: WebsiteCardProps) => {
  const websiteUrl = website.websiteUrl || website.url;
  const planType = website.selectedPlan || "basic";
  const planTypeCapitalized = planType.charAt(0).toUpperCase() + planType.slice(1);

  return (
    <Card className="p-6 bg-[#F1F0FB]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg text-[#1A1F2C]">{website.businessName || "Untitled Website"}</h3>
        <Badge 
          variant={website.status === "pending" ? "pending" : "default"}
          className="uppercase"
        >
          {website.status === "pending" ? "PENDING" : website.status || "PENDING"}
        </Badge>
      </div>
      
      <div className="space-y-2 mb-4">
        {website.industry && (
          <p className="text-sm text-[#403E43]">Industry: {website.industry}</p>
        )}
        {website.location && (
          <p className="text-sm text-[#403E43]">Service Area: {website.location}</p>
        )}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#403E43]">Plan:</span>
          <Badge 
            className={cn(
              "px-3 py-1 text-white font-semibold",
              getPlanBadgeColor(planType)
            )}
          >
            {planTypeCapitalized}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#403E43]">Website:</span>
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
        <div className="flex items-center gap-2 text-sm text-[#403E43]">
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