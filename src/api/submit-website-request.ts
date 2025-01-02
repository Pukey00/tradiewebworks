import { WizardData } from "@/components/WebsiteWizard/WebsiteWizard";
import emailjs from '@emailjs/browser';

export async function POST(request: Request) {
  try {
    const data: WizardData = await request.json();
    
    // Format testimonials
    const formattedTestimonials = data.testimonials
      .map(t => `- ${t.name} (${t.business}): "${t.quote}"`)
      .join("\n");

    // Format gallery images
    const formattedGallery = data.gallery
      .map((_, index) => `- Image ${index + 1}: [Project Image ${index + 1}]`)
      .join("\n");

    // Format the data for email
    const emailContent = {
      to_email: "your-email@example.com", // Replace with your email
      subject: `Website Preview Request - ${data.businessName}`,
      content: `
Hello,

A new website preview request has been submitted. Here are the details:

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
Email: ${data.contactEmail}

Selected Plan: ${data.selectedPlan}

Additional Notes:
--------------
${data.specialNotes || "None provided"}

Please review the information and proceed with building the preview website for the customer.

Thank you!
      `,
    };

    // Send email using EmailJS with your credentials
    await emailjs.send(
      'service_f4ryypt',
      'template_o4sramq',
      emailContent,
      'XdqQa2EHEymC9Qev8'
    );
    
    console.log('Website request received and email sent:', data);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing website request:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}