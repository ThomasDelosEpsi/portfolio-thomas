// src/lib/roundedRectGeometry.js
import * as THREE from 'three'

/**
 * Géométrie plane à coins arrondis, avec des UV correctement mappés sur 0..1
 * (contrairement à THREE.ShapeGeometry brut, dont les UV suivent les coordonnées
 * du Shape et non la boîte englobante — la texture serait déformée/mal cadrée).
 *
 * Sert à faire correspondre exactement un plan texturé (ex: une photo) au contour
 * d'un RoundedBox derrière lui : avec un simple rectangle, les coins carrés du plan
 * dépassent du cadre arrondi et créent des encoches visibles.
 */
export function createRoundedRectGeometry(width, height, radius) {
  const shape = new THREE.Shape()
  const x = -width / 2
  const y = -height / 2
  const r = Math.min(radius, width / 2, height / 2)

  shape.moveTo(x, y + r)
  shape.lineTo(x, y + height - r)
  shape.quadraticCurveTo(x, y + height, x + r, y + height)
  shape.lineTo(x + width - r, y + height)
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - r)
  shape.lineTo(x + width, y + r)
  shape.quadraticCurveTo(x + width, y, x + width - r, y)
  shape.lineTo(x + r, y)
  shape.quadraticCurveTo(x, y, x, y + r)

  const geometry = new THREE.ShapeGeometry(shape, 16)
  geometry.computeBoundingBox()
  const { min, max } = geometry.boundingBox
  const spanX = max.x - min.x || 1
  const spanY = max.y - min.y || 1

  const uv = geometry.attributes.uv
  const pos = geometry.attributes.position
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, (pos.getX(i) - min.x) / spanX, (pos.getY(i) - min.y) / spanY)
  }
  uv.needsUpdate = true

  return geometry
}
