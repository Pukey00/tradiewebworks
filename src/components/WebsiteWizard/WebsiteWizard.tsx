import { useState } from "react";
import { BusinessDetailsStep } from "./steps/BusinessDetailsStep";
import { ServicesStep } from "./steps/ServicesStep";
import { StyleContentStep } from "./steps/StyleContentStep";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

export type WizardData = {
  // Business Details
  businessName: string;
  phoneNumber: string;
  email: string;
  serviceArea: string;
  logo: File | null;
  tagline: string;
  
  // Industry & Location
  industry: string;
  location: string;
  
  // Services
  services: string[];
  customServices: string[];
  selectedSubServices?: string[];
  
  // Website Style & Content
  websiteStyle?: "modern" | "classic" | "bold";
  generateHeadline?: boolean;
  homePageText?: {
    headline?: string;
    description?: string;
    additionalInfo?: string;
  };
  businessHours?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  
  // Testimonials
  testimonials: Array<{
    name: string;
    business: string;
    quote: string;
  }>;
  
  // Gallery
  gallery: File[];
  
  // Design
  colorScheme: string;
  customColors?: {
    primary: string;
    accent: string;
  };
  
  // Contact
  contactName: string;
  contactEmail: string;
  
  // Plan
  selectedPlan: string;
  
  // Additional
  specialNotes?: string;
};

const initialData: WizardData = {
  businessName: "",
  phoneNumber: "",
  email: "",
  serviceArea: "",
  logo: null,
  tagline: "",
  industry: "",
  location: "",
  services: [],
  customServices: [],
  selectedSubServices: [],
  generateHeadline: false,
  testimonials: [],
  gallery: [],
  colorScheme: "default",
  contactName: "",
  contactEmail: "",
  selectedPlan: "",
  websiteStyle: "modern",
  socialMedia: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export const WebsiteWizard = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [data, setData] = useState<WizardData>(initialData);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-8">
        <div className="space-y-6">
          <Progress value={(step / totalSteps) * 100} className="mb-6" />
          {step === 1 && (
            <BusinessDetailsStep 
              data={data} 
              setData={setData}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <ServicesStep
              data={data}
              setData={setData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <StyleContentStep
              data={data}
              setData={setData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};