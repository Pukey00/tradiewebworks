import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

const ConstructionPro = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-yellow-500">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-8 w-8 text-gray-900" />
            <span className="text-2xl font-bold text-gray-900">BuildMaster</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Projects", "Services", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
            alt="Construction site"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6">
                <div className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full inline-block font-medium">
                  Professional Construction Services
                </div>
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Building Tomorrow's
                  <span className="text-yellow-500"> Landmarks Today</span>
                </h1>
                <p className="text-gray-200 text-lg">
                  With over 25 years of experience in commercial and residential construction,
                  we bring your vision to life with precision and excellence.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConstructionPro;