import { WizardData } from "../../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, X } from "lucide-react";
import { useState } from "react";

interface PhotoUploadProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PhotoUpload = ({ data, setData }: PhotoUploadProps) => {
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

  return (
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
  );
};