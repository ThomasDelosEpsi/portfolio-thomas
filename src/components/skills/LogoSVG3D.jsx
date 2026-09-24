// src/components/skills/LogoSVG3D.jsx
import { useSvgLogoGeometry } from '../../hooks/useSvgLogoGeometry'
import Token3D from './Token3D'

/**
 * Logo de marque en vraie géométrie 3D, généré à la volée depuis le SVG officiel
 * du logo (Simple Icons) : chaque tracé est converti en `ExtrudeGeometry`.
 *
 * Sert de repli visuel tant qu'aucun modèle `.glb` n'est déposé dans public/models/.
 * Si le SVG lui-même est indisponible, on retombe sur le jeton texte (Token3D).
 */
export default function LogoSVG3D({ url, name, color, size = 1.15, logoScale = 1 }) {
  const data = useSvgLogoGeometry(url)

  if (!data) return <Token3D label={name} color={color} size={size} />

  const scale = data.scaleXY * size * 0.74 * logoScale

  return (
    <group scale={[scale, -scale, scale]}>
      {data.geoms.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          {/* Matériau "unlit" : le logo garde sa couleur pleine et lumineuse,
              quel que soit l'éclairage de la scène — contraste maximal. */}
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}
