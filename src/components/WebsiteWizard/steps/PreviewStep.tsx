import { WizardData } from "../WebsiteWizard";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PreviewStep = ({ data, setData }: StepProps) => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePreview = () => {
    switch(data.industry.toLowerCase()) {
      case "plumbing":
        navigate("/plumbing-pro");
        break;
      case "electrical":
        navigate("/electric-solutions");
        break;
      case "building":
        navigate("/builders-portfolio");
        break;
      case "landscaping":
        navigate("/landscape-design");
        break;
      default:
        navigate("/plumbing-pro");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Preview & Plans</h2>
        <p className="text-gray-600">Review your website configuration</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Business Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Business Name:</span>
                <span>{data.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Logo:</span>
                <span>{data.logo ? "✓ Uploaded" : "Not uploaded"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Industry:</span>
                <span>{data.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Service Area:</span>
                <span>{data.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Services ({data.services.length})</h3>
            <ul className="list-disc pl-5">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Additional Information</h3>
            <p>{data.gallery.length} images uploaded</p>
            <p>{data.testimonials.length} testimonials added</p>
            <p>Contact Email: {data.contactEmail || "Not provided"}</p>
            <p>Color Scheme: {data.colorScheme}</p>
            <p>Selected Plan: {data.selectedPlan.charAt(0).toUpperCase() + data.selectedPlan.slice(1)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Label htmlFor="specialNotes">Special Notes</Label>
            <Textarea
              id="specialNotes"
              placeholder="Add any special requirements or notes for your website..."
              value={data.specialNotes || ""}
              onChange={(e) => setData({ ...data, specialNotes: e.target.value })}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Button 
          onClick={handlePreview}
          className="w-full bg-tradie-orange hover:bg-orange-600 mb-6"
        >
          Preview Website
        </Button>
      </div>
    </div>
  );
};
