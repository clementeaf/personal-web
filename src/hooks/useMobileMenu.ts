import { useState, useCallback, useEffect } from 'react';

export interface UseMobileMenuReturn {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

// Usamos un singleton para mantener el estado entre componentes
let globalState = false;
let listeners: Function[] = [];

/**
 * Hook para manejar el estado del menú móvil
 * @returns Objeto con el estado y funciones para manipular el menú móvil
 */
export function useMobileMenu(): UseMobileMenuReturn {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(globalState);
  
  useEffect(() => {
    const currentListener = (state: boolean) => {
      setIsMobileMenuOpen(state);
    };
    
    listeners.push(currentListener);
    
    return () => {
      listeners = listeners.filter(listener => listener !== currentListener);
    };
  }, []);
  
  const openMobileMenu = useCallback(() => {
    console.log("Opening mobile menu");
    globalState = true;
    listeners.forEach(listener => listener(true));
  }, []);
  
  const closeMobileMenu = useCallback(() => {
    console.log("Closing mobile menu");
    globalState = false;
    listeners.forEach(listener => listener(false));
  }, []);
  
  const toggleMobileMenu = useCallback(() => {
    console.log("Toggling mobile menu, current state:", globalState);
    globalState = !globalState;
    console.log("New state:", globalState);
    listeners.forEach(listener => listener(globalState));
  }, []);
  
  return {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu
  };
} 