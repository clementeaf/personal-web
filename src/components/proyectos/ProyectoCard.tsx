import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

interface Proyecto {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface ProyectoCardProps {
  proyecto: Proyecto;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const ProyectoCard: React.FC<ProyectoCardProps> = ({ 
  proyecto, 
  isExpanded, 
  toggleExpand 
}) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center justify-between p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500"
      >
        <h3 className="text-xl font-semibold" style={{ color: text }}>
          {proyecto.name}
        </h3>
        <svg
          style={{ color: textSecondary }}
          className={`w-5 h-5 transform transition-transform duration-500 ease-in-out ${
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
        <div className={`px-6 pb-6 space-y-6 transform transition-all duration-700 ease-in-out ${
          isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p style={{ color: textSecondary }} className="leading-relaxed">
            {proyecto.description}
          </p>
          <div className="aspect-video rounded-lg overflow-hidden bg-black/20 dark:bg-white/20">
            <img
              src={proyecto.image}
              alt={proyecto.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textSecondary }}
              className="inline-flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Ver proyecto</span>
              <svg
                className="w-4 h-4 transform -rotate-45"
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