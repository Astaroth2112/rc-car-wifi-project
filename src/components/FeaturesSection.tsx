import { motion, useReducedMotion } from 'motion/react';
import { Cpu, Globe, Shield, Wifi } from 'lucide-react';
import { FEATURES } from '../data/projectData';

const FEATURE_ICONS = [Wifi, Cpu, Globe, Shield];

export default function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="fitur" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium tracking-wide text-blue-300">
          Tentang Produk & Keunggulan
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
          Dirancang untuk kendali presisi tanpa batas kabel
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Menggantikan remot RF atau Bluetooth konvensional dengan arsitektur jaringan WiFi lokal
          yang mudah diakses dari perangkat apa pun.
        </p>
      </motion.div>

      {/* Bento Grid Asimetris Kartu Liquid Glass */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {FEATURES.map((feature, index) => {
          const Icon = FEATURE_ICONS[index] ?? Wifi;
          return (
            <motion.article
              key={feature.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`liquid-glass liquid-glass-interactive flex flex-col justify-between rounded-2xl p-6 sm:p-8 ${feature.spanClass}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-medium text-blue-300">
                    {feature.number} {feature.subtitle}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-blue-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-300 sm:text-base">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-medium text-slate-400">{feature.highlight}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
