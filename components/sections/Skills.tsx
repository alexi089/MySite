'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS = [
  { category: 'Frontend',       items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'] },
  { category: 'Backend',        items: ['FastAPI', 'Python', 'Node.js', 'PostgreSQL'] },
  { category: 'Languages',      items: ['Python', 'Java', 'Kotlin', 'C++'] },
  { category: 'ML / AI',        items: ['TensorFlow', 'TensorFlow Lite', 'MobileBERT', 'HuggingFace'] },
  { category: 'Mobile & AR',    items: ['Android Studio', 'Unity', 'AR Foundation'] },
  { category: 'Tools & Systems',items: ['Vercel', 'Git', 'Docker', 'Intel SGX'] },
]

// Card colors alternating between dark and light
const CARD_VARIANTS = [
  { bg: '#1C1714', text: '#F2EDE4', border: 'transparent' },
  { bg: '#F2EDE4', text: '#1C1714', border: '#1C1714' },
  { bg: '#5340C1', text: '#F2EDE4', border: 'transparent' },
  { bg: '#F2EDE4', text: '#1C1714', border: '#1C1714' },
  { bg: '#B8976A', text: '#1C1714', border: 'transparent' },
  { bg: '#0F0D0B', text: '#F2EDE4', border: 'transparent' },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-24 lg:py-36 px-8 lg:px-20">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="eyebrow text-accent mb-6"
      >
        04 — Skills
      </motion.p>

      <div className="reveal-overflow mb-14">
        <motion.h2
          initial={{ y: '100%' }}
          animate={inView ? { y: '0%' } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease }}
          className="font-editorial italic text-[clamp(40px,5.5vw,72px)] text-ink leading-none tracking-[-0.02em]"
        >
          How I build.
        </motion.h2>
      </div>

      {/* Horizontal scroll card track */}
      <div className="overflow-x-auto pb-4 -mx-8 lg:-mx-20 px-8 lg:px-20 scrollbar-hide">
        <div className="flex gap-3 w-max">
          {SKILLS.map((group, gi) => {
            const variant = CARD_VARIANTS[gi % CARD_VARIANTS.length]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + gi * 0.08, ease }}
                className="flex-shrink-0 w-[240px] p-7 flex flex-col justify-between min-h-[260px] relative overflow-hidden"
                style={{
                  background: variant.bg,
                  border: variant.border !== 'transparent' ? `1px solid ${variant.border}20` : 'none',
                  borderRadius: '3px',
                }}
              >
                {/* Background glyph */}
                <span
                  className="absolute bottom-2 right-3 font-editorial italic font-bold leading-none pointer-events-none select-none"
                  style={{
                    fontSize: '7rem',
                    color: variant.text,
                    opacity: 0.04,
                  }}
                >
                  {gi + 1}
                </span>

                <div>
                  <p
                    className="font-body text-[10px] uppercase mb-5"
                    style={{ color: variant.text, opacity: 0.45, letterSpacing: '0.2em' }}
                  >
                    {group.category}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="font-display font-bold text-[17px] leading-tight"
                        style={{ color: variant.text }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
