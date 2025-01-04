import emailjs from '@emailjs/browser';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
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
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing update request:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}