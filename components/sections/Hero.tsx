'use client'

import { motion } from 'framer-motion'
import Terminal from '@/components/Terminal'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const lineReveal = (delay: number) => ({
  initial: { y: '110%' },
  animate: { y: '0%' },
  transition: { duration: 1.1, delay, ease },
})

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Parchment gradient orbs */}
      <div className="absolute pointer-events-none" style={{
        top: '-200px', right: '-120px',
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(83,64,193,0.07) 0%, transparent 65%)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-80px', left: '-100px',
        width: '560px', height: '560px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,151,106,0.1) 0%, transparent 60%)',
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(28,23,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,23,20,0.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />

      {/* Floating decorative text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-[28%] right-[6%] font-editorial italic text-[13px] text-muted/40 tracking-wide hidden lg:block pointer-events-none"
      >
        Full-Stack Engineer
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute top-[48%] right-[10%] font-editorial italic text-[12px] text-muted/30 tracking-wide hidden lg:block pointer-events-none"
      >
        Anno MMXXVI
      </motion.span>

      {/* Floating circle */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute top-[12%] right-[14%] w-[280px] h-[280px] rounded-full border border-accent/10 pointer-events-none hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* Left — text */}
        <div className="flex flex-col justify-end px-8 lg:px-20 pt-32 pb-20 lg:w-[55%] min-h-screen">

          <motion.p {...fadeUp(0.1)} className="eyebrow-gold mb-6">
            Software Developer — Winter &apos;26
          </motion.p>

          <h1 className="leading-none mb-8">
            <span className="block reveal-overflow">
              <motion.span
                {...lineReveal(0.2)}
                className="block font-display font-extrabold text-[clamp(52px,7vw,92px)] tracking-[-2px] text-ink"
              >
                I build
              </motion.span>
            </span>
            <span className="block reveal-overflow">
              <motion.span
                {...lineReveal(0.32)}
                className="block font-editorial text-[clamp(56px,7.5vw,98px)] text-accent italic leading-[0.9]"
              >
                things that
              </motion.span>
            </span>
            <span className="block reveal-overflow">
              <motion.span
                {...lineReveal(0.44)}
                className="block font-display font-extrabold text-[clamp(52px,7vw,92px)] tracking-[-2px] text-ink"
              >
                matter.
              </motion.span>
            </span>
          </h1>

          <motion.p {...fadeUp(0.7)} className="font-body text-[15px] leading-[1.75] text-muted max-w-[380px] mb-8">
            Full-stack developer building clean, functional software. Longitude Marine and more — shipped, not just designed.
          </motion.p>

          <motion.div {...fadeUp(0.85)} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-white font-body text-[12px] uppercase tracking-[0.12em] hover:bg-accent transition-colors duration-300 rounded-sm"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3 border border-ink/25 text-ink font-body text-[12px] uppercase tracking-[0.12em] hover:border-ink/60 transition-colors duration-300 rounded-sm"
            >
              About Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-3"
          >
            <span className="font-body text-[10px] tracking-[0.22em] text-muted/50 uppercase">Scroll</span>
            <span className="w-10 h-[1px] bg-muted/30" />
          </motion.div>
        </div>

        {/* Right — terminal */}
        <div className="hidden lg:flex items-center justify-center lg:w-[45%] pr-12 lg:pr-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
            className="w-full max-w-[400px]"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
