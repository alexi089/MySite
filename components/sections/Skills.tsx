'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Python', 'Node.js', 'PostgreSQL'],
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'Kotlin', 'C++'],
  },
  {
    category: 'ML / AI',
    items: ['TensorFlow', 'TensorFlow Lite', 'MobileBERT', 'HuggingFace'],
  },
  {
    category: 'Mobile & AR',
    items: ['Android Studio', 'Unity', 'AR Foundation'],
  },
  {
    category: 'Tools & Systems',
    items: ['Vercel', 'Git', 'Docker', 'Intel SGX'],
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {SKILLS.map((group, gi) => (
          <div key={group.category}>
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
