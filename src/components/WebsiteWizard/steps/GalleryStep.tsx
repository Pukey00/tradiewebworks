import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { WizardData } from "../WebsiteWizard";
import { X } from "lucide-react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const GalleryStep = ({ data, setData }: StepProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setData({ ...data, gallery: [...data.gallery, ...files] });
  };

  const removeImage = (index: number) => {
    const newGallery = [...data.gallery];
    newGallery.splice(index, 1);
    setData({ ...data, gallery: newGallery });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Job Gallery</h2>
        <p className="text-gray-600">Upload photos of your best work (optional)</p>
      </div>

      <div className="space-y-4">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        <p className="text-sm text-gray-500">
          You can upload multiple images at once
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </div>
  );
};