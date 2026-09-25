// src/components/StackCubes.jsx
import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { stack } from '../data/profile'
import Token3D from './skills/Token3D'
import LogoGLTF from './skills/LogoGLTF'
import LogoSVG3D from './skills/LogoSVG3D'
import LogoImage3D from './skills/LogoImage3D'
import ReactLogo3D from './skills/ReactLogo3D'
import { withBase } from '../lib/withBase'

const ITEM_SIZE = 1.15

/**
 * Un élément flottant de la grille de compétences. Le type de rendu 3D dépend de
 * `item.render` (voir data/profile.js) :
 * - 'token'     : jeton + Text3D (concepts sans logo de marque)
 * - 'logoGltf'  : modèle .glb externe, avec repli automatique sur un Token3D
 * - 'reactLogo' : logo React codé en dur (atome + tores)
 */
function StackItem({ item, x, y, z, worldY }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const seedOffset = useMemo(() => Math.random() * Math.PI * 2, [])

  const baseY = worldY + y
  const isToken = item.render === 'token'
  const hasLogoImage = !!item.logoImage

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    // Flottement volontairement discret : au-delà, les lignes de la grille paraissent
    // désalignées et l'ensemble fait brouillon.
    groupRef.current.position.y = Math.sin(t * 0.8 + seedOffset) * 0.08

    if (hovered) {
      // Au survol : on aligne l'élément bien droit, face caméra.
      groupRef.current.rotation.y += (0 - groupRef.current.rotation.y) * 0.15
      groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.15
    } else {
      // Léger balancement borné : toujours lisible, jamais vu de dos ni à l'envers.
      groupRef.current.rotation.y = Math.sin(t * 0.3 + seedOffset) * 0.35
      groupRef.current.rotation.x = Math.sin(t * 0.25 + seedOffset) * 0.1
    }

    const targetScale = hovered ? 1.35 : 1
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
  })

  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }
  const handlePointerOut = (e) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = 'default'
  }

  return (
    <group position={[x, baseY, z]}>
      <group ref={groupRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        {isToken ? (
          <Token3D label={item.name} color={item.color} size={ITEM_SIZE} />
        ) : hasLogoImage ? (
          // Rendu 3D "glossy" pré-généré (image) : déjà éclairé et ombré, il flotte
          // librement sans socle derrière (contrairement aux autres types de logo).
          <LogoImage3D
            url={withBase(item.logoImage)}
            name={item.name}
            color={item.color}
            size={ITEM_SIZE}
          />
        ) : (
          <>
            {/* Fond neutre + fin anneau de couleur : les logos GLTF/codés n'ont pas
                leur propre "socle" (contrairement au Token3D), on leur en donne un
                pour rester lisibles sur le fond noir. */}
            <mesh position={[0, 0, -0.1]}>
              <circleGeometry args={[ITEM_SIZE * 0.62, 32]} />
              <meshBasicMaterial color="#0a0e1f" transparent opacity={0.92} toneMapped={false} />
            </mesh>
            <mesh position={[0, 0, -0.098]}>
              <ringGeometry args={[ITEM_SIZE * 0.6, ITEM_SIZE * 0.64, 40]} />
              <meshBasicMaterial color={item.color} transparent opacity={hovered ? 0.9 : 0.55} toneMapped={false} />
            </mesh>

            {item.render === 'reactLogo' && <ReactLogo3D color={item.color} size={ITEM_SIZE * 0.85} />}

            {item.render === 'logoGltf' && (
              // Chaîne de repli : modèle .glb -> logo officiel extrudé depuis son SVG
              // -> jeton texte. Le logo s'affiche donc déjà sans aucun fichier à fournir.
              <LogoGLTF
                path={item.modelPath}
                scale={ITEM_SIZE * 0.5}
                fallback={
                  <LogoSVG3D
                    url={item.svgLogo}
                    name={item.name}
                    color={item.color}
                    size={ITEM_SIZE}
                    logoScale={item.logoScale}
                  />
                }
              />
            )}
          </>
        )}
      </group>
    </group>
  )
}

/**
 * Grille 3D des compétences (taille variable, s'adapte au nombre d'éléments).
 */
export default function StackCubes({ worldY = 0 }) {
  const positions = useMemo(() => {
    const cols = Math.ceil(Math.sqrt(stack.length * 1.6))
    const rows = Math.ceil(stack.length / cols)
    const spacingX = 1.7
    const spacingY = 1.5

    return stack.map((_, i) => {
      const row = Math.floor(i / cols)
      const col = i % cols
      const itemsInRow = Math.min(cols, stack.length - row * cols)
      const rowOffsetX = ((itemsInRow - 1) * spacingX) / 2
      return {
        x: col * spacingX - rowOffsetX,
        y: ((rows - 1) / 2 - row) * spacingY,
        z: 0
      }
    })
  }, [])

  return (
    <group>
      {stack.map((item, i) => (
        <StackItem key={item.name} item={item} worldY={worldY} {...positions[i]} />
      ))}
    </group>
  )
}
