// src/components/skills/Token3D.jsx
import { Center, Text3D } from '@react-three/drei'
import * as THREE from 'three'

// Droid Sans Bold : contrairement à helvetiker (police d'exemple three.js par défaut),
// elle embarque les glyphes accentués — indispensable pour "Découverte", "métiers"...
const FONT_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/droid/droid_sans_bold.typeface.json'

// Text3D ne gère ni le retour à la ligne ni l'ajustement automatique : on coupe au
// premier espace pour les libellés longs, puis on adapte la taille à la ligne la plus
// large, pour que tous les jetons aient un texte visuellement homogène et bien contenu.
function layoutLabel(label) {
  const text = label.length > 11 ? label.replace(' ', '\n') : label
  const longestLine = Math.max(...text.split('\n').map((line) => line.length))
  return { text, longestLine }
}

/**
 * Jeton 3D (cylindre aplati) avec un nom rendu en vraie géométrie 3D (`Text3D`)
 * posé sur la face avant — pour les concepts sans logo de marque (UiPath, RPA,
 * Agile, KPI & ROI, ...). Composant purement visuel : le flottement et le survol
 * sont gérés par le composant appelant (StackCubes.jsx), pour rester cohérents
 * avec les autres types de rendu (logoGltf, reactLogo).
 */
export default function Token3D({ label, color, size = 1.15 }) {
  const { text, longestLine } = layoutLabel(label)
  // ~8 caractères tiennent à la taille de référence ; au-delà on réduit
  // proportionnellement pour garder une marge intérieure constante.
  const fontSize = size * 0.16 * Math.min(1, 8 / longestLine)

  return (
    <group>
      {/* Le corps du jeton. */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[size * 0.56, size * 0.56, 0.16, 48]} />
        <meshPhysicalMaterial color="#0a0e1f" metalness={0.4} roughness={0.35} clearcoat={0.6} />
      </mesh>
      {/* Tranche colorée (identification de la marque/du concept). */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[size * 0.565, size * 0.565, 0.06, 48, 1, true]} />
        <meshBasicMaterial color={color} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>

      <Center position={[0, 0, 0.095]}>
        <Text3D
          font={FONT_URL}
          size={fontSize}
          height={0.045}
          curveSegments={6}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.0035}
          bevelSegments={2}
          lineHeight={1.25}
        >
          {text}
          <meshBasicMaterial color="white" toneMapped={false} />
        </Text3D>
      </Center>
    </group>
  )
}
