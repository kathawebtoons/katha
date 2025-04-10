
interface TestimonialCardProps {
  name: string;
  avatar?: string;
  quote: string;
}

const TestimonialCard = ({ name, avatar, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg font-bold text-white">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-white/60 text-sm">Katha User</p>
        </div>
      </div>
      <p className="text-white/80 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
