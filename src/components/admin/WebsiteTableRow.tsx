import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ExternalLink, Trash2 } from "lucide-react";
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
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useWebsiteMutations } from "./websiteMutations";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

interface WebsiteTableRowProps {
  website: Website;
  updatingId: string | null;
  editingUrl: { id: string; url: string } | null;
  onStatusUpdate: (websiteId: string, currentStatus: string) => void;
  onUrlUpdate: (websiteId: string, currentUrl?: string) => void;
  onUrlChange: (id: string, url: string) => void;
}

export const WebsiteTableRow = ({
  website,
  updatingId,
  editingUrl,
  onStatusUpdate,
  onUrlUpdate,
  onUrlChange
}: WebsiteTableRowProps) => {
  const { deleteWebsiteMutation } = useWebsiteMutations();

  const handleDelete = async () => {
    console.log("Deleting website:", website.id);
    await deleteWebsiteMutation.mutateAsync(website.id);
  };

  return (
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
              onChange={(e) => onUrlChange(website.id, e.target.value)}
              placeholder="Enter website URL"
              className="text-sm"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {website.websiteUrl ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open website</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
            onClick={() => onStatusUpdate(website.id, website.status)}
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
            onClick={() => onUrlUpdate(website.id, website.websiteUrl)}
          >
            {editingUrl?.id === website.id ? 'Save URL' : 'Edit URL'}
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Website</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete {website.businessName}'s website? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
};