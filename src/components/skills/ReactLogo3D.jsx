// src/components/skills/ReactLogo3D.jsx
import * as THREE from 'three'

/**
 * Logo React généré 100% en code : un noyau central (sphère) entouré de 3 orbites
 * (`<Torus>`) aplaties et pivotées à 60° les unes des autres, comme le vrai logo.
 * Les anneaux restent aplatis (scale.y réduit) plutôt qu'inclinés en 3D sur l'axe X :
 * une inclinaison 3D les rend quasi invisibles vus de face (tranche fine) dès que la
 * scène tourne légèrement — l'aplatissement reste lisible sous tout angle de caméra.
 */
export default function ReactLogo3D({ color = '#61DAFB', size = 1 }) {
  const radius = size * 0.42
  const tube = size * 0.032

  return (
    <group>
      <mesh>
        <sphereGeometry args={[size * 0.09, 20, 20]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {[0, 60, 120].map((deg) => (
        <group key={deg} rotation={[0, 0, THREE.MathUtils.degToRad(deg)]}>
          <mesh scale={[1, 0.42, 1]}>
            <torusGeometry args={[radius, tube, 12, 64]} />
            <meshBasicMaterial color={color} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
