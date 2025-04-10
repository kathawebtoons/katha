
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${scrolled ? 'bg-katha-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold gradient-text">Katha</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#trending" className="nav-link">Trending</a>
            <a href="#ai-generator" className="nav-link">AI Generator</a>
            <a href="#categories" className="nav-link">Categories</a>
            <Button variant="primary" size="sm">Sign In</Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-secondary p-4 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="nav-link block py-2">Home</a>
              <a href="#trending" className="nav-link block py-2">Trending</a>
              <a href="#ai-generator" className="nav-link block py-2">AI Generator</a>
              <a href="#categories" className="nav-link block py-2">Categories</a>
              <Button variant="primary" size="sm" className="w-full">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
