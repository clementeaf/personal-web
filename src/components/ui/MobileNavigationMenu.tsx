import React from 'react';
import { useMobileMenu } from "@/hooks";
import { NavigationProps, ViewName } from "@/types";
import { navigationItems } from "@/utils";

export const MobileNavigationMenu: React.FC<NavigationProps> = ({
  currentView,
  onChangeView,
}) => {
  const { closeMobileMenu } = useMobileMenu();
  
  const handleNavClick = (view: ViewName) => {
    onChangeView(view);
    closeMobileMenu();
  };
  
  return (
    <div className="fixed inset-0 z-[999] md:hidden">
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm" />
      
      {/* Contenido del menú */}
      <div className="relative z-[1000] flex flex-col items-center justify-center h-full">
        {/* Botón de cierre (X) */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 flex items-center justify-center w-14 h-14 cursor-pointer"
          aria-label="Cerrar menú"
        >
          <div className="relative w-8 h-8">
            <span className="absolute top-3.5 left-0 w-8 h-0.5 bg-black dark:bg-white rotate-45"></span>
            <span className="absolute top-3.5 left-0 w-8 h-0.5 bg-black dark:bg-white -rotate-45"></span>
          </div>
        </button>
        
        <nav className="flex flex-col items-center gap-12 py-8 px-4 w-full max-w-md text-center">
          {/* Mapeo de botones de navegación en móvil */}
          {navigationItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`text-3xl ${currentView === item.view ? 'font-bold' : 'font-normal'} text-black dark:text-white transition-all hover:scale-105 py-3 px-6 w-full`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};