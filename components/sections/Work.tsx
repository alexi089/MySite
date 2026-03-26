'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/projects'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function SectionLabel({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="eyebrow text-accent mb-6"
    >
      {children}
    </motion.p>
  )
}

function RevealTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className="reveal-overflow mb-14">
      <motion.h2
        initial={{ y: '100%' }}
        animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 1.0, ease }}
        className="font-editorial italic text-[clamp(40px,5.5vw,72px)] text-ink leading-none tracking-[-0.02em]"
      >
        {children}
      </motion.h2>
    </div>
  )
}

export default function Work() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="bg-warm py-24 lg:py-36 px-8 lg:px-20">
      <SectionLabel>02 — Work</SectionLabel>
      <RevealTitle>What I&apos;ve shipped.</RevealTitle>

      {/* Featured card — full width editorial */}
      {featured && (
        <FeaturedCard project={featured} />
      )}

      {/* 2-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {rest.map((project, i) => (
          <SmallCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: ReturnType<typeof projects.find> & object }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.a
      ref={ref}
      href={project!.url ?? '#'}
      target={project!.url ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className="group block w-full bg-white border border-ink/[0.07] p-8 lg:p-12 mb-4 hover:-translate-y-1 hover:border-accent/20 transition-all duration-300"
      style={{ borderRadius: '3px' }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="eyebrow-gold">{project!.tag}</span>
        <span className="font-editorial italic text-[13px] text-muted/40">Featured</span>
      </div>
      <h3 className="font-display font-extrabold text-[clamp(28px,3.5vw,48px)] text-ink tracking-[-0.02em] mb-5 leading-none">
        {project!.title}
      </h3>
      <p className="font-body text-[15px] text-muted leading-[1.75] max-w-[580px] mb-8">
        {project!.description}
      </p>
      {project!.url && (
        <span className="inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.15em] text-ink border-b border-ink/30 pb-[2px] group-hover:border-accent group-hover:text-accent transition-colors duration-200">
          View project <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      )}
    </motion.a>
  )
}

function SmallCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease }}
    >
      <div
        className="group bg-white border border-ink/[0.07] p-7 hover:-translate-y-1 hover:border-accent/20 transition-all duration-300 h-full"
        style={{ borderRadius: '3px' }}
      >
        <span className="eyebrow-gold block mb-4">{project.tag}</span>
        <h3 className="font-display font-bold text-[20px] text-ink mb-3 leading-tight tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="font-body text-[14px] text-muted leading-[1.7]">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}
