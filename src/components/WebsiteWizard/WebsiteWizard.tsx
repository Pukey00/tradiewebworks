import { useState } from "react";
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
};

export const WebsiteWizard = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
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

  const CurrentStep = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Final data:", data);
    toast({
      title: "Website configuration saved!",
      description: "Your website will be created with your specifications.",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <Progress value={progress} className="mb-4" />
        <CurrentStep data={data} setData={setData} />
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
            <Button className="ml-auto" onClick={handleSubmit}>
              Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};