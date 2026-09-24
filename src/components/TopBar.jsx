// src/components/TopBar.jsx
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-6 flex items-center justify-between">
      <a href="#hero" className="font-display text-lg tracking-wide">
        thomas <span className="font-light text-muted">delos</span>
        <span className="text-primary">.</span>
      </a>

      <div className="flex items-center gap-4 text-muted">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="hover:text-primary transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
    </header>
  )
}
