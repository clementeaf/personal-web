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

  // Funciones simplificadas con console.log para depuración
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
      <header className="fixed w-full p-4 md:p-8 flex justify-between items-center bg-transparent z-[100]">
        {/* Logo simplificado */}
        <div 
          className="text-lg font-bold text-black dark:text-white" 
          style={{color: isDark ? 'white' : 'black'}}
        >CF</div>
        
        {/* Navegación simplificada de escritorio */}
        <nav className="flex items-center gap-6">
          <ThemeToggle />
          
          {/* Botones de navegación directa sin mapeo */}
          <button 
            onClick={() => handleNavClick('servicios')}
            className="text-base cursor-pointer z-[101] font-bold text-black dark:text-white"
            style={{pointerEvents: 'all', color: isDark ? 'white' : 'black'}}
          >
            Servicios
          </button>
          
          <button 
            onClick={() => handleNavClick('proyectos')}
            className="text-base cursor-pointer z-[101] font-bold text-black dark:text-white"
            style={{pointerEvents: 'all', color: isDark ? 'white' : 'black'}}
          >
            Proyectos
          </button>
          
          <button 
            onClick={() => handleNavClick('contacto')}
            className="text-base cursor-pointer z-[101] font-bold text-black dark:text-white"
            style={{pointerEvents: 'all', color: isDark ? 'white' : 'black'}}
          >
            Contacto
          </button>
          
          <button 
            onClick={handleChatClick}
            className="text-base cursor-pointer z-[101] font-bold text-black dark:text-white"
            style={{pointerEvents: 'all', color: isDark ? 'white' : 'black'}}
          >
            IA
          </button>
        </nav>
      </header>

      {/* Menú móvil simplificado sin efectos */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-20 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center gap-10 p-6">
              <ul className="flex flex-col items-center gap-10">
                {NAV_ITEMS.map(item => (
                  <li key={item.id} className="list-none">
                    <button 
                      onClick={() => handleNavClick(item.id as ViewName)}
                      className={`text-2xl font-normal ${
                        currentView === item.id 
                          ? 'text-black dark:text-white font-medium' 
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {item.label === 'Proyectos' ? 'Proyectos' : item.label}
                    </button>
                  </li>
                ))}
                <li className="list-none">
                  <button 
                    onClick={handleChatClick}
                    className="flex items-center gap-2 text-2xl font-normal text-gray-600 dark:text-gray-300"
                  >
                    <span>Asistente IA</span>
                    <svg 
                      className="w-5 h-5" 
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;