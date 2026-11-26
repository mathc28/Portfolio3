// data/projectsData.ts

import PhotoFiduo from '../assets/photos/fiduo.png';
import PhotoArb from '../assets/photos/arbauvergne.png';
import PhotoPortfolio from '../assets/photos/portfolio.webp';
import PhotoFdj from '../assets/photos/projet-fdj.png';
import PhotoLapilli from '../assets/photos/lapilli.webp';
import PhotoHotdog from '../assets/photos/fabrik.webp';
import PhotoArgentbank from '../assets/photos/argentbank.webp';
import PhotoKasa from '../assets/photos/kasa.webp';
import Photo724 from '../assets/photos/724events.png';
import PhotoSeoportfolio from '../assets/photos/seoportfolio.png';
import PhotoQwanta from '../assets/photos/qwanta.webp';
import PhotoArchiportfolio from '../assets/photos/archiportfolio.webp';
import PhotoPrint from '../assets/photos/printit.webp';
import PhotoOhmyfood from '../assets/photos/ohmyfood.webp';
import PhotoBooki from '../assets/photos/booki.webp';
import PhotoRc from '../assets/photos/ridingcities.webp';
import PhotoTodo from '../assets/photos/todo-list.webp';

import type { StaticImageData } from 'next/image';


export type Project = {
  slug: string;
  title: string;
  miniDescription: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
  repo?: string;
  technologies: string[];
  featured: boolean;
  // Enrichi pour featured uniquement
  client?: string;
  year?: string;
  role?: string;
  context?: string;
  actions?: string[];
  results?: string[];
};

export const projects: Project[] = [
  // ─── FEATURED ───
  {
    slug: 'fiduo',
    title: 'Fiduo',
    miniDescription: 'SaaS de cartes de fidélité digitales pour commerçants',
    description: 'SaaS de cartes de fidélité digitales Apple Wallet et Google Wallet pour les commerces de proximité.',
    image: PhotoFiduo,
    link: 'https://fiduo.app',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Apple Wallet', 'Google Wallet'],
    featured: true,
    client: 'Projet personnel',
    year: '2026',
    role: 'Conception, architecture, développement full-stack',
    context: "Les cartes de fidélité en carton se perdent, s'oublient au fond d'un portefeuille et ne permettent aucun lien avec le client. Fiduo les remplace par une carte qui vit dans le téléphone, sans application à installer, et qui remonte sur l'écran verrouillé quand le client passe près du commerce.",
    actions: [
      'Architecture multi-tenant sur Supabase avec Row Level Security pour isoler les données de chaque commerçant',
      'Génération de cartes Apple Wallet (certificats signés) et Google Wallet, mises à jour en push à chaque passage',
      "Scanner en caisse sous forme de PWA, avec appairage des appareils par code et révocation à distance",
      'Moteur de points en SQL (triggers) : solde, limite de passages par jour, refus des soldes négatifs',
      'Dashboard gérant, back-office plateforme, invitations par email et protection anti brute-force',
    ],
    results: [
      'En production sur fiduo.app',
      "Mise en route d'un commerce en 10 minutes, sans matériel ni application",
      'Compatible iPhone et Android avec une seule base de code',
    ],
  },
  {
    slug: 'arbauvergne',
    title: 'Arb\'Auvergne',
    miniDescription: 'Site WordPress sur mesure pour une entreprise d\'élagage',
    description: 'Création d\'un site pour un élagueur professionnel auvergnat. Site vitrine avec stratégie SEO pour les plus grandes villes auvergnates.',
    image: PhotoArb ,
    link: 'https://www.arbauvergne.fr',
    repo: 'https://github.com/mathc28/arbauvergne',
    technologies: ['WordPress', 'PHP', 'CSS'],
    featured: true,
    client: "Arb'auvergne",
    year: '2026',
    role: 'Conception, design, développement',
    context: "Contacté par Jonathan qui venait de créer son entreprise, nous avons rapidement défini son besoin et commencer le dévelloppement de son site sur wordpress. Grace à ce CMS, il pourra rajouter lui-même des photos de ses dernières réalisations et de créer de nouveaux conseils destinés aux utilisateurs. ",
    actions: [],
    results: [],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    miniDescription: 'Mon portfolio personnel',
    description: 'Mon portfolio personnel construit en Next.js avec animations GSAP.',
    image: PhotoPortfolio,
    link: 'https://mathcoc.vercel.app',
    repo: 'https://github.com/mathc28/Portfolio3',
    technologies: ['Next.js', 'React', 'TypeScript', 'GSAP'],
    featured: true,
    client: 'Projet personnel',
    year: '2026',
    role: 'Conception, design, développement',
    context: 'Utilisation de Next.JS et de Typescript pour moderniser mon Portfolio.',
    actions: [],
    results: [],
  },
  {
    slug: 'lapilli',
    title: 'Domaine Lapilli',
    miniDescription: 'Site vitrine pour un domaine viticole bio',
    description: 'Création d\'un site vitrine pour le jeune domaine Lapilli, un domaine situé en Auvergne producteur de vin bio.',
    image: PhotoLapilli,
    link: 'https://domaine-lapilli.com',
    repo: 'https://github.com/mathc28/Lapilli',
    technologies: ['HTML', 'CSS'],
    featured: true,
    client: 'Domaine Lapilli',
    year: '2025',
    role: 'Conception, design, développement',
    context: 'Création d\'un site vitrine pour le domaine Lapilli pour compléter leur stratégie digitale. Présentation du terroir auvergnat et des différentes cuvées du domaine. ',
    actions: [],
    results: [],
  },
  {
    slug: 'lafabrique',
    title: 'La Fabrique du Hot-Dog',
    miniDescription: 'Audit SEO et refonte responsive',
    description: 'Audit SEO du site web de la Fabrique du Hot-Dog + refonte visuelle du site web et de la partie responsive.',
    image: PhotoHotdog,
    link: 'https://www.lafabriqueduhotdog.com',
    technologies: ['SEO', 'Wix', 'Google Lighthouse'],
    featured: true,
    client: 'La Fabrique du Hot-Dog',
    year: '2025',
    role: 'Audit, redesign, développeent',
    context: 'Antoine m\'a contacté pour remettre à jour son site web. Après un audit, nous avons acté ensemble des modifications à apporter en mettant l\'accent sur le responsive.',
    actions: [],
    results: [],
  },

  // ─── ARCHIVE ───
  {
    slug: 'footdujour',
    title: 'Foot Du Jour',
    miniDescription: 'Site dédié aux news football',
    description: 'Refonte visuelle pour le site d\'un ami avec du contenu spécial football.',
    image: PhotoFdj,
    link: 'https://www.footdujour.fr',
    technologies: ['React', 'CSS', 'JavaScript'],
    featured: false,
  },
  {
    slug: 'argentbank',
    title: 'Argent Bank',
    miniDescription: 'Interface bancaire avec authentification',
    description: 'App React/Redux avec authentification.',
    image: PhotoArgentbank,
    link: 'https://mc-argent-bank.vercel.app/',
    repo: 'https://github.com/mathc28/argentBank2',
    technologies: ['React', 'Redux', 'SCSS'],
    featured: false,
  },
  {
    slug: 'kasa',
    title: 'Kasa',
    miniDescription: 'Plateforme de location immobilière',
    description: 'Projet React avancé : application de location d\'appartements avec React Router, composants Accordion et Slideshow.',
    image: PhotoKasa,
    link: 'https://mc-kasa.vercel.app',
    repo: 'https://github.com/mathc28/Kasa',
    technologies: ['React', 'SCSS'],
    featured: false,
  },
  {
    slug: '724events',
    title: '724 Events',
    miniDescription: 'Debug d\'un site événementiel',
    description: 'Déboguer et finaliser le développement d\'un site one-page d\'une agence événementielle.',
    image: Photo724,
    link: 'https://mc-724events.vercel.app',
    repo: 'https://github.com/mathc28/724events-p10',
    technologies: ['Chrome DevTools', 'JavaScript'],
    featured: false,
  },
  {
    slug: 'ninacarducci',
    title: 'Portfolio Nina Carducci',
    miniDescription: 'Optimisation SEO d\'un portfolio photographe',
    description: 'Optimisation du référencement d\'un portfolio de photographe avec amélioration de sa performance ainsi que de son accessibilité.',
    image: PhotoSeoportfolio,
    link: 'https://mc-ninacarducci.vercel.app/',
    repo: 'https://github.com/mathc28/NinaCarducci',
    technologies: ['SEO', 'Google Lighthouse', 'Wave'],
    featured: false,
  },
  {
    slug: 'menumaker',
    title: 'Menu Maker by Qwenta',
    miniDescription: 'Planification d\'un site de gestion de menus',
    description: 'Planification du développement d\'un site de gestion de menus pour restaurateurs : rédaction des user stories, veille technologique et cahier des charges.',
    image: PhotoQwanta,
    repo: 'https://github.com/mathc28/Qwenta',
    technologies: ['Gestion de projet', 'Spécifications'],
    featured: false,
  },
  {
    slug: 'archiportfolio',
    title: 'Portfolio architecte',
    miniDescription: 'Dynamisation d\'un portfolio en JavaScript',
    description: 'Utilisation de JavaScript pour dynamiser une page statique. Création d\'une page de connexion administrateur ainsi que la modale permettant d\'uploader de nouveaux projets.',
    image: PhotoArchiportfolio,
    repo: 'https://github.com/mathc28/Portfolio_Sophie_Bluel',
    technologies: ['JavaScript', 'CSS'],
    featured: false,
  },
  {
    slug: 'printit',
    title: 'Print-it',
    miniDescription: 'Carrousel dynamique en React',
    description: 'Création d\'un carrousel dynamique React + Node.js.',
    image: PhotoPrint,
    repo: 'https://github.com/mathc28/Print_It',
    technologies: ['JavaScript', 'CSS'],
    featured: false,
  },
  {
    slug: 'ohmyfood',
    title: 'Oh My Food Paris',
    miniDescription: 'Site mobile-first pour restaurants parisiens',
    description: 'Développement d\'un site mobile-first qui répertorie les menus de restaurants gastronomiques parisiens.',
    image: PhotoOhmyfood,
    repo: 'https://github.com/mathc28/Ohmyfood',
    technologies: ['HTML', 'SASS'],
    featured: false,
  },
  {
    slug: 'booki',
    title: 'Booki',
    miniDescription: 'Intégration d\'une maquette Figma',
    description: 'Intégration de la maquette Figma du site de Booki, un site de réservation en ligne d\'hébergement.',
    image: PhotoBooki,
    link: 'https://mc-booki.vercel.app',
    repo: 'https://github.com/mathc28/Booki',
    technologies: ['HTML', 'CSS'],
    featured: false,
  },
  {
    slug: 'ridingcities',
    title: 'Riding Cities',
    miniDescription: 'Mise à jour du site d\'une association de skate',
    description: 'Mise à jour de la page Internet de Riding Cities, une association sportive qui promeut le skate en région.',
    image: PhotoRc,
    link: 'https://mc-riding-cities.vercel.app/',
    repo: 'https://github.com/mathc28/Riding_Cities',
    technologies: ['HTML', 'CSS'],
    featured: false,
  },
  {
    slug: 'todo',
    title: 'Todo List',
    miniDescription: 'Première prise en main de Vue.js',
    description: 'Première prise en main de Vue.js avec la création de cette petite To-do list.',
    image: PhotoTodo,
    link: 'https://mc-todolist.vercel.app',
    repo: 'https://github.com/mathc28/todolist',
    technologies: ['Vue.js', 'CSS'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);