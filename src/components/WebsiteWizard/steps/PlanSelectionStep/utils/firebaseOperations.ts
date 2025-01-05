import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { WizardData } from "../../../WebsiteWizard";

export const saveWebsiteData = async (data: WizardData, userId: string, userEmail: string) => {
  console.log('Saving website data to Firebase');
  const websiteData = {
    ...data,
    userId,
    status: "pending",
    createdAt: new Date(),
    userEmail,
  };

  console.log('Website data:', websiteData);
  return await addDoc(collection(db, "websites"), websiteData);
};