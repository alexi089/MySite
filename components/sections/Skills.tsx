'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    wide: true,
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Python', 'Node.js', 'PostgreSQL'],
    wide: false,
  },
  {
    category: 'Tools',
    items: ['Vercel', 'Git', 'Figma', 'Docker'],
    wide: false,
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section ref={ref} className="bg-white py-24 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow text-ink/35 mb-4">IV — Skills</p>
        <h2 className="font-display font-extrabold text-[clamp(40px,5.5vw,64px)] tracking-tight text-ink mb-12">
          How I build.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 max-w-[700px]">
        {SKILLS.map((group, gi) => (
          <div key={group.category} className={group.wide ? 'sm:col-span-1' : ''}>
            <p className="eyebrow text-ink/35 mb-3">{group.category}</p>
            <ul className="flex flex-col gap-2">
              {group.items.map((skill, si) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + gi * 0.08 + si * 0.05,
                    ease: 'easeOut',
                  }}
                  className="font-body text-[15px] text-ink"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
