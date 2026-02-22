'use client';

import { useEffect, useRef, ReactNode, ElementType, ComponentPropsWithRef } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'scale' | 'left';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  [key: string]: unknown;
};

export default function ScrollReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === 'scale' ? 'reveal-scale' : variant === 'left' ? 'reveal-left' : 'reveal';
  const delayClass = delay ? `delay-${delay}` : '';
  const fullClass = [variantClass, delayClass, className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={fullClass} {...rest}>
      {children}
    </Tag>
  );
}

