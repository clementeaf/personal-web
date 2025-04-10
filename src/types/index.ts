// Interfaces compartidas para el proyecto

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