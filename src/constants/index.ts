import { Servicio, Proyecto, ViewName } from '../types';

// Constantes para servicios
export const SERVICIOS: Servicio[] = [
  {
    id: 1,
    titulo: 'Desarrollo Web',
    descripcion: 'Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías y mejores prácticas.'
  },
  {
    id: 2,
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android.'
  },
  {
    id: 3,
    titulo: 'Consultoría Técnica',
    descripcion: 'Asesoramiento en arquitectura de software, optimización y mejores prácticas de desarrollo.'
  },
  {
    id: 4,
    titulo: 'UI/UX Design',
    descripcion: 'Diseño de interfaces modernas y experiencias de usuario intuitivas y atractivas.'
  }
];

// Constantes para proyectos
export const PROYECTOS: Proyecto[] = [
  {
    id: 1,
    name: "Portfolio Personal",
    description: "Sitio web personal desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye efectos visuales únicos y una interfaz de chat con IA.",
    image: "/projects/portfolio.png",
    url: "https://github.com/username/portfolio"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con gestión de productos, carrito de compras y procesamiento de pagos.",
    image: "/projects/ecommerce.png",
    url: "https://github.com/username/ecommerce"
  },
  {
    id: 3,
    name: "Task Management App",
    description: "Aplicación de gestión de tareas con características de colaboración en tiempo real y organización de proyectos.",
    image: "/projects/taskapp.png",
    url: "https://github.com/username/taskapp"
  }
];

// Constantes para navegación
export const NAV_ITEMS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];

// Estructura de navegación
export const VIEW_ORDER: ViewName[] = ['home', 'servicios', 'proyectos', 'contacto'];

export const NAVIGATION_MAP = {
  next: {
    'home': 'servicios',
    'servicios': 'proyectos',
    'proyectos': 'contacto',
    'contacto': 'contacto' // Se queda en contacto (última vista)
  },
  prev: {
    'home': 'home', // Se queda en home (primera vista)
    'servicios': 'home',
    'proyectos': 'servicios',
    'contacto': 'proyectos'
  }
} as const;

// Metadatos para SEO
export const SEO_CONFIG = {
  title: 'Clemente Falcone | Software Engineer',
  description: 'Portfolio profesional de Clemente Falcone, Software Engineer especializado en desarrollo web, aplicaciones móviles y consultoría técnica.',
  canonical: 'https://clementefalcone.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://clementefalcone.com',
    title: 'Clemente Falcone | Software Engineer',
    description: 'Portfolio profesional de Clemente Falcone, Software Engineer con experiencia en desarrollo web.',
    images: [
      {
        url: 'https://clementefalcone.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clemente Falcone | Software Engineer',
      }
    ],
  },
  twitter: {
    handle: '@clementefalcone',
    site: '@clementefalcone',
    cardType: 'summary_large_image',
  },
}; 