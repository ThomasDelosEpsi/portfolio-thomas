// src/hooks/useSectionIndex.js
import { useEffect, useRef, useState } from 'react'

/**
 * Calcule un index de section CONTINU (0 = premier id, 1 = deuxième id, ...)
 * en se basant sur la position réelle (offsetTop) de chaque section dans le DOM,
 * plutôt que sur une hypothèse de hauteurs égales. Ça garde la scène 3D synchronisée
 * avec le scroll même si une section est plus haute qu'une autre.
 */
export function useSectionIndex(ids) {
  const [index, setIndex] = useState(0)
  const boundsRef = useRef([])
  const ticking = useRef(false)

  useEffect(() => {
    const measure = () => {
      boundsRef.current = ids.map((id) => {
        const el = document.getElementById(id)
        if (!el) return 0
        return el.getBoundingClientRect().top + window.scrollY
      })
    }

    measure()
    window.addEventListener('resize', measure)
    // Les polices web / le canvas peuvent encore changer la hauteur des sections
    // après le premier rendu : on remesure une fois de plus après leur chargement.
    const timeout = setTimeout(measure, 1200)

    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(timeout)
    }
  }, [ids])

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const bounds = boundsRef.current
        const y = window.scrollY
        let idx = 0

        if (bounds.length > 1) {
          if (y <= bounds[0]) {
            idx = 0
          } else if (y >= bounds[bounds.length - 1]) {
            idx = bounds.length - 1
          } else {
            for (let i = 0; i < bounds.length - 1; i++) {
              const start = bounds[i]
              const end = bounds[i + 1]
              if (y >= start && y <= end) {
                idx = i + (y - start) / Math.max(end - start, 1)
                break
              }
            }
          }
        }

        setIndex(idx)
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return index
}
