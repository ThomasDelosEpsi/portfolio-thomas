# Thomas Delos — Portfolio 3D

Portfolio one-page immersif construit avec React + Vite + React Three Fiber, Drei, Framer Motion et Tailwind CSS.

## Démarrage local

```bash
npm install
npm run dev
```

## Déploiement sur GitHub Pages

Deux options, choisis-en une (pas besoin des deux) :

### Option A — GitHub Actions (recommandée)

Le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) build et déploie automatiquement à chaque push sur `main`.

1. Pousse ce projet sur un repo GitHub nommé `portfolio-3d` (ou modifie `REPO_NAME` dans [vite.config.js](vite.config.js) si tu choisis un autre nom).
2. Dans le repo GitHub : **Settings → Pages → Source → GitHub Actions**.
3. Push sur `main` : le site est déployé automatiquement sur `https://<ton-user>.github.io/portfolio-3d/`.

### Option B — déploiement manuel via `gh-pages`

```bash
npm run deploy
```

Ceci build le projet et pousse le contenu de `dist/` sur la branche `gh-pages`. Configure ensuite **Settings → Pages → Source → Deploy from branch → gh-pages**.

## Notes

- Le champ `email` / réseaux sociaux et tout le contenu texte sont centralisés dans [src/data/profile.js](src/data/profile.js) — modifie ce fichier pour mettre à jour les textes sans toucher aux composants.
- Le formulaire de contact ([src/components/Contact.jsx](src/components/Contact.jsx)) est UI-only. Pour le rendre fonctionnel, branche un service comme Formspree, EmailJS ou une fonction serverless.
- La police 3D du hero (`Text3D`) est chargée depuis le CDN jsDelivr (three.js examples fonts) — aucun fichier de police à gérer en local.
- Si tu déploies sur un domaine custom ou un repo `<user>.github.io`, mets `base: '/'` dans [vite.config.js](vite.config.js).
