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
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using our services, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable license to access and use our
            services for your personal or business purposes, subject to these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Service Modifications</h2>
          <p className="mb-4">
            We reserve the right to modify, suspend, or discontinue any part of our services at any
            time without prior notice. We shall not be liable to you or any third party for any
            modification, suspension, or discontinuation of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall we be liable for any indirect, incidental, special, consequential,
            or punitive damages arising out of or relating to your use of our services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;