'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
}

// Optimized counter with better performance and reduced reflows
const Counter: React.FC<CounterProps> = ({
  target,
  duration = 2000,
  className = '',
}) => {
  const counterRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const animateCounter = useCallback(() => {
    const element = counterRef.current;
    if (!element || hasAnimated) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Use easeOutQuart for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * target);
      
      // Use textContent for better performance than innerHTML
      element.textContent = `${currentValue}+`;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [target, duration, hasAnimated]);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    // Use passive observer for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounter();
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start animation slightly before element is visible
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observerRef.current?.disconnect();
    };
  }, [animateCounter, hasAnimated]);

  return <span ref={counterRef} className={className}>0+</span>;
};

// Memoized icon components to prevent re-renders
const WebAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-black"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
      clipRule="evenodd"
    />
  </svg>
);

const ProjectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-black"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
  </svg>
);

// Memoized stat item component
const StatItem = ({ 
  icon: Icon, 
  title, 
  target, 
  description 
}: { 
  icon: () => React.JSX.Element;
  title: string;
  target: number;
  description: string;
}) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F2B47E] to-[#e89b57] flex items-center justify-center shadow-lg shadow-[#F2B47E]/20">
        <Icon />
      </div>
      <h3 className="text-lg text-gray-300 font-medium">{title}</h3>
    </div>
    <Counter
      target={target}
      className="text-6xl font-bold text-[#F2B47E] tracking-tight leading-none"
    />
    <div className="h-1 w-20 bg-gradient-to-r from-[#F2B47E] to-transparent rounded-full mt-3 mb-4" />
    <p className="text-gray-400 max-w-xs">{description}</p>
  </div>
);

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          {/* Reduced blur effects for better performance */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B47E]/5 to-[#F2B47E]/10 rounded-xl blur-lg opacity-50" />

          {/* Main content */}
          <div className="relative bg-black/60 backdrop-blur-lg border border-gray-800 rounded-xl p-10 shadow-2xl shadow-black/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <StatItem
                icon={WebAppIcon}
                title="Web Applications"
                target={27}
                description="Custom web applications designed and developed with focus on user experience and performance."
              />
              <StatItem
                icon={ProjectIcon}
                title="Side Projects"
                target={7}
                description="Personal projects showcasing creativity and experimental approaches to software development."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}