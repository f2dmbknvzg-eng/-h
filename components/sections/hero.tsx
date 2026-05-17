'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/25 to-foreground/55" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p
          className={`text-white/35 text-[11px] tracking-[0.5em] uppercase mb-10 font-light transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Okukyoto, Kameoka
        </p>

        <h1
          className={`font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.5] mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          奥京都の里山で、
          <br />
          あなただけの時間を。
        </h1>

        <p
          className={`text-white/50 text-sm sm:text-[15px] font-light leading-[2.2] mb-12 max-w-lg mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          京の奥座敷・亀岡。トロッコ列車や保津川下りの先に広がる、
          ゆったりした田園風景の中に佇む
          貸切BBQコテージ施設 —— そうしんファーム。
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://www.nap-camp.com/kyoto/14915"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-light tracking-wider hover:bg-primary/90 transition-colors duration-300"
          >
            予約する
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center px-9 py-3.5 text-white/60 text-sm font-light tracking-wider border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            施設を見る
          </a>
        </div>
      </div>

      <a
        href="#usp"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-500"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-gentle-float" />
      </a>
    </section>
  );
}
