import React, { useState } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ProyectoCardProps } from '@/types';

const ProyectoCard: React.FC<ProyectoCardProps> = ({ 
  proyecto, 
  isExpanded, 
  toggleExpand 
}) => {
  const { text, textSecondary } = useThemeColors();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-left" style={{ color: text }}>
          {proyecto.name}
        </h3>
        <svg
          style={{ color: textSecondary }}
          className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0 transform transition-transform duration-500 ease-in-out ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
        isExpanded ? 'max-h-[800px] opacity-100 scale-y-100 origin-top' : 'max-h-0 opacity-0 scale-y-95 origin-top'
      }`}>
        <div className={`px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 space-y-4 sm:space-y-5 md:space-y-6 transform transition-all duration-700 ease-in-out ${
          isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p style={{ color: textSecondary }} className="text-sm sm:text-base leading-relaxed">
            {proyecto.description}
          </p>
          <div className="aspect-video rounded-lg overflow-hidden bg-black/20 dark:bg-white/20 flex items-center justify-center">
            {imageError ? (
              <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center">
                <svg 
                  className="w-12 h-12 mb-2 opacity-50" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ color: textSecondary }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <span className="text-sm opacity-70" style={{ color: textSecondary }}>
                  Imagen de proyecto en desarrollo
                </span>
              </div>
            ) : (
              <img
                src={proyecto.image}
                alt={proyecto.name}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            )}
          </div>
          <div className="flex items-center justify-between pt-2">
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textSecondary }}
              className="inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Ver proyecto</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transform -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard; 