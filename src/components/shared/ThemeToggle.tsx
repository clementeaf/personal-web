import React from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggleProps } from '@/types';

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}
      className="text-base font-normal tracking-wider transition-colors hover:text-black dark:hover:text-white"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? 'Oscuro' : 'Claro'}
    </button>
  );
};

export default ThemeToggle; 