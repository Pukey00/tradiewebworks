import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BarChart2, Trash2 } from "lucide-react";
import { useDeleteWebsite } from "./websiteMutations";

interface WebsiteTableRowProps {
  website: {
    id: string;
    businessName: string;
    status: string;
    userEmail: string;
    createdAt: Date;
    websiteUrl?: string;
  };
}

export const WebsiteTableRow = ({ website }: WebsiteTableRowProps) => {
  const deleteMutation = useDeleteWebsite();

  const handleDelete = () => {
    console.log("Deleting website:", website.id);
    deleteMutation.mutate(website.id);
  };

  return (
    <TableRow>
      <TableCell>{website.businessName}</TableCell>
      <TableCell>{website.userEmail}</TableCell>
      <TableCell>{website.status}</TableCell>
      <TableCell>
        {website.websiteUrl ? (
          <a
            href={website.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Website
          </a>
        ) : (
          "Not available"
        )}
      </TableCell>
      <TableCell>
        {website.createdAt.toLocaleDateString()}
      </TableCell>
      <TableCell className="flex items-center gap-2">
        <Link to={`/analytics/${website.id}`}>
          <Button variant="outline" size="sm">
            <BarChart2 className="h-4 w-4 mr-1" />
            Analytics
          </Button>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the website
                for {website.businessName} and remove all associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};