'use client';

import { useEffect, useRef, useState } from 'react';
import { Flame, Trees, Store, LayoutGrid, Droplets } from 'lucide-react';

const facilities = [
  {
    icon: Flame,
    title: '個別BBQスペース',
    description: '全室に屋根付き個別BBQサイト完備。雨の日でも安心してBBQをお楽しみいただけます。',
  },
  {
    icon: Trees,
    title: 'ウッドデッキ',
    description: '2024年初め完成。団体BBQに対応する広々とした屋根付きデッキスペース。',
  },
  {
    icon: Store,
    title: '想伸蔵（そうしんぐら）',
    description: 'お菓子・おつまみ・ジュース・お酒・薪などを販売する無人販売所。',
  },
  {
    icon: LayoutGrid,
    title: 'フリースペース',
    description: '2階の多目的スペース。研修・食事など用途自由にご利用いただけます。',
  },
  {
    icon: Droplets,
    title: '芝生広場・水遊び場',
    description: '子どもも大人も楽しめるアウトドアスペース。自然の中でのびのびと。',
  },
];

export function Facilities() {
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
    <section ref={ref} id="facilities" className="py-20 sm:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Facilities
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground leading-[1.4]">
            施設紹介
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-2xl border border-border/30 p-6 sm:p-7 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center mb-4">
                <f.icon className="w-4.5 h-4.5 text-primary/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base sm:text-lg text-foreground mb-2 tracking-wide">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.9] font-light">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
