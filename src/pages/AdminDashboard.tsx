import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
}

const AdminDashboard = () => {
  const { data: websites, isLoading } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      console.log("Fetching websites from Firestore");
      const websitesRef = collection(db, "websites");
      const querySnapshot = await getDocs(websitesRef);
      
      console.log("Raw querySnapshot:", querySnapshot.size, "documents found");
      
      const websitesData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Document data:", data);
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
                <p className="text-4xl font-bold">{websites?.length || 0}</p>
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
                  {websites?.map((website) => (
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