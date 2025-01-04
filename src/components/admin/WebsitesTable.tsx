import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
}

export const WebsitesTable = ({ websites }: { websites: Website[] }) => {
  return (
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
  );
};