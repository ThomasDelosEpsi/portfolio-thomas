// src/components/StackScene.jsx
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import StackCubes from './StackCubes'

/**
 * Petite scène Three.js autonome (pas de canvas plein écran), utilisée uniquement
 * dans la section Stack pour garder une touche de 3D sans reproduire le gros
 * décor WebGL en fond de page.
 */
export default function StackScene() {
  return (
    <div className="relative w-full h-[460px] md:h-[560px]">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 45, position: [0, 0, 13], near: 0.1, far: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 6, 5]} intensity={1.1} color="#f97316" />
          <pointLight position={[-6, -4, 3]} intensity={0.7} color="#ef4444" />

          <StackCubes worldY={0} />
        </Suspense>
      </Canvas>
    </div>
  )
}
