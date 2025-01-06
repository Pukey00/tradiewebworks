import emailjs from '@emailjs/browser';

interface SubscriptionUpdateEmailParams {
  businessName: string;
  newPlan: string;
  previousPlan: string;
}

export const sendSubscriptionUpdateEmail = async ({
  businessName,
  newPlan,
  previousPlan
}: SubscriptionUpdateEmailParams) => {
  console.log('Sending subscription update email for:', businessName);
  
  try {
    const response = await emailjs.send(
      'service_your_service_id', // Replace with your EmailJS service ID
      'template_your_template_id', // Replace with your EmailJS template ID
      {
        business_name: businessName,
        new_plan: newPlan,
        previous_plan: previousPlan,
        date: new Date().toLocaleDateString()
      },
      'your_public_key' // Replace with your EmailJS public key
    );

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}