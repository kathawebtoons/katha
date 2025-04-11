import { Instagram, Twitter, Youtube, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Katha (Building the Footer)</h3>
            <p className="text-white/70 mb-4">
              Your ultimate destination for manga online, webtoon series, and AI-generated comics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-katha-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-katha-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-katha-purple transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-katha-purple transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Katha</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Manga Online</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Webtoon XYZ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Manga Reading App</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Manga Generator</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Anime AI Art Generator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Katha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
