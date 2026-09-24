# Modèles 3D (.glb)

Dépose ici les modèles 3D des logos suivants pour qu'ils remplacent automatiquement
le jeton texte de secours (`Token3D`) dans la section Stack :

- `n8n.glb`
- `python.glb`
- `dotnet.glb`
- `php.glb`
- `postgres.glb`
- `mongodb.glb`
- `supabase.glb`

Aucun autre fichier à modifier : `LogoGLTF` (`src/components/skills/LogoGLTF.jsx`)
charge automatiquement le fichier correspondant via `useGLTF('/models/xxx.glb')`.
Tant qu'un fichier est absent, le jeton texte reste affiché à la place (pas d'erreur).

Conseils :
- Format `.glb` (glTF binaire), pas `.gltf` + textures séparées.
- Modèle centré sur l'origine, taille raisonnable (~1 à 2 unités) pour un bon rendu
  une fois mis à l'échelle dans la scène.
- Outils gratuits pour trouver/convertir des logos 3D : Sketchfab (licence CC),
  Blender (export .glb), ou génération via Spline/Vectary à partir d'un SVG.
