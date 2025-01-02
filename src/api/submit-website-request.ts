import { WizardData } from "@/components/WebsiteWizard/WebsiteWizard";
import emailjs from '@emailjs/browser';

export async function POST(request: Request) {
  try {
    const data: WizardData = await request.json();
    
    // Format the data for email
    const emailContent = {
      to_email: "your-email@example.com", // Replace with your email
      business_name: data.businessName,
      industry: data.industry,
      location: data.location,
      services: data.services.join(", "),
      testimonials: data.testimonials.map(t => `${t.name}: "${t.quote}"`).join("\n"),
      contact_email: data.contactEmail,
      selected_plan: data.selectedPlan,
      color_scheme: data.colorScheme,
      special_notes: data.specialNotes || "None"
    };

    // Send email using EmailJS
    await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      emailContent,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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