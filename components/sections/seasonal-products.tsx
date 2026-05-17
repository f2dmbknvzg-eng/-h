'use client';

import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: '京野菜セット',
    season: '春・夏',
    description: '季節の京野菜を詰め合わせ。その朝採れた新鮮な野菜をお届けします。',
    price: '2,500円〜',
    image:
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: '手作り漬物',
    season: '通年',
    description: '伝統的な製法でじっくり漬け込んだ、ご家庭の味。素材の味を活かした優しい塩加減。',
    price: '1,200円〜',
    image:
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: '農園ジャム',
    season: '夏・秋',
    description: '農園で採れた果物で作る手作りジャム。添加物不使用、果実そのものの甘みを。',
    price: '800円〜',
    image:
      'https://images.pexels.com/photos/1408312/pexels-photo-1408312.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: '新米お試しセット',
    season: '秋',
    description: '秋に収穫したての新米を少量から。炊きたての香りと甘みをお楽しみください。',
    price: '1,800円〜',
    image:
      'https://images.pexels.com/photos/6255066/pexels-photo-6255066.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

export function SeasonalProducts() {
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
    <section
      ref={ref}
      id="products"
      className="py-28 sm:py-40 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        >
          <p className="text-primary/70 text-[11px] tracking-[0.4em] uppercase mb-5 font-light">
            Products
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-foreground mb-6 leading-[1.4]">
            季節の産品
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-[2] font-light">
            農園で丁寧に育てた野菜と、手作りの加工品。
            <br />
            季節ごとの恵みを、あなたの食卓へ。
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group bg-card rounded-2xl overflow-hidden border border-border/30 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${200 + i * 120}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${200 + i * 120}ms, box-shadow 0.5s ease`,
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center img-cinematic transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full text-[10px] tracking-wider font-light">
                  {product.season}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-lg text-foreground mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-[1.9] font-light mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-primary/80 text-sm font-light tracking-wide">
                    {product.price}
                  </p>
                  <span className="text-primary/40 text-xs group-hover:text-primary/70 transition-colors duration-300">
                    詳しく &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
