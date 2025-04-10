
import { useRef } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: sectionRef,
    onIntersect: () => {
      sectionRef.current?.classList.add('visible');
    },
  });

  const testimonials = [
    {
      id: 1,
      name: "Alex",
      quote: "The AI manga creator is unbelievable! I created an entire webtoon series without any drawing skills."
    },
    {
      id: 2,
      name: "Mia",
      quote: "I love the variety of manga and webtoons available. Katha has become my go-to platform for all my reading needs."
    },
    {
      id: 3,
      name: "Jason",
      quote: "The community features are amazing. I've connected with other manga enthusiasts and even collaborated on stories!"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">Readers & Creators</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See what our community has to say about their experience with Katha.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
