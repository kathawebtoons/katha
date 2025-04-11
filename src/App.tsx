import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import TrendingSection from '@/sections/TrendingSection';
import CTASection from '@/sections/CTASection';
import AIGeneratorSection from '@/sections/AIGeneratorSection';
// import CategoriesSection from '@/sections/CategoriesSection';
import ValuePropositionSection from '@/sections/ValuePropositionSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-katha-dark">
        <Navbar />
        <main>
          <HeroSection />
          <TrendingSection />
          <CTASection />
          <AIGeneratorSection />
          {/* <CategoriesSection /> */}
          <ValuePropositionSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
