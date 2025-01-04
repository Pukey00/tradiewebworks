import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SubServicesListProps {
  service: string;
  subServices: string[];
  selectedSubServices: string[];
  onSubServiceChange: (subService: string, checked: boolean) => void;
}

export const SubServicesList = ({
  service,
  subServices,
  selectedSubServices,
  onSubServiceChange,
}: SubServicesListProps) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    subServices.forEach((subService) => {
      onSubServiceChange(subService, newSelectAll);
    });
  };

  return (
    <div className="ml-6 pl-2 border-l-2 border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-600">Suggested services:</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSelectAll}
          className="text-xs"
        >
          {selectAll ? "Deselect All" : "Select All"}
        </Button>
      </div>
      <ul className="text-sm space-y-2">
        {subServices.map((subService) => (
          <li key={subService} className="flex items-center space-x-2">
            <Checkbox
              id={`${service}-${subService}`}
              checked={selectedSubServices.includes(subService)}
              onCheckedChange={(checked) => {
                onSubServiceChange(subService, checked === true);
                setSelectAll(
                  checked === true &&
                    subServices.every((s) =>
                      s === subService
                        ? true
                        : selectedSubServices.includes(s)
                    )
                );
              }}
            />
            <label
              htmlFor={`${service}-${subService}`}
              className="text-gray-700 cursor-pointer"
            >
              {subService}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};