'use client';

import { useEffect, useRef, useState } from 'react';

const rentalItems = [
  { item: 'BBQセット（コンロ・網・トング・着火剤・火バサミ・炭3kg）', price: '1,500円' },
  { item: 'ダッヂオーブン', price: '要確認' },
  { item: '鉄板・コテ', price: '500円' },
  { item: '炭 3kg', price: '600円' },
  { item: '網', price: '300円' },
  { item: '包丁・まな板', price: '300円' },
  { item: '食器セット（紙皿・紙コップ・割り箸 各6セット）', price: '500円' },
  { item: '土鍋セット（土鍋・カセットコンロ・ガス）', price: '1,000円' },
  { item: '氷', price: '300円' },
  { item: '洗剤セット', price: '300円' },
];

export function Bbq() {
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
    <section ref={ref} id="bbq" className="py-20 sm:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            BBQ
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-4 leading-[1.4]">
            BBQプラン
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-[2] font-light">
            屋根付きBBQサイトで、天気を気にせずお楽しみいただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Cottage BBQ */}
          <div
            className={`bg-card rounded-2xl border border-border/30 p-6 sm:p-7 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-[10px] text-primary/50 tracking-wider uppercase mb-2 font-light">
              Cottage Plan
            </p>
            <h3 className="font-serif text-xl text-foreground mb-3 tracking-wide">
              個別BBQコテージプラン
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.9] font-light mb-4">
              各コテージ専用の屋根付きBBQサイトをご利用いただけます。日帰りプランもあり。
            </p>
            <p className="text-muted-foreground text-xs font-light leading-[1.8]">
              詳細はお部屋セクションの日帰りプランをご覧ください。
            </p>
            <a
              href="#rooms"
              className="mt-4 inline-flex items-center text-sm text-primary/70 font-light tracking-wider hover:text-primary transition-colors duration-300"
            >
              お部屋を見る &rarr;
            </a>
          </div>

          {/* Wood Deck BBQ */}
          <div
            className={`bg-card rounded-2xl border border-border/30 p-6 sm:p-7 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-[10px] text-primary/50 tracking-wider uppercase mb-2 font-light">
              Deck Plan
            </p>
            <h3 className="font-serif text-xl text-foreground mb-3 tracking-wide">
              ウッドデッキBBQ貸切プラン
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.9] font-light mb-4">
              無垢材のウッドデッキで大人数BBQパーティーに最適。食材・飲料持ち込みで手ぶらBBQOK。業務用冷蔵庫使用可。屋根付きで天気不問。
            </p>

            <div className="bg-muted/40 rounded-xl p-4 space-y-2 text-sm font-light">
              <div className="flex justify-between">
                <span className="text-muted-foreground">定員</span>
                <span className="text-foreground">10名（最大25名）</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">料金</span>
                <span className="text-foreground">15,000円〜／貸切</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">追加料金</span>
                <span className="text-foreground text-xs">大人1,500円／子供750円（11名以上）</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">時間</span>
                <span className="text-foreground">IN 11:00〜13:00 / OUT 〜16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">スペース</span>
                <span className="text-foreground">10m x 10m</span>
              </div>
              <p className="text-primary/60 text-xs pt-1">お一人1ドリンクサービス付き</p>
            </div>

            <a
              href="https://www.nap-camp.com/kyoto/14915"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-light tracking-wider hover:bg-primary/90 transition-colors duration-300"
            >
              予約する
            </a>
          </div>
        </div>

        {/* Rental items table */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="font-serif text-lg text-foreground mb-4 tracking-wide text-center">
            BBQレンタル用品 料金表
          </h3>
          <div className="bg-card rounded-2xl border border-border/30 overflow-hidden max-w-xl mx-auto">
            <table className="w-full text-sm font-light">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left px-5 py-3 text-[11px] text-muted-foreground/50 tracking-wider uppercase font-light">
                    アイテム
                  </th>
                  <th className="text-right px-5 py-3 text-[11px] text-muted-foreground/50 tracking-wider uppercase font-light">
                    料金
                  </th>
                </tr>
              </thead>
              <tbody>
                {rentalItems.map((item) => (
                  <tr key={item.item} className="border-b border-border/15 last:border-0">
                    <td className="px-5 py-2.5 text-foreground/80">{item.item}</td>
                    <td className="px-5 py-2.5 text-right text-foreground/80">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
