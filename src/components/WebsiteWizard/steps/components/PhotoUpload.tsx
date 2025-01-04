import { WizardData } from "../../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, X, Upload } from "lucide-react";
import { useState } from "react";

interface PhotoUploadProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PhotoUpload = ({ data, setData }: PhotoUploadProps) => {
  const [uploadError, setUploadError] = useState<string>("");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData({ ...data, logo: file });
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + data.gallery.length > 10) {
      setUploadError("You can only upload up to 10 images in the gallery");
      return;
    }
    setUploadError("");
    setData({ ...data, gallery: [...data.gallery, ...files] });
  };

  const removeGalleryImage = (index: number) => {
    const newGallery = [...data.gallery];
    newGallery.splice(index, 1);
    setData({ ...data, gallery: newGallery });
  };

  const removeLogo = () => {
    setData({ ...data, logo: null });
  };

  return (
    <div className="space-y-8">
      {/* Logo Upload Section */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Business Logo</Label>
        <p className="text-sm text-gray-500">Upload your business logo (optional)</p>
        <div className="mt-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
            id="logo-upload"
          />
          <Label
            htmlFor="logo-upload"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-md cursor-pointer hover:bg-gray-50"
          >
            <Upload className="w-5 h-5" />
            Upload Logo
          </Label>
        </div>
        
        {data.logo && (
          <div className="relative inline-block">
            <img
              src={URL.createObjectURL(data.logo)}
              alt="Business logo"
              className="h-24 object-contain rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2"
              onClick={removeLogo}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Gallery Upload Section */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Job Gallery</Label>
        <p className="text-sm text-gray-500">Upload photos of your best work (up to 10 images)</p>
        <div className="mt-2">
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
            className="hidden"
            id="gallery-upload"
          />
          <Label
            htmlFor="gallery-upload"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-md cursor-pointer hover:bg-gray-50"
          >
            <ImagePlus className="w-5 h-5" />
            Add Gallery Photos
          </Label>
        </div>
        
        {uploadError && (
          <p className="text-sm text-red-500">{uploadError}</p>
        )}

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
                onClick={() => removeGalleryImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};