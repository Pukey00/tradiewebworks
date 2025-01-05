import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WizardData } from "../../WebsiteWizard";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { POST } from "@/api/submit-website-request";
import { validateRequiredFields } from "./validation";
import { PlanCards } from "./PlanCards";
import { DemoRequestSection } from "./DemoRequestSection";
import { createCheckoutSession } from "@/utils/stripe";
import { plans } from "./planData";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onBack: () => void;
  onOpenChange: (open: boolean) => void;
}

export const PlanSelectionStep = ({ data, setData, onBack, onOpenChange }: StepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Validating required fields before submission...");
    const missingFields = validateRequiredFields(data);
    
    if (missingFields.length > 0) {
      console.log("Missing required fields:", missingFields);
      toast({
        title: "Missing Required Information",
        description: `Please fill in the following required fields: ${missingFields.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Find the selected plan's price ID
      const selectedPlanData = plans.find(plan => plan.id === data.selectedPlan);
      if (!selectedPlanData?.priceId) {
        throw new Error("Selected plan price ID not found");
      }

      console.log("Creating Stripe checkout session...");
      await createCheckoutSession(selectedPlanData.priceId);

      console.log("Saving website data for user:", user.uid);
      const websiteData = {
        ...data,
        userId: user.uid,
        status: "pending",
        createdAt: new Date(),
        userEmail: user.email,
      };

      await addDoc(collection(db, "websites"), websiteData);

      await POST(new Request("", { 
        method: "POST",
        body: JSON.stringify(data)
      }));

      toast({
        title: "Success!",
        description: "Your website request has been submitted successfully.",
      });

      onOpenChange(false);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error during submission:", error);
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[600px]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Step 4 of 4 - Select Your Plan</h2>
        <p className="text-gray-600">Choose the plan that best fits your business needs.</p>
        <p className="mt-2 text-tradie-orange font-semibold">
          Limited Time Offer - Free Setup (Ends 01/05/2025)
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-8 pr-4">
          <PlanCards data={data} setData={setData} />
          <DemoRequestSection isSubmitting={isSubmitting} onSubmit={handleSubmit} />

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!data.selectedPlan || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                "Subscribe & Submit"
              )}
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};