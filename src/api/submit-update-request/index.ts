import emailjs from '@emailjs/browser';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const submitUpdateRequest = async (data: { 
  businessName: string; 
  updateRequest: string;
  websiteId: string; 
}) => {
  console.log("Submitting update request for website:", data.websiteId);
  console.log("Update request content:", data.updateRequest);

  // Update website status to pending
  const websiteRef = doc(db, "websites", data.websiteId);
  await updateDoc(websiteRef, {
    status: "pending"
  });

  const emailContent = {
    to_email: "your-email@example.com", // Replace with your email
    subject: `Website Update Request - ${data.businessName}`,
    content: `
Hello,

A website update request has been submitted:

Business Name: ${data.businessName}

Update Request Details:
----------------------
${data.updateRequest}

Please review the update request and contact the client to discuss the changes.

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
  
  console.log('Update request received and email sent:', data);
  return { success: true };
};