"use client";

import { useEffect, useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
};

export function RevealOnScroll({ children }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="reveal-on-scroll">{children}</div>;
}
