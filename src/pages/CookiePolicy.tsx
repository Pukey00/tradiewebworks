import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Effective Date: {currentDate}</p>
          
          <p className="mb-4">
            Tradie Web Works ("we," "our," or "us") uses cookies and similar tracking technologies to enhance your experience on our website. 
            This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. 
            They help websites recognize your device, remember your preferences, and improve your browsing experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Types of Cookies We Use</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">a. Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable core functionalities such as security, 
            authentication, and accessibility.
          </p>
          <p className="mb-4">Examples: Session cookies, authentication cookies</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">b. Performance Cookies</h3>
          <p className="mb-4">
            These cookies collect information about how you interact with our website. They help us understand which pages are 
            visited most often and improve the overall performance of our website.
          </p>
          <p className="mb-4">Examples: Google Analytics cookies</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">c. Functional Cookies</h3>
          <p className="mb-4">
            These cookies allow our website to remember your preferences, such as your language settings or login information.
          </p>
          <p className="mb-4">Examples: Language preference cookies, form autofill cookies</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">d. Advertising Cookies</h3>
          <p className="mb-4">
            We may use cookies to deliver personalized advertisements based on your browsing behavior. These cookies help us 
            show you relevant ads and measure their effectiveness.
          </p>
          <p className="mb-4">Examples: Third-party advertising cookies</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Use Cookies</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Improve the functionality and performance of our website</li>
            <li>Personalize your experience</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Provide targeted advertising based on your interests</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Third-Party Cookies</h2>
          <p className="mb-4">
            We may allow third-party service providers to place cookies on your device to help us improve our services and 
            deliver relevant content. These third parties may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
            <li>Advertising partners</li>
          </ul>
          <p className="mb-4">
            We do not control these third-party cookies and recommend that you review their respective cookie policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Managing Your Cookie Preferences</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">a. Browser Settings</h3>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies. 
            Please note that disabling essential cookies may impact the functionality of our website.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">b. Cookie Banner</h3>
          <p className="mb-4">
            When you visit our website, you will see a cookie banner. You can use this banner to manage your cookie preferences 
            and consent to the use of certain types of cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Your Consent</h2>
          <p className="mb-4">
            By continuing to use our website, you consent to the use of cookies as described in this policy. You can withdraw 
            your consent at any time by adjusting your cookie preferences in your browser or through the cookie banner.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to This Cookie Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, 
            or operational reasons. We will notify you of any significant changes by posting the updated policy on our website 
            and updating the effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us:
          </p>
          <p className="mb-4">Email: admin@tradiewebworks.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;