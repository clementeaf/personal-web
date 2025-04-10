import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { ThemeColors } from '@/types';

export function useThemeColors(): ThemeColors {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return useMemo(() => ({
    text: isDark ? '#ffffff' : '#000000',
    textSecondary: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
    background: isDark ? '#050505' : '#f5f5f5',
    isDark
  }), [isDark]);
} 