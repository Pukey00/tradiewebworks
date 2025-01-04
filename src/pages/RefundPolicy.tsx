import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Refund Eligibility</h2>
          <p className="mb-4">
            We offer refunds within 30 days of purchase if you are not satisfied with our services.
            To be eligible for a refund, you must provide a valid reason for your request and
            demonstrate that you have attempted to use our services as intended.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Refund Process</h2>
          <p className="mb-4">
            To request a refund, please contact our support team with your order details and reason
            for the refund. We will review your request and respond within 5 business days. Approved
            refunds will be processed within 10 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Non-Refundable Items</h2>
          <p className="mb-4">
            Certain services and customizations may be non-refundable. This includes but is not
            limited to custom development work, domain name registrations, and third-party services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our refund policy, please contact us at
            info@tradiewebworks.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;