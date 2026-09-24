// src/components/skills/LogoGLTF.jsx
import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import ModelErrorBoundary from './ModelErrorBoundary'

function GLTFModel({ path, scale }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} scale={scale} />
}

/**
 * Composant générique pour charger un logo 3D externe (.glb) avec `useGLTF`.
 * Dépose tes fichiers dans `public/models/` — le chemin passé ici (`/models/xxx.glb`)
 * pointe directement dessus, aucun autre code à toucher.
 *
 * Tant que le fichier n'existe pas, `fallback` est affiché à la place (pas de crash).
 */
export default function LogoGLTF({ path, scale = 1, fallback = null }) {
  return (
    <ModelErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <GLTFModel path={path} scale={scale} />
      </Suspense>
    </ModelErrorBoundary>
  )
}
