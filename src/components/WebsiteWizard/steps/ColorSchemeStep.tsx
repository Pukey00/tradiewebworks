import { WizardData } from "../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

const colorSchemes = [
  {
    id: "default",
    name: "Professional Blue",
    primary: "#0F172A",
    accent: "#F97316",
  },
  {
    id: "modern",
    name: "Modern Green",
    primary: "#064E3B",
    accent: "#10B981",
  },
  {
    id: "bold",
    name: "Bold Red",
    primary: "#7F1D1D",
    accent: "#EF4444",
  },
  {
    id: "elegant",
    name: "Elegant Purple",
    primary: "#4C1D95",
    accent: "#8B5CF6",
  },
  {
    id: "custom",
    name: "Custom Colors",
    primary: "#000000",
    accent: "#000000",
  },
];

export const ColorSchemeStep = ({ data, setData }: StepProps) => {
  const [customPrimary, setCustomPrimary] = useState("#000000");
  const [customAccent, setCustomAccent] = useState("#000000");

  const handleColorChange = (colorType: 'primary' | 'accent', value: string) => {
    setData({
      ...data,
      colorScheme: 'custom',
      customColors: {
        ...data.customColors,
        [colorType]: value
      }
    });
    if (colorType === 'primary') {
      setCustomPrimary(value);
    } else {
      setCustomAccent(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Color Scheme</h2>
        <p className="text-gray-600">Choose a color scheme for your website</p>
      </div>

      <RadioGroup
        value={data.colorScheme}
        onValueChange={(value) => setData({ ...data, colorScheme: value })}
        className="grid grid-cols-2 gap-4"
      >
        {colorSchemes.map((scheme) => (
          <div key={scheme.id} className="relative">
            <RadioGroupItem
              value={scheme.id}
              id={scheme.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={scheme.id}
              className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer hover:border-tradie-orange peer-checked:border-tradie-orange peer-checked:bg-orange-50"
            >
              <div className="flex gap-2 mb-2">
                {scheme.id === 'custom' ? (
                  <>
                    <Input
                      type="color"
                      value={customPrimary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="w-6 h-6 p-0 border-0"
                    />
                    <Input
                      type="color"
                      value={customAccent}
                      onChange={(e) => handleColorChange('accent', e.target.value)}
                      className="w-6 h-6 p-0 border-0"
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: scheme.primary }}
                    />
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: scheme.accent }}
                    />
                  </>
                )}
              </div>
              <span className="font-medium">{scheme.name}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};