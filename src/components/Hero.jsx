// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import AvatarScene from './AvatarScene'

function ProjectsBadge() {
  return (
    <a
      href="#projects"
      className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 group"
      aria-label="Voir mes projets"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
        </defs>
        <text fontSize="7.2" fill="currentColor" className="text-muted uppercase tracking-[0.2em]">
          <textPath href="#badge-circle" startOffset="0%">
            Mes projets • Mes projets •
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-3 rounded-full border border-ink/15 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
        <ArrowRight size={22} className="text-ink group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
      </span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Portrait 3D : occupe toute la moitié droite de l'écran (plein écran en fond sur mobile). */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="absolute top-0 right-0 h-screen w-full md:w-1/2 lg:w-[52%] opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto z-0"
      >
        <AvatarScene />
      </motion.div>

      <div className="section-content relative z-10 min-h-screen flex items-center px-6 md:px-10 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="uppercase tracking-[0.3em] text-secondary text-xs md:text-sm mb-4">
            {profile.title}
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
            Transformer les idées
            <br />
            en <span className="text-gradient">automatisations réelles</span>
          </h1>
          <p className="text-muted text-base md:text-lg max-w-md mb-10">{profile.tagline}</p>

          <div className="flex items-center gap-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors font-medium shadow-glow"
            >
              Me contacter
            </a>
            <ProjectsBadge />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
