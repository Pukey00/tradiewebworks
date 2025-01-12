import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Website {
  id: string;
  status: string;
}

interface DashboardStatsProps {
  websites: Website[];
}

export const DashboardStats = ({ websites }: DashboardStatsProps) => {
  const pendingWebsites = websites?.filter(w => w.status === 'pending') || [];
  const approvedWebsites = websites?.filter(w => w.status === 'approved') || [];

  return (
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
          <CardTitle>Approved Websites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{approvedWebsites.length}</p>
        </CardContent>
      </Card>
    </div>
  );
};