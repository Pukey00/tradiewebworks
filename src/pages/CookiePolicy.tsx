import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences and
            understanding how you use our site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies to understand how you interact with our website, remember your preferences,
            and improve your browsing experience. This includes essential cookies necessary for the
            website to function and optional analytics cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Managing Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies through your browser settings. Please note that
            removing or blocking cookies may impact your user experience and some features of our
            website may not function properly.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Types of Cookies We Use</h2>
          <p className="mb-4">
            We use essential cookies for basic website functionality, analytics cookies to understand
            user behavior, and preference cookies to remember your choices and settings.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;