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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-tradie-navy mb-2">{title}</h3>
        <p className="text-tradie-gray">{description}</p>
      </div>
    </div>
  </Link>
);

const Examples = () => {
  const examples = [
    {
      title: "Plumbing Pro",
      description: "A modern website for plumbers featuring service listings and emergency contact information.",
      imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      link: "/plumbing-pro"
    },
    {
      title: "Electric Solutions",
      description: "Clean and professional design for electricians with a focus on residential services.",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      link: "/electric-solutions"
    },
    {
      title: "Builder's Portfolio",
      description: "Showcase of construction projects with before and after galleries.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "/builders-portfolio"
    },
    {
      title: "Landscape Design",
      description: "Visual-focused website highlighting outdoor transformation projects.",
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      link: "/landscape-design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-tradie-navy py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-tradie-orange">
              <ArrowLeft className="mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-tradie-navy mb-4">Website Examples</h1>
          <p className="text-xl text-tradie-gray mb-8">
            Check out some of our website designs tailored for tradies
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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