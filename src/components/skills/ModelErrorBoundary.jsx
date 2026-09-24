// src/components/skills/ModelErrorBoundary.jsx
import { Component } from 'react'

/**
 * `useGLTF` rejette (fichier .glb manquant/404) au lieu de rester en attente :
 * Suspense seul ne rattrape pas un rejet, il faut une Error Boundary React classique.
 * Tant que le modèle n'existe pas dans /public/models, on retombe sur `fallback`.
 */
export default class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    // Volontairement silencieux : un .glb manquant est un état normal tant que
    // l'utilisateur n'a pas déposé ses fichiers dans public/models.
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null
    return this.props.children
  }
}
