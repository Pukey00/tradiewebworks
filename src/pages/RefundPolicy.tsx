import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Refund Policy for Tradie Web Works</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            At Tradie Web Works, customer satisfaction is our priority. We strive to provide high-quality website creation services for trade businesses. 
            This Refund Policy outlines the terms under which refunds may be issued for our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Setup Fee Refunds</h2>
          <p className="mb-4">
            The setup fee for website creation is non-refundable once the website development process has begun. 
            This fee covers the initial work involved in setting up your website, including domain setup, website design, and configuration.
          </p>
          <p className="mb-4">
            However, if you cancel your order before any work has commenced, you may be eligible for a full refund of the setup fee. 
            Please contact us at admin@tradiewebworks.com to request a cancellation and refund.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Monthly Subscription Refunds</h2>
          <p className="mb-4">
            The monthly subscription fee is billed at the start of each billing cycle. Refunds for monthly subscriptions will be considered under the following conditions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Full Refund: If you cancel your subscription within the first 7 days of a new billing cycle, you are eligible for a full refund of that month's subscription fee.</li>
            <li className="mb-2">No Refund: After the first 7 days of a billing cycle, the subscription fee for that month is non-refundable.</li>
          </ul>
          <p className="mb-4">To cancel your subscription, please contact us at admin@tradiewebworks.com.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Refunds for Additional Services</h2>
          <p className="mb-4">
            Refunds for additional services (such as SEO packages, contact form integrations, or other add-ons) will be handled on a case-by-case basis. 
            If you are dissatisfied with any additional service, please contact us within 14 days of purchase to request a refund.
          </p>
          <p className="mb-4">
            Refunds will be granted at our discretion based on the nature of the service and the work already completed.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Eligibility for Refunds</h2>
          <p className="mb-4">To be eligible for a refund, you must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide proof of payment</li>
            <li>Contact us within the specified refund periods</li>
            <li>Provide a valid reason for the refund request</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Processing Refunds</h2>
          <p className="mb-4">
            Refunds will be processed within 10 business days of approval. The refund will be issued to the original payment method used during the purchase.
          </p>
          <p className="mb-4">
            Please note that processing times may vary depending on your bank or payment provider.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Non-Refundable Services</h2>
          <p className="mb-4">The following services are non-refundable:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Completed website designs</li>
            <li>Domain registration fees</li>
            <li>Hosting fees for the current billing period</li>
            <li>Custom development work that has been completed</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to This Refund Policy</h2>
          <p className="mb-4">
            We reserve the right to update or modify this Refund Policy at any time. Any changes will be posted on our website with the updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Refund Policy or wish to request a refund, please contact us:
          </p>
          <p className="mb-4">Email: admin@tradiewebworks.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;