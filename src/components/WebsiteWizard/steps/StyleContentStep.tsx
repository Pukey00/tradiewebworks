import { WizardData } from "../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, X } from "lucide-react";
import { useState } from "react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;
}

const websiteStyles = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and sleek design",
    colors: {
      primary: "#8E9196",
      accent: "#D6BCFA"
    }
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional and straightforward",
    colors: {
      primary: "#F2FCE2",
      accent: "#D3E4FD"
    }
  },
  {
    id: "bold",
    name: "Bold",
    description: "Strong colors and fonts",
    colors: {
      primary: "#8B5CF6",
      accent: "#F97316"
    }
  }
];

export const StyleContentStep = ({ data, setData, onNext, onBack }: StepProps) => {
  const [uploadError, setUploadError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + data.gallery.length > 5) {
      setUploadError("You can only upload up to 5 images");
      return;
    }
    setUploadError("");
    setData({ ...data, gallery: [...data.gallery, ...files] });
  };

  const removeImage = (index: number) => {
    const newGallery = [...data.gallery];
    newGallery.splice(index, 1);
    setData({ ...data, gallery: newGallery });
  };

  const validateUrls = () => {
    const urlPattern = /^https?:\/\/.+/;
    const socialMedia = data.socialMedia || {};
    
    if (socialMedia.facebook && !urlPattern.test(socialMedia.facebook)) {
      return false;
    }
    if (socialMedia.instagram && !urlPattern.test(socialMedia.instagram)) {
      return false;
    }
    if (socialMedia.linkedin && !urlPattern.test(socialMedia.linkedin)) {
      return false;
    }
    
    return true;
  };

  const handleNext = () => {
    if (!validateUrls()) {
      setUploadError("Please enter valid social media URLs (they should start with http:// or https://)");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Step 3 of 4 - Website Style & Content</h2>
        <p className="text-gray-600">Choose a style for your website and provide any additional content you want to showcase.</p>
      </div>

      <div className="space-y-6">
        <div>
          <Label>Website Style</Label>
          <RadioGroup
            value={data.websiteStyle || "modern"}
            onValueChange={(value) => setData({ ...data, websiteStyle: value })}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
          >
            {websiteStyles.map((style) => (
              <div key={style.id} className="relative">
                <RadioGroupItem
                  value={style.id}
                  id={style.id}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={style.id}
                  className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer hover:border-tradie-orange peer-checked:border-tradie-orange peer-checked:bg-orange-50"
                >
                  <div className="flex gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: style.colors.primary }}
                    />
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: style.colors.accent }}
                    />
                  </div>
                  <span className="font-medium">{style.name}</span>
                  <span className="text-sm text-gray-500">{style.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="homePageText">Home Page Text</Label>
          <Textarea
            id="homePageText"
            value={data.homePageText || ""}
            onChange={(e) => setData({ ...data, homePageText: e.target.value })}
            placeholder="Tell your customers about your business, your experience, and what makes you stand out."
            className="min-h-[120px]"
          />
        </div>

        <div>
          <Label htmlFor="businessHours">Business Hours</Label>
          <Input
            id="businessHours"
            value={data.businessHours || ""}
            onChange={(e) => setData({ ...data, businessHours: e.target.value })}
            placeholder="e.g., Monday to Friday, 9 AM to 5 PM"
          />
        </div>

        <div className="space-y-4">
          <Label>Social Media Links (Optional)</Label>
          <div className="space-y-2">
            <Input
              placeholder="Facebook URL"
              value={data.socialMedia?.facebook || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  socialMedia: { ...data.socialMedia, facebook: e.target.value },
                })
              }
            />
            <Input
              placeholder="Instagram URL"
              value={data.socialMedia?.instagram || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  socialMedia: { ...data.socialMedia, instagram: e.target.value },
                })
              }
            />
            <Input
              placeholder="LinkedIn URL"
              value={data.socialMedia?.linkedin || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  socialMedia: { ...data.socialMedia, linkedin: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div>
          <Label>Photo Upload (Optional)</Label>
          <div className="mt-2">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="photo-upload"
            />
            <Label
              htmlFor="photo-upload"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-md cursor-pointer hover:bg-gray-50"
            >
              <ImagePlus className="w-5 h-5" />
              Upload Photos
            </Label>
            {uploadError && (
              <p className="mt-2 text-sm text-red-500">{uploadError}</p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {data.gallery.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onBack}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};