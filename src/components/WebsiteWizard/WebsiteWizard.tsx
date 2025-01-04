import { useState } from "react";
import { BusinessDetailsStep } from "./steps/BusinessDetailsStep";
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
  testimonials: [],
  gallery: [],
  colorScheme: "default",
  contactName: "",
  contactEmail: "",
  selectedPlan: "",
};

export const WebsiteWizard = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [data, setData] = useState<WizardData>(initialData);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-6">
        <div className="space-y-4">
          <Progress value={(step / totalSteps) * 100} className="mb-4" />
          <BusinessDetailsStep 
            data={data} 
            setData={setData}
            onNext={() => setStep(step + 1)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};