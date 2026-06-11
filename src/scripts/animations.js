import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Disable heavy animations on mobile for performance
    document.querySelectorAll('[data-animate]').forEach(el => {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
    });
    return;
  }

  const animateElements = document.querySelectorAll('[data-animate]');
  
  animateElements.forEach((el) => {
    const animationType = el.getAttribute('data-animate');
    const delayStagger = el.getAttribute('style')?.includes('--stagger') 
      ? parseFloat(getComputedStyle(el).getPropertyValue('--stagger')) 
      : 0;

    if (animationType === 'fade-up') {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: delayStagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none' // Play once
          }
        }
      );
    }
  });
}
