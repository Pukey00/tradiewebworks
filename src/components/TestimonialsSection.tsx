import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Yantse",
      business: "Kinsey Concreting",
      quote: "Yeah, it looks professional and looks easy to use.",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Thompson",
      business: "Thompson Carpentry",
      quote: "They understood exactly what I needed. No tech jargon, just a great website that gets me work.",
      image: "/placeholder.svg",
    },
    {
      name: "Dave Wilson",
      business: "Wilson Plumbing",
      quote: "Professional, quick, and worth every cent. My customers love being able to contact me through the website.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tradie-navy">
            What Other Tradies Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-center">
              <CardContent className="pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-tradie-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};