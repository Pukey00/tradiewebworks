import { Table, TableHeader, TableBody, TableRow, TableHead } from "@/components/ui/table";
import { useState } from "react";
import { WebsiteTableRow } from "./WebsiteTableRow";
import { useWebsiteMutations } from "./websiteMutations";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

export const WebsitesTable = ({ websites }: { websites: Website[] }) => {
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [editingUrl, setEditingUrl] = useState<{ id: string; url: string } | null>(null);
  const { updateStatusMutation, updateUrlMutation } = useWebsiteMutations();

  const handleStatusUpdate = async (websiteId: string, currentStatus: string) => {
    setUpdatingId(websiteId);
    const newStatus = currentStatus === 'pending' ? 'approved' : 'pending';
    await updateStatusMutation.mutateAsync({ websiteId, newStatus });
    setUpdatingId(null);
  };

  const handleUrlUpdate = (websiteId: string, currentUrl: string = '') => {
    if (editingUrl?.id === websiteId) {
      updateUrlMutation.mutate({ 
        websiteId, 
        newUrl: editingUrl.url 
      });
      setEditingUrl(null);
    } else {
      setEditingUrl({ id: websiteId, url: currentUrl });
    }
  };

  const handleUrlChange = (id: string, url: string) => {
    setEditingUrl({ id, url });
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
            <WebsiteTableRow
              key={website.id}
              website={website}
              updatingId={updatingId}
              editingUrl={editingUrl}
              onStatusUpdate={handleStatusUpdate}
              onUrlUpdate={handleUrlUpdate}
              onUrlChange={handleUrlChange}
            />
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