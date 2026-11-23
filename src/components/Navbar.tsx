import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PRODUCT_CONFIG } from '../data/projectData';

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur Unggulan', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Spesifikasi', href: '#spesifikasi' },
  { label: 'Tim Kami', href: '#tim' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="liquid-glass-nav flex h-14 items-center justify-between gap-8 rounded-2xl px-5">
        {/* Zona 1: Wordmark Produk */}
        <a
          href="#beranda"
          className="font-display text-lg font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
        >
          {PRODUCT_CONFIG.brandName}
        </a>

        {/* Zona 2: Navigasi Utama (Desktop) */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md px-1 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: 1 Tombol Aksi Utama + Tombol Menu Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#cara-kerja"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-blue-500 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Simulasi Kontrol
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-200 hover:bg-white/10 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileOpen && (
        <div className="liquid-glass-nav mt-2 rounded-2xl p-3 md:hidden">
          <nav aria-label="Navigasi mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cara-kerja"
              onClick={handleLinkClick}
              className="mt-1 rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500"
            >
              Simulasi Kontrol
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
