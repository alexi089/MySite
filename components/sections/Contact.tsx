'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import ContactModal from '@/components/ContactModal'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="bg-ink py-24 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-white/25 mb-4">V — Contact</p>
          <h2 className="leading-none mb-8">
            <span className="block font-display font-extrabold text-[clamp(40px,5.5vw,64px)] tracking-tight text-white">
              Let&apos;s build
            </span>
            <span className="block font-editorial italic text-[clamp(40px,5.5vw,68px)] text-white/40">
              something.
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent text-white font-body text-[16px] hover:opacity-90 transition-opacity mb-10"
            >
              Say Hello →
            </button>

            <div className="flex flex-wrap gap-8">
              <a
                href="https://github.com/alexi089"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-white/35 hover:text-white/70 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="eyebrow text-white/35 hover:text-white/70 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:alexeshaya01@gmail.com"
                className="eyebrow text-white/35 hover:text-white/70 transition-colors"
              >
                Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
