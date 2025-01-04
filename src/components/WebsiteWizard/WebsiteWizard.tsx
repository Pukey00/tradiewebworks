import { useState } from "react";
import { BusinessDetailsStep } from "./steps/BusinessDetailsStep";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

export type WizardData = {
  businessName: string;
  phoneNumber: string;
  email: string;
  serviceArea: string;
  logo: File | null;
  tagline: string;
};

const initialData: WizardData = {
  businessName: "",
  phoneNumber: "",
  email: "",
  serviceArea: "",
  logo: null,
  tagline: "",
};

export const WebsiteWizard = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [data, setData] = useState<WizardData>(initialData);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <div className="py-6">
          <Progress value={(step / totalSteps) * 100} className="mb-6" />
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