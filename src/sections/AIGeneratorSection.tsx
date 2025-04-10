
import { useRef } from 'react';
import Button from '@/components/Button';
import { Sparkles, PenTool, ImagePlus } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const AIGeneratorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: sectionRef,
    onIntersect: () => {
      sectionRef.current?.classList.add('visible');
    },
  });

  const steps = [
    {
      id: 1,
      title: "Enter Story Prompt",
      description: "Describe your scene, character, or entire story concept.",
      icon: PenTool
    },
    {
      id: 2,
      title: "Select Art Style",
      description: "Choose from various manga and anime art styles.",
      icon: Sparkles
    },
    {
      id: 3,
      title: "Get Your Comic Instantly",
      description: "Our AI generates high-quality manga panels within seconds.",
      icon: ImagePlus
    }
  ];

  return (
    <section id="ai-generator" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create <span className="gradient-text">Manga & Webtoons</span> with AI
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Generate anime-style art, manga comics, and webtoons instantly. No artistic skills required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-katha-purple/20 rounded-full mb-6">
                  <step.icon size={32} className="text-katha-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {step.description}
                </p>
                <div className="text-katha-purple font-bold text-4xl mt-auto">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Transform your ideas into stunning manga or webtoon-style art with our powerful AI Comic Generator. Perfect for storytellers of all levels.
            </p>
            <Button size="lg">
              Try AI Comic Generator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGeneratorSection;
