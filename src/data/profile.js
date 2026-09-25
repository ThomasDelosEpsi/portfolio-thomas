// src/data/profile.js
// Centralise toutes les données texte du portfolio (facile à éditer sans toucher aux composants).

export const profile = {
  name: 'Thomas Delos',
  age: 25,
  title: 'Chef de Projet IT / Développeur RPA',
  location: 'Région lilloise — Full-Remote OK',
  tagline: "J'automatise le travail répétitif pour que les équipes se concentrent sur ce qui compte.",
  email: 'thomas.delos36@gmail.com',
  avatar: 'images/avatar-3d.png',
  socials: {
    github: 'https://github.com/ThomasDelosEpsi',
    linkedin: 'https://linkedin.com/in/thomas-delos-a33692199/'
  }
}

export const about = {
  paragraphs: [
    "Diplômé de l'EPSI Arras, je me suis spécialisé dans l'automatisation des processus métier (RPA) et le développement d'outils internes qui simplifient la vie des équipes IT.",
    "Basketteur depuis l'âge de 15 ans, j'ai appris très tôt l'esprit d'équipe, la rigueur et la discipline — des valeurs que j'applique aujourd'hui dans la conduite de projets IT.",
    "Passionné de construction et d'automatisation, je pousse cette logique jusque dans mes loisirs : domotique avec Home Assistant, mods complexes sur Minecraft (Fabric, WorldEdit). Une passion transmise par mon père, lui-même directeur d'entreprise.",
    'Mon objectif : rejoindre une équipe en CDI pour concevoir des solutions RPA robustes, du POC jusqu\'à l\'industrialisation.'
  ],
  highlights: [
    { label: 'Formation', value: 'EPSI Arras' },
    { label: 'Sport', value: 'Basketball — 10 ans' },
    { label: 'Passion', value: 'Domotique & Automatisation' },
    { label: 'Recherche', value: 'CDI — Lille / Full-Remote' }
  ]
}

// Témoignage tiré du bilan de fin d'alternance rédigé par mon manager (3 ans passés
// dans l'équipe RPA/OCR de Lyreco). Extrait fidèle du document original.
export const trust = {
  company: 'Lyreco Management',
  role: 'Alternant Chef de Projet RPA & IA',
  period: 'Septembre 2023 — Septembre 2026 (3 ans)',
  authorName: 'Mathieu Lison',
  authorRole: 'IT IS Office Manager — RPA/OCR',
  quote:
    "Une progression importante en autonomie et en maturité professionnelle. Thomas a su évoluer avec l'équipe et avec les technologies que nous utilisons, passant du développement RPA à des sujets de gouvernance, d'industrialisation, d'architecture, d'API et désormais d'intelligence artificielle.",
  closingQuote:
    "De l'alternant qui découvre l'environnement RPA au professionnel capable de prendre en charge des sujets structurants : le chemin parcouru en trois ans est important.",
  stats: [
    { value: '45', label: 'robots RPA supervisés', context: 'M.A.P. — Automation Hub Dashboard' },
    { value: '12', label: 'modules réutilisables', context: 'Toolbox RPA' },
    { value: '8', label: 'tenants migrés', context: 'Migration Automation Hub' },
    { value: '300+', label: 'automatisations analysées', context: 'Migration des tenants' },
    { value: '18', label: 'User Stories rédigées', context: 'Robot VDT — pilotage produit' }
  ],
  pilotedTopics: [
    'Gouvernance RPA UiPath',
    'Robot VDT',
    'STEP Asset Upload — Suisse',
    'Chatbot RPA / RAG',
    'Grille de qualification des processus',
    'Monitoring RPA'
  ]
}

// Stack technique complète, reprise du CV. Chaque item déclare comment il doit être
// rendu en 3D (voir StackCubes.jsx) :
// - 'logoGltf'  : modèle .glb externe (dépose le fichier dans public/models/). Tant
//                 qu'il n'existe pas, le logo officiel (`svgLogo`) est extrudé en 3D
//                 à la volée ; en dernier recours, jeton texte.
// - 'reactLogo' : logo React généré 100% en code (atome + tores).
// - 'token'     : jeton 3D avec le nom en Text3D (concepts sans logo de marque).
const simpleIcon = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`

export const stack = [
  // Gestion de Projet
  { name: 'KPI & ROI', color: '#f59e0b', description: 'Suivi de KPI & calcul de ROI', render: 'token' },
  { name: 'Agile', color: '#f59e0b', description: 'Méthodologie Agile & gestion des risques', render: 'token' },
  { name: 'Découverte', color: '#f59e0b', description: 'Phase de découverte & analyse des besoins', render: 'token' },
  {
    name: 'Contacts métiers',
    color: '#f59e0b',
    description: 'Relation et coordination avec les équipes métier',
    render: 'token'
  },
  { name: 'RFP', color: '#f59e0b', description: "Gestion d'appels d'offres", render: 'token' },
  // IA & Automatisation
  {
    name: 'n8n',
    color: '#EA4B71',
    description: 'Orchestration de workflows & agents IA',
    render: 'logoGltf',
    modelPath: '/models/n8n.glb',
    // Rendu 3D "glossy" généré par IA (image, pas de géométrie) — prioritaire
    // sur le modèle .glb et le logo SVG extrudé tant qu'il est présent.
    logoImage: 'images/logos/n8n.png',
    svgLogo: simpleIcon('n8n', 'EA4B71'),
    logoScale: 1.25
  },
  { name: 'UiPath', color: '#FA4616', description: 'Automatisation RPA, REFramework, Orchestrator', render: 'token' },
  { name: 'RPA', color: '#14B8A6', description: 'Automatisation de processus métier répétitifs', render: 'token' },
  { name: 'LLM locaux', color: '#8B5CF6', description: 'Modèles de langage auto-hébergés', render: 'token' },
  { name: 'Agents RAG', color: '#22C55E', description: 'Recherche augmentée par génération', render: 'token' },
  { name: 'ABBYY', color: '#E30613', description: "OCR & extraction intelligente de documents", render: 'token' },
  // Développement & Data
  {
    name: 'Python',
    color: '#3776AB',
    description: 'Scripting, data processing, APIs',
    render: 'logoGltf',
    modelPath: '/models/python.glb',
    logoImage: 'images/logos/python.png',
    svgLogo: simpleIcon('python', '3776AB')
  },
  {
    name: '.NET',
    color: '#512BD4',
    description: 'APIs et applications MVC en C# / ASP.NET',
    render: 'logoGltf',
    modelPath: '/models/dotnet.glb',
    svgLogo: simpleIcon('dotnet', '512BD4')
  },
  {
    name: 'PHP',
    color: '#777BB4',
    description: 'Développement web côté serveur',
    render: 'logoGltf',
    modelPath: '/models/php.glb',
    svgLogo: simpleIcon('php', '777BB4')
  },
  {
    name: 'React',
    color: '#61DAFB',
    description: 'Interfaces web modernes & réactives',
    render: 'reactLogo'
  },
  {
    name: 'PostgreSQL',
    color: '#4169E1',
    description: 'Base de données relationnelle',
    render: 'logoGltf',
    modelPath: '/models/postgres.glb',
    svgLogo: simpleIcon('postgresql', '4169E1')
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    description: 'Base de données NoSQL orientée documents',
    render: 'logoGltf',
    modelPath: '/models/mongodb.glb',
    svgLogo: simpleIcon('mongodb', '47A248')
  },
  {
    name: 'Supabase',
    color: '#3FCF8E',
    description: 'Backend-as-a-Service (DB, auth, storage)',
    render: 'logoGltf',
    modelPath: '/models/supabase.glb',
    svgLogo: simpleIcon('supabase', '3FCF8E')
  }
]

export const projects = [
  {
    id: 'rpa-toolbox',
    title: 'RPA ToolBox',
    subtitle: 'Portail SSO centralisant les outils de monitoring interne',
    description:
      "Conception d'un portail SSO (V1) regroupant l'ensemble des outils de monitoring RPA internes en un point d'accès unique, avec gestion des accès et suivi en temps réel des automatisations.",
    tags: ['UiPath', 'React', 'SSO', 'Monitoring'],
    categories: ['dev'],
    color: '#ef4444'
  },
  {
    id: 'antigravity',
    title: 'Antigravity',
    subtitle: 'Plateforme web de formation & évaluation',
    description:
      "Développement d'une plateforme de formation et d'évaluation intégrant du web scraping et l'architecture REFramework pour automatiser la collecte et la restitution des résultats.",
    tags: ['Web Scraping', 'REFramework', 'UiPath', 'Python'],
    categories: ['dev'],
    color: '#f97316'
  },
  {
    id: 'git-uipath',
    title: 'Git x UiPath',
    subtitle: 'POC CI/CD avec Automation Ops',
    description:
      "Intégration et preuve de concept CI/CD sur 8 semaines couplant Git et UiPath Automation Ops, pour fiabiliser le versionning et le déploiement continu des automatisations.",
    tags: ['CI/CD', 'Automation Ops', 'Git', 'DevOps'],
    categories: ['dev', 'gestion'],
    color: '#fb7185'
  },
  {
    id: 'airbnb-agent',
    title: 'IA Agent Gestionnaire Airbnb',
    subtitle: 'Agent IA pour la gestion de réservations',
    description:
      "Création d'un agent IA qui analyse le contexte des messages voyageurs pour préparer une réponse automatique et gérer la logistique des réservations.",
    tags: ['IA', 'Agents', 'Automatisation'],
    categories: ['ia'],
    color: '#8b5cf6'
  },
  {
    id: 'super-mario-ai',
    title: 'IA Super Mario (Lua)',
    subtitle: 'Intelligence artificielle de jeu autonome',
    description:
      "Conception algorithmique et développement d'une IA capable de jouer de manière autonome à Super Mario World, en Lua.",
    tags: ['Lua', 'Algorithmique', 'Jeu vidéo'],
    categories: ['ia', 'dev'],
    color: '#22c55e'
  },
  {
    id: 'ppm-control-center',
    title: 'Purchase Price Management — Control Center',
    subtitle: 'Coded App UiPath en production chez Lyreco',
    description:
      "Coded App (React + TypeScript + Vite) qui permet à l'équipe achats de lancer et suivre la RPA Purchase Price Management (génération de tarifs, notifications, e-mails fournisseurs, audits) sans ouvrir Orchestrator. En production.",
    tags: ['UiPath Coded App', 'React', 'TypeScript', 'Orchestrator'],
    categories: ['dev', 'gestion'],
    color: '#ef4444'
  },
  {
    id: 'map-automation-hub',
    title: 'M.A.P — Automation Hub Dashboard',
    subtitle: 'Vue unique santé du parc RPA + valeur métier',
    description:
      "Coded App UiPath qui croise les données d'exécution live d'Orchestrator avec le business case de chaque automatisation dans Automation Hub, pour donner à Lyreco un écran unique de pilotage.",
    tags: ['UiPath Coded App', 'React', 'TypeScript', 'Automation Hub'],
    categories: ['dev', 'gestion'],
    color: '#f97316'
  },
  {
    id: 'gouvernance-rpa-pilote',
    title: 'Découpage & Gouvernance RPA — Pilotage',
    subtitle: "Centre de pilotage d'un agent UiPath Agent Builder",
    description:
      "Coded App (React + TypeScript) pilotant un agent UiPath Agent Builder : file de documents à traiter et escalades vers Action Center.",
    tags: ['UiPath Agent Builder', 'React', 'IA'],
    categories: ['dev', 'ia'],
    color: '#8b5cf6'
  },
  {
    id: 'gouvernance-rpa-escalade',
    title: 'Découpage & Gouvernance RPA — Escalade',
    subtitle: 'Interface humaine dans la boucle pour un agent IA',
    description:
      "Coded App servant d'interface d'escalade humaine pour un agent UiPath Agent Builder : affiche la file des documents nécessitant validation ou décision humaine via Action Center.",
    tags: ['UiPath Agent Builder', 'Human-in-the-loop', 'React'],
    categories: ['dev', 'ia'],
    color: '#a78bfa'
  },
  {
    id: 'academy',
    title: 'Academy',
    subtitle: 'Plateforme SaaS de formation & validation',
    description:
      "Prototype front-end d'une plateforme de formation, d'onboarding et de validation de livrables métier : parcours par espace (RPA, RH, Marketing, Finance, Juridique...), suivi des apprenants et validations multi-niveaux.",
    tags: ['SaaS', 'Front-end', 'Gestion de projet'],
    categories: ['dev', 'gestion'],
    color: '#f59e0b'
  },
  {
    id: 'documentation-generator',
    title: 'Documentation Generator',
    subtitle: 'Doc technique auto-générée depuis des workflows UiPath',
    description:
      "Outil Python (interface Tkinter) qui parcourt les fichiers XAML d'un projet UiPath, en extrait la logique métier et s'appuie sur un LLM (API compatible Mistral) pour produire une documentation lisible.",
    tags: ['Python', 'Tkinter', 'LLM', 'UiPath'],
    categories: ['dev', 'ia'],
    color: '#3776AB'
  },
  {
    id: 'poc-chatbot-rpa',
    title: 'POC Chatbot RPA',
    subtitle: "Assistant IA d'aide à l'automatisation",
    description:
      "Preuve de concept d'un chatbot d'aide à la RPA, backend Python et frontend web dédiés, capable de répondre à des questions sur un catalogue d'automatisations existantes.",
    tags: ['Python', 'Chatbot', 'IA'],
    categories: ['ia', 'dev'],
    color: '#22c55e'
  },
  {
    id: 'script-automationhub',
    title: 'Script Automation Hub',
    subtitle: 'Extraction & enrichissement IA des idéations RPA',
    description:
      "Scripts Python qui extraient les automatisations et idéations d'Automation Hub, les indexent dans PostgreSQL avec des embeddings vectoriels (pgvector) et les enrichissent via l'API Mistral.",
    tags: ['Python', 'PostgreSQL', 'pgvector', 'LLM'],
    categories: ['ia', 'dev'],
    color: '#4169E1'
  },
  {
    id: 'dashboard-monitoring',
    title: 'Dashboard Monitoring',
    subtitle: "Suivi quotidien des jobs d'automatisation",
    description:
      "Tableau de bord Streamlit affichant le nombre de jobs exécutés par jour à partir d'une base Firestore, avec indicateurs clés et graphique d'évolution.",
    tags: ['Python', 'Streamlit', 'Firestore'],
    categories: ['dev', 'gestion'],
    color: '#f59e0b'
  },
  {
    id: 'kpi-jira',
    title: 'Analyse KPI Jira',
    subtitle: "Suivi hebdomadaire de l'activité d'équipe",
    description:
      "Script Python d'analyse de l'activité Jira (tickets créés vs terminés) : calcul d'indicateurs dérivés (flux net, taux de complétion) et graphiques par semaine, mois, trimestre.",
    tags: ['Python', 'pandas', 'Jira', 'KPI'],
    categories: ['gestion', 'dev'],
    color: '#fb923c'
  },
  {
    id: 'webhook-teams-crashbot',
    title: 'Webhook Teams Crash Bot',
    subtitle: "Alertes temps réel sur les crashs d'automatisation",
    description:
      "Bot en Go qui surveille les jobs et files d'Orchestrator UiPath, détecte les échecs et envoie des notifications formatées sur Microsoft Teams via webhook, sans doublons.",
    tags: ['Go', 'Orchestrator', 'Microsoft Teams'],
    categories: ['dev'],
    color: '#06b6d4'
  },
  {
    id: 'uipathdle',
    title: 'UiPathDLE',
    subtitle: 'Un Wordle autour des activités UiPath',
    description:
      "Jeu web façon Wordle : deviner chaque jour une activité UiPath parmi une base enrichie (nom, package, catégorie, entrées/sorties), avec indices et tentatives limitées. Inclut son propre scraper de base de données.",
    tags: ['Jeu web', 'Scraping', 'UiPath'],
    categories: ['dev'],
    color: '#fb7185'
  },
  {
    id: 'uipath-analyzer-api',
    title: 'UiPath Analyzer API Call',
    subtitle: "Calculateur de consommation d'API UiPath",
    description:
      "Page web autonome qui calcule et visualise la consommation d'appels API UiPath (Chart.js), avec fonctionnalités assistées par IA.",
    tags: ['HTML/JS', 'Chart.js', 'UiPath'],
    categories: ['dev'],
    color: '#f97316'
  },
  {
    id: 'oidc-idp',
    title: 'AutomationHub OIDC Identity Provider',
    subtitle: "Fournisseur d'identité OIDC maison",
    description:
      "Serveur Node.js/Express exposant un fournisseur d'identité OpenID Connect pour Grafana et un portail React interne, avec gestion des utilisateurs/rôles sur PostgreSQL.",
    tags: ['Node.js', 'OIDC', 'PostgreSQL', 'SSO'],
    categories: ['dev'],
    color: '#a78bfa'
  },
  {
    id: 'uipath-codedapp-skills',
    title: 'UiPath Coded App Skills',
    subtitle: 'Pack de skills Claude Code, publié en open-source',
    description:
      "Pack de skills Claude Code génériques pour concevoir, coder, brancher aux API et déployer des UiPath Coded Apps (React + TypeScript) sur n'importe quel tenant UiPath Automation Cloud.",
    tags: ['Claude Code', 'IA', 'UiPath', 'Outillage'],
    categories: ['ia', 'dev'],
    color: '#f59e0b'
  },
  {
    id: 'datavisualisation',
    title: 'Datavisualisation électorale',
    subtitle: 'Carte interactive des résultats par commune',
    description:
      "Script Python générant une carte choroplèthe interactive (Folium) des résultats d'élections par commune en Savoie / Haute-Savoie, à partir de données de vote croisées avec un fond de carte géographique.",
    tags: ['Python', 'Folium', 'Geopandas'],
    categories: ['dev'],
    color: '#4169E1'
  },
  {
    id: 'mspr-arrosage',
    title: 'MSPR — Arrosage entre particuliers',
    subtitle: "Application mobile Flutter (projet d'équipe, EPSI)",
    description:
      "Application mobile Flutter mettant en relation des particuliers pour l'arrosage de plantes (suggestions via l'API Perenual, adresses via l'API du gouvernement, carte via OpenStreetMap). Architecture en couches (Controller/Service/Repository), pipeline DevOps avec Docker, tests unitaires/intégration (Jenkins) et couverture de code (Jacoco).",
    tags: ['Flutter', 'Docker', 'Jenkins', 'CI/CD', "Travail d'équipe"],
    categories: ['dev'],
    color: '#22c55e'
  },
  {
    id: 'mspr-kelectronik',
    title: 'MSPR — Audit stratégique K-Electronik',
    subtitle: "Modernisation du SI d'une PME B2B/B2C (projet d'équipe, EPSI)",
    description:
      "Audit stratégique et plan de transformation du système d'information d'une PME de distribution de composants électroniques (fusion France/Espagne) : cartographie de l'existant, architecture cible API-First (ESB), modélisation BPMN, roadmap IT et pilotage RSE/Green IT. Rôle : urbanisation & data (API, ESB, BPMN).",
    tags: ['Architecture SI', 'BPMN', 'ISO 27005', 'Gestion de projet'],
    categories: ['gestion'],
    color: '#f59e0b'
  },
  {
    id: 'innov-mind',
    title: "Innov'Mind",
    subtitle: "Pitch produit — monitoring de bots d'automatisation",
    description:
      "Conception et pitch d'une application web de supervision de bots (file d'attente, statuts en temps réel, statistiques mensuelles) : refonte UX d'un outil existant jugé trop dense, maquettes et charte graphique dédiée.",
    tags: ['UX/UI', 'Product design', 'Monitoring'],
    categories: ['gestion', 'dev'],
    color: '#98c21b'
  }
]
