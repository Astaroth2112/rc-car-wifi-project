import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Cpu,
  Gauge,
  RotateCw,
  Smartphone,
  Square,
  Wifi,
} from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../data/projectData';

type DriveCommand = 'IDLE' | 'FWD' | 'BWD' | 'LEFT' | 'RIGHT';

const COMMAND_DETAILS: Record<
  DriveCommand,
  {
    label: string;
    endpoint: string;
    leftWheels: string;
    rightWheels: string;
    activeStage: number;
  }
> = {
  IDLE: {
    label: 'Diam / Siaga',
    endpoint: 'WS: { "cmd": "STOP", "pwm": 0 }',
    leftWheels: 'Berhenti',
    rightWheels: 'Berhenti',
    activeStage: 0,
  },
  FWD: {
    label: 'Bergerak Maju',
    endpoint: 'WS: { "cmd": "FWD", "pwm": SPEED }',
    leftWheels: 'Maju ↻',
    rightWheels: 'Maju ↻',
    activeStage: 3,
  },
  BWD: {
    label: 'Bergerak Mundur',
    endpoint: 'WS: { "cmd": "BWD", "pwm": SPEED }',
    leftWheels: 'Mundur ↺',
    rightWheels: 'Mundur ↺',
    activeStage: 3,
  },
  LEFT: {
    label: 'Belok Kiri',
    endpoint: 'WS: { "cmd": "LEFT", "pwm": SPEED }',
    leftWheels: 'Mundur ↺',
    rightWheels: 'Maju ↻',
    activeStage: 3,
  },
  RIGHT: {
    label: 'Belok Kanan',
    endpoint: 'WS: { "cmd": "RIGHT", "pwm": SPEED }',
    leftWheels: 'Maju ↻',
    rightWheels: 'Mundur ↺',
    activeStage: 3,
  },
};

const STEP_ICONS = [Smartphone, Wifi, Cpu, RotateCw];

export default function ArchitectureSection() {
  const [command, setCommand] = useState<DriveCommand>('FWD');
  const [speed, setSpeed] = useState<number>(80);
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const pwmValue = Math.round((speed / 100) * 255);
  const currentDetail = COMMAND_DETAILS[command];
  const resolvedPayload = currentDetail.endpoint.replace('SPEED', String(pwmValue));

  const handleCommand = (nextCmd: DriveCommand) => {
    setCommand(nextCmd);
    setSelectedStep(nextCmd === 'IDLE' ? 0 : 3);
  };

  return (
    <section id="cara-kerja" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium tracking-wide text-blue-300">
          Cara Kerja Sistem
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
          Alur komunikasi dari layar ke empat roda penggerak
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Klik tiap tahapan untuk meninjau peran komponen, atau uji langsung melalui simulator
          kontroler web di bawah ini.
        </p>
      </motion.div>

      {/* Diagram 4 Langkah Arsitektur */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ARCHITECTURE_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index] ?? Cpu;
          const isActive = selectedStep === index || (command !== 'IDLE' && index <= 3);

          return (
            <motion.button
              key={step.id}
              type="button"
              onClick={() => setSelectedStep(index)}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`liquid-glass liquid-glass-interactive relative flex flex-col justify-between rounded-2xl p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                selectedStep === index
                  ? 'border-blue-400/50 bg-blue-500/[0.08]'
                  : isActive
                    ? 'border-white/15'
                    : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold tabular-nums text-blue-300">
                    Tahap {step.stepNumber}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-blue-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400">{step.component}</p>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.description}</p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3">
                <span className="text-xs text-blue-200/80">{step.signalLabel}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Panel Interaktif: Simulator Kontroler Web */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass mt-8 rounded-3xl p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Kontrol D-Pad & Slider Kecepatan */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Simulasi Antarmuka Web Controller
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Coba tekan tombol arah untuk melihat paket perintah WiFi dan respons motor.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Tombol Arah D-Pad */}
              <div
                role="group"
                aria-label="Kontrol arah RC Car"
                className="grid w-fit grid-cols-3 gap-2.5"
              >
                <div />
                <button
                  type="button"
                  onClick={() => handleCommand('FWD')}
                  aria-label="Maju"
                  aria-pressed={command === 'FWD'}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    command === 'FWD'
                      ? 'border-blue-400 bg-blue-600 text-white'
                      : 'border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
                <div />

                <button
                  type="button"
                  onClick={() => handleCommand('LEFT')}
                  aria-label="Belok Kiri"
                  aria-pressed={command === 'LEFT'}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    command === 'LEFT'
                      ? 'border-blue-400 bg-blue-600 text-white'
                      : 'border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCommand('IDLE')}
                  aria-label="Berhenti"
                  aria-pressed={command === 'IDLE'}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    command === 'IDLE'
                      ? 'border-slate-300 bg-slate-700 text-white'
                      : 'border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <Square className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCommand('RIGHT')}
                  aria-label="Belok Kanan"
                  aria-pressed={command === 'RIGHT'}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    command === 'RIGHT'
                      ? 'border-blue-400 bg-blue-600 text-white'
                      : 'border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div />
                <button
                  type="button"
                  onClick={() => handleCommand('BWD')}
                  aria-label="Mundur"
                  aria-pressed={command === 'BWD'}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    command === 'BWD'
                      ? 'border-blue-400 bg-blue-600 text-white'
                      : 'border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <ArrowDown className="h-5 w-5" />
                </button>
                <div />
              </div>

              {/* Pengatur Kecepatan PWM */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="pwm-speed" className="flex items-center gap-2 text-slate-200">
                    <Gauge className="h-4 w-4 text-blue-300" aria-hidden="true" />
                    <span>Kecepatan Motor (PWM)</span>
                  </label>
                  <span className="font-mono font-semibold tabular-nums text-blue-300">
                    {speed}% ({pwmValue}/255)
                  </span>
                </div>
                <input
                  id="pwm-speed"
                  type="range"
                  min={30}
                  max={100}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer accent-blue-500"
                />
                <p className="text-xs text-slate-400">
                  Mengatur duty cycle sinyal PWM dari pin GPIO ESP32 ke pin ENA/ENB L298N.
                </p>
              </div>
            </div>
          </div>

          {/* Ringkasan Respons Paket & Pergerakan Roda */}
          <div className="border-t border-white/10 pt-6 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="text-xs font-medium text-slate-400">Paket Perintah WiFi ke ESP32</p>
            <div className="mt-2 rounded-xl border border-white/10 bg-[#050814]/80 px-4 py-3 font-mono text-xs text-blue-200 sm:text-sm">
              {resolvedPayload}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs text-slate-400">Status Manuver</p>
                <p className="mt-1 text-sm font-semibold text-white">{currentDetail.label}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">2 Roda Kiri</p>
                <p className="mt-1 font-mono text-sm font-medium text-slate-200">
                  {currentDetail.leftWheels}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">2 Roda Kanan</p>
                <p className="mt-1 font-mono text-sm font-medium text-slate-200">
                  {currentDetail.rightWheels}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
