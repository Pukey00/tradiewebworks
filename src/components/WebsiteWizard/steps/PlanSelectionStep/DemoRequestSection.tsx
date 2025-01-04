import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface DemoRequestSectionProps {
  isSubmitting: boolean;
  onSubmit: () => void;
}

export const DemoRequestSection = ({ isSubmitting, onSubmit }: DemoRequestSectionProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-2">Want to See How Your Website Will Look?</h3>
      <p className="text-gray-600 mb-4">
        Get a free demo of your website based on the details you've entered so far. No commitment required!
      </p>
      <Button 
        variant="secondary" 
        size="lg" 
        className="w-full md:w-auto"
        onClick={onSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Your Website...
          </>
        ) : (
          "Request Free Demo"
        )}
      </Button>
    </div>
  );
};