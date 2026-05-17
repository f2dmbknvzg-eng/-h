'use client';

import { useEffect, useRef, useState } from 'react';
import { Flame, Chrome as Home, Dog, Sprout } from 'lucide-react';

const usps = [
  {
    icon: Flame,
    title: '完全個別BBQスペース',
    description: '各コテージ専用の屋根付きBBQサイト。周りの目を気にせず、雨の日でも楽しめます。',
  },
  {
    icon: Home,
    title: 'プライベートコテージ',
    description: '玄関・水回り・ロフトを備えた独立性の高い空間で、グループや家族でゆったり。',
  },
  {
    icon: Dog,
    title: 'ペット歓迎ルームあり',
    description: 'わんちゃんと一緒に泊まれる「テラスツイン」をご用意。',
  },
  {
    icon: Sprout,
    title: '農業体験も楽しめる',
    description: '田植え・稲刈り・芋掘り・餅つきなど、季節の農業体験を不定期開催。',
  },
];

export function Usp() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="usp" className="py-20 sm:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Why Choose Us
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground leading-[1.4]">
            選ばれる理由
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className={`bg-card rounded-2xl border border-border/30 p-6 sm:p-7 text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-4">
                <usp.icon className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base sm:text-lg text-foreground mb-2 tracking-wide">
                {usp.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.9] font-light">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
