// src/hooks/useImageTexture.js
import { useEffect, useState } from 'react'
import * as THREE from 'three'

const cache = new Map()
const loader = new THREE.TextureLoader()

/**
 * Charge une image (PNG avec transparence) comme texture Three.js, de façon
 * non bloquante et sans Suspense. Retourne `null` tant que rien n'est chargé
 * ou si l'image est introuvable — l'appelant peut alors retomber sur un rendu
 * de secours (ex: Token3D).
 */
export function useImageTexture(url) {
  const [texture, setTexture] = useState(() => (url ? cache.get(url) ?? null : null))

  useEffect(() => {
    if (!url) {
      setTexture(null)
      return
    }
    if (cache.has(url)) {
      setTexture(cache.get(url))
      return
    }

    let cancelled = false
    loader.load(
      url,
      (tex) => {
        if (cancelled) return
        tex.colorSpace = THREE.SRGBColorSpace
        cache.set(url, tex)
        setTexture(tex)
      },
      undefined,
      () => {
        if (!cancelled) setTexture(null)
      }
    )

    return () => {
      cancelled = true
    }
  }, [url])

  return texture
}
