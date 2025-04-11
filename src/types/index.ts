// Interfaces compartidas para el proyecto
import { ReactNode, ChangeEvent } from 'react';

export interface Proyecto {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
}

export interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
}

export interface ThemeColors {
  text: string;
  textSecondary: string;
  background: string;
  isDark: boolean;
}

export type FormState = {
  name: string;
  email: string;
  message: string;
}

export type SendStatus = 'idle' | 'pending' | 'success' | 'error';

export type ViewName = 'home' | 'servicios' | 'proyectos' | 'contacto';

// Interfaces para hooks de navegación
export interface UseNavigationOptions {
  initialView?: ViewName;
  transitionDuration?: number;
}

export interface UseNavigationReturn {
  currentView: ViewName;
  isTransitioning: boolean;
  navigateTo: (view: ViewName) => void;
  navigateNext: () => void;
  navigatePrev: () => void;
  navigateToFirst: () => void;
  navigateToLast: () => void;
}

export interface UseNavigationControlsOptions {
  enableKeyboard?: boolean;
  enableWheel?: boolean;
  enableSwipe?: boolean;
  scrollDebounceMs?: number;
}

export interface UseNavigationControlsReturn {
  swipeHandlers: any; // SwipeableHandlers de react-swipeable
}

// Interfaces para componentes
export interface HomeViewProps {
  isActive: boolean;
}

export interface ServiciosViewProps {
  isActive: boolean;
}

export interface ProyectosViewProps {
  isActive: boolean;
}

export interface ContactoViewProps {
  isActive: boolean;
}

export interface NavigationProps {
  currentView: ViewName;
  onChangeView: (view: ViewName) => void;
}

export interface SectionTitleProps {
  title: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface FormFieldProps {
  type?: 'text' | 'email' | 'textarea';
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}

export interface StatusMessageProps {
  status: SendStatus;
  successMessage: string;
  errorMessage: string;
}

export interface ContactItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export interface ProyectoCardProps {
  proyecto: Proyecto;
  isExpanded: boolean;
  toggleExpand: () => void;
}

export interface ServicioCardProps {
  titulo: string;
  descripcion: string;
}

export interface ThemeToggleProps {
  // Sin props adicionales por ahora
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
} 

export interface ButtonProps {
  handleNav: (view: ViewName) => void;
  children: React.ReactNode;
  view: ViewName;
  currentView: ViewName;
  isDark: boolean;
}