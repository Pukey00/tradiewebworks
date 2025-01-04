import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PlusCircle, ExternalLink } from "lucide-react";
import { WebsiteWizard } from "@/components/WebsiteWizard/WebsiteWizard";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const AuthenticatedHome = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [websites, setWebsites] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, "websites"),
          where("userId", "==", user.uid)
        );

        const querySnapshot = await getDocs(q);
        const websitesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setWebsites(websitesList);
      } catch (error) {
        console.error("Error fetching websites:", error);
        toast({
          title: "Error",
          description: "Failed to load your websites",
          variant: "destructive",
        });
      }
    };

    fetchWebsites();
  }, [toast]);

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

            {websites.length === 0 ? (
              <div className="bg-white shadow rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  No Websites Yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Get started by creating your first professional website. Our wizard will guide you through the process.
                </p>
                <Button 
                  onClick={() => setIsWizardOpen(true)}
                  className="bg-tradie-orange hover:bg-orange-600"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Your First Website
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {websites.map((website) => (
                  <div key={website.id} className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-lg">{website.businessName}</h3>
                      <span className="px-2 py-1 text-sm rounded-full bg-orange-100 text-orange-800">
                        {website.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{website.industry}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Location: {website.location}</p>
                      <p className="text-sm text-gray-500">Plan: {website.selectedPlan}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dashboard Content */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Create Website</h3>
                <p className="text-gray-600">Start building your professional website</p>
              </div>
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