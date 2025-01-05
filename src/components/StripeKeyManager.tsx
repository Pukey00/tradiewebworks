import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setStripePublishableKey } from '@/lib/stripe';
import { useToast } from "@/hooks/use-toast";

export const StripeKeyManager = () => {
  const [key, setKey] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    if (!key.startsWith('pk_')) {
      toast({
        title: "Invalid Key",
        description: "Please enter a valid Stripe publishable key starting with 'pk_'",
        variant: "destructive",
      });
      return;
    }

    setStripePublishableKey(key);
    toast({
      title: "Success",
      description: "Stripe publishable key has been updated",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter Stripe publishable key"
          className="flex-1"
        />
        <Button onClick={handleSave}>Save Key</Button>
      </div>
    </div>
  );
};