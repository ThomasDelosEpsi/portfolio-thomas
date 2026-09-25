// src/components/skills/LogoImage3D.jsx
import { useImageTexture } from '../../hooks/useImageTexture'
import Token3D from './Token3D'

/**
 * Logo "glossy 3D" (image PNG pré-rendue par IA, fond transparent) affiché sur une
 * plaque flottante dans la scène. Le rendu 3D (relief, éclairage, ombres) est déjà
 * cuit dans l'image — pas besoin de géométrie 3D en plus.
 *
 * Retombe sur un Token3D si l'image n'est pas (encore) disponible.
 */
export default function LogoImage3D({ url, name, color, size = 1.15 }) {
  const texture = useImageTexture(url)

  if (!texture) return <Token3D label={name} color={color} size={size} />

  const img = texture.image
  const aspect = img && img.width && img.height ? img.width / img.height : 1
  const height = size * 0.82
  const width = height * aspect

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  )
}
