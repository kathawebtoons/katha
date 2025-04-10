
import { useRef } from 'react';
import { BookOpen, Sparkles, Users } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const ValuePropositionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: sectionRef,
    onIntersect: () => {
      sectionRef.current?.classList.add('visible');
    },
  });

  const valueProps = [
    {
      id: 1,
      title: "Premium Content",
      description: "Enjoy unlimited access to top manga, manhwa, and webtoon series.",
      icon: BookOpen
    },
    {
      id: 2,
      title: "AI Innovation",
      description: "Easily create anime and manga with our cutting-edge AI comic generator.",
      icon: Sparkles
    },
    {
      id: 3,
      title: "Vibrant Community",
      description: "Join thousands of manga lovers and creators worldwide.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Katha</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're redefining the way you experience manga and webtoons with our unique features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.id} className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-katha-purple/20 rounded-full mb-6">
                  <prop.icon size={32} className="text-katha-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {prop.title}
                </h3>
                <p className="text-white/70">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
