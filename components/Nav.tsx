'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'Work',    href: '#work' },
  { label: 'About',  href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Drive scroll progress bar via CSS variable
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      document.documentElement.style.setProperty('--scroll-progress', String(progress))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(242,237,228,0.88)] backdrop-blur-[14px] border-b border-ink/8'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 h-[68px] flex items-center justify-between">
          {/* Wordmark — Cormorant italic for Renaissance feel */}
          <a
            href="#hero"
            className="font-editorial italic text-[22px] text-ink tracking-tight leading-none"
          >
            Alex Eshaya
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.15em] text-ink border-b border-ink/40 pb-[2px] hover:border-ink transition-colors duration-200"
            >
              Say Hello <span className="text-accent">→</span>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={clsx('block w-5 h-[1px] bg-ink transition-all duration-200', menuOpen && 'rotate-45 translate-y-[6px]')} />
              <span className={clsx('block w-5 h-[1px] bg-ink transition-all duration-200', menuOpen && 'opacity-0')} />
              <span className={clsx('block w-5 h-[1px] bg-ink transition-all duration-200', menuOpen && '-rotate-45 -translate-y-[6px]')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-12 transition-all duration-400 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-editorial italic text-[42px] text-ink leading-none hover:text-accent transition-colors duration-200"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-6 font-body text-[11px] uppercase tracking-[0.18em] text-ink border-b border-ink pb-[2px]"
        >
          Say Hello →
        </a>
      </div>
    </>
  )
}
