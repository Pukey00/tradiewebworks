import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ExampleWebsite = ({ title, description, imageUrl, link }: { 
  title: string; 
  description: string; 
  imageUrl: string;
  link?: string;
}) => (
  <Link to={link || "#"}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover object-top" />
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
      imageUrl: "/lovable-uploads/7c46b808-9715-4ae8-b989-fb7531df1aec.png",
      link: "/plumbing-pro"
    },
    {
      title: "Electric Solutions",
      description: "Clean, professional design showcasing electrical services with a focus on safety and reliability.",
      imageUrl: "/lovable-uploads/55ee6f53-2746-4a5c-81f0-d7d766942cda.png",
      link: "/electric-solutions"
    },
    {
      title: "Builder's Portfolio",
      description: "Stunning showcase of construction projects with detailed galleries and project timelines.",
      imageUrl: "/lovable-uploads/85338e0b-9539-4bba-bdfe-b2a0e4913a1b.png",
      link: "/builders-portfolio"
    },
    {
      title: "Landscape Design",
      description: "Beautiful, visual-focused website highlighting landscape transformation projects and garden designs.",
      imageUrl: "/lovable-uploads/3419f505-4a5d-428a-9a9f-a1ac6c8fb07a.png",
      link: "/landscape-design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-tradie-navy hover:text-tradie-orange transition-colors mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </Link>
          
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
      <Footer />
    </div>
  );
};

export default Examples;