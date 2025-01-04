import { WizardData } from "../../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface HomePageContentProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const HomePageContent = ({ data, setData }: HomePageContentProps) => {
  return (
    <div className="space-y-4">
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