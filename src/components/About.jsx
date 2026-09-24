// src/components/About.jsx
import { motion } from 'framer-motion'
import { about, profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center px-6 py-24">
      <div className="section-content max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-glow"
        >
          <span className="uppercase tracking-[0.3em] text-xs text-secondary">À propos</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3 mb-8">
            Qui est <span className="text-gradient">{profile.name}</span> ?
          </h2>

          <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl bg-white/5 border border-white/10 p-4 text-center hover:border-secondary/50 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-muted mb-1">{h.label}</p>
                <p className="font-medium text-sm md:text-base">{h.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
