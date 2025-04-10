
export const animateOnScroll = () => {
  const animatedElements = document.querySelectorAll('.animated-element');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
  
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
