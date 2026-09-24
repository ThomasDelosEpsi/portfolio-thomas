// src/components/AvatarScene.jsx
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { profile } from '../data/profile'
import { withBase } from '../lib/withBase'

// Ratio du portrait généré (1088 x 1456).
const IMG_RATIO = 1088 / 1456
const CARD_HEIGHT = 3.3
const CARD_WIDTH = CARD_HEIGHT * IMG_RATIO

function AvatarCard() {
  const groupRef = useRef()
  const texture = useTexture(withBase(profile.avatar))
  texture.colorSpace = THREE.SRGBColorSpace
  const { pointer } = useThree()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    // Inclinaison 3D vers la souris (effet "carte flottante").
    const targetRotY = pointer.x * 0.35
    const targetRotX = -pointer.y * 0.22
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.06
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.06
    // Légère lévitation continue.
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12
  })

  return (
    <group ref={groupRef}>
      {/* Socle : une boîte fine pour donner une vraie épaisseur 3D à la carte. */}
      <RoundedBox args={[CARD_WIDTH, CARD_HEIGHT, 0.18]} radius={0.14} smoothness={4} position={[0, 0, -0.1]}>
        <meshPhysicalMaterial color="#111633" roughness={0.4} metalness={0.4} clearcoat={0.6} />
      </RoundedBox>
      {/* Face avant : le portrait, légèrement devant le socle. Matériau "unlit" pour
          garder les couleurs vraies de l'image, indépendamment de l'éclairage de la scène. */}
      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={[CARD_WIDTH - 0.06, CARD_HEIGHT - 0.06]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  )
}

/**
 * Portrait rendu comme une vraie carte 3D en WebGL (et non une simple <img> plate) :
 * profondeur, éclairage, inclinaison qui suit la souris.
 */
export default function AvatarScene() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 26, position: [0, 0, 8.9], near: 0.1, far: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-4, -2, 3]} intensity={1.1} color="#ef4444" />
          <pointLight position={[4, 3, -3]} intensity={0.8} color="#f97316" />
          <AvatarCard />
        </Suspense>
      </Canvas>
    </div>
  )
}
