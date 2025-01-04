import { useQuery } from "@tanstack/react-query";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const WebsitesList = () => {
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateRequest, setUpdateRequest] = useState("");
  const { toast } = useToast();

  const { data: websites, isLoading } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      console.log("Fetching websites for user:", auth.currentUser?.uid);
      const websitesRef = collection(db, "websites");
      const q = query(
        websitesRef,
        where("userId", "==", auth.currentUser?.uid)
      );
      
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

  const handleSubmitRequest = () => {
    console.log("Submitting update request for website:", selectedWebsite?.id);
    console.log("Update request content:", updateRequest);
    toast({
      title: "Update Request Sent",
      description: "We've received your website update request. Our team will contact you soon.",
    });
    setShowUpdateForm(false);
    setUpdateRequest("");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-tradie-orange" />
      </div>
    );
  }

  if (!websites?.length) {
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
          <Card key={website.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">{website.businessName || "Untitled Website"}</h3>
              <Badge 
                variant={website.status === "pending" ? "pending" : "default"}
                className="uppercase"
              >
                {website.status === "pending" ? "PENDING" : website.status || "PENDING"}
              </Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              {website.industry && (
                <p className="text-sm text-gray-600">Industry: {website.industry}</p>
              )}
              {website.location && (
                <p className="text-sm text-gray-600">Service Area: {website.location}</p>
              )}
              <p className="text-sm text-gray-600">Plan: {website.selectedPlan || "Not selected"}</p>
            </div>

            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setSelectedWebsite(website)}
            >
              <ExternalLink className="h-4 w-4" />
              View Details
            </Button>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedWebsite} onOpenChange={() => setSelectedWebsite(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Website Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedWebsite && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{selectedWebsite.businessName}</h3>
                <Badge variant={selectedWebsite.status === "pending" ? "pending" : "default"}>
                  {selectedWebsite.status === "pending" ? "PENDING" : selectedWebsite.status || "PENDING"}
                </Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Business Information</h4>
                  <div className="mt-1 space-y-2">
                    <p className="text-sm">Industry: {selectedWebsite.industry || "Not specified"}</p>
                    <p className="text-sm">Service Area: {selectedWebsite.location || "Not specified"}</p>
                    <p className="text-sm">Email: {selectedWebsite.email || "Not specified"}</p>
                    <p className="text-sm">Phone: {selectedWebsite.phoneNumber || "Not specified"}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Website Plan</h4>
                  <p className="mt-1 text-sm">{selectedWebsite.selectedPlan || "Not selected"}</p>
                </div>

                {selectedWebsite.tagline && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Business Tagline</h4>
                    <p className="mt-1 text-sm">{selectedWebsite.tagline}</p>
                  </div>
                )}

                <div className="pt-4">
                  <Button 
                    onClick={handleUpdateRequest}
                    className="w-full bg-tradie-orange hover:bg-orange-600"
                  >
                    Request Website Update
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showUpdateForm} onOpenChange={setShowUpdateForm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Request Website Update
            </DialogTitle>
          </DialogHeader>
          
          {selectedWebsite && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Business Name</h4>
                <p className="mt-1 text-lg font-medium">{selectedWebsite.businessName}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Update Details</h4>
                <Textarea
                  placeholder="Please describe the updates you'd like to make to your website..."
                  value={updateRequest}
                  onChange={(e) => setUpdateRequest(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowUpdateForm(false);
                    setUpdateRequest("");
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmitRequest}
                  className="bg-tradie-orange hover:bg-orange-600"
                >
                  Submit Request
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};