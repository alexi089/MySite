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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-[rgba(248,247,244,0.85)] backdrop-blur-[12px] border-b border-ink/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#hero"
            className="font-display font-bold text-[22px] text-ink tracking-tight"
          >
            AE.
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] text-ink/60 hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-accent text-white font-body text-[14px] hover:opacity-90 transition-opacity"
            >
              Say Hello
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={clsx('block w-5 h-[1.5px] bg-ink transition-all duration-200', menuOpen && 'rotate-45 translate-y-[6.5px]')} />
              <span className={clsx('block w-5 h-[1.5px] bg-ink transition-all duration-200', menuOpen && 'opacity-0')} />
              <span className={clsx('block w-5 h-[1.5px] bg-ink transition-all duration-200', menuOpen && '-rotate-45 -translate-y-[6.5px]')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display font-bold text-[32px] text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-body text-[16px]"
        >
          Say Hello
        </a>
      </div>
    </>
  )
}
