import Nav from '@/components/Nav'
import ChapterNav from '@/components/ChapterNav'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <ChapterNav />
      <main>
        <section id="hero">
          <Hero />
        </section>
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
