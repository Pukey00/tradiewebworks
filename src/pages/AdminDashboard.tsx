import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { WebsitesTable } from "@/components/admin/WebsitesTable";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { StripeKeyManager } from "@/components/StripeKeyManager";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

const ADMIN_EMAIL = "lhollins0@gmail.com";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user?.email);
      if (!user) {
        console.log("No user found, redirecting to login");
        navigate("/login");
        return;
      }
      
      if (user.email !== ADMIN_EMAIL) {
        console.log("User is not admin, redirecting to dashboard");
        navigate("/dashboard");
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have permission to access the admin dashboard"
        });
        return;
      }
    });

    return () => unsubscribe();
  }, [navigate, toast]);

  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['admin-websites'],
    queryFn: async () => {
      console.log("Starting to fetch websites from Firestore");
      try {
        if (!auth.currentUser) {
          console.log("No authenticated user found");
          throw new Error("Authentication required");
        }

        const websitesRef = collection(db, "websites");
        const querySnapshot = await getDocs(websitesRef);
        
        console.log(`Found ${querySnapshot.size} websites in Firestore`);
        
        const websitesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Processing website document:", doc.id, data);
          
          return {
            id: doc.id,
            businessName: data.businessName || 'Unnamed Business',
            status: data.status || 'pending',
            userEmail: data.userEmail || 'No email',
            createdAt: data.createdAt?.toDate() || new Date(),
            websiteUrl: data.websiteUrl || ''
          };
        });
        
        console.log("Processed websites data:", websitesData);
        return websitesData;
      } catch (err) {
        console.error("Error fetching websites:", err);
        throw err;
      }
    },
    retry: 1,
    enabled: !!auth.currentUser && auth.currentUser.email === ADMIN_EMAIL,
    meta: {
      onError: (error: Error) => {
        console.error("Query error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load websites. Please try again."
        });
      }
    }
  });

  if (error) {
    console.error("Error in query:", error);
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-red-500">
              <p>Failed to load websites.</p>
              <p className="text-sm mt-2">Error: {error.message}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Stripe Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <StripeKeyManager />
            </CardContent>
          </Card>

          {websites && <DashboardStats websites={websites} />}

          <Card>
            <CardHeader>
              <CardTitle>All Websites</CardTitle>
            </CardHeader>
            <CardContent>
              {websites && <WebsitesTable websites={websites} />}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
