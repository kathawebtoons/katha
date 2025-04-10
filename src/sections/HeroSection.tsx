import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import Button from '@/components/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Check, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Lazy load the ImageGallery component
const ImageGallery = lazy(() => import('@/components/ImageGallery'));

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useLocalStorage, setUseLocalStorage] = useState(false);
  
  // Check if we should use local storage fallback
  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        const { error } = await supabase.from('waitlist').select('count').limit(1);
        if (error && error.code === '42P01') {
          console.log('Using local storage fallback for waitlist');
          setUseLocalStorage(true);
        }
      } catch (err) {
        console.error('Error checking Supabase connection:', err);
        setUseLocalStorage(true);
      }
    };
    
    checkSupabaseConnection();
  }, []);
  
  useIntersectionObserver({
    target: heroRef,
    onIntersect: () => {
      heroRef.current?.classList.add('visible');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setError('');
    console.log('Starting submission process...');
    console.log('Email:', email);

    try {
      if (useLocalStorage) {
        // Use local storage fallback
        const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
        
        // Check if email already exists
        if (waitlist.some((item: any) => item.email === email)) {
          setError('This email is already on the waitlist!');
          setIsLoading(false);
          return;
        }
        
        // Add to local storage
        waitlist.push({
          email,
          source: 'website',
          created_at: new Date().toISOString()
        });
        
        localStorage.setItem('waitlist', JSON.stringify(waitlist));
        setIsSubmitted(true);
        setEmail('');
        setIsLoading(false);
        return;
      }

      // Check if email already exists
      const { data: existingEmails, error: fetchError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single();

      if (fetchError) {
        console.error('Fetch error:', fetchError);
        
        // If the table doesn't exist yet, we'll get a specific error code
        if (fetchError.code === '42P01') {
          setError('Database setup in progress. Please try again in a few minutes.');
          setIsLoading(false);
          return;
        }
        
        // For other errors, we'll still check if it's not a "not found" error
        if (fetchError.code !== 'PGRST116') {
          throw fetchError;
        }
      }

      if (existingEmails) {
        setError('This email is already on the waitlist!');
        setIsLoading(false);
        return;
      }

      // Add new email to waitlist
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([
          {
            email,
            source: 'website',
            created_at: new Date().toISOString()
          }
        ]);

      if (insertError) {
        console.error('Insert error:', insertError);
        
        // If the table doesn't exist yet, we'll get a specific error code
        if (insertError.code === '42P01') {
          setError('Database setup in progress. Please try again in a few minutes.');
          setIsLoading(false);
          return;
        }
        
        throw insertError;
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Error details:', err);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-katha-purple/10 to-transparent" />
      
      {/* Background abstract shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-katha-purple-dark blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-katha-purple blur-3xl" />
      </div>
      
      {/* Full-width image gallery */}
      <div className="w-full mt-24">
        <Suspense fallback={<div className="h-64 bg-katha-purple/5 animate-pulse rounded-lg" />}>
          <ImageGallery />
        </Suspense>
      </div>
      
      <div className="container mx-auto max-w-6xl px-6 mt-12">
        {/* Centered text content */}
        <div className="flex flex-col items-center text-center">
          <div ref={heroRef} className="animated-element max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Discover, Read, Create <span className="gradient-text">Manga & Manhwa</span>
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Feel the story. See the magic!
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="animate-pulse inline-block w-2 h-2 bg-katha-purple rounded-full"></span>
              <p className="text-sm text-katha-purple font-semibold">Coming Soon - Late 2026</p>
              <span className="animate-pulse inline-block w-2 h-2 bg-katha-purple rounded-full"></span>
            </div>
            
            {isSubmitted ? (
              <div className="w-full max-w-md mx-auto bg-katha-purple/20 rounded-lg p-6 border border-katha-purple/30">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-katha-purple/20 rounded-full p-2">
                    <Check className="w-6 h-6 text-katha-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Thank you for joining our waitlist!</h3>
                <p className="text-white/70 text-sm">
                  We'll keep you updated on our progress and let you know as soon as we launch. 
                  Get ready for an amazing journey into the world of Manga & Manhwa!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-katha-purple focus:ring-1 focus:ring-katha-purple"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 bg-gradient-to-r from-katha-purple to-katha-purple-light text-black font-semibold rounded-lg transition-all ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isLoading ? 'Saving...' : 'Notify Me'}
                  </button>
                </div>
                {error && (
                  <div className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
                <p className="text-sm text-white/50 mt-4">
                  We'll notify you when we launch. No spam, promise!
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
