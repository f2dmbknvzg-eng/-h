'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Dog, Ban, Check } from 'lucide-react';

type Tab = 'stay' | 'daytrip';

const rooms = [
  {
    id: 'loft-cottage',
    name: 'ロフト付きプライベートコテージ',
    badge: 'おすすめ',
    badgeIcon: Star,
    petOk: false,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: '1棟2室に分かれた2〜3階建て。玄関・水回り・ロフト付きの独立型プライベートコテージ。屋根付きBBQサイト完備。',
    layout: '2階寝室 13畳超 ＋ 3階ロフト',
    stay: {
      capacity: '6名（最大8名）',
      price: '20,000円〜40,000円',
      priceUnit: '／棟',
      extra: '大人2,000円／名、子供1,000円／名（7名以上）',
      checkin: '15:00〜18:00',
      checkout: '〜10:30',
    },
    daytrip: {
      capacity: '6名（最大8名）',
      price: '10,000円',
      priceUnit: '／棟',
      extra: '大人2,000円／名、子供1,000円／名（7名以上）',
      time: '11:30〜16:00',
    },
    amenities: ['寝具一式', 'IHミニキッチン', '電子レンジ', '電子ポット', '冷蔵庫', 'バス', '浴室乾燥機', 'トイレ（ウォシュレット）', 'TV', 'エアコン', 'ドライヤー', '外部電源', 'ロフト', '屋根付きBBQサイト'],
    shared: ['駐車場', '洗濯機（1台）', '芝生広場', '水遊び場', '分別ごみ置き場'],
  },
  {
    id: 'kominka',
    name: '古民家（本館・保津川）',
    badge: null,
    petOk: false,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: '入母屋の大屋根に日本瓦と菱形鋼板葺き、漆喰塗に焼板貼りという日本の伝統意匠。リノベーション済みで浴室・洗面・トイレ完備。屋根付きBBQサイト常設。',
    layout: '約14畳',
    stay: {
      capacity: '6名（最大6名）',
      price: '15,000円〜25,000円',
      priceUnit: '／棟',
      extra: null,
      checkin: '15:00〜18:00',
      checkout: '〜10:30',
    },
    daytrip: {
      capacity: '6名（最大6名）',
      price: '8,000円',
      priceUnit: '／棟',
      extra: null,
      time: '11:30〜16:00',
    },
    amenities: ['寝具一式', 'バス', 'トイレ（ウォシュレット）', 'TV', 'エアコン', 'ドライヤー', '外部電源', '屋根付きBBQサイト'],
    shared: ['駐車場', '洗濯機（1台）', '芝生広場', '水遊び場', '分別ごみ置き場'],
  },
  {
    id: 'terrace-twin',
    name: 'わんちゃんと泊まれる テラスツイン',
    badge: 'ペットOK',
    badgeIcon: Dog,
    petOk: true,
    image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'ペット同伴OKの少し大きめなツインルーム。ソファーベッドを使えば最大3名宿泊可。屋根付きBBQサイト常設。',
    layout: 'ツイン＋ソファーベッド',
    stay: {
      capacity: '2名（最大3名）',
      price: '15,000円〜25,000円',
      priceUnit: '／棟',
      extra: '大人2,000円／名、子供1,000円／名（3名の場合）',
      checkin: '15:00〜18:00',
      checkout: '〜10:30',
    },
    daytrip: {
      capacity: '2名（最大3名）',
      price: '8,000円',
      priceUnit: '／棟',
      extra: '大人2,000円／名、子供1,000円／名（3名の場合）',
      time: '11:30〜16:00',
    },
    amenities: ['寝具一式', '電子ポット', 'バス', '浴室乾燥機', 'トイレ（ウォシュレット）', 'TV', 'エアコン', 'ドライヤー', '外部電源', '屋根付きBBQサイト'],
    shared: ['駐車場', '洗濯機（1台）', '芝生広場', '水遊び場', '分別ごみ置き場'],
  },
];

function RoomCard({ room, tab }: { room: typeof rooms[0]; tab: Tab }) {
  const price = tab === 'stay' ? room.stay : room.daytrip;

  return (
    <div className="bg-card rounded-2xl border border-border/30 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-52 sm:h-60 md:h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
            style={{ backgroundImage: `url('${room.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/10 hidden md:block" />
          {room.badge && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-[11px] font-light tracking-wider">
              <room.badgeIcon className="w-3 h-3" />
              {room.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            {room.petOk ? (
              <Dog className="w-4 h-4 text-accent/60" strokeWidth={1.5} />
            ) : (
              <Ban className="w-4 h-4 text-muted-foreground/30" strokeWidth={1.5} />
            )}
            <span className="text-[10px] text-muted-foreground/50 tracking-wider font-light">
              {room.petOk ? 'ペット同伴可' : 'ペット不可'}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 tracking-wide leading-[1.4]">
            {room.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-[1.9] font-light mb-5">
            {room.description}
          </p>

          {/* Pricing */}
          <div className="bg-muted/40 rounded-xl p-4 mb-5">
            <div className="flex items-end justify-between mb-1">
              <div>
                <p className="text-[10px] text-muted-foreground/50 tracking-wider uppercase mb-1">
                  {tab === 'stay' ? '宿泊' : '日帰り'}料金
                </p>
                <p className="text-foreground text-lg font-light tracking-wide">
                  {price.price}
                  <span className="text-sm text-muted-foreground ml-1">{price.priceUnit}</span>
                </p>
              </div>
              <p className="text-muted-foreground text-xs font-light">
                定員 {price.capacity}
              </p>
            </div>
            {price.extra && (
              <p className="text-muted-foreground/60 text-[11px] font-light mt-1">
                追加：{price.extra}
              </p>
            )}
            {tab === 'stay' ? (
              <div className="flex gap-4 mt-2 text-[11px] text-muted-foreground/60 font-light">
                <span>IN {room.stay.checkin}</span>
                <span>OUT {room.stay.checkout}</span>
              </div>
            ) : (
              <p className="text-[11px] text-muted-foreground/60 font-light mt-2">
                利用時間 {room.daytrip.time}
              </p>
            )}
          </div>

          {/* Amenities */}
          <div>
            <p className="text-[10px] text-muted-foreground/40 tracking-wider uppercase mb-2 font-light">
              設備
            </p>
            <div className="flex flex-wrap gap-1.5">
              {room.amenities.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/70 font-light bg-muted/30 px-2 py-0.5 rounded"
                >
                  <Check className="w-2.5 h-2.5 text-primary/40" />
                  {a}
                </span>
              ))}
            </div>
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
    </div>
  );
}

export function Accommodation() {
  const [isVisible, setIsVisible] = useState(false);
  const [tab, setTab] = useState<Tab>('stay');
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
    <section ref={ref} id="rooms" className="py-20 sm:py-28 px-6 bg-secondary/15">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary/60 text-[11px] tracking-[0.4em] uppercase mb-3 font-light">
            Rooms
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-4 leading-[1.4]">
            お部屋
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-[2] font-light">
            それぞれのスタイルに合わせた、
            <br />
            ゆったりとしたお部屋をご用意しています。
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex justify-center gap-2 mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <button
            onClick={() => setTab('stay')}
            className={`px-5 py-2 rounded-full text-sm font-light tracking-wider transition-all duration-300 ${
              tab === 'stay'
                ? 'bg-foreground text-background'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted/70'
            }`}
          >
            宿泊
          </button>
          <button
            onClick={() => setTab('daytrip')}
            className={`px-5 py-2 rounded-full text-sm font-light tracking-wider transition-all duration-300 ${
              tab === 'daytrip'
                ? 'bg-foreground text-background'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted/70'
            }`}
          >
            日帰り
          </button>
        </div>

        {/* Room cards */}
        <div className="space-y-6">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <RoomCard room={room} tab={tab} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
