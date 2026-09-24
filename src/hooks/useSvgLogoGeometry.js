// src/hooks/useSvgLogoGeometry.js
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

const cache = new Map()

// SVGLoader doit deviner, pour chaque tracé, quelle partie est "pleine" et laquelle
// est un "trou" (paramètre isCCW de path.toShapes). `true` convient à la quasi-totalité
// des logos Simple Icons. Exception connue : MongoDB, dont le tracé (feuille + fine
// couture interne) est mal interprété avec ce sens — on l'inverse spécifiquement.
const INVERTED_WINDING_SLUGS = ['mongodb']

function isInvertedWinding(url) {
  return INVERTED_WINDING_SLUGS.some((slug) => url.includes(`/${slug}/`))
}

/**
 * Charge un SVG (logo de marque) et le convertit en vraie géométrie 3D
 * (ExtrudeGeometry par tracé), plutôt qu'en simple texture plate.
 *
 * Retourne { geoms, scaleXY } où `geoms` est un tableau de BufferGeometry déjà
 * centré sur l'origine, et `scaleXY` le facteur à appliquer pour ramener le logo
 * dans une boîte ~1x1 (le composant appelant choisit ensuite la taille finale).
 * Retourne `null` tant que rien n'est chargé / si le SVG est introuvable ou invalide
 * — l'appelant peut alors retomber sur un rendu de secours (texte).
 */
export function useSvgLogoGeometry(url, extrudeDepth = 0.12) {
  const [data, setData] = useState(() => (url ? cache.get(url) ?? null : null))

  useEffect(() => {
    if (!url) {
      setData(null)
      return
    }
    if (cache.has(url)) {
      setData(cache.get(url))
      return
    }

    let cancelled = false

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`SVG fetch failed: ${res.status}`)
        return res.text()
      })
      .then((svgText) => {
        if (cancelled) return

        const loader = new SVGLoader()
        const { paths } = loader.parse(svgText)

        const isCCW = !isInvertedWinding(url)
        const shapes = []
        paths.forEach((path) => {
          path.toShapes(isCCW).forEach((shape) => shapes.push(shape))
        })
        if (!shapes.length) {
          setData(null)
          return
        }

        const geoms = shapes.map(
          (shape) =>
            new THREE.ExtrudeGeometry(shape, {
              depth: extrudeDepth,
              bevelEnabled: true,
              bevelThickness: extrudeDepth * 0.3,
              bevelSize: extrudeDepth * 0.2,
              bevelSegments: 2,
              curveSegments: 8
            })
        )

        // Les coordonnées SVG sont en pixels et arbitrairement grandes : on calcule
        // la boîte englobante combinée pour centrer et connaître le facteur d'échelle.
        const box = new THREE.Box3()
        geoms.forEach((g) => {
          g.computeBoundingBox()
          box.union(g.boundingBox)
        })
        const size = new THREE.Vector3()
        box.getSize(size)
        const center = new THREE.Vector3()
        box.getCenter(center)

        geoms.forEach((g) => g.translate(-center.x, -center.y, -extrudeDepth / 2))

        const scaleXY = 1 / Math.max(size.x, size.y, 0.0001)
        const result = { geoms, scaleXY }

        cache.set(url, result)
        setData(result)
      })
      .catch(() => {
        if (!cancelled) setData(null)
      })

    return () => {
      cancelled = true
    }
  }, [url, extrudeDepth])

  return data
}
