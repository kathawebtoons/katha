import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import TrendingSection from '@/sections/TrendingSection';
import AIGeneratorSection from '@/sections/AIGeneratorSection';
import ValuePropositionSection from '@/sections/ValuePropositionSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted');
    
    try {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      document.querySelectorAll('.animated-element').forEach(el => {
        observer.observe(el);
      });

      return () => {
        document.querySelectorAll('.animated-element').forEach(el => {
          observer.unobserve(el);
        });
      };
    } catch (error) {
      console.error('Error in Index component:', error);
    }
  }, []);

  try {
    return (
      <div className="min-h-screen bg-katha-dark text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <TrendingSection />
        <CTASection />
        <AIGeneratorSection />
        <ValuePropositionSection />
        <TestimonialsSection />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Index component:', error);
    return (
      <div className="min-h-screen bg-katha-dark text-white p-4">
        <h1 className="text-2xl font-bold">Error loading page</h1>
        <pre className="text-red-400 mt-4">{error instanceof Error ? error.message : 'Unknown error'}</pre>
      </div>
    );
  }
};

export default Index;
