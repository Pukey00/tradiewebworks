import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
}

const ADMIN_EMAIL = "lhollins0@gmail.com";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is authenticated and is admin
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
        const websitesRef = collection(db, "websites");
        const websitesQuery = query(websitesRef);
        const querySnapshot = await getDocs(websitesQuery);
        
        console.log(`Found ${querySnapshot.size} websites in Firestore`);
        
        const websitesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Processing website document:", doc.id, data);
          
          return {
            id: doc.id,
            businessName: data.businessName || 'Unnamed Business',
            status: data.status || 'pending',
            userEmail: data.userEmail || 'No email',
            createdAt: data.createdAt?.toDate() || new Date()
          };
        });
        
        console.log("Processed websites data:", websitesData);
        return websitesData;
      } catch (err) {
        console.error("Error fetching websites:", err);
        throw err;
      }
    },
    retry: false,
    enabled: auth.currentUser?.email === ADMIN_EMAIL
  });

  if (error) {
    console.error("Error in query:", error);
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-red-500">
              Error loading websites. Please try refreshing the page.
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

  const pendingWebsites = websites?.filter(w => w.status === 'pending') || [];
  const completedWebsites = websites?.filter(w => w.status === 'completed') || [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-tradie-navy mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{websites?.length || 0}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pending Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{pendingWebsites.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Completed Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{completedWebsites.length}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business Name</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {websites && websites.length > 0 ? (
                    websites.map((website) => (
                      <TableRow key={website.id}>
                        <TableCell className="font-medium">{website.businessName}</TableCell>
                        <TableCell>{website.userEmail}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            website.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {website.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {website.createdAt.toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center">
                        No websites found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;