'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const qaItems = [
  {
    q: 'アーリーチェックイン・レイトチェックアウトは可能ですか？',
    a: '申し訳ございませんが、アーリーチェックイン・レイトチェックアウトには対応しておりません。',
  },
  {
    q: '駐車場はありますか？',
    a: '原則、1予約につき1台分の駐車場をご用意しております。',
  },
  {
    q: 'ペットと一緒に利用できますか？',
    a: 'テラスツインのみペット同伴が可能です。その他の客室はペット不可となっております。',
  },
  {
    q: '日帰り利用は可能ですか？',
    a: '可能です。ご利用時間は11:30〜16:00となります。',
  },
  {
    q: 'お支払い方法は？',
    a: '現金・オンラインカードがご利用いただけます。',
  },
  {
    q: 'Wi-Fiはありますか？',
    a: '申し訳ございませんが、Wi-Fiはございません。',
  },
  {
    q: 'BBQ用品は持参しないといけませんか？',
    a: 'いいえ、BBQセット等のレンタルをご用意しております。食材・飲料をお持ちいただければ手ぶらでBBQをお楽しみいただけます。',
  },
  {
    q: '子どもも農業体験に参加できますか？',
    a: 'はい、もちろんです。田植え・稲刈り・芋掘りなど、お子様も安心して参加いただけます。',
  },
];

function QaItem({ item, isOpen, onToggle }: { item: typeof qaItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/30 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 px-1 text-left hover:text-primary transition-colors duration-200"
      >
        <span className="font-serif text-sm sm:text-base text-foreground tracking-wide leading-[1.6]">
          {item.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground/40 shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-muted-foreground text-sm leading-[1.9] font-light px-1">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export function Qa() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={ref} id="qa" className="py-20 sm:py-28 px-6 bg-secondary/15">
      <div className="max-w-2xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Q&A
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground leading-[1.4]">
            よくあるご質問
          </h2>
        </div>

        <div
          className={`bg-card rounded-2xl border border-border/30 px-5 sm:px-7 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {qaItems.map((item, i) => (
            <QaItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
