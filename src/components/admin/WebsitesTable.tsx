import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

export const WebsitesTable = ({ websites }: { websites: Website[] }) => {
  const { toast } = useToast();
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [editingUrl, setEditingUrl] = useState<{ id: string; url: string } | null>(null);
  const queryClient = useQueryClient();

  const updateStatusMutation = useMutation({
    mutationFn: async ({ websiteId, newStatus }: { websiteId: string; newStatus: string }) => {
      console.log(`Updating status for website ${websiteId} to ${newStatus}`);
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        status: newStatus
      });
      return { websiteId, newStatus };
    },
    onSuccess: ({ websiteId, newStatus }) => {
      console.log(`Successfully updated status to ${newStatus}`);
      queryClient.setQueryData(['admin-websites'], (oldData: Website[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.map(website => 
          website.id === websiteId 
            ? { ...website, status: newStatus }
            : website
        );
      });

      toast({
        title: "Status Updated",
        description: `Website status has been updated to ${newStatus}`,
      });
    },
    onError: (error) => {
      console.error("Error updating status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update website status",
      });
    },
    onSettled: () => {
      setUpdatingId(null);
    }
  });

  const updateUrlMutation = useMutation({
    mutationFn: async ({ websiteId, newUrl }: { websiteId: string; newUrl: string }) => {
      console.log(`Updating URL for website ${websiteId} to ${newUrl}`);
      const websiteRef = doc(db, "websites", websiteId);
      await updateDoc(websiteRef, {
        websiteUrl: newUrl
      });
      return { websiteId, newUrl };
    },
    onSuccess: ({ websiteId, newUrl }) => {
      console.log(`Successfully updated URL to ${newUrl}`);
      queryClient.setQueryData(['admin-websites'], (oldData: Website[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.map(website => 
          website.id === websiteId 
            ? { ...website, websiteUrl: newUrl }
            : website
        );
      });

      toast({
        title: "URL Updated",
        description: "Website URL has been updated successfully",
      });
      setEditingUrl(null);
    },
    onError: (error) => {
      console.error("Error updating URL:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update website URL",
      });
    }
  });

  const handleStatusUpdate = async (websiteId: string, currentStatus: string) => {
    setUpdatingId(websiteId);
    const newStatus = currentStatus === 'pending' ? 'approved' : 'pending';
    updateStatusMutation.mutate({ websiteId, newStatus });
  };

  const handleUrlUpdate = (websiteId: string, currentUrl: string = '') => {
    if (editingUrl?.id === websiteId) {
      updateUrlMutation.mutate({ 
        websiteId, 
        newUrl: editingUrl.url 
      });
    } else {
      setEditingUrl({ id: websiteId, url: currentUrl });
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
          <TableHead>Website URL</TableHead>
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
              <TableCell className="max-w-xs">
                {editingUrl?.id === website.id ? (
                  <div className="flex items-center gap-2">
                    <Input
                      value={editingUrl.url}
                      onChange={(e) => setEditingUrl({ id: website.id, url: e.target.value })}
                      placeholder="Enter website URL"
                      className="text-sm"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {website.websiteUrl ? (
                      <a
                        href={website.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                      >
                        {website.websiteUrl.length > 30 
                          ? website.websiteUrl.substring(0, 30) + '...' 
                          : website.websiteUrl}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-gray-500 italic">Not set</span>
                    )}
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUrlUpdate(website.id, website.websiteUrl)}
                  >
                    {editingUrl?.id === website.id ? 'Save URL' : 'Edit URL'}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              No websites found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};