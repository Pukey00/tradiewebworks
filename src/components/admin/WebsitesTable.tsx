import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { WebsiteTableRow } from "./WebsiteTableRow";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch = 
      website.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || website.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  console.log("Filtered websites:", filteredWebsites);
  console.log("Current search term:", searchTerm);
  console.log("Current status filter:", statusFilter);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by business name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending" className="text-tradie-orange">Pending</SelectItem>
            <SelectItem value="approved" className="text-green-600">Approved</SelectItem>
            <SelectItem value="rejected" className="text-red-600">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
          {filteredWebsites && filteredWebsites.length > 0 ? (
            filteredWebsites.map((website) => (
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
    </div>
  );
};