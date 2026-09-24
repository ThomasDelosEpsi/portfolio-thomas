// src/components/ParticlesBackground.jsx
import { useEffect, useRef } from 'react'

const DOT_COUNT = 90
const LINK_DISTANCE = 130
const MOUSE_RADIUS = 160

/**
 * Fond "constellation" léger en Canvas 2D (pas de WebGL) : des points reliés par
 * de fines lignes, qui dérivent doucement et s'écartent légèrement au passage de la souris.
 * Beaucoup plus léger qu'une scène Three.js en plein écran.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationId

    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }))

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', handleMouseMove, { passive: true })
    window.addEventListener('pointerleave', handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const dot of dots) {
        dot.x += dot.vx
        dot.y += dot.vy

        const dx = dot.x - mouseRef.current.x
        const dy = dot.y - mouseRef.current.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        if (distToMouse < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distToMouse) / MOUSE_RADIUS
          dot.x += (dx / (distToMouse || 1)) * force * 1.4
          dot.y += (dy / (distToMouse || 1)) * force * 1.4
        }

        if (dot.x < 0) dot.x = width
        if (dot.x > width) dot.x = 0
        if (dot.y < 0) dot.y = height
        if (dot.y > height) dot.y = 0
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.12 * (1 - dist / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
        ctx.fillStyle = 'rgba(249, 115, 22, 0.55)'
        ctx.beginPath()
        ctx.arc(dots[i].x, dots[i].y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('pointerleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation-canvas" />
}
