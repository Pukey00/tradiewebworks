import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BusinessInfoStep } from "./steps/BusinessInfoStep";
import { IndustryLocationStep } from "./steps/IndustryLocationStep";
import { ServicesStep } from "./steps/ServicesStep";
import { GalleryStep } from "./steps/GalleryStep";
import { TestimonialsStep } from "./steps/TestimonialsStep";
import { ContactStep } from "./steps/ContactStep";
import { ColorSchemeStep } from "./steps/ColorSchemeStep";
import { PreviewStep } from "./steps/PreviewStep";

export type WizardData = {
  businessName: string;
  logo: File | null;
  industry: string;
  location: string;
  services: string[];
  gallery: File[];
  testimonials: Array<{
    name: string;
    business: string;
    quote: string;
  }>;
  contactEmail: string;
  colorScheme: string;
  customColors?: {
    primary: string;
    accent: string;
  };
  specialNotes?: string;
};

const initialData: WizardData = {
  businessName: "",
  logo: null,
  industry: "",
  location: "",
  services: [],
  gallery: [],
  testimonials: [],
  contactEmail: "",
  colorScheme: "default",
  customColors: {
    primary: "#000000",
    accent: "#000000",
  },
  specialNotes: "",
};

export const WebsiteWizard = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [showPlanSelection, setShowPlanSelection] = useState(false);
  const { toast } = useToast();

  const steps = [
    BusinessInfoStep,
    IndustryLocationStep,
    ServicesStep,
    GalleryStep,
    TestimonialsStep,
    ContactStep,
    ColorSchemeStep,
    PreviewStep,
  ];

  const validateStep = () => {
    switch (step) {
      case 0: // BusinessInfoStep
        if (!data.businessName) {
          toast({
            title: "Required Field Missing",
            description: "Please enter your business name",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 1: // IndustryLocationStep
        if (!data.industry || !data.location) {
          toast({
            title: "Required Fields Missing",
            description: "Please enter both industry and service area",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 2: // ServicesStep
        if (data.services.length === 0) {
          toast({
            title: "Required Field Missing",
            description: "Please add at least one service",
            variant: "destructive",
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    // Show preview for 5 seconds then show plan selection
    setTimeout(() => {
      setShowPlanSelection(true);
      toast({
        title: "Choose Your Plan",
        description: "Select a plan to continue with your website creation",
      });
    }, 5000);
  };

  const CurrentStep = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <Progress value={progress} className="mb-4" />
        <CurrentStep 
          data={data} 
          setData={setData} 
          showPlanSelection={showPlanSelection}
        />
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button className="ml-auto" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button className="ml-auto" onClick={handleComplete}>
              Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};