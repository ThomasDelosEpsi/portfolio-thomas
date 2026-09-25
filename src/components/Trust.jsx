// src/components/Trust.jsx
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { trust } from '../data/profile'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Trust() {
  return (
    <section id="trust" className="relative w-full flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="section-content text-center max-w-2xl mb-12"
      >
        <span className="uppercase tracking-[0.3em] text-xs text-secondary">Confiance</span>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3">
          Ils m'ont fait <span className="text-gradient">confiance</span>
        </h2>
        <p className="text-muted mt-4">
          Extrait du bilan de fin d'alternance rédigé par mon manager, après trois ans dans l'équipe RPA/OCR.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="section-content glass rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-glow"
      >
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
          <div>
            <p className="font-display font-semibold text-lg">{trust.company}</p>
            <p className="text-sm text-muted">
              {trust.role} · {trust.period}
            </p>
          </div>
          <Quote className="text-primary/40 shrink-0" size={40} />
        </div>

        <blockquote className="text-lg md:text-xl leading-relaxed mb-4">
          « {trust.quote} »
        </blockquote>
        <p className="text-muted leading-relaxed mb-8">« {trust.closingQuote} »</p>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
            {initials(trust.authorName)}
          </div>
          <div>
            <p className="font-medium text-sm">{trust.authorName}</p>
            <p className="text-xs text-muted">{trust.authorRole}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {trust.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-ink/[0.03] border border-ink/10 p-4 text-center"
            >
              <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</p>
              <p className="text-xs font-medium mt-1">{stat.label}</p>
              <p className="text-[11px] text-muted mt-0.5">{stat.context}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted mb-2">Sujets pilotés</p>
          <div className="flex flex-wrap gap-2">
            {trust.pilotedTopics.map((topic) => (
              <span
                key={topic}
                className="text-xs px-3 py-1 rounded-full bg-ink/[0.04] border border-ink/10 text-muted"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
