import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

interface Website {
  id: string;
  businessName: string;
  status: string;
  userEmail: string;
  createdAt: Date;
  websiteUrl?: string;
}

export const useWebsiteMutations = () => {
  const { toast } = useToast();
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

  const deleteWebsiteMutation = useMutation({
    mutationFn: async (websiteId: string) => {
      console.log(`Deleting website ${websiteId}`);
      const websiteRef = doc(db, "websites", websiteId);
      await deleteDoc(websiteRef);
      return websiteId;
    },
    onSuccess: (websiteId) => {
      console.log(`Successfully deleted website ${websiteId}`);
      queryClient.setQueryData(['admin-websites'], (oldData: Website[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.filter(website => website.id !== websiteId);
      });

      toast({
        title: "Website Deleted",
        description: "Website has been successfully deleted",
      });
    },
    onError: (error) => {
      console.error("Error deleting website:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete website",
      });
    }
  });

  return {
    updateStatusMutation,
    updateUrlMutation,
    deleteWebsiteMutation
  };
};