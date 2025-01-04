import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Loader2 } from "lucide-react";

interface WebsiteData {
  businessName: string;
  websiteUrl: string;
  traffic: {
    pageViews: number;
    uniqueVisitors: number;
    date: string;
  }[];
}

const Analytics = () => {
  const { websiteId } = useParams();
  console.log("Fetching analytics for website:", websiteId);

  const { data: websiteData, isLoading } = useQuery({
    queryKey: ['website-analytics', websiteId],
    queryFn: async () => {
      if (!websiteId) throw new Error("Website ID is required");
      
      const docRef = doc(db, "websites", websiteId);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error("Website not found");
      }

      const data = docSnap.data() as WebsiteData;
      console.log("Fetched website data:", data);
      
      // For demonstration, let's create some sample traffic data if none exists
      if (!data.traffic) {
        data.traffic = Array.from({ length: 7 }, (_, i) => ({
          date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
          pageViews: Math.floor(Math.random() * 100) + 50,
          uniqueVisitors: Math.floor(Math.random() * 50) + 20,
        }));
      }
      
      return data;
    },
    meta: {
      onError: (error: Error) => {
        console.error("Error fetching website analytics:", error);
      }
    }
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!websiteData) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Website not found</h2>
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
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Analytics for {websiteData.businessName}</h1>
            <a 
              href={websiteData.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Website
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Page Views (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  {websiteData.traffic.reduce((sum, day) => sum + day.pageViews, 0)}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Unique Visitors (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  {websiteData.traffic.reduce((sum, day) => sum + day.uniqueVisitors, 0)}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={websiteData.traffic}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pageViews" fill="#3b82f6" name="Page Views" />
                  <Bar dataKey="uniqueVisitors" fill="#10b981" name="Unique Visitors" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;