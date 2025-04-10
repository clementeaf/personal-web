import { useState, useCallback, useRef } from 'react';
import { ViewName } from '@/types';
import { NAVIGATION_MAP } from '@/constants';

interface UseNavigationOptions {
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

export function useNavigation({
  initialView = 'home', 
  transitionDuration = 500
}: UseNavigationOptions = {}): UseNavigationReturn {
  const [currentView, setCurrentView] = useState<ViewName>(initialView);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastNavigationTime = useRef(Date.now());
  
  const navigateTo = useCallback((view: ViewName) => {
    if (currentView === view || isTransitioning) return;
    
    // Prevenir navegación demasiado rápida
    const now = Date.now();
    if (now - lastNavigationTime.current < transitionDuration) return;
    lastNavigationTime.current = now;
    
    setIsTransitioning(true);
    setCurrentView(view);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [currentView, isTransitioning, transitionDuration]);
  
  const navigateNext = useCallback(() => {
    const nextView = NAVIGATION_MAP.next[currentView];
    navigateTo(nextView);
  }, [currentView, navigateTo]);
  
  const navigatePrev = useCallback(() => {
    const prevView = NAVIGATION_MAP.prev[currentView];
    navigateTo(prevView);
  }, [currentView, navigateTo]);
  
  const navigateToFirst = useCallback(() => {
    navigateTo('home');
  }, [navigateTo]);
  
  const navigateToLast = useCallback(() => {
    navigateTo('contacto');
  }, [navigateTo]);
  
  return {
    currentView,
    isTransitioning,
    navigateTo,
    navigateNext,
    navigatePrev,
    navigateToFirst,
    navigateToLast
  };
} 