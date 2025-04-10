import { useRef, useEffect, useState } from 'react';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    '/optimized/sl_ragnarok_banner.jpeg',
    '/optimized/smys_banner.jpeg',
    '/optimized/sss_banner.jpeg',
    '/optimized/tne_banner.jpeg',
    '/optimized/webtoons.jpeg'
  ];

  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = src;
      });
    };

    const preloadImages = async () => {
      await Promise.all(images.map(loadImage));
    };

    preloadImages();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const startSlideshow = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
      }
    };

    startSlideshow();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleImageClick = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const result = [];
    const length = images.length;
    
    // Previous image
    const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    result.push({ src: images[prevIndex], index: prevIndex });
    
    // Current image
    result.push({ src: images[currentIndex], index: currentIndex });
    
    // Next image
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    result.push({ src: images[nextIndex], index: nextIndex });
    
    return result;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-[450px] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          {getVisibleImages().map(({ src, index }, arrayIndex) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`absolute cursor-pointer transition-all duration-500 ease-in-out ${
                arrayIndex === 0 
                  ? '-translate-x-[80%] opacity-50 scale-[0.85] hover:opacity-70'
                  : arrayIndex === 1
                  ? 'z-20 opacity-100 scale-100 shadow-2xl'
                  : 'translate-x-[80%] opacity-50 scale-[0.85] hover:opacity-70'
              }`}
              style={{
                width: '900px',
                height: '400px',
                transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: arrayIndex === 1 ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
                transform: `
                  ${arrayIndex === 0 ? 'translateX(-80%) scale(0.85)' : 
                    arrayIndex === 2 ? 'translateX(80%) scale(0.85)' : 'scale(1)'}
                  ${arrayIndex === 1 ? 'translateY(-2%)' : ''}
                `
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 to-black/20">
                <img
                  src={src}
                  alt={`Featured Manga ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    arrayIndex === 1 ? 'scale-105 hover:scale-110' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-12 h-1.5 bg-white rounded-full' 
                : 'w-2.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 