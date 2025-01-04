import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { WizardData } from "../WebsiteWizard";
import { ContactFields } from "./PreviewStep/ContactFields";
import { SummarySections } from "./PreviewStep/SummarySections";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

export interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
  onOpenChange?: (open: boolean) => void;
}

export const PreviewStep = ({ data, setData, onOpenChange }: StepProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!data.contactName || !data.contactEmail) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email address",
        variant: "destructive",
      });
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to submit your website request",
          variant: "destructive",
        });
        return;
      }

      // Save to Firestore
      const websiteData = {
        ...data,
        userId: user.uid,
        userEmail: user.email,
        createdAt: new Date(),
        status: 'pending'
      };

      const docRef = await addDoc(collection(db, "websites"), websiteData);

      // Format testimonials and gallery for email
      const formattedTestimonials = data.testimonials
        .map(t => `- ${t.name} (${t.business}): "${t.quote}"`)
        .join("\n");

      const formattedGallery = data.gallery
        .map((_, index) => `- Image ${index + 1}: [Project Image ${index + 1}]`)
        .join("\n");

      // Send email notification
      const emailContent = {
        to_email: "your-email@example.com",
        from_name: data.contactName,
        subject: `Website Preview Request - ${data.businessName}`,
        content: `
Business Information:
-------------------
Business Name: ${data.businessName}
Industry: ${data.industry}
Service Area: ${data.location}

Services Offered:
---------------
${data.services.map(service => `- ${service}`).join("\n")}

Testimonials:
-----------
${formattedTestimonials}

Design Preferences:
----------------
Color Scheme: ${data.colorScheme}
${data.customColors ? `Custom Colors:
- Primary: ${data.customColors.primary}
- Accent: ${data.customColors.accent}` : ''}

Project Images:
-------------
${formattedGallery}
${data.logo ? "Logo: [Business Logo]" : "No logo provided"}

Contact Information:
-----------------
Name: ${data.contactName}
Email: ${data.contactEmail}

Selected Plan: ${data.selectedPlan}

Additional Notes:
--------------
${data.specialNotes || "None provided"}
        `,
      };

      await emailjs.send(
        'service_f4ryypt',
        'template_o4sramq',
        emailContent,
        'XdqQa2EHEymC9Qev8'
      );

      toast({
        title: "Success!",
        description: "Your website request has been submitted successfully.",
      });

      if (onOpenChange) {
        onOpenChange(false);
      }

      // Refresh the dashboard
      navigate('/dashboard');

    } catch (error) {
      console.error('Error submitting website request:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Website Information Summary</h2>
        <p className="text-gray-600">Please review your information before submission</p>
      </div>

      <ScrollArea className="h-[400px] rounded-md border p-4">
        <ContactFields data={data} setData={setData} />
        <SummarySections data={data} />
      </ScrollArea>

      <div className="flex justify-center mt-6">
        <Button 
          size="lg" 
          className="w-full max-w-md"
          onClick={handleSubmit}
        >
          Request FREE Website Preview
        </Button>
      </div>
    </div>
  );
};