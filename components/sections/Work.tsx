'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { projects } from '@/lib/projects'

export default function Work() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section ref={ref} className="bg-warm py-24 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow text-ink/35 mb-4">II — Work</p>
        <h2 className="font-display font-extrabold text-[clamp(40px,5.5vw,64px)] tracking-tight text-ink mb-10">
          What I&apos;ve shipped.
        </h2>

        {/* Featured card */}
        {featured && (
          <a
            href={featured.url ?? '#'}
            target={featured.url ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group block w-full bg-white border border-ink/[0.08] rounded-xl p-8 mb-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-200"
          >
            <span className="font-body text-[9px] uppercase tracking-[2px] text-accent">
              {featured.tag}
            </span>
            <h3 className="font-display font-bold text-[24px] text-ink mt-2 mb-3">
              {featured.title}
            </h3>
            <p className="font-body text-[15px] text-ink/55 leading-relaxed max-w-[600px]">
              {featured.description}
            </p>
            {featured.url && (
              <span className="inline-block mt-4 font-body text-[12px] text-accent/80 group-hover:text-accent transition-colors">
                View project →
              </span>
            )}
          </a>
        )}

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group bg-white border border-ink/[0.08] rounded-xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-200 h-full">
                <span className="font-body text-[9px] uppercase tracking-[2px] text-accent">
                  {project.tag}
                </span>
                <h3 className="font-display font-bold text-[18px] text-ink mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-[14px] text-ink/55 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
