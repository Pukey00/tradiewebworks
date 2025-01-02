import { WizardData } from "../WebsiteWizard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PreviewStep = ({ data }: StepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Website Information Summary</h2>
        <p className="text-gray-600">Please review your information before submission</p>
      </div>

      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="font-bold mb-2">Business Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Business Name:</span> {data.businessName}</p>
              <p><span className="font-medium">Industry:</span> {data.industry}</p>
              <p><span className="font-medium">Location:</span> {data.location}</p>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">Services</h3>
            <ul className="list-disc list-inside space-y-1">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </Card>

          {data.gallery.length > 0 && (
            <Card className="p-4">
              <h3 className="font-bold mb-2">Gallery Images</h3>
              <div className="grid grid-cols-3 gap-2">
                {data.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-24 object-cover rounded"
                  />
                ))}
              </div>
            </Card>
          )}

          {data.testimonials.length > 0 && (
            <Card className="p-4">
              <h3 className="font-bold mb-2">Testimonials</h3>
              <div className="space-y-3">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <p className="italic">"{testimonial.quote}"</p>
                    <p className="text-sm font-medium mt-1">
                      - {testimonial.name}
                      {testimonial.business && `, ${testimonial.business}`}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          <Card className="p-4">
            <h3 className="font-bold mb-2">Design Preferences</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Color Scheme:</span> {data.colorScheme}</p>
              {data.colorScheme === 'custom' && data.customColors && (
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span>Primary:</span>
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: data.customColors.primary }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Accent:</span>
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: data.customColors.accent }}
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">Contact Information</h3>
            <p><span className="font-medium">Email:</span> {data.contactEmail}</p>
          </Card>

          {data.specialNotes && (
            <Card className="p-4">
              <h3 className="font-bold mb-2">Additional Notes</h3>
              <p>{data.specialNotes}</p>
            </Card>
          )}
        </div>
      </ScrollArea>

      <div className="flex justify-center mt-6">
        <Button size="lg" className="w-full max-w-md">
          Request Website Review
        </Button>
      </div>
    </div>
  );
};