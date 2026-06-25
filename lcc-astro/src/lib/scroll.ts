// Lenis smooth-scroll wired to GSAP ScrollTrigger.
// Also handles the generic `.reveal` scroll-in for static sections.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './animation';

let lenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

/** Initialise smooth scroll + ScrollTrigger sync. Safe to call once on the client. */
export function initScroll(): void {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const reduced = prefersReducedMotion();

  if (!reduced) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      lenis?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  initReveals(reduced);
}

/** Generic reveal-on-scroll for elements with `.reveal`. */
function initReveals(reduced: boolean): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduced) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add('is-visible'), delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}
