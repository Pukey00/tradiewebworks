import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WebsiteWizard } from "./WebsiteWizard/WebsiteWizard";

export const HeroSection = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="relative bg-tradie-navy text-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 bg-gradient-to-r from-tradie-orange/20 to-tradie-orange/10 border-2 border-tradie-orange rounded-lg py-3 px-6 max-w-fit mx-auto transform hover:scale-105 transition-all duration-300 animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          <p className="text-tradie-orange font-bold text-lg flex items-center gap-2">
            <span className="animate-bounce">🎉</span>
            Limited Time Offer: Free Setup
            <span className="text-sm font-normal opacity-75">(Save up to $500)</span>
            <span className="text-sm font-normal opacity-75">(Ends 01/05/2025)</span>
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Websites Built
            <span className="text-tradie-orange"> Tradie Tough</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Simple, effective websites that work as hard as you do. Get more jobs and look professional online.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Cancel your subscription anytime - no lock-in contracts
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-full sm:w-48">
              <Button 
                size="lg"
                className="bg-tradie-orange hover:bg-orange-600 text-white w-full"
                onClick={() => setShowWizard(true)}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <Link to="/examples" className="w-full sm:w-48">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white/10 w-full"
              >
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <WebsiteWizard open={showWizard} onOpenChange={setShowWizard} />
    </div>
  );
};