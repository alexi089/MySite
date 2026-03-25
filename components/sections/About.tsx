'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

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

    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.14 + 0.04,
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
        ctx.fillStyle = `rgba(42,92,255,${d.o})`
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

const INTERESTS = ['Hardstyle', 'Tennis', 'Paddle Sports', 'Gym', 'Travel', 'Competitive Gaming']

function RevealParagraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.3 })
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0.32 }}
      animate={inView ? { opacity: 0.92 } : { opacity: 0.32 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="font-body text-[16px] leading-[1.75] text-white mb-5"
    >
      {children}
    </motion.p>
  )
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative bg-void py-24 px-6 lg:px-20 overflow-hidden">
      <ParticleCanvas />

      <div className="relative z-10 max-w-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-white/25 mb-4">III — About</p>
          <h2 className="font-display font-extrabold text-[clamp(40px,5.5vw,64px)] tracking-tight text-white mb-10">
            Who I am.
          </h2>
        </motion.div>

        <div>
          <RevealParagraph delay={0.1}>
            I&apos;m <strong className="text-white/92">Alex Eshaya</strong> — a full-stack developer
            with a simple rule:{' '}
            <span className="text-accent font-medium">
              once I set my mind on something, it gets done.
            </span>
          </RevealParagraph>

          <RevealParagraph delay={0.2}>
            Outside the terminal I&apos;m competing —{' '}
            <strong className="text-white/92">tennis, paddle sports, video games.</strong> I run on{' '}
            <strong className="text-white/92">hardstyle</strong>, lift heavy, and book flights when
            the itch hits.
          </RevealParagraph>

          <RevealParagraph delay={0.3}>
            In software, I&apos;m always{' '}
            <span className="text-accent font-medium">chasing the next idea.</span> Not for the
            tech — for what it enables.
          </RevealParagraph>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mt-6"
        >
          {INTERESTS.map((interest) => (
            <span
              key={interest}
              className="border border-white/10 rounded-full px-3 py-1 font-body text-[11px] text-white/45"
            >
              {interest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
