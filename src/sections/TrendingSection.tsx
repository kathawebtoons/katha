
import { useRef } from 'react';
import MangaCard from '@/components/MangaCard';
import Button from '@/components/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const TrendingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver({
    target: sectionRef,
    onIntersect: () => {
      sectionRef.current?.classList.add('visible');
    },
  });

  const trendingSeries = [
    {
      id: 1,
      title: "Marry My Husband",
      cover: "https://images.unsplash.com/photo-1629324482344-af70acd93f62?q=80&w=1769&auto=format&fit=crop",
      genres: ["Romance", "Drama", "Fantasy"],
      type: "webtoon"
    },
    {
      id: 2,
      title: "Today's Webtoon",
      cover: "https://images.unsplash.com/photo-1621433223376-e0dc4a2f359c?q=80&w=1770&auto=format&fit=crop",
      genres: ["Comedy", "Slice of Life"],
      type: "webtoon"
    },
    {
      id: 3,
      title: "Demon Slayer",
      cover: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1770&auto=format&fit=crop",
      genres: ["Action", "Supernatural"],
      type: "manga"
    },
    {
      id: 4,
      title: "Solo Leveling",
      cover: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=1770&auto=format&fit=crop",
      genres: ["Action", "Fantasy", "Adventure"],
      type: "manhwa"
    },
  ];

  return (
    <section id="trending" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trending <span className="gradient-text">Webtoons, Manga & Manhwa</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover the most popular titles that readers are loving right now, from action-packed adventures to heartwarming romances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trendingSeries.map((series) => (
              <MangaCard
                key={series.id}
                title={series.title}
                cover={series.cover}
                genres={series.genres}
                type={series.type as "manga" | "webtoon" | "manhwa"}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button>Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
