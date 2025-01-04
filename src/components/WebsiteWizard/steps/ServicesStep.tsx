import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WizardData } from "../WebsiteWizard";
import { Plus, X } from "lucide-react";

interface ServicesStepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;
}

const predefinedServices = [
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Carpentry",
  "Tiling",
  "Roofing",
  "Painting",
  "Other"
];

export const ServicesStep = ({ data, setData, onNext, onBack }: ServicesStepProps) => {
  const [newService, setNewService] = useState("");
  const [showCustomField, setShowCustomField] = useState(false);

  const toggleService = (service: string) => {
    const updatedServices = data.services.includes(service)
      ? data.services.filter((s) => s !== service)
      : [...data.services, service];

    if (service === "Other") {
      setShowCustomField(!data.services.includes("Other"));
    }

    setData({ ...data, services: updatedServices });
  };

  const addCustomService = () => {
    if (newService && !data.customServices.includes(newService)) {
      setData({
        ...data,
        customServices: [...data.customServices, newService]
      });
      setNewService("");
    }
  };

  const removeCustomService = (service: string) => {
    setData({
      ...data,
      customServices: data.customServices.filter((s) => s !== service)
    });
  };

  const handleNext = () => {
    if (data.services.length > 0) {
      onNext();
    }
  };

  return (
    <div className="overflow-y-auto max-h-[calc(80vh-100px)] px-6">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Step 2 of 4 - Services Offered</h2>
          <p className="text-gray-600 mt-2">
            Select the services your business provides. You can add more later if needed.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {predefinedServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={data.services.includes(service)}
                  onCheckedChange={() => toggleService(service)}
                />
                <Label htmlFor={service} className="cursor-pointer">
                  {service}
                </Label>
              </div>
            ))}
          </div>

          {showCustomField && (
            <div className="space-y-4">
              <Label>Custom Service</Label>
              <div className="flex space-x-2">
                <Input
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  placeholder="Add your own service if it's not listed"
                  onKeyPress={(e) => e.key === "Enter" && addCustomService()}
                />
                <Button onClick={addCustomService} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.customServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                  >
                    <span className="text-sm">{service}</span>
                    <button
                      onClick={() => removeCustomService(service)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={data.services.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};