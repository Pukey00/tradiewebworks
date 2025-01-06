import { Button } from "@/components/ui/button";
import { ArrowLeft, CircuitBoard, Code, Database, Laptop, Server } from "lucide-react";
import { Link } from "react-router-dom";

const TechSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] overflow-hidden">
      {/* Back to Examples Header */}
      <div className="bg-black/20 backdrop-blur-sm py-2 px-6 border-b border-[#0EA5E9]/20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link to="/examples">
            <Button 
              variant="ghost" 
              className="bg-[#0EA5E9]/10 backdrop-blur-sm text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors"
            >
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
        </div>
      </div>

      <header className="bg-black/40 backdrop-blur-md border-b border-[#0EA5E9]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-8 w-8 text-[#0EA5E9]" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]">
              TechFlow
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Services", "Projects", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-300 hover:text-[#0EA5E9] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0EA5E9] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-10 w-72 h-72 bg-[#0EA5E9]/10 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-6 z-10">
              <div className="flex items-center gap-2 text-[#0EA5E9] mb-4">
                <Code className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wider">INNOVATIVE SOLUTIONS</span>
              </div>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Transforming Ideas into
                <span className="block bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-gray-300 text-lg">
                We specialize in custom software development, cloud solutions, and digital transformation 
                that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                >
                  View Projects
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-[#0EA5E9]" />
                  <span className="text-gray-300">Cloud Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-[#0EA5E9]" />
                  <span className="text-gray-300">Data Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#0EA5E9]" />
                  <span className="text-gray-300">Custom Apps</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/30 to-[#8B5CF6]/30 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Tech workspace"
                className="relative rounded-lg shadow-2xl border border-white/10 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechSolutions;