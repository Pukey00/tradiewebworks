import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuilderHeroProps {
  onContactClick: () => void;
}

export const BuilderHero = ({ onContactClick }: BuilderHeroProps) => {
  return (
    <header className="bg-gradient-to-b from-[#1A1F2C] via-[#2A2F3F] to-[#403E43] py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#F97316] p-2 rounded-full">
            <Building className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#F1F1F1]">APEX BUILDERS</h1>
        </div>
        <Button 
          className="bg-[#F97316] hover:bg-orange-600 text-[#1A1F2C]"
          onClick={onContactClick}
        >
          Contact Now
        </Button>
      </div>
    </header>
  );
};