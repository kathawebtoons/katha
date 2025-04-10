
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

const CategoryCard = ({ title, icon: Icon, description }: CategoryCardProps) => {
  return (
    <div className="category-card">
      <div className="flex flex-col items-center text-center">
        <Icon size={48} className="text-katha-purple mb-4" />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
