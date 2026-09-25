// src/components/Projects.jsx
import { forwardRef, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Boxes } from 'lucide-react'
import { projects } from '../data/profile'

const FILTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'dev', label: 'Dev' },
  { id: 'ia', label: 'IA' },
  { id: 'gestion', label: 'Gestion de projet' }
]

// forwardRef : AnimatePresence a besoin d'accéder au noeud DOM pour animer la sortie
// (exit) de la carte lors d'un changement de filtre.
const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-2xl p-6 md:p-8 overflow-hidden"
    >
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${project.color}22`, color: project.color }}
          >
            <Boxes size={20} />
          </div>
          <ArrowUpRight
            size={20}
            className="text-muted group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>

        <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
        <p className="text-sm mb-4" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-ink/[0.04] border border-ink/10 text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
})

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.categories?.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="section-content text-center max-w-2xl mb-8"
      >
        <span className="uppercase tracking-[0.3em] text-xs text-secondary">Projets</span>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3">
          Quelques réalisations <span className="text-gradient">RPA & IT</span>
        </h2>
      </motion.div>

      <div className="section-content flex flex-wrap items-center justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === f.id
                ? 'bg-primary border-primary text-white'
                : 'border-ink/15 text-muted hover:text-ink hover:border-ink/30'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="section-content grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="section-content text-muted mt-10">Aucun projet dans cette catégorie pour le moment.</p>
      )}
    </section>
  )
}
