
import { useRef } from 'react';
import Button from '@/components/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: heroRef,
    onIntersect: () => {
      heroRef.current?.classList.add('visible');
    },
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-katha-purple/10 to-transparent" />
      
      {/* Background abstract shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-katha-purple-dark blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-katha-purple blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="animated-element">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Discover, Read & Create <span className="gradient-text">Manga, Webtoons, and Manhwa</span> with AI
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Your ultimate destination for manga online, webtoon series, and AI-generated comics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("trending")}
              >
                Start Reading
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("ai-generator")}
              >
                Create with AI
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop"
              alt="Manga collection" 
              className="rounded-xl shadow-2xl w-full object-cover animated-element visible"
              style={{
                aspectRatio: "4/3",
                objectFit: "cover",
                animation: "fadeIn 1s ease-out forwards",
                transform: "perspective(800px) rotateY(-15deg) rotateX(5deg) rotate(1deg)",
                boxShadow: "rgba(187, 134, 252, 0.4) 5px 5px 20px"
              }}
            />
            <div className="absolute -bottom-6 -right-6 p-4 bg-card rounded-xl shadow-xl max-w-xs animated-element"
              style={{
                animation: "fadeIn 1s ease-out 0.3s forwards",
                opacity: 0
              }}
            >
              <p className="text-sm font-medium">
                "Dive into the immersive world of manga and create your own stories with our AI tools!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
