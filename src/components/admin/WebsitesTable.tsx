import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { WebsiteTableRow } from "./WebsiteTableRow";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

export const WebsitesTable = ({ websites }: { websites: Website[] }) => {
  console.log("Rendering WebsitesTable with websites:", websites);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Business Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Website URL</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {websites && websites.length > 0 ? (
          websites.map((website) => (
            <WebsiteTableRow
              key={website.id}
              website={{
                ...website,
                websiteUrl: website.websiteUrl || ''
              }}
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