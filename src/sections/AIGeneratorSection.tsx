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
      title: "1. Enter Story Prompt",
      description: "Describe your scene, character, or entire story concept.",
      icon: PenTool
    },
    {
      id: 2,
      title: "2. Select Art Style",
      description: "Choose from various art styles or make your own!",
      icon: Sparkles
    },
    {
      id: 3,
      title: "3. Your Web Comic is ready!",
      description: "Our AI generates high-quality output within seconds.",
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
                {step.id === 1 && (
                  <div className="w-full h-96 mb-4 overflow-hidden rounded-lg flex-grow">
                    <img src="/Text.png" alt="Story Prompt Example" className="w-full h-full object-cover" />
                  </div>
                )}
                {step.id === 2 && (
                  <div className="w-full h-96 mb-4 overflow-hidden rounded-lg flex-grow">
                    <img src="/ArtStyles.png" alt="Art Styles Example" className="w-full h-full object-cover" />
                  </div>
                )}
                {step.id === 3 && (
                  <div className="w-full h-96 mb-4 overflow-hidden rounded-lg flex-grow">
                    <img src="/Image.png" alt="Comic Generation Example" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Katha's AI Agent transforms your ideas into stunning manga or manhwa. Perfect for storytellers of all levels. You can even train a model on your own art style!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGeneratorSection;
