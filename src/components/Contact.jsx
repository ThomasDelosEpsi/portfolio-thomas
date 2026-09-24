// src/components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI seulement : pas de backend branché ici.
    // Pour rendre ce formulaire fonctionnel, connecte un service comme Formspree,
    // EmailJS, ou une fonction serverless de ton choix.
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center px-6 py-24">
      <div className="section-content max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="uppercase tracking-[0.3em] text-xs text-secondary">Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-3">
            Discutons de votre <span className="text-gradient">prochain projet</span>
          </h2>
          <p className="text-muted mt-4">
            Disponible pour un poste de Chef de Projet IT / Développeur RPA en CDI — région lilloise ou full-remote.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-6 md:p-10 shadow-glow space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted mb-2 block">Nom</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="vous@exemple.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-muted mb-2 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary/80 transition-colors font-medium shadow-glow disabled:opacity-60"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} /> Message envoyé
              </>
            ) : (
              <>
                <Send size={18} /> Envoyer le message
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-10 text-muted"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 hover:text-secondary transition-colors text-sm"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <p className="text-center text-xs text-muted/60 mt-10">
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
      </div>
    </section>
  )
}
