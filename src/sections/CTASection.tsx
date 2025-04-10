import Button from '@/components/Button';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-katha-purple-dark/20 to-katha-purple/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Katha's <span className="gradient-text">Community</span> Today!
        </h2>
        <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
          Dive into your favorite manga or start creating your own stories.
        </p>
        <div className="flex justify-center">
          <a href="https://discord.gg/xzjCsbqpVW" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="flex items-center gap-2">
              <img src="/discord-icon.svg" alt="Discord" className="w-5 h-5" />
              Join our Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
