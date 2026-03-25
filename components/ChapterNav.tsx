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
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const activeChapter = CHAPTERS.find((c) => c.id === active)

  return (
    <>
      {/* Desktop left rail */}
      <nav className="fixed left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
        {CHAPTERS.map(({ num, id, label }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-2 group"
            >
              <span
                className={clsx(
                  'font-body text-[11px] italic w-6 transition-colors duration-150',
                  isActive ? 'text-accent' : 'text-ink/25'
                )}
              >
                {num}
              </span>
              <span
                className={clsx(
                  'w-1 h-1 rounded-full transition-colors duration-150',
                  isActive ? 'bg-accent' : 'bg-ink/15'
                )}
              />
              <span
                className={clsx(
                  'font-body text-[11px] tracking-wide transition-colors duration-150',
                  isActive ? 'text-ink' : 'text-ink/30'
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
        <div className="px-4 py-2 rounded-full bg-ink/80 backdrop-blur-sm">
          <span className="font-body text-[11px] text-white/80 tracking-wide">
            {activeChapter?.num} — {activeChapter?.label}
          </span>
        </div>
      </div>
    </>
  )
}
