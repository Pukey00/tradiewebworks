import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { WizardData } from '../../WebsiteWizard';

export const usePaymentSuccessHandler = (data: WizardData) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleSuccessfulPayment = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const isSuccess = urlParams.get('success');
      
      console.log("Checking payment success status:", isSuccess);
      console.log("Current wizard data:", data);
      
      if (isSuccess === 'true') {
        console.log("Processing successful payment...");
        try {
          const user = auth.currentUser;
          if (!user) {
            console.error("No authenticated user found after payment");
            toast({
              title: "Error",
              description: "Authentication required. Please log in and try again.",
              variant: "destructive",
            });
            navigate('/login');
            return;
          }

          console.log("Creating website document for user:", user.uid);
          const websiteData = {
            ...data,
            userId: user.uid,
            status: "pending",
            createdAt: new Date(),
            userEmail: user.email,
            paymentStatus: "completed"
          };

          console.log("Saving website data:", websiteData);
          const docRef = await addDoc(collection(db, "websites"), websiteData);
          console.log("Website document created with ID:", docRef.id);

          toast({
            title: "Success!",
            description: "Your website request has been submitted successfully.",
          });

          // Clear the URL parameters and navigate
          window.history.replaceState({}, '', '/dashboard');
          navigate('/dashboard', { replace: true });
        } catch (error) {
          console.error("Error processing successful payment:", error);
          toast({
            title: "Error",
            description: "There was a problem saving your website data. Please contact support.",
            variant: "destructive",
          });
        }
      }
    };

    handleSuccessfulPayment();
  }, [data, toast, navigate]);
};