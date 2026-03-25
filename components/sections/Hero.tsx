'use client'

import { motion, type Transition } from 'framer-motion'
import Terminal from '@/components/Terminal'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay, ease: 'easeOut' } as Transition,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Grid layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,13,13,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,13,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Warm amber orb — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-150px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,80,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Cool blue orb — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px',
          left: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,92,255,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-10 lg:px-20 pt-24 pb-16 lg:w-1/2">
          <motion.div {...fadeUp(0.1)}>
            <p className="eyebrow text-ink/35 mb-4">Software Developer</p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="leading-none"
          >
            <span className="block font-display font-extrabold text-[clamp(52px,8vw,88px)] tracking-[-3px] text-ink">
              I build
            </span>
            <span className="block font-editorial text-[clamp(56px,8.5vw,92px)] text-accent italic leading-[0.95]">
              things that
            </span>
            <span className="block font-display font-extrabold text-[clamp(52px,8vw,88px)] tracking-[-3px] text-ink">
              matter.
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.4)}>
            <p className="font-body text-[16px] leading-[1.625] text-ink/55 max-w-[380px] mt-5">
              Full-stack developer building clean, functional software. Longitude Marine and more — shipped, not just designed.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#work"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-body text-[14px] hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 rounded-full border border-ink/20 text-ink font-body text-[14px] hover:border-ink/40 transition-colors"
              >
                About Me
              </a>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <p className="font-body text-[11px] tracking-[2px] text-ink/30 uppercase mt-auto pt-16">
            scroll to explore ↓
          </p>
        </div>

        {/* Right — terminal */}
        <div className="hidden lg:flex items-center justify-center lg:w-1/2 pr-10 lg:pr-20">
          <motion.div {...fadeIn(0.6)} className="w-full max-w-[420px]">
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
