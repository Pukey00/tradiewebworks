import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = ({ onGetQuote }: { onGetQuote: () => void }) => {
  return (
    <section className="relative bg-[url('/lovable-uploads/384e0977-be75-43b6-a65c-a2356336b86a.png')] bg-cover bg-center py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70" />
      <div className="max-w-7xl mx-auto relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Create Your Dream Garden
        </h1>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional landscape design and maintenance services to transform your outdoor space into a natural paradise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onGetQuote}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Get Free Quote <Leaf className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-green-500 hover:bg-white/10"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};