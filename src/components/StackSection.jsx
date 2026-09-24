// src/components/StackSection.jsx
import { motion } from 'framer-motion'
import { stack } from '../data/profile'
import StackScene from './StackScene'

export default function StackSection() {
  return (
    <section id="stack" className="relative w-full flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="section-content text-center max-w-2xl mb-4"
      >
        <span className="uppercase tracking-[0.3em] text-xs text-secondary">Stack technique</span>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3">
          Les outils que <span className="text-gradient">j'utilise au quotidien</span>
        </h2>
        <p className="text-muted mt-4">Survole les blocs flottants pour les découvrir en détail.</p>
      </motion.div>

      <div className="section-content w-full max-w-3xl">
        <StackScene />
      </div>

      <div className="section-content grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full -mt-6">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-xl p-4 text-center"
          >
            <div
              className="w-3 h-3 rounded-full mx-auto mb-2"
              style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
            />
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-xs text-muted mt-1 hidden md:block">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
