import { WizardData } from "@/components/WebsiteWizard/WebsiteWizard";

export async function POST(request: Request) {
  try {
    const data: WizardData = await request.json();
    
    // Here you would implement your email sending logic
    // For example, using a service like SendGrid, AWS SES, or similar
    
    console.log('Website request received:', data);
    
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