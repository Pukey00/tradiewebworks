import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = ({ onGetQuote }: { onGetQuote: () => void }) => {
  return (
    <section className="relative bg-[url('/lovable-uploads/384e0977-be75-43b6-a65c-a2356336b86a.png')] bg-cover bg-center py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-800/80" />
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Create Your Dream Garden
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional landscape design and maintenance services to transform your outdoor space into a natural paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={onGetQuote}
              className="bg-white text-green-800 hover:bg-green-50"
            >
              Get Free Quote <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};