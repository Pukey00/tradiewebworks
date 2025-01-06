import emailjs from '@emailjs/browser';

export const sendSubscriptionUpdateEmail = async (data: {
  businessName: string;
  previousPlan: string | null;
  newPlan: string | null;
  status: string;
}) => {
  console.log("Sending subscription update email for:", data.businessName);
  
  const emailContent = {
    to_email: "your-email@example.com", // Replace with your email
    subject: `Subscription Update - ${data.businessName}`,
    content: `
Hello,

A subscription has been updated:

Business Name: ${data.businessName}
Previous Plan: ${data.previousPlan || 'None'}
New Plan: ${data.newPlan || 'Cancelled'}
Status: ${data.status}

Please review the subscription update.

Thank you!
    `
  };

  // Send email using EmailJS with your credentials
  await emailjs.send(
    'service_f4ryypt',
    'template_o4sramq',
    emailContent,
    'XdqQa2EHEymC9Qev8'
  );
  
  console.log('Subscription update email sent:', data);
  return { success: true };
};