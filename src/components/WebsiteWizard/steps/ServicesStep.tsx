import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { WizardData } from "../WebsiteWizard";
import { Plus, X } from "lucide-react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

const industryServices: Record<string, string[]> = {
  "Plumbing": [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Hot Water Systems",
    "Leak Detection",
    "Pipe Repairs",
  ],
  "Electrical": [
    "Electrical Repairs",
    "Safety Inspections",
    "Lighting Installation",
    "Power Points",
    "Switchboard Upgrades",
  ],
  "Building & Construction": [
    "Home Renovations",
    "Extensions",
    "New Builds",
    "Commercial Fit-outs",
    "Project Management",
  ],
  "Landscaping": [
    "Garden Design",
    "Lawn Care",
    "Irrigation Systems",
    "Retaining Walls",
    "Outdoor Living Areas",
  ],
};

export const ServicesStep = ({ data, setData }: StepProps) => {
  const [newService, setNewService] = useState("");
  const suggestedServices = industryServices[data.industry] || [];

  const addService = () => {
    if (newService && !data.services.includes(newService)) {
      setData({ ...data, services: [...data.services, newService] });
      setNewService("");
    }
  };

  const removeService = (service: string) => {
    setData({
      ...data,
      services: data.services.filter((s) => s !== service),
    });
  };

  const toggleSuggestedService = (service: string) => {
    if (data.services.includes(service)) {
      removeService(service);
    } else {
      setData({ ...data, services: [...data.services, service] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Services Offered</h2>
        <p className="text-gray-600">Select your services or add custom ones</p>
      </div>

      {suggestedServices.length > 0 && (
        <div className="space-y-4">
          <Label>Suggested Services</Label>
          <div className="grid grid-cols-2 gap-4">
            {suggestedServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={data.services.includes(service)}
                  onCheckedChange={() => toggleSuggestedService(service)}
                />
                <label htmlFor={service} className="text-sm cursor-pointer">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <Label>Custom Services</Label>
        <div className="flex space-x-2">
          <Input
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            placeholder="Add a custom service"
            onKeyPress={(e) => e.key === "Enter" && addService()}
          />
          <Button onClick={addService} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.services.filter(service => !suggestedServices.includes(service)).map((service) => (
            <div
              key={service}
              className="flex items-center bg-gray-100 rounded-full px-3 py-1"
            >
              <span className="text-sm">{service}</span>
              <button
                onClick={() => removeService(service)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};