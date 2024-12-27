import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WizardData } from "../WebsiteWizard";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const ContactStep = ({ data, setData }: StepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Contact Details</h2>
        <p className="text-gray-600">Where should we send your enquiries?</p>
      </div>

      <div>
        <Label htmlFor="contactEmail">Contact Email</Label>
        <Input
          id="contactEmail"
          type="email"
          value={data.contactEmail}
          onChange={(e) => setData({ ...data, contactEmail: e.target.value })}
          placeholder="your@email.com"
        />
        <p className="text-sm text-gray-500 mt-1">
          All website enquiries will be sent to this email address
        </p>
      </div>
    </div>
  );
};