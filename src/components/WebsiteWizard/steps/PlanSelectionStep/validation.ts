import { WizardData } from "../../WebsiteWizard";

export const validateRequiredFields = (data: WizardData) => {
  const requiredFields = {
    businessName: "Business Name",
    email: "Email Address"
  };

  const missingFields = Object.entries(requiredFields)
    .filter(([key]) => !data[key as keyof WizardData])
    .map(([_, label]) => label);

  return missingFields;
};