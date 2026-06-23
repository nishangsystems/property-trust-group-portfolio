'use client';

import { useEffect, useState, useRef } from 'react';

// Counter component
const AnimatedCounter = ({ 
  target, 
  suffix = '', 
  prefix = '',
  duration = 100 
}: { 
  target: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number;
            let animationFrame: number;

            const updateCounter = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * target);
              
              setCount(currentCount);

              if (progress < 1) {
                animationFrame = requestAnimationFrame(updateCounter);
              }
            };

            animationFrame = requestAnimationFrame(updateCounter);
            return () => cancelAnimationFrame(animationFrame);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="relative z-10 mb-3 font-cinzel font-bold text-[clamp(2.2rem,4vw,3.5rem)] text-primary-400">
      {prefix}{count.toLocaleString()}{suffix} 
    </div>
  );
};

export default function Achievements() {
  const achievements = [
    { number: 17, suffix: '+', title: 'Real Estate Estates', subtitle: 'Across West Africa' },
    { number: 8, suffix: '', title: 'International Branches', subtitle: 'On 5 Continents' },
    { number: 5, suffix: 'M+', prefix: '$', title: 'Gross Development Income', subtitle: 'USD & Counting' },
    { number: 9, suffix: '+', title: 'Countries of Presence', subtitle: 'Global Footprint' },
    { number: 1, suffix: '', title: 'Forbes Business Council', subtitle: 'Member' },
    { number: 10000, suffix: '+', title: 'Lives Impacted', subtitle: 'Through Philanthropy' },
  ];

  return (
    <section
      id="achievements"
      className="py-28 relative overflow-hidden bg-[linear-gradient(180deg,var(--color-bg-950)_0%,var(--color-ivory)_50%,var(--colour-bg-950)_100%)]"
      style={{background: "linear-gradient(var(--color-bg-950) 0%, var(--color-ivory) 50%, var(--color-bg-950) 100%)"}}
    >
      <div className="absolute inset-0 opacity-5 " style={{backgroundImage:"repeating-linear-gradient(45deg, var(--color-primary-400) 0px, var(--color-primary-400) 1px, transparent 1px, transparent 10px)"}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-400" />
            <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold text-primary-400">
              Milestones
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>

          <h2 className="font-cinzel text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-[0.04em] text-neutral-950">
            A Legacy of <span className="text-primary-400">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold-glow-15">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center px-8 py-12 overflow-hidden bg-bg-950 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(rgba(primary-400,0.08)_0%,transparent_70%)]" />

              <AnimatedCounter 
                target={item.number} 
                suffix={item.suffix} 
                prefix={item.prefix || ''}
                duration={2500}
              />

              <div className="relative z-10 mb-1 font-raleway font-bold text-[0.8rem] tracking-widest uppercase text-neutral-950">
                {item.title}
              </div>

              <div className="relative z-10 font-raleway text-[0.7rem] tracking-[0.12em] uppercase text-gray-500">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}