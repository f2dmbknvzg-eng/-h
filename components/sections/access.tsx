'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Car, Phone, Mail, Clock, Brain as Train } from 'lucide-react';

export function Access() {
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
    <section ref={ref} id="access" className="py-20 sm:py-28 px-6 bg-secondary/15">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Access
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground leading-[1.4]">
            アクセス
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border/30 bg-muted/20 h-64 sm:h-72 lg:min-h-[340px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-primary/35" strokeWidth={1.5} />
                </div>
                <p className="text-muted-foreground text-sm font-light tracking-wider">
                  京都府亀岡市
                </p>
                <p className="text-muted-foreground/40 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Google Maps
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="bg-card rounded-2xl border border-border/30 p-6 sm:p-7">
              <h3 className="font-serif text-lg text-foreground mb-5 tracking-wide">所在地</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      〒621-0243
                    </p>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      京都府亀岡市宮前町宮川井根口14-2
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      チェックイン 15:00〜18:00
                    </p>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      チェックアウト 〜10:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/30 p-6 sm:p-7">
              <h3 className="font-serif text-lg text-foreground mb-5 tracking-wide">交通情報</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <Car className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      京都縦貫自動車道「亀岡IC」より約15分
                    </p>
                    <p className="text-muted-foreground text-xs font-light">
                      駐車場：無料（1予約1台）
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <Train className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground text-sm font-light leading-[1.8]">
                      JR「亀岡駅」より車で約15分
                    </p>
                    <p className="text-muted-foreground text-xs font-light">
                      送迎あり（要予約）
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/30 p-6 sm:p-7">
              <h3 className="font-serif text-lg text-foreground mb-5 tracking-wide">お問い合わせ</h3>
              <div className="space-y-3">
                <a href="tel:0771-26-5530" className="flex items-center gap-3.5 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Phone className="w-4 h-4 text-primary/40 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-light tracking-wider">0771-26-5530</span>
                </a>
                <a href="mailto:n.tsuchida@soushinkensetsu.co.jp" className="flex items-center gap-3.5 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary/40 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-light tracking-wider">n.tsuchida@soushinkensetsu.co.jp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
