'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.12 + 0.03,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d) => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(131,109,224,${d.o})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

const INTERESTS = ['Hardstyle', 'Tennis', 'Paddle Sports', 'Gym', 'Travel', 'Competitive Gaming', 'German', 'Aramaic']

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function RevealParagraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0.2, y: 12 }}
      animate={inView ? { opacity: 0.88, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease }}
      className="font-body text-[16px] leading-[1.8] text-white mb-6"
    >
      {children}
    </motion.p>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-void py-24 lg:py-36 px-8 lg:px-20 overflow-hidden">
      <ParticleCanvas />

      {/* Decorative large glyph */}
      <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-editorial italic text-[22rem] font-bold text-white/[0.025] leading-none pointer-events-none select-none hidden lg:block">
        A
      </span>

      <div className="relative z-10 max-w-[700px]">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="eyebrow text-purple-light/60 mb-6"
        >
          03 — About
        </motion.p>

        <div className="reveal-overflow mb-12">
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            className="font-editorial italic text-[clamp(40px,5.5vw,72px)] text-white leading-none tracking-[-0.02em]"
          >
            Who I am.
          </motion.h2>
        </div>

        <div className="mb-10">
          <RevealParagraph delay={0.2}>
            I&apos;m <strong className="text-white font-semibold">Alex Eshaya</strong> — a full-stack developer who
            graduated from <strong className="text-white font-semibold">Wayne State University</strong> with a CS
            degree and a 3.80 GPA. My rule:{' '}
            <span className="text-purple-light font-medium">
              once I set my mind on something, it gets done.
            </span>
          </RevealParagraph>

          <RevealParagraph delay={0.3}>
            I spent a year abroad in{' '}
            <strong className="text-white font-semibold">Munich</strong> — picking up German to B2, building across
            time zones, and proving that I can ship in any environment. I speak{' '}
            <strong className="text-white font-semibold">English, German, and Aramaic</strong>.
          </RevealParagraph>

          <RevealParagraph delay={0.4}>
            In software, I&apos;m always{' '}
            <span className="text-purple-light font-medium">chasing the next idea.</span> From ML models on
            Android to agentic AI systems — I build things that go beyond the demo. Outside the
            terminal: tennis, paddle sports, hardstyle, and competing at everything I touch.
          </RevealParagraph>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="flex flex-wrap gap-2"
        >
          {INTERESTS.map((interest) => (
            <span
              key={interest}
              className="border border-white/10 px-3 py-1.5 font-body text-[11px] text-white/40 tracking-wide uppercase hover:border-white/25 hover:text-white/60 transition-colors duration-200"
              style={{ borderRadius: '2px' }}
            >
              {interest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
