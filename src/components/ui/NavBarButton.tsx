import { ButtonProps } from '@/types';
import React from 'react';

  // Componente Button refactorizado para uso general
  const Button: React.FC<ButtonProps> = ({ 
    handleNav,
    children,
    view,
    currentView,
    isDark
  }) => {
    const isActive = currentView === view;
    
    return (
      <button 
        onClick={() => handleNav(view)}
        className={`text-s cursor-pointer z-[101] font-normal transition-colors ${
          isActive 
            ? (isDark ? 'text-white font-bold' : 'text-black font-bold') 
            : (isDark ? 'text-white/80 hover:text-white' : 'text-gray-500 hover:text-black')
        }`}
      >
        {children}
      </button>
    );
  };

export default Button;