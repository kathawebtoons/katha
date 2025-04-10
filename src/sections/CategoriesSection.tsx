
import { useRef } from 'react';
import CategoryCard from '@/components/CategoryCard';
import { BookOpen, BookText, Image, BookMarked, Sparkles, FileText, Smartphone } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const CategoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: sectionRef,
    onIntersect: () => {
      sectionRef.current?.classList.add('visible');
    },
  });

  const categories = [
    {
      id: 1,
      title: "Manga Anime",
      description: "Explore Japanese comics with unique art styles and storytelling.",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Manga Books",
      description: "Enjoy physical and digital manga collections from top publishers.",
      icon: BookText
    },
    {
      id: 3,
      title: "Manga Reading Sites",
      description: "Discover the best platforms to read your favorite manga series.",
      icon: BookMarked
    },
    {
      id: 4,
      title: "Manga Websites",
      description: "Find curated manga websites for an immersive reading experience.",
      icon: Image
    },
    {
      id: 5,
      title: "AI Manga",
      description: "Experience innovative manga created with artificial intelligence.",
      icon: Sparkles
    },
    {
      id: 6,
      title: "Comic Book Generator",
      description: "Create your own comic books with our powerful tools.",
      icon: FileText
    },
    {
      id: 7,
      title: "Webtoon Mod APK",
      description: "Access enhanced features for your favorite webtoon applications.",
      icon: Smartphone
    }
  ];

  return (
    <section id="categories" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore by <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find exactly what you're looking for with our curated categories of manga, webtoons, and comics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
