import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
}

export const WebsitesTable = ({ websites }: { websites: Website[] }) => {
  const { toast } = useToast();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusUpdate = async (websiteId: string, currentStatus: string) => {
    console.log(`Updating status for website ${websiteId}`);
    setUpdatingId(websiteId);
    
    try {
      const newStatus = currentStatus === 'pending' ? 'approved' : 'pending';
      const websiteRef = doc(db, "websites", websiteId);
      
      await updateDoc(websiteRef, {
        status: newStatus
      });
      
      console.log(`Successfully updated status to ${newStatus}`);
      
      toast({
        title: "Status Updated",
        description: `Website status has been updated to ${newStatus}`,
      });
      
      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update website status",
      });
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Business Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
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
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStatusUpdate(website.id, website.status)}
                  disabled={updatingId === website.id}
                >
                  {updatingId === website.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    website.status === 'pending' ? 'Approve' : 'Revert to Pending'
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No websites found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};