import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useThemeColors } from '@/hooks/useThemeColors';
import { NavigationProps, ViewName } from '@/types';

const Navigation: React.FC<NavigationProps> = ({ 
  currentView, 
  onChangeView,
  onOpenChat
}) => {
  const { isDark } = useThemeColors();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Toggling mobile menu:', !mobileMenuOpen);
    setMobileMenuOpen(prev => !prev);
  };

  const handleNavClick = (view: ViewName) => {
    console.log('Navegando a:', view);
    onChangeView(view);
    setMobileMenuOpen(false);
  };

  const handleChatClick = () => {
    console.log('Abriendo chat');
    onOpenChat();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header con fondo transparente */}
      <header className="fixed w-full p-2 md:p-4 flex justify-between items-center bg-transparent z-[100]">
        {/* Logo simplificado */}
        <div className="text-xs font-bold text-black dark:text-white" style={{color: mobileMenuOpen || isDark ? '#ffffff' : '#000000'}}>CF</div>
        
        {/* Navegación de escritorio y botón de menú móvil */}
        <div className="flex items-center">
          {/* Navegación en escritorio - oculta en móvil */}
          <nav className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            {/* Botones de navegación directa sin mapeo */}
            <button 
              onClick={() => handleNavClick('servicios')}
              className="text-xs cursor-pointer z-[101] font-bold text-black dark:text-white"
              style={{pointerEvents: 'all'}}
            >
              Servicios
            </button>
            
            <button 
              onClick={() => handleNavClick('proyectos')}
              className="text-xs cursor-pointer z-[101] font-bold text-black dark:text-white"
              style={{pointerEvents: 'all'}}
            >
              Proyectos
            </button>
            
            <button 
              onClick={() => handleNavClick('contacto')}
              className="text-xs cursor-pointer z-[101] font-bold text-black dark:text-white"
              style={{pointerEvents: 'all'}}
            >
              Contacto
            </button>
            
            <button 
              onClick={handleChatClick}
              className="text-xs cursor-pointer z-[101] font-bold text-black dark:text-white"
              style={{pointerEvents: 'all'}}
            >
              IA
            </button>
          </nav>
          
          {/* ThemeToggle y botón hamburguesa en móvil */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="block relative w-6 h-4 cursor-pointer z-[101]"
              aria-label="Menú de navegación"
              style={{pointerEvents: 'all'}}
            >
              <span 
                className={`absolute left-0 top-0 h-0.5 w-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{backgroundColor: mobileMenuOpen ? '#ffffff' : isDark ? '#ffffff' : '#000000'}}
              ></span>
              <span 
                className={`absolute left-0 top-[7px] h-0.5 w-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{backgroundColor: mobileMenuOpen ? '#ffffff' : isDark ? '#ffffff' : '#000000'}}
              ></span>
              <span 
                className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{backgroundColor: mobileMenuOpen ? '#ffffff' : isDark ? '#ffffff' : '#000000'}}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil con animación simple */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          {/* Overlay semi-transparente */}
          <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm" />
          
          {/* Contenido del menú */}
          <div className="relative z-[91] flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center gap-8">
              <button 
                onClick={() => handleNavClick('servicios')}
                className="text-xl font-bold text-black dark:text-white"
              >
                Servicios
              </button>
              
              <button 
                onClick={() => handleNavClick('proyectos')}
                className="text-xl font-bold text-black dark:text-white"
              >
                Proyectos
              </button>
              
              <button 
                onClick={() => handleNavClick('contacto')}
                className="text-xl font-bold text-black dark:text-white"
              >
                Contacto
              </button>
              
              <button 
                onClick={handleChatClick}
                className="text-xl font-bold text-black dark:text-white"
              >
                Asistente IA
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;