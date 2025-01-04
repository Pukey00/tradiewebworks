import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { WebsiteWizard } from "@/components/WebsiteWizard/WebsiteWizard";
import { useState } from "react";
import { WebsitesList } from "@/components/WebsitesList";

const AuthenticatedHome = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Websites Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-tradie-navy">Your Websites</h2>
              <Button 
                onClick={() => setIsWizardOpen(true)}
                className="bg-tradie-orange hover:bg-orange-600"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Website
              </Button>
            </div>

            <WebsitesList />
          </div>

          {/* Dashboard Content */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button 
                onClick={() => setIsWizardOpen(true)}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow text-left"
              >
                <h3 className="font-medium text-lg mb-2">Create Website</h3>
                <p className="text-gray-600">Start building your professional website</p>
              </button>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">View Analytics</h3>
                <p className="text-gray-600">Check your website performance</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Edit Profile</h3>
                <p className="text-gray-600">Update your business information</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WebsiteWizard 
        open={isWizardOpen} 
        onOpenChange={setIsWizardOpen}
      />
    </div>
  );
};

export default AuthenticatedHome;