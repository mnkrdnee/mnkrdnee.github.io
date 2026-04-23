// ─────────────────────────────────────────────────────────────────────────────
// useInView — IntersectionObserver hook for scroll-triggered animations
// Fires once when element enters the viewport; stays visible after that
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

export function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Unobserve after first trigger for performance
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref, threshold]);

  return visible;
}
