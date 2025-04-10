import { useEffect } from 'react';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import { UseNavigationReturn } from './useNavigation';

interface UseNavigationControlsOptions {
  enableKeyboard?: boolean;
  enableWheel?: boolean;
  enableSwipe?: boolean;
  scrollDebounceMs?: number;
}

interface UseNavigationControlsReturn {
  swipeHandlers: SwipeableHandlers;
}

export function useNavigationControls(
  navigation: UseNavigationReturn,
  {
    enableKeyboard = true,
    enableWheel = true,
    enableSwipe = true,
    scrollDebounceMs = 500
  }: UseNavigationControlsOptions = {}
): UseNavigationControlsReturn {
  const { navigateNext, navigatePrev, navigateToFirst, navigateToLast } = navigation;

  // Gestión de teclado
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          navigateNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          navigatePrev();
          break;
        case 'Home':
          navigateToFirst();
          break;
        case 'End':
          navigateToLast();
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboard, navigateNext, navigatePrev, navigateToFirst, navigateToLast]);

  // Gestión de la rueda del ratón
  useEffect(() => {
    if (!enableWheel) return;

    const scrollTimeout = { current: null as NodeJS.Timeout | null };
    let lastScrollTime = Date.now();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < scrollDebounceMs) return;
      lastScrollTime = now;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [enableWheel, navigateNext, navigatePrev, scrollDebounceMs]);

  // Gestión de swipe para móviles
  const swipeHandlers = useSwipeable({
    onSwipedUp: enableSwipe ? navigateNext : undefined,
    onSwipedDown: enableSwipe ? navigatePrev : undefined,
    trackMouse: false
  });

  return {
    swipeHandlers
  };
} 