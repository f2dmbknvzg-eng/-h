'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: '里山の風景',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: '畑の風景',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: '新鮮な野菜',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: '夕暮れの農園',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2255271/pexels-photo-2255271.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: '収穫の喜び',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5198240/pexels-photo-5198240.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: '自然のテクスチャー',
    span: '',
  },
];

export function Gallery() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="gallery" className="py-20 sm:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Gallery
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-4 leading-[1.4]">
            季節の風景
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[130px] sm:auto-rows-[170px] md:auto-rows-[200px]">
          {images.map((image, i) => (
            <div
              key={image.alt}
              className={`group relative rounded-xl overflow-hidden ${image.span} transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
              }`}
              style={{ transitionDelay: `${150 + i * 70}ms` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                  <p className="text-white/80 text-[11px] font-light tracking-wider">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
