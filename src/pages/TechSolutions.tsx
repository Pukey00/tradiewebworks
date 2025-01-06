import { ArrowLeft, Code, Database, Globe, Server, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const TechSolutions = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Back to Examples Header */}
      <div className="bg-[#0A0F1C] py-2 px-6 border-b border-[#1A1F2C]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link to="/examples">
            <Button 
              variant="ghost" 
              className="bg-[#1A1F2C] text-white hover:bg-[#2A2F3C] transition-colors"
            >
              <ArrowLeft className="mr-2" /> Back to Examples
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section with Animated Gradient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="bg-blue-500/10 rounded-lg py-2 px-4">
                  <p className="text-blue-400 font-medium">Innovation Through Technology</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Building Digital Solutions for Tomorrow
              </h1>
              <p className="text-xl text-gray-300">
                Transforming businesses through cutting-edge technology and innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Technology Solutions"
                className="rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Software Development",
                description: "Tailored solutions built with cutting-edge technology",
              },
              {
                icon: Globe,
                title: "Web Development",
                description: "Responsive and scalable web applications",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Protecting your digital assets with advanced security",
              },
              {
                icon: Database,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and services",
              },
              {
                icon: Server,
                title: "DevOps",
                description: "Streamlined development and deployment processes",
              },
              {
                icon: Zap,
                title: "AI & Machine Learning",
                description: "Intelligent solutions for complex problems",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-[#1A1F2C] hover:bg-[#2A2F3C] transition-colors group"
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#1A1F2C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Clients Worldwide" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Tech Experts" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React", "Node.js", "Python", "AWS",
              "Docker", "Kubernetes", "MongoDB", "TypeScript"
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-[#1A1F2C] text-center hover:bg-[#2A2F3C] transition-colors"
              >
                <p className="text-blue-500 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 bg-[#1A1F2C]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechSolutions;