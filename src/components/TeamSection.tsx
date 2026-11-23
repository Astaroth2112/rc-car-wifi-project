import { motion, useReducedMotion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/projectData';

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tim" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium tracking-wide text-blue-300">Tim Pembuat</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
          Kelompok pengembang proyek
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Kolaborasi lintas peran mulai dari perakitan rangkaian daya, pemrograman mikrokontroler,
          hingga pembuatan antarmuka kontroler web.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.article
            key={member.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: shouldReduceMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="liquid-glass liquid-glass-interactive flex flex-col justify-between rounded-2xl p-6"
          >
            <div>
              <div className="flex items-center gap-4">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-xl object-cover border border-white/15"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] font-display text-base font-semibold text-blue-300">
                    {member.initials}
                  </div>
                )}

                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-300">{member.role}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">{member.focus}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
