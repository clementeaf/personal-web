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