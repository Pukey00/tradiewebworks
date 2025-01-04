import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WizardData } from "../WebsiteWizard";

const POPULAR_REGIONS = [
  "Sydney, NSW",
  "Melbourne, VIC",
  "Brisbane, QLD",
  "Perth, WA",
  "Adelaide, SA",
];

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
}

export const BusinessDetailsStep = ({ data, setData, onNext }: StepProps) => {
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData({ ...data, logo: file });
  };

  const isValid = data.businessName && data.phoneNumber && data.email;

  return (
    <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Step 1 of 4 - Business Details</h2>
          <p className="text-gray-600 mt-2">
            Tell us a bit about your business to get started. We'll use this information to create your website.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="e.g., John's Plumbing Services"
              value={data.businessName}
              onChange={(e) => setData({ ...data, businessName: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              placeholder="e.g., 0400 123 456"
              value={data.phoneNumber}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g., john@example.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="serviceArea">Service Areas</Label>
            <Select
              value={data.serviceArea}
              onValueChange={(value) => setData({ ...data, serviceArea: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your service area" />
              </SelectTrigger>
              <SelectContent>
                {POPULAR_REGIONS.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="logo">Business Logo (Optional)</Label>
            <Input
              id="logo"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="cursor-pointer"
            />
          </div>

          <div>
            <Label htmlFor="tagline">Business Tagline (Optional)</Label>
            <Input
              id="tagline"
              placeholder="e.g., Reliable plumbing services you can trust"
              value={data.tagline}
              onChange={(e) => setData({ ...data, tagline: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" disabled>
            Back
          </Button>
          <Button onClick={onNext} disabled={!isValid}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};