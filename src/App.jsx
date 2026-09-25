// src/App.jsx
import ParticlesBackground from './components/ParticlesBackground'
import TopBar from './components/TopBar'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import About from './components/About'
import StackSection from './components/StackSection'
import Projects from './components/Projects'
import Trust from './components/Trust'
import Contact from './components/Contact'
import { useSectionIndex } from './hooks/useSectionIndex'
import { SECTION_IDS } from './data/sections'

export default function App() {
  const sectionIndex = useSectionIndex(SECTION_IDS)

  return (
    <>
      <ParticlesBackground />
      <TopBar />
      <SideNav activeIndex={sectionIndex} />

      <main className="relative">
        <Hero />
        <About />
        <StackSection />
        <Projects />
        <Trust />
        <Contact />
      </main>
    </>
  )
}
