import { useEffect, useRef, useState } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  start?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useCounterAnimation({
  end,
  duration = 1600,
  start = 0,
  threshold = 0.3,
  triggerOnce = true,
}: UseCounterAnimationOptions) {
  const ref = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [count, setCount] = useState(start);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    let animationFrame = 0;

    const animate = () => {
      const startedAt = performance.now();

      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        const nextValue = Math.round(start + (end - start) * progress);
        setCount(nextValue);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        if (triggerOnce && hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        animate();

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, end, start, threshold, triggerOnce]);

  return { ref, count };
}
