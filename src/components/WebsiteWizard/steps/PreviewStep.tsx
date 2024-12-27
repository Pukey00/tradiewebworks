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
    // For now, we'll navigate to a specific example based on industry
    // In a real implementation, this would generate a preview with the actual data
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
        navigate("/plumbing-pro"); // Default preview
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
            <h3 className="font-semibold mb-2">Business Information</h3>
            <p>Business Name: {data.businessName}</p>
            <p>Industry: {data.industry}</p>
            <p>Location: {data.location}</p>
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
            <h3 className="font-semibold mb-2">Gallery & Testimonials</h3>
            <p>{data.gallery.length} images uploaded</p>
            <p>{data.testimonials.length} testimonials added</p>
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

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
              <p className="text-3xl font-bold mb-4">$15/month</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Hosting only
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  No updates or support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-tradie-orange">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
              <p className="text-3xl font-bold mb-4">$30/month</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Hosting
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  1 content update/month
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Basic SEO optimization
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
              <p className="text-3xl font-bold mb-4">$50/month</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Hosting
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Unlimited content updates
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Advanced SEO optimization
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Priority email support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};