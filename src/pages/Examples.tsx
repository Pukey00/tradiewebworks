import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExampleWebsite = ({ title, description, imageUrl, link }: { 
  title: string; 
  description: string; 
  imageUrl: string;
  link?: string;
}) => (
  <Link to={link || "#"}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-tradie-navy mb-3">{title}</h3>
        <p className="text-tradie-gray text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </Link>
);

const Examples = () => {
  const examples = [
    {
      title: "Plumbing Pro",
      description: "Modern, professional website designed specifically for plumbers. Features emergency contact information and comprehensive service listings.",
      imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      link: "/plumbing-pro"
    },
    {
      title: "Electric Solutions",
      description: "Clean, professional design showcasing electrical services with a focus on safety and reliability.",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      link: "/electric-solutions"
    },
    {
      title: "Builder's Portfolio",
      description: "Stunning showcase of construction projects with detailed galleries and project timelines.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "/builders-portfolio"
    },
    {
      title: "Landscape Design",
      description: "Beautiful, visual-focused website highlighting landscape transformation projects and garden designs.",
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      link: "/landscape-design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-tradie-navy py-6 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-tradie-orange transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-tradie-navy mb-4">
              Website Examples
            </h1>
            <p className="text-xl text-tradie-gray max-w-2xl mx-auto">
              Explore our professionally designed website templates, crafted specifically for tradies like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {examples.map((example, index) => (
              <ExampleWebsite key={index} {...example} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Examples;