
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import TrendingSection from '@/sections/TrendingSection';
import AIGeneratorSection from '@/sections/AIGeneratorSection';
import CategoriesSection from '@/sections/CategoriesSection';
import ValuePropositionSection from '@/sections/ValuePropositionSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';

const Index = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-katha-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <AIGeneratorSection />
      <CategoriesSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
