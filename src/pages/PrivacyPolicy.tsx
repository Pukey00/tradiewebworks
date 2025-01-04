import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Tradie Web Works</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            At Tradie Web Works, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines how we collect, use, store, and share your information when you use our services, 
            including our website wizard and any associated services provided by Tradie Web Works.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect the following types of information to provide our services:</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">a. Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Service areas</li>
            <li>Logo and images uploaded by you</li>
            <li>Payment details (when applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">b. Non-Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Usage data (e.g., pages visited, time spent on the site)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To create and manage your website</li>
            <li>To communicate with you about your project</li>
            <li>To provide customer support</li>
            <li>To process payments</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Share Your Information</h2>
          <p className="mb-4">
            We do not sell your personal information. However, we may share your information with third parties 
            in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Service Providers:</strong> We may share your information with trusted service providers who assist us in operating our business, such as payment processors and hosting providers.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or if we believe that such action is necessary to comply with legal obligations or protect our rights.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition, your information may be transferred to the new owner.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We take appropriate technical and organizational measures to protect your personal information from 
            unauthorized access, loss, misuse, or alteration. These measures include secure servers, encrypted 
            communications, and limited access to personal data.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for certain data processing activities</li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact us at admin@tradiewebworks.com.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. 
            Cookies are small text files that are stored on your device to help us understand how you 
            interact with our services.
          </p>
          <p className="mb-4">
            You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy 
            practices or content of these third-party sites. We encourage you to read their privacy policies 
            before providing any personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for children under the age of 18. We do not knowingly collect 
            personal information from children. If we become aware that we have inadvertently collected 
            information from a child, we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for 
            legal, regulatory, or operational reasons. We will notify you of any significant changes by 
            posting the updated policy on our website and updating the effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <p className="mb-4">Email: admin@tradiewebworks.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;