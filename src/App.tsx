import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import TrendingSection from '@/sections/TrendingSection';
import CTASection from '@/sections/CTASection';
import AIGeneratorSection from '@/sections/AIGeneratorSection';
// import CategoriesSection from '@/sections/CategoriesSection';
import ValuePropositionSection from '@/sections/ValuePropositionSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Index from '@/pages/Index';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-katha-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
