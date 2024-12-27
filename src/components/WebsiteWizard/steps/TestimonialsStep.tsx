import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { WizardData } from "../WebsiteWizard";
import { X } from "lucide-react";

interface StepProps {
  data: WizardData;
  setData: (data: WizardData) => void;
}

interface TestimonialForm {
  name: string;
  business: string;
  quote: string;
}

export const TestimonialsStep = ({ data, setData }: StepProps) => {
  const [testimonial, setTestimonial] = useState<TestimonialForm>({
    name: "",
    business: "",
    quote: "",
  });

  const addTestimonial = () => {
    if (testimonial.name && testimonial.quote) {
      setData({
        ...data,
        testimonials: [...data.testimonials, testimonial],
      });
      setTestimonial({ name: "", business: "", quote: "" });
    }
  };

  const removeTestimonial = (index: number) => {
    const newTestimonials = [...data.testimonials];
    newTestimonials.splice(index, 1);
    setData({ ...data, testimonials: newTestimonials });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-tradie-navy">Testimonials</h2>
        <p className="text-gray-600">Add customer testimonials (optional)</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Customer Name</Label>
          <Input
            id="name"
            value={testimonial.name}
            onChange={(e) =>
              setTestimonial({ ...testimonial, name: e.target.value })
            }
            placeholder="John Smith"
          />
        </div>

        <div>
          <Label htmlFor="business">Business (optional)</Label>
          <Input
            id="business"
            value={testimonial.business}
            onChange={(e) =>
              setTestimonial({ ...testimonial, business: e.target.value })
            }
            placeholder="Smith's Business"
          />
        </div>

        <div>
          <Label htmlFor="quote">Testimonial</Label>
          <Textarea
            id="quote"
            value={testimonial.quote}
            onChange={(e) =>
              setTestimonial({ ...testimonial, quote: e.target.value })
            }
            placeholder="What did they say about your work?"
          />
        </div>

        <Button onClick={addTestimonial} className="w-full">
          Add Testimonial
        </Button>

        <div className="space-y-4 mt-6">
          {data.testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg relative"
            >
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeTestimonial(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <p className="font-medium">{t.name}</p>
              {t.business && (
                <p className="text-sm text-gray-600">{t.business}</p>
              )}
              <p className="mt-2">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};