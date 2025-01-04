import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const { data: websitesWithUsers, isLoading } = useQuery({
    queryKey: ['admin-websites'],
    queryFn: async () => {
      console.log("Fetching all websites for admin");
      const websitesRef = collection(db, "websites");
      const querySnapshot = await getDocs(websitesRef);
      
      // Map through websites and fetch user data for each
      const websitesData = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const websiteData = {
            id: doc.id,
            ...doc.data()
          };
          
          // Fetch user data if userId exists
          if (websiteData.userId) {
            const userDoc = await getDoc(doc(db, "users", websiteData.userId));
            const userData = userDoc.data();
            return {
              ...websiteData,
              userEmail: userData?.email || 'No email found'
            };
          }
          
          return {
            ...websiteData,
            userEmail: 'No user associated'
          };
        })
      );
      
      console.log("Fetched websites with user data:", websitesData);
      return websitesData;
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
                <p className="text-4xl font-bold">{websitesWithUsers?.length || 0}</p>
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {websitesWithUsers?.map((website: any) => (
                    <TableRow key={website.id}>
                      <TableCell className="font-medium">{website.businessName}</TableCell>
                      <TableCell>{website.userEmail}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          website.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {website.status || 'pending'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
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