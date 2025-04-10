import { cn } from "@/lib/utils";

interface MangaCardProps {
  title: string;
  cover: string;
  genres: string[];
  type: "manga" | "webtoon" | "manhwa";
  className?: string;
}

const MangaCard = ({ title, cover, genres, type, className }: MangaCardProps) => {
  return (
    <div className={cn("bg-card rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-105 cursor-pointer", className)}>
      <div className="relative h-64 overflow-hidden">
        <img src={cover} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-[#F258B2] text-white text-xs font-bold uppercase px-2 py-1 rounded">
          {type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {genres.map((genre, index) => (
            <span 
              key={index} 
              className="text-xs bg-muted px-2 py-1 rounded-full text-white/80"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
