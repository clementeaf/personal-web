import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useThemeColors } from '@/hooks/useThemeColors';
import { NAV_ITEMS } from '@/constants';
import { NavigationProps, ViewName } from '@/types';

const Navigation: React.FC<NavigationProps> = ({ 
  currentView, 
  onChangeView,
  onOpenChat
}) => {
  const { text, textSecondary, isDark } = useThemeColors();

  return (
    <header className="fixed w-full p-8 flex justify-end items-center z-[200]">
      <nav className="flex items-center gap-12">
        <ThemeToggle />
        
        {NAV_ITEMS.map(item => (
          <button 
            key={item.id}
            onClick={() => onChangeView(item.id as ViewName)}
            style={{ 
              color: isDark 
                ? currentView === item.id 
                  ? text 
                  : textSecondary 
                : currentView === item.id
                  ? text
                  : textSecondary
            }}
            className="text-base font-normal tracking-wider transition-colors hover:text-black dark:hover:text-white"
          >
            {item.label}
          </button>
        ))}
        
        <button 
          onClick={onOpenChat}
          style={{ color: textSecondary }}
          className="group flex items-center gap-2 text-base font-normal tracking-wider transition-colors hover:text-black dark:hover:text-white"
        >
          <span>Asistente IA</span>
          <svg 
            className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navigation; 