import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WizardData } from "../../WebsiteWizard";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { PlanCard } from "./PlanCard";
import { DemoRequestSection } from "./DemoRequestSection";
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
    setIsSubmitting(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      console.log("Saving website data for user:", user.uid);

      // Save to Firestore with status and timestamp
      const websiteData = {
        ...data,
        userId: user.uid,
        userEmail: user.email,
        status: "pending",
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "websites"), websiteData);
      console.log("Website data saved with ID:", docRef.id);

      toast({
        title: "Success!",
        description: "Your website request has been submitted successfully.",
      });

      // Close the wizard and navigate back to dashboard
      onOpenChange(false);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error submitting website request:", error);
      toast({
        title: "Error",
        description: "Failed to submit your website request. Please try again.",
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
        <p className="text-gray-600">Choose the plan that best fits your business needs. You can always upgrade or change your plan later.</p>
        <p className="mt-2 text-tradie-orange font-semibold">
          Limited Time Offer - Free Setup (Ends 01/05/2025)
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-8 pr-4">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selectedPlan={data.selectedPlan}
                onSelect={(planId) => setData({ ...data, selectedPlan: planId })}
              />
            ))}
          </div>

          <DemoRequestSection 
            isSubmitting={isSubmitting} 
            onSubmit={handleSubmit} 
          />

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
                  Creating...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};