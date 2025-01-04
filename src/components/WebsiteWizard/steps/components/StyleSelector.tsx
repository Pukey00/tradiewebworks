import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WebsiteStyle, WebsiteStyleOption } from "../types/websiteTypes";
import { Check } from "lucide-react";

interface StyleSelectorProps {
  value: WebsiteStyle;
  onChange: (value: WebsiteStyle) => void;
  websiteStyles: WebsiteStyleOption[];
}

export const StyleSelector = ({ value, onChange, websiteStyles }: StyleSelectorProps) => {
  return (
    <div>
      <Label className="text-lg font-semibold mb-2">Website Style</Label>
      <RadioGroup
        value={value}
        onValueChange={(value) => onChange(value as WebsiteStyle)}
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
              className="flex flex-col items-center justify-center p-6 border-2 rounded-lg cursor-pointer hover:border-tradie-orange peer-checked:border-tradie-orange peer-checked:bg-orange-50 transition-all"
            >
              <div className="absolute top-2 right-2">
                {value === style.id && <Check className="w-5 h-5 text-tradie-orange" />}
              </div>
              <span className="font-medium text-lg mb-2">{style.name}</span>
              <span className="text-sm text-gray-500 text-center">{style.description}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};