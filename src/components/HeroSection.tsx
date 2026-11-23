import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Cpu } from 'lucide-react';
import { HERO_METRICS, PRODUCT_CONFIG, PROJECT_IMAGES } from '../data/projectData';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="beranda"
      className="relative mx-auto w-full max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:pt-20 lg:pb-24"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Kolom Kiri: Headline, Penjelasan, dan CTA */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center lg:col-span-6"
        >
          <p className="mb-4 text-xs font-medium tracking-wide text-blue-300/90">
            {PRODUCT_CONFIG.kicker}
          </p>

          <h1
            className="font-display font-bold tracking-tight text-white [text-wrap:balance]"
            style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.65rem)', lineHeight: 1.08 }}
          >
            {PRODUCT_CONFIG.heroHeadline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {PRODUCT_CONFIG.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#fitur"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-500 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Jelajahi Fitur</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#cara-kerja"
              className="liquid-glass inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.08] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Lihat Cara Kerja
            </a>
          </div>
        </motion.div>

        {/* Kolom Kanan: Visual Utama RC Car dengan Efek Glow & Animasi Floating */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center lg:col-span-6"
        >
          {/* Efek Ambient Glow Lembut di Belakang Gambar Produk */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.28)_0%,rgba(79,70,229,0.12)_45%,transparent_72%)] blur-2xl"
          />

          {/* Kontainer Animasi Mengambang (Floating) yang Halus */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
            }
            className="liquid-glass relative w-full overflow-hidden rounded-3xl p-3 sm:p-4"
          >
            {/* GANTI GAMBAR: Ganti PROJECT_IMAGES.heroCar di src/data/projectData.ts dengan foto asli RC Car kelompokmu */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#070B1A]">
              {!imageError ? (
                <img
                  src={PROJECT_IMAGES.heroCar}
                  alt="Purwarupa RC Car 4WD berbasis WiFi dengan modul ESP32 dan sasis karbon"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-[#0C1535] to-[#080B1A] p-6 text-center">
                  <Cpu className="h-10 w-10 text-blue-400" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-200">
                    {PRODUCT_CONFIG.brandName} · Purwarupa RC Car WiFi
                  </p>
                </div>
              )}

              {/* Gradient Scrim Halus di Bagian Bawah Gambar */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent"
              />
              <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-xs text-slate-300">
                <span>Purwarupa 4WD · ESP32 WiFi</span>
                <span className="font-mono tabular-nums text-blue-300">2.4 GHz</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Strip Parameter Teknis di Bawah Hero Split (Full Width) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass mt-12 grid grid-cols-2 divide-y divide-white/10 rounded-2xl sm:grid-cols-4 sm:divide-x sm:divide-y-0"
      >
        {HERO_METRICS.map((item) => (
          <div key={item.label} className="px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="mt-1 font-mono text-base font-semibold tabular-nums text-white sm:text-lg">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
