// src/lib/withBase.js
// Préfixe un chemin public avec le base path Vite (utile pour GitHub Pages,
// où le site est servi depuis /<repo>/ et non /).
export function withBase(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\//, '')}`
}
