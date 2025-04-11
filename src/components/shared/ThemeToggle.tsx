import React from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggleProps } from '@/types';

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className={`text-s flex items-center font-medium ${isDark ? 'text-white' : 'text-gray-500 hover:text-black'}`}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      {isDark ? 'Claro' : 'Oscuro'}
    </button>
  );
};

export default ThemeToggle; 