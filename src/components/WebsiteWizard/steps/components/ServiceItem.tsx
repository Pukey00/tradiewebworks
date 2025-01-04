import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SubServicesList } from "./SubServicesList";

interface ServiceItemProps {
  service: string;
  isSelected: boolean;
  onToggle: (service: string) => void;
  suggestedSubServices?: string[];
  selectedSubServices: string[];
  onSubServiceChange: (subService: string, checked: boolean) => void;
}

export const ServiceItem = ({
  service,
  isSelected,
  onToggle,
  suggestedSubServices,
  selectedSubServices,
  onSubServiceChange,
}: ServiceItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={service}
          checked={isSelected}
          onCheckedChange={() => onToggle(service)}
        />
        <Label htmlFor={service} className="cursor-pointer">
          {service}
        </Label>
      </div>
      {isSelected && suggestedSubServices && (
        <SubServicesList
          service={service}
          subServices={suggestedSubServices}
          selectedSubServices={selectedSubServices}
          onSubServiceChange={onSubServiceChange}
        />
      )}
    </div>
  );
};