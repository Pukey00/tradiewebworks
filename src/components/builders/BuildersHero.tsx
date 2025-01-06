import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuildersHeroProps {
  scrollToContact: () => void;
}

export const BuildersHero = ({ scrollToContact }: BuildersHeroProps) => {
  return (
    <section className="relative bg-gradient-to-b from-[#555] to-[#777] text-white py-20 px-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Building Excellence, Creating Landmarks
          </h1>
          <p className="text-xl text-gray-200">
            From concept to completion, we transform visions into architectural masterpieces
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-[#1A1F2C] group"
              onClick={scrollToContact}
            >
              Start Your Project <Building className="ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="aspect-square rounded-full bg-gradient-to-br from-orange-400/20 to-yellow-400/20 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg">
              <div className="w-24 h-24 bg-white/90 rounded transform -rotate-45 flex items-center justify-center">
                <Building className="w-16 h-16 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};