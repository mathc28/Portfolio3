// data/projectsData.ts

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
  link: string;
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
    slug: 'arbauvergne',
    title: 'Arb\'Auvergne',
    miniDescription: 'Site WordPress sur mesure pour une entreprise d\'élagage',
    description: 'Création d\'un site pour un élagueur professionnel auvergnat. Site vitrine avec stratégie SEO pour les plus grandes villes auvergnates.',
    image: PhotoArb ,
    link: 'https://www.arbauvergne.fr',
    technologies: ['WordPress', 'PHP', 'CSS'],
    featured: true,
    client: 'À remplir ensemble',
    year: 'À remplir ensemble',
    role: 'À remplir ensemble',
    context: 'À remplir ensemble',
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
    technologies: ['Next.js', 'React', 'TypeScript', 'GSAP'],
    featured: true,
    client: 'Projet personnel',
    year: '2026',
    role: 'Conception, design, développement',
    context: 'À remplir ensemble',
    actions: [],
    results: [],
  },
  {
    slug: 'footdujour',
    title: 'Foot Du Jour',
    miniDescription: 'Site dédié aux news football',
    description: 'Refonte visuelle pour le site d\'un ami avec du contenu spécial football. Le but est d\'avoir les dernières news football de manière lisible et sans publicité intrusive.',
    image: PhotoFdj,
    link: 'https://www.footdujour.fr',
    technologies: ['React', 'CSS', 'JavaScript'],
    featured: true,
    client: 'À remplir ensemble',
    year: 'À remplir ensemble',
    role: 'À remplir ensemble',
    context: 'À remplir ensemble',
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
    technologies: ['HTML', 'CSS'],
    featured: true,
    client: 'À remplir ensemble',
    year: 'À remplir ensemble',
    role: 'À remplir ensemble',
    context: 'À remplir ensemble',
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
    client: 'À remplir ensemble',
    year: 'À remplir ensemble',
    role: 'À remplir ensemble',
    context: 'À remplir ensemble',
    actions: [],
    results: [],
  },

  // ─── ARCHIVE ───
  {
    slug: 'argentbank',
    title: 'Argent Bank',
    miniDescription: 'Interface bancaire avec authentification',
    description: 'App React/Redux avec authentification.',
    image: PhotoArgentbank,
    link: 'https://mc-argent-bank.vercel.app/',
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
    technologies: ['React', 'CSS'],
    featured: false,
  },
  {
    slug: '724events',
    title: '724 Events',
    miniDescription: 'Debug d\'un site événementiel',
    description: 'Déboguer et finaliser le développement d\'un site one-page d\'une agence événementielle.',
    image: Photo724,
    link: 'https://mc-724events.vercel.app',
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
    technologies: ['SEO', 'Google Lighthouse', 'Wave'],
    featured: false,
  },
  {
    slug: 'menumaker',
    title: 'Menu Maker by Qwenta',
    miniDescription: 'Planification d\'un site de gestion de menus',
    description: 'Planification du développement d\'un site de gestion de menus pour restaurateurs : rédaction des user stories, veille technologique et cahier des charges.',
    image: PhotoQwanta,
    link: '#',
    technologies: ['React', 'CSS'],
    featured: false,
  },
  {
    slug: 'archiportfolio',
    title: 'Portfolio architecte',
    miniDescription: 'Dynamisation d\'un portfolio en JavaScript',
    description: 'Utilisation de JavaScript pour dynamiser une page statique. Création d\'une page de connexion administrateur ainsi que la modale permettant d\'uploader de nouveaux projets.',
    image: PhotoArchiportfolio,
    link: '#',
    technologies: ['JavaScript', 'CSS'],
    featured: false,
  },
  {
    slug: 'printit',
    title: 'Print-it',
    miniDescription: 'Carrousel dynamique en React',
    description: 'Création d\'un carrousel dynamique React + Node.js.',
    image: PhotoPrint,
    link: '#',
    technologies: ['React', 'CSS'],
    featured: false,
  },
  {
    slug: 'ohmyfood',
    title: 'Oh My Food Paris',
    miniDescription: 'Site mobile-first pour restaurants parisiens',
    description: 'Développement d\'un site mobile-first qui répertorie les menus de restaurants gastronomiques parisiens.',
    image: PhotoOhmyfood,
    link: '#',
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
    technologies: ['Vue.js', 'CSS'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);