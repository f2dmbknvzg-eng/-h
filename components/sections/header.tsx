'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'お部屋', href: '#rooms' },
  { label: 'BBQ', href: '#bbq' },
  { label: '農業体験', href: '#farming' },
  { label: '施設', href: '#facilities' },
  { label: 'Q&A', href: '#qa' },
  { label: '料金', href: '#rooms' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border)/0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <span
            className={`font-serif text-sm sm:text-base tracking-wider transition-colors duration-500 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Soushin Farm
          </span>
          <span
            className={`text-[10px] sm:text-xs font-light tracking-wider transition-colors duration-500 ${
              scrolled ? 'text-muted-foreground' : 'text-white/50'
            }`}
          >
            そうしんファーム
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-light tracking-wider transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-muted-foreground' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/soushin_farm_bbq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`transition-colors duration-300 ${
              scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.nap-camp.com/kyoto/14915"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[13px] font-light tracking-wider px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-white/10 text-white/70 border border-white/15 hover:bg-white/20 hover:text-white'
            }`}
          >
            予約する
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? 'text-foreground' : 'text-white/60'
          }`}
          aria-label="メニュー"
        >
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-border/15 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-light tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.instagram.com/soushin_farm_bbq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.nap-camp.com/kyoto/14915"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-light tracking-wider px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              予約する
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
