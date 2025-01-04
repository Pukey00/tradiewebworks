import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const { data: allWebsites, isLoading } = useQuery({
    queryKey: ['admin-websites'],
    queryFn: async () => {
      console.log("Fetching all websites for admin");
      const websitesRef = collection(db, "websites");
      const querySnapshot = await getDocs(websitesRef);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  });

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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-tradie-navy mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{allWebsites?.length || 0}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allWebsites?.map((website: any) => (
                  <div key={website.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{website.businessName}</h3>
                    <p className="text-sm text-gray-600">User ID: {website.userId}</p>
                    <p className="text-sm text-gray-600">Industry: {website.industry}</p>
                    <p className="text-sm text-gray-600">Status: {website.status}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;