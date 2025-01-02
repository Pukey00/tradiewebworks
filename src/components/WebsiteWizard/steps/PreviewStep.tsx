import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { WizardData } from "../WebsiteWizard";
import { ContactFields } from "./PreviewStep/ContactFields";
import { SummarySections } from "./PreviewStep/SummarySections";

export interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

export const PreviewStep = ({ data, setData }: StepProps) => {
  const { toast } = useToast();

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
      // Format testimonials
      const formattedTestimonials = data.testimonials
        .map(t => `- ${t.name} (${t.business}): "${t.quote}"`)
        .join("\n");

      // Format gallery images
      const formattedGallery = data.gallery
        .map((_, index) => `- Image ${index + 1}: [Project Image ${index + 1}]`)
        .join("\n");

      // Create form data for attachments
      const formData = new FormData();
      if (data.logo) {
        formData.append('logo', data.logo);
      }

      // Format the email content
      const emailContent = {
        to_email: data.contactEmail,
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
${data.logo ? "Logo: [Business Logo Attached]" : "No logo provided"}

Contact Information:
-----------------
Name: ${data.contactName}
Email: ${data.contactEmail}

Selected Plan: ${data.selectedPlan}

Additional Notes:
--------------
${data.specialNotes || "None provided"}
        `,
        logo: data.logo,
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_f4ryypt',
        'template_o4sramq',
        emailContent,
        'XdqQa2EHEymC9Qev8'
      );

      toast({
        title: "Request Sent Successfully!",
        description: "We'll review your information and get back to you soon.",
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Request",
        description: "There was a problem sending your request. Please try again.",
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