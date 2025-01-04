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
        <div className="flex flex-col items-center mb-8">
          <div className="relative bg-gradient-to-r from-tradie-orange/20 to-tradie-orange/10 rounded-lg py-3 px-6 w-full md:max-w-fit mx-auto transform hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-tradie-orange before:animate-[border-dance_4s_linear_infinite]">
            <div className="flex flex-col md:flex-row items-center gap-2 justify-center text-center md:text-left">
              <p className="text-tradie-orange font-bold text-lg flex items-center gap-2 justify-center md:justify-start">
                Limited Time Offer: Free Setup
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2 text-sm font-normal opacity-75">
                <span>(Save up to $500)</span>
                <span>(Ends 01/05/2025)</span>
              </div>
            </div>
          </div>
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
                className="border-2 border-white text-tradie-navy hover:bg-white/10 hover:text-white w-full"
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