import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WizardData } from "../../WebsiteWizard";

interface ContactFieldsProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const ContactFields = ({ data, setData }: ContactFieldsProps) => {
  return (
    <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
      <h3 className="font-bold">Contact Information</h3>
      
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          value={data.contactName || ''}
          onChange={(e) => setData({ ...data, contactName: e.target.value })}
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={data.contactEmail}
          onChange={(e) => setData({ ...data, contactEmail: e.target.value })}
          placeholder="your@email.com"
          required
        />
      </div>
    </div>
  );
};