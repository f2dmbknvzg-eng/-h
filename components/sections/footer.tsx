'use client';

import { Instagram } from 'lucide-react';

const navLinks = [
  { label: 'お部屋', href: '#rooms' },
  { label: 'BBQ', href: '#bbq' },
  { label: '農業体験', href: '#farming' },
  { label: '施設', href: '#facilities' },
  { label: 'Q&A', href: '#qa' },
  { label: '予約', href: '#reservation' },
  { label: 'アクセス', href: '#access' },
];

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-14 sm:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-sm text-background/80 tracking-wider mb-1">
              Soushin Farm
            </p>
            <p className="text-[11px] text-background/30 font-light tracking-wider mb-4">
              そうしんファーム
            </p>
            <p className="text-sm text-background/25 font-light leading-[2]">
              奥京都の里山で、
              <br />
              あなただけの時間を。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] text-background/15 tracking-[0.3em] uppercase mb-4 font-light">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/30 font-light tracking-wider hover:text-background/55 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] text-background/15 tracking-[0.3em] uppercase mb-4 font-light">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-background/25 font-light leading-[1.8]">
              <li>〒621-0243</li>
              <li>京都府亀岡市宮前町宮川井根口14-2</li>
              <li>TEL: 0771-26-5530</li>
              <li>MAIL: n.tsuchida@soushinkensetsu.co.jp</li>
            </ul>
            <a
              href="https://www.instagram.com/soushin_farm_bbq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-background/25 hover:text-background/50 transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-xs font-light tracking-wider">@soushin_farm_bbq</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-background/15 font-light tracking-wider">
            &copy; Soushin Farm All Rights Reserved.
          </p>
          <a
            href="https://www.nap-camp.com/kyoto/14915"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-background/20 font-light tracking-wider hover:text-background/40 transition-colors duration-300"
          >
            予約する（nap-camp）
          </a>
        </div>
      </div>
    </footer>
  );
}
