'use client';

import { useEffect, useRef, useState } from 'react';
import { Sprout, Instagram } from 'lucide-react';

export function FarmExperiences() {
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
    <section ref={ref} id="farming" className="py-20 sm:py-28 px-6 bg-secondary/15">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
              Farming Experience
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-6 leading-[1.4]">
              土と季節を感じる
              <br />
              農業体験
            </h2>
            <p className="text-muted-foreground text-sm leading-[2.2] font-light mb-6">
              そうしんファームでは、田植え・稲刈り・お芋掘りなど、季節に合わせた農業体験を不定期で開催しています。冬場にはお餅つきを行う日もあります。子どもから大人まで、本物の農業を手と体で感じてください。
            </p>
            <p className="text-muted-foreground text-sm leading-[2] font-light mb-8">
              開催情報はInstagramで随時告知しています。
            </p>

            <a
              href="https://www.instagram.com/soushin_farm_bbq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-light tracking-wider hover:bg-foreground/85 transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              Instagramで確認
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
