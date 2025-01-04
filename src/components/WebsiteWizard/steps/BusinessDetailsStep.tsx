import { WizardData } from "../WebsiteWizard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;  // Added this line to fix the TypeScript error
}

export const BusinessDetailsStep = ({ data, setData, onNext, onBack }: StepProps) => {
  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const validateForm = () => {
    return data.businessName && data.email;
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[600px]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Step 1 of 4 - Business Details</h2>
        <p className="text-gray-600">Let's start with some basic information about your business.</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-6 pr-4">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              value={data.businessName}
              onChange={(e) => setData({ ...data, businessName: e.target.value })}
              placeholder="Enter your business name"
              required
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
              placeholder="Enter your phone number"
              type="tel"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>

          <div>
            <Label htmlFor="serviceArea">Service Area</Label>
            <Input
              id="serviceArea"
              value={data.serviceArea}
              onChange={(e) => setData({ ...data, serviceArea: e.target.value })}
              placeholder="e.g., Sydney Metro Area"
            />
          </div>

          <div>
            <Label htmlFor="tagline">Business Tagline</Label>
            <Input
              id="tagline"
              value={data.tagline}
              onChange={(e) => setData({ ...data, tagline: e.target.value })}
              placeholder="A short, catchy description of your business"
            />
          </div>
        </div>
      </ScrollArea>

      <div className="flex justify-between pt-6 mt-6 border-t">
        <Button
          variant="outline"
          onClick={onBack}
          disabled={true}  // Disabled since this is the first step
        >
          Back
        </Button>
        <Button 
          onClick={handleNext}
          disabled={!validateForm()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};