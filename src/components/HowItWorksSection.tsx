import { Wand2, Code2, Globe, Rocket } from "lucide-react";

const steps = [
  {
    icon: Wand2,
    title: "Use Our Wizard",
    description: "Enter your business details, upload your logo, and choose your preferred design style in our easy-to-use wizard."
  },
  {
    icon: Code2,
    title: "We Build Your Page",
    description: "Once you complete the wizard, we'll create a stunning landing page tailored to your brand."
  },
  {
    icon: Globe,
    title: "Connect Your Domain",
    description: "If you have a domain, we'll help connect it. Don't have one? We can guide you in getting one."
  },
  {
    icon: Rocket,
    title: "Launch & Maintain",
    description: "Your page goes live! Choose a plan to keep it updated, secure, and running smoothly."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-tradie-navy mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-tradie-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-tradie-orange/20 transition-colors">
                <step.icon className="w-8 h-8 text-tradie-orange" />
              </div>
              <h3 className="text-xl font-semibold text-tradie-navy mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};