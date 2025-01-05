import { WizardData } from "../../WebsiteWizard";

export const validateRequiredFields = (data: WizardData) => {
  console.log("Validating required fields for website data:", data);
  
  const requiredFields = {
    businessName: "Business Name",
    contactEmail: "Email Address",
    industry: "Industry",
    location: "Location",
    selectedPlan: "Selected Plan"
  };

  const missingFields = Object.entries(requiredFields)
    .filter(([key]) => !data[key as keyof WizardData])
    .map(([_, label]) => label);

  if (missingFields.length > 0) {
    console.log("Missing required fields:", missingFields);
  }

  return missingFields;
};