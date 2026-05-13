// components/RevealTitle.jsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RevealTitle({ children, className = '', as = 'h2' }) {
  const titleRef = useRef(null);
  const Tag = as;

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const lines = titleRef.current.querySelectorAll('.line-inner');

      gsap.set(lines, { yPercent: 100 });

      gsap.to(lines, {
        yPercent: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={titleRef} className={className}>
      {children}
    </Tag>
  );
}