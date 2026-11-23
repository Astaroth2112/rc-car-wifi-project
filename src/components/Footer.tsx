import { ArrowUp } from 'lucide-react';
import { PRODUCT_CONFIG } from '../data/projectData';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pt-6 pb-12 sm:px-6">
      <div className="liquid-glass flex flex-col items-start justify-between gap-6 rounded-2xl px-6 py-7 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {PRODUCT_CONFIG.brandName}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {PRODUCT_CONFIG.schoolInfo} · {PRODUCT_CONFIG.year}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-300">
          <a href="#beranda" className="hover:text-white transition-colors whitespace-nowrap">
            Beranda
          </a>
          <a href="#fitur" className="hover:text-white transition-colors whitespace-nowrap">
            Fitur
          </a>
          <a href="#cara-kerja" className="hover:text-white transition-colors whitespace-nowrap">
            Cara Kerja
          </a>
          <a href="#spesifikasi" className="hover:text-white transition-colors whitespace-nowrap">
            Spesifikasi
          </a>
          <a
            href="#beranda"
            aria-label="Kembali ke atas"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-slate-200 transition-colors hover:bg-white/10 hover:text-white whitespace-nowrap"
          >
            <span>Ke Atas</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
