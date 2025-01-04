import { WizardData } from "../../WebsiteWizard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SocialMediaLinksProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const SocialMediaLinks = ({ data, setData }: SocialMediaLinksProps) => {
  return (
    <div className="space-y-4">
      <Label>Social Media Links (Optional)</Label>
      <div className="space-y-2">
        <Input
          placeholder="Facebook URL"
          value={data.socialMedia?.facebook || ""}
          onChange={(e) =>
            setData({
              ...data,
              socialMedia: { ...data.socialMedia, facebook: e.target.value },
            })
          }
        />
        <Input
          placeholder="Instagram URL"
          value={data.socialMedia?.instagram || ""}
          onChange={(e) =>
            setData({
              ...data,
              socialMedia: { ...data.socialMedia, instagram: e.target.value },
            })
          }
        />
        <Input
          placeholder="LinkedIn URL"
          value={data.socialMedia?.linkedin || ""}
          onChange={(e) =>
            setData({
              ...data,
              socialMedia: { ...data.socialMedia, linkedin: e.target.value },
            })
          }
        />
      </div>
    </div>
  );
};