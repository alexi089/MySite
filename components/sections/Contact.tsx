'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from '@/components/ContactModal'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/alexi089', external: true },
  { label: 'LinkedIn', href: '#',                           external: false },
  { label: 'Email',    href: 'mailto:alexeshaya01@gmail.com', external: false },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative bg-void py-24 lg:py-36 px-8 lg:px-20 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* Radial purple glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 70%, rgba(83,64,193,0.12) 0%, transparent 70%)',
        }} />

        {/* Decorative glyph */}
        <span className="absolute right-[-30px] bottom-[-40px] font-editorial italic font-bold text-[28rem] text-white/[0.02] leading-none pointer-events-none select-none hidden lg:block">
          ✦
        </span>

        <div className="relative z-10 max-w-[900px]">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="eyebrow text-purple-light/50 mb-6"
          >
            05 — Contact
          </motion.p>

          <h2 className="leading-none mb-10">
            <span className="block reveal-overflow">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease }}
                className="block font-display font-extrabold text-[clamp(44px,7vw,96px)] tracking-[-0.02em] text-white"
              >
                Let&apos;s build
              </motion.span>
            </span>
            <span className="block reveal-overflow">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 1.0, delay: 0.2, ease }}
                className="block font-editorial italic text-[clamp(44px,7vw,98px)] text-white/30 leading-[0.9]"
              >
                something.
              </motion.span>
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-ink font-body text-[12px] uppercase tracking-[0.15em] hover:bg-accent hover:text-white transition-colors duration-300"
              style={{ borderRadius: '2px' }}
            >
              Say Hello <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>

            <div className="flex gap-8">
              {SOCIAL.map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="font-body text-[11px] uppercase tracking-[0.18em] text-white/30 hover:text-white/70 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="bg-void border-t border-white/5 px-8 lg:px-20 py-7 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-editorial italic text-[14px] text-white/20">Alex Eshaya</span>
        <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/15">
          © {new Date().getFullYear()} — Built &amp; Shipped
        </span>
      </footer>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
