import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-4">Welcome to Tradie Web Works! These Terms of Service ("Terms") govern your use of our website creation services. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">By using Tradie Web Works' services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Services Provided</h2>
          <p className="mb-4">Tradie Web Works provides website creation services tailored for trade businesses. Our services include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Website design and development</li>
            <li>Domain name setup</li>
            <li>Website hosting and maintenance</li>
            <li>Optional add-ons such as SEO and contact form integrations</li>
          </ul>
          <p className="mb-4">The specifics of each service will be detailed in your service agreement or package selection.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">When using our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information when requested</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use our services in compliance with applicable laws and regulations</li>
            <li>Not engage in any activity that could harm our systems or other users</li>
          </ul>
          <p className="mb-4">You are responsible for the content you provide for your website. You must ensure that your content does not violate any third-party rights or applicable laws.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Payments and Fees</h2>
          <p className="mb-4">Our services may be subject to setup fees and ongoing subscription fees. By subscribing to our services, you agree to pay the applicable fees as outlined in your selected package.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Setup Fees: These may be waived during promotional periods.</li>
            <li>Monthly Subscription Fees: Payment is required monthly, and failure to pay may result in the suspension or termination of your website.</li>
          </ul>
          <p className="mb-4">All payments are processed through secure third-party payment providers. Tradie Web Works does not store your payment information.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Cancellation and Termination</h2>
          <p className="mb-4">You may cancel your subscription at any time by contacting us at admin@tradiewebworks.com. Upon cancellation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your website will remain active until the end of your billing cycle.</li>
            <li>We reserve the right to delete your website data after the subscription ends.</li>
          </ul>
          <p className="mb-4">We may terminate your access to our services if you violate these Terms or engage in any unlawful activity.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Intellectual Property</h2>
          <p className="mb-4">Tradie Web Works retains ownership of all intellectual property rights related to our website templates, designs, and proprietary technology. You are granted a limited, non-exclusive license to use the website we create for your business.</p>
          <p className="mb-4">You retain ownership of any content you provide, such as text, images, and logos.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Disclaimer of Warranties</h2>
          <p className="mb-4">Our services are provided on an "as-is" and "as-available" basis. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements.</p>
          <p className="mb-4">To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">To the fullest extent permitted by law, Tradie Web Works will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services, including but not limited to loss of profits, data, or business opportunities.</p>
          <p className="mb-4">Our total liability to you for any claim related to our services will not exceed the amount you have paid us in the past 12 months.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Privacy Policy</h2>
          <p className="mb-4">Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our services, you agree to the terms of our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">10. Changes to These Terms</h2>
          <p className="mb-4">We reserve the right to update or modify these Terms at any time. We will notify you of significant changes by posting the updated Terms on our website and updating the effective date.</p>
          <p className="mb-4">Your continued use of our services after any changes to these Terms constitutes your acceptance of the new Terms.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">11. Governing Law</h2>
          <p className="mb-4">These Terms are governed by the laws of Victoria, Australia, without regard to its conflict of law principles. Any legal disputes arising from these Terms will be resolved in the courts of Victoria, Australia.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">12. Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns about these Terms, please contact us:</p>
          <p className="mb-4">Email: admin@tradiewebworks.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;