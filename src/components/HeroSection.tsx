import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WebsiteWizard } from "./WebsiteWizard/WebsiteWizard";

export const HeroSection = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <div className="relative bg-tradie-navy text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Websites Built
              <span className="text-tradie-orange"> Tradie Tough</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Simple, effective websites that work as hard as you do. Get more jobs and look professional online.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-tradie-orange hover:bg-orange-600 text-white w-full sm:w-48"
                onClick={() => setShowWizard(true)}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
      </div>
      {showWizard && <WebsiteWizard onClose={() => setShowWizard(false)} />}
    </>
  );
};