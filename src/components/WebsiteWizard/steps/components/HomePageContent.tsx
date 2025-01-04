import { WizardData } from "../../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface HomePageContentProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const HomePageContent = ({ data, setData }: HomePageContentProps) => {
  const handleGenerateHeadlineChange = (checked: boolean) => {
    setData({
      ...data,
      generateHeadline: checked,
      homePageText: {
        ...data.homePageText,
        headline: checked ? "" : data.homePageText?.headline || "",
      },
    });
    console.log("Generate headline option changed:", checked);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="generateHeadline"
            checked={data.generateHeadline}
            onCheckedChange={handleGenerateHeadlineChange}
          />
          <Label htmlFor="generateHeadline" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Let us create a catchy headline/slogan for you
          </Label>
        </div>
        {!data.generateHeadline && (
          <div>
            <Label htmlFor="headline">Business Headline/Slogan</Label>
            <Textarea
              id="headline"
              value={data.homePageText?.headline || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  homePageText: { ...data.homePageText, headline: e.target.value },
                })
              }
              placeholder="Enter a catchy headline or slogan for your business"
              className="min-h-[60px]"
            />
          </div>
        )}
      </div>
      <div>
        <Label htmlFor="businessDescription">Business Description</Label>
        <Textarea
          id="businessDescription"
          value={data.homePageText?.description || ""}
          onChange={(e) =>
            setData({
              ...data,
              homePageText: { ...data.homePageText, description: e.target.value },
            })
          }
          placeholder="Tell your customers about your business, your experience, and what makes you stand out"
          className="min-h-[120px]"
        />
      </div>
      <div>
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          value={data.homePageText?.additionalInfo || ""}
          onChange={(e) =>
            setData({
              ...data,
              homePageText: { ...data.homePageText, additionalInfo: e.target.value },
            })
          }
          placeholder="Add any other important details about your business that you'd like to showcase"
          className="min-h-[120px]"
        />
      </div>
    </div>
  );
};