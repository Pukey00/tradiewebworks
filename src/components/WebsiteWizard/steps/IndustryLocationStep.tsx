import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WizardData } from "../WebsiteWizard";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

const industries = [
  "Plumbing",
  "Electrical",
  "Building & Construction",
  "Landscaping",
  "Carpentry",
  "Painting",
  "Roofing",
  "HVAC",
];

const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1">
    {children}
    <span className="text-red-500">*</span>
  </div>
);

export const IndustryLocationStep = ({ data, setData }: StepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Industry & Location</h2>
        <p className="text-gray-600">Tell us about your trade and service area</p>
      </div>

      <div className="space-y-4">
        <div>
          <RequiredLabel>
            <Label htmlFor="industry">Industry/Trade</Label>
          </RequiredLabel>
          <Select
            value={data.industry}
            onValueChange={(value) => setData({ ...data, industry: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <RequiredLabel>
            <Label htmlFor="location">Service Area</Label>
          </RequiredLabel>
          <Input
            id="location"
            value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
            placeholder="e.g., Sydney Metro Area"
            required
          />
        </div>
      </div>
    </div>
  );
};