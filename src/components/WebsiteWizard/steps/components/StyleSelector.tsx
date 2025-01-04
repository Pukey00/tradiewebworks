import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WebsiteStyle, WebsiteStyleOption } from "../types/websiteTypes";

interface StyleSelectorProps {
  value: WebsiteStyle;
  onChange: (value: WebsiteStyle) => void;
  websiteStyles: WebsiteStyleOption[];
}

export const StyleSelector = ({ value, onChange, websiteStyles }: StyleSelectorProps) => {
  return (
    <div>
      <Label>Website Style</Label>
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
              className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer hover:border-tradie-orange peer-checked:border-tradie-orange peer-checked:bg-orange-50"
            >
              <span className="font-medium">{style.name}</span>
              <span className="text-sm text-gray-500">{style.description}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};