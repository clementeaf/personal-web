import React, { useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const handleNavClick = (view: ViewName) => {
    onChangeView(view);
    setMobileMenuOpen(false);
  };

  const handleChatClick = () => {
    onOpenChat();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full p-4 md:p-8 flex justify-between items-center z-[200]">
      {/* Logo o identificador del sitio */}
      <div className="text-lg font-semibold" style={{ color: text }}>CF</div>
      
      {/* Botón de menú móvil */}
      <button 
        className="md:hidden z-50" 
        onClick={toggleMobileMenu}
        aria-label="Menú de navegación"
      >
        <div className="relative w-6 h-5">
          <span className={`absolute left-0 top-0 w-full h-0.5 bg-current transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ color: text }}></span>
          <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ color: text }}></span>
          <span className={`absolute left-0 top-4 w-full h-0.5 bg-current transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ color: text }}></span>
        </div>
      </button>

      {/* Navegación de escritorio */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
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

      {/* Menú móvil */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-black/95 flex flex-col items-center justify-center z-40 transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center gap-8 p-6">
          <ThemeToggle />
          
          {NAV_ITEMS.map(item => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id as ViewName)}
              style={{ 
                color: isDark 
                  ? currentView === item.id 
                    ? text 
                    : textSecondary 
                  : currentView === item.id
                    ? text
                    : textSecondary
              }}
              className="text-xl font-normal tracking-wider transition-colors hover:text-black dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={handleChatClick}
            style={{ color: textSecondary }}
            className="group flex items-center gap-2 text-xl font-normal tracking-wider transition-colors hover:text-black dark:hover:text-white"
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
        </div>
      </div>
    </header>
  );
};

export default Navigation;