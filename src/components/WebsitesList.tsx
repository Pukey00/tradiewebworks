import { useQuery } from "@tanstack/react-query";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { submitUpdateRequest } from "@/api/submit-update-request";
import { WebsiteCard } from "./WebsiteCard";
import { WebsiteDetailsDialog } from "./WebsiteDetailsDialog";
import { UpdateRequestDialog } from "./UpdateRequestDialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const WebsitesList = () => {
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateRequest, setUpdateRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      console.log("Starting to fetch websites");
      console.log("Current user ID:", auth.currentUser?.uid);
      
      if (!auth.currentUser?.uid) {
        console.error("No authenticated user found");
        throw new Error("User must be authenticated to fetch websites");
      }

      const websitesRef = collection(db, "websites");
      const q = query(
        websitesRef,
        where("userId", "==", auth.currentUser.uid)
      );
      
      console.log("Executing Firestore query");
      const querySnapshot = await getDocs(q);
      const websites = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      console.log("Fetched websites:", websites);
      return websites;
    },
    enabled: !!auth.currentUser
  });

  const handleUpdateRequest = () => {
    console.log("Opening update request form for website:", selectedWebsite?.id);
    setShowUpdateForm(true);
  };

  const handleSubmitRequest = async () => {
    if (!updateRequest.trim()) {
      toast({
        title: "Error",
        description: "Please enter your update request details",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Submitting update request for website:", selectedWebsite?.id);
    console.log("Update request content:", updateRequest);

    try {
      await submitUpdateRequest({
        businessName: selectedWebsite.businessName,
        updateRequest: updateRequest,
        websiteId: selectedWebsite.id
      });

      toast({
        title: "Update Request Sent",
        description: "We've received your website update request. Our team will contact you soon.",
      });
      setShowUpdateForm(false);
      setUpdateRequest("");
    } catch (error) {
      console.error('Error sending update request:', error);
      toast({
        title: "Error",
        description: "Failed to send update request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error) {
    console.error("Error fetching websites:", error);
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load your websites. Please try refreshing the page.
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-tradie-orange" />
      </div>
    );
  }

  if (!websites?.length) {
    console.log("No websites found for user");
    return (
      <div className="bg-white shadow rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          No Websites Yet
        </h3>
        <p className="text-gray-600 mb-6">
          Get started by creating your first professional website. Our wizard will guide you through the process.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website: any) => (
          <WebsiteCard
            key={website.id}
            website={website}
            onViewDetails={setSelectedWebsite}
          />
        ))}
      </div>

      <WebsiteDetailsDialog
        website={selectedWebsite}
        open={!!selectedWebsite}
        onOpenChange={(open) => !open && setSelectedWebsite(null)}
        onRequestUpdate={handleUpdateRequest}
      />

      <UpdateRequestDialog
        website={selectedWebsite}
        open={showUpdateForm}
        onOpenChange={setShowUpdateForm}
        updateRequest={updateRequest}
        onUpdateRequestChange={(value) => setUpdateRequest(value)}
        onSubmit={handleSubmitRequest}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default WebsitesList;