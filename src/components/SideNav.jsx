// src/components/SideNav.jsx
import { Home, User, Layers, Boxes, Award, Mail } from 'lucide-react'

const ITEMS = [
  { href: '#hero', icon: Home, label: 'Accueil' },
  { href: '#about', icon: User, label: 'À propos' },
  { href: '#stack', icon: Layers, label: 'Stack' },
  { href: '#projects', icon: Boxes, label: 'Projets' },
  { href: '#trust', icon: Award, label: 'Confiance' },
  { href: '#contact', icon: Mail, label: 'Contact' }
]

/**
 * Navigation verticale fixée sur le bord droit de l'écran (icônes seules),
 * dans l'esprit du portfolio de référence. `activeIndex` (0..5, continu) sert
 * à surligner l'icône de la section actuellement visible.
 */
export default function SideNav({ activeIndex = 0 }) {
  const activeI = Math.round(activeIndex)

  return (
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-1 glass rounded-full p-2">
      {ITEMS.map(({ href, icon: Icon, label }, i) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            i === activeI ? 'bg-primary text-white' : 'text-muted hover:text-ink hover:bg-ink/5'
          }`}
        >
          <Icon size={18} />
        </a>
      ))}
    </nav>
  )
}
