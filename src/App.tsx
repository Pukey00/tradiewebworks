import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Examples from "./pages/Examples";
import PlumbingPro from "./pages/PlumbingPro";
import ElectricSolutions from "./pages/ElectricSolutions";
import BuildersPortfolio from "./pages/BuildersPortfolio";
import LandscapeDesign from "./pages/LandscapeDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/plumbing-pro" element={<PlumbingPro />} />
          <Route path="/electric-solutions" element={<ElectricSolutions />} />
          <Route path="/builders-portfolio" element={<BuildersPortfolio />} />
          <Route path="/landscape-design" element={<LandscapeDesign />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;