import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CircuitBoard } from 'lucide-react';
import { PROJECT_IMAGES, SPECIFICATIONS, type SpecCategory } from '../data/projectData';

const CATEGORIES: SpecCategory[] = ['Semua', 'Elektronik', 'Penggerak & Daya', 'Rangka'];

export default function SpecsSection() {
  const [activeCategory, setActiveCategory] = useState<SpecCategory>('Semua');
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const filteredSpecs =
    activeCategory === 'Semua'
      ? SPECIFICATIONS
      : SPECIFICATIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="spesifikasi" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* Kolom Kiri: Foto Komponen Hardware & Ringkasan */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-medium tracking-wide text-blue-300">Spesifikasi Teknis</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Komponen inti yang ringkas dan mudah dirawat
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Seluruh komponen dipilih agar seimbang antara efisiensi daya baterai, kemudahan
            pemrograman ulang, dan daya tahan mekanik.
          </p>

          {/* GANTI GAMBAR: Ganti PROJECT_IMAGES.chassisHardware di src/data/projectData.ts dengan foto rangkaian asli kalian */}
          <div className="liquid-glass mt-8 overflow-hidden rounded-2xl p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#070B1A]">
              {!imageError ? (
                <img
                  src={PROJECT_IMAGES.chassisHardware}
                  alt="Rangkaian internal ESP32, motor driver L298N, dan baterai Li-Ion 18650 pada sasis RC Car"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-[#0C1535] to-[#080B1A] p-6 text-center">
                  <CircuitBoard className="h-9 w-9 text-blue-400" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-200">
                    Skema Perakitan ESP32 + L298N
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-2 pt-3 pb-1 text-xs text-slate-400">
              <span>Tata letak modul internal</span>
              <span className="font-mono tabular-nums text-slate-300">7.4V · 5V Logic</span>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Filter Kategori & Daftar Spesifikasi */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          {/* Segmented Control Filter Komponen */}
          <div
            role="tablist"
            aria-label="Filter kategori spesifikasi"
            className="liquid-glass inline-flex flex-wrap items-center gap-1 rounded-xl p-1"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Daftar Kartu / Tabel Spesifikasi */}
          <div className="liquid-glass mt-5 divide-y divide-white/10 rounded-2xl">
            {filteredSpecs.map((spec) => (
              <div
                key={spec.id}
                className="flex flex-col justify-between gap-2 px-5 py-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:px-6"
              >
                <div className="min-w-0">
                  <p className="text-xs font-medium text-blue-300">{spec.category}</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-white">
                    {spec.label}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{spec.detail}</p>
                </div>

                <div className="shrink-0 sm:text-right">
                  <p className="font-mono text-sm font-semibold tabular-nums text-slate-100">
                    {spec.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
