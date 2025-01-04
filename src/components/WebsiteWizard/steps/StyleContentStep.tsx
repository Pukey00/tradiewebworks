import { WizardData } from "../WebsiteWizard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StyleSelector } from "./components/StyleSelector";
import { HomePageContent } from "./components/HomePageContent";
import { SocialMediaLinks } from "./components/SocialMediaLinks";
import { PhotoUpload } from "./components/PhotoUpload";
import { WebsiteStyle, WebsiteStyleOption } from "./types/websiteTypes";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;
}

const websiteStyles: WebsiteStyleOption[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and minimalist design with contemporary elements"
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional and timeless design approach"
  },
  {
    id: "bold",
    name: "Bold",
    description: "Strong visual impact with dynamic elements"
  }
];

export const StyleContentStep = ({ data, setData, onNext, onBack }: StepProps) => {
  const validateUrls = () => {
    const urlPattern = /^https?:\/\/.+/;
    const socialMedia = data.socialMedia || {};
    
    if (socialMedia.facebook && !urlPattern.test(socialMedia.facebook)) {
      return false;
    }
    if (socialMedia.instagram && !urlPattern.test(socialMedia.instagram)) {
      return false;
    }
    if (socialMedia.linkedin && !urlPattern.test(socialMedia.linkedin)) {
      return false;
    }
    
    return true;
  };

  const handleNext = () => {
    if (!validateUrls()) {
      console.error("Invalid social media URLs");
      return;
    }
    onNext();
  };

  const handleStyleChange = (style: WebsiteStyle) => {
    setData({ ...data, websiteStyle: style });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Step 3 of 4 - Website Style & Content</h2>
        <p className="text-gray-600">Choose a style for your website and provide any additional content you want to showcase.</p>
      </div>

      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6">
          <StyleSelector 
            value={data.websiteStyle || "modern"}
            onChange={handleStyleChange}
            websiteStyles={websiteStyles}
          />

          <HomePageContent data={data} setData={setData} />

          <div>
            <Label htmlFor="businessHours">Business Hours</Label>
            <Input
              id="businessHours"
              value={data.businessHours || ""}
              onChange={(e) => setData({ ...data, businessHours: e.target.value })}
              placeholder="e.g., Monday to Friday, 9 AM to 5 PM"
            />
          </div>

          <SocialMediaLinks data={data} setData={setData} />
          
          <PhotoUpload data={data} setData={setData} />
        </div>
      </ScrollArea>

      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};