import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      business: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tradie-navy">
            Get Your Website Started
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <Input
                required
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                placeholder="Smith's Plumbing"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0400 000 000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@smithsplumbing.com.au"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your business and what you're looking for..."
              rows={4}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-tradie-orange hover:bg-orange-600 text-white"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};