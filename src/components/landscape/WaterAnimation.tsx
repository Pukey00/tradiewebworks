import { Droplets } from "lucide-react";

export const WaterAnimation = () => {
  return (
    <div className="relative h-16 bg-gradient-to-r from-green-800/50 to-green-600/50 -mt-16 z-10">
      <div className="absolute inset-0 flex items-center justify-around">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            <Droplets 
              className="w-6 h-6 text-blue-200/70 animate-droplet-fall" 
              style={{ animationDelay: `${index * 0.3}s` }} 
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0">
        <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent animate-water-flow" />
      </div>
    </div>
  );
};