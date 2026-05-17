'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';

export function Reservation() {
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
    <section ref={ref} id="reservation" className="py-20 sm:py-28 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Reservation
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-5 leading-[1.4]">
            さあ、里山へ。
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-[2] font-light mb-10">
            予約は外部予約サイト（nap-camp）にて承っております。
            ご不明点はお気軽にお問い合わせください。
          </p>
        </div>

        {/* CTA button */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <a
            href="https://www.nap-camp.com/kyoto/14915"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-primary text-primary-foreground rounded-full text-base font-light tracking-wider hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/10"
          >
            今すぐ予約する
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
          </a>
        </div>

        {/* Contact info */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="tel:0771-26-5530"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Phone className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
            <span className="text-sm font-light tracking-wider">0771-26-5530</span>
          </a>
          <a
            href="mailto:n.tsuchida@soushinkensetsu.co.jp"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Mail className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
            <span className="text-sm font-light tracking-wider">n.tsuchida@soushinkensetsu.co.jp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
