import { Button } from "@/components/ui/button";
import { ArrowLeft, Computer } from "lucide-react";
import { Link } from "react-router-dom";

const TechSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Back to Examples Header */}
      <div className="bg-white/10 backdrop-blur-sm py-2 px-6 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link to="/examples">
            <Button 
              variant="ghost" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
        </div>
      </div>

      <header className="bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Computer className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold text-white">TechFlow</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Services", "Projects", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Transforming Ideas into
                <span className="text-indigo-400"> Digital Reality</span>
              </h1>
              <p className="text-gray-300 text-lg">
                We specialize in custom software development, cloud solutions, and digital transformation 
                that drives business growth.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Tech workspace"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechSolutions;