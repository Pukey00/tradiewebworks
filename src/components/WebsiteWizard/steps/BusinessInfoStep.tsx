import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WizardData } from "../WebsiteWizard";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const BusinessInfoStep = ({ data, setData }: StepProps) => {
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData({ ...data, logo: file });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Business Details</h2>
        <p className="text-gray-600">Let's start with your business name and logo</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            value={data.businessName}
            onChange={(e) => setData({ ...data, businessName: e.target.value })}
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <Label htmlFor="logo">Business Logo</Label>
          <Input
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload your business logo (optional)
          </p>
        </div>
      </div>
    </div>
  );
};