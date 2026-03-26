import Nav from '@/components/Nav'
import ChapterNav from '@/components/ChapterNav'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

function MarqueeBand() {
  const items = [
    'Full-Stack Developer',
    '✦',
    'Next.js',
    '✦',
    'Python',
    '✦',
    'Shipped to Production',
    '✦',
    'ML / AI',
    '✦',
    'Wayne State CS',
    '✦',
    'Full-Stack Developer',
    '✦',
    'Next.js',
    '✦',
    'Python',
    '✦',
    'Shipped to Production',
    '✦',
    'ML / AI',
    '✦',
    'Wayne State CS',
    '✦',
  ]

  return (
    <div className="bg-ink overflow-hidden py-3.5 whitespace-nowrap select-none">
      <div className="inline-block animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className={
              item === '✦'
                ? 'mx-6 font-body text-[11px] text-gold opacity-70'
                : 'mx-2 font-editorial italic text-[13px] text-white/40'
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <ChapterNav />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <MarqueeBand />
        <section id="work">
          <Work />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
