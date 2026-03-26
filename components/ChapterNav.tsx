'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const CHAPTERS = [
  { num: 'I',   id: 'hero',    label: 'Hero' },
  { num: 'II',  id: 'work',    label: 'Work' },
  { num: 'III', id: 'about',   label: 'About' },
  { num: 'IV',  id: 'skills',  label: 'Skills' },
  { num: 'V',   id: 'contact', label: 'Contact' },
]

export default function ChapterNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0, rootMargin: '-10% 0px -80% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const activeChapter = CHAPTERS.find((c) => c.id === active)

  return (
    <>
      {/* Desktop right rail — minimal, no background pill */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
        {CHAPTERS.map(({ num, id, label }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 group"
            >
              <span
                className={clsx(
                  'font-editorial italic text-[11px] w-5 text-right transition-colors duration-200',
                  isActive ? 'text-accent' : 'text-ink/20'
                )}
              >
                {num}
              </span>
              <span
                className={clsx(
                  'transition-all duration-300',
                  isActive
                    ? 'w-6 h-[1px] bg-accent'
                    : 'w-3 h-[1px] bg-ink/15 group-hover:w-5 group-hover:bg-ink/30'
                )}
              />
              <span
                className={clsx(
                  'font-body text-[10px] uppercase tracking-[0.15em] transition-all duration-200',
                  isActive ? 'text-ink opacity-100' : 'text-ink/0 group-hover:text-ink/30 group-hover:opacity-100'
                )}
              >
                {label}
              </span>
            </a>
          )
        })}
      </nav>

      {/* Mobile bottom pill */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <div
          className="px-4 py-2 bg-ink/80 backdrop-blur-sm"
          style={{ borderRadius: '2px' }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/60">
            {activeChapter?.num} — {activeChapter?.label}
          </span>
        </div>
      </div>
    </>
  )
}
