import { Droplets } from "lucide-react";

export const WaterAnimation = () => {
  return (
    <div className="relative h-24 bg-gradient-to-b from-green-800/90 via-green-700/80 to-transparent -mt-12 z-10">
      <div className="absolute inset-0 flex items-center justify-around overflow-hidden">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="relative">
            <Droplets 
              className="w-6 h-6 text-blue-200/60 animate-droplet-fall transform rotate-180" 
              style={{ 
                animationDelay: `${index * 0.4}s`,
                filter: 'blur(0.5px)'
              }} 
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-200/10 to-transparent animate-water-flow" />
      </div>
    </div>
  );
};