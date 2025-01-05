import { Button } from "@/components/ui/button";
import { Loader2, ImagePlus, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface UpdateRequestDialogProps {
  website: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  updateRequest: string;
  onUpdateRequestChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const UpdateRequestDialog = ({
  website,
  open,
  onOpenChange,
  updateRequest,
  onUpdateRequestChange,
  onSubmit,
  isSubmitting,
}: UpdateRequestDialogProps) => {
  const [photos, setPhotos] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + photos.length > 5) {
      alert("You can only upload up to 5 images");
      return;
    }
    setPhotos([...photos, ...files]);
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  if (!website) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Request Website Update
          </DialogTitle>
          <DialogDescription>
            Your request will be reviewed by our team and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Business Name</h4>
            <p className="mt-1 text-lg font-medium">{website.businessName}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Update Details</h4>
            <Textarea
              placeholder="Please describe the updates you'd like to make to your website..."
              value={updateRequest}
              onChange={(e) => onUpdateRequestChange(e.target.value)}
              className="min-h-[150px]"
            />
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Upload Photos</h4>
            <div className="space-y-4">
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-md cursor-pointer hover:bg-gray-50"
              >
                <ImagePlus className="w-5 h-5" />
                Add Photos (Max 5)
              </label>

              <div className="grid grid-cols-2 gap-4">
                {photos.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Update photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removePhoto(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                // Pass photos to parent component through onSubmit
                onSubmit();
              }}
              className="bg-tradie-orange hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};