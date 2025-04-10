import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import { ProyectosViewProps } from '@/types';
import { useThemeColors } from '@/hooks/useThemeColors';

const ProyectosView: React.FC<ProyectosViewProps> = ({ isActive }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-0 overflow-y-auto md:overflow-visible">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Proyectos" />
          
          <Card className="p-6 md:p-8 mt-4 md:mt-6">
            <div className="flex flex-col items-center justify-center text-center py-8">
              <svg 
                className="w-16 h-16 mb-4 opacity-50" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: textSecondary }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2" style={{ color: text }}>
                Proyectos en desarrollo
              </h3>
              <p className="max-w-md text-sm sm:text-base leading-relaxed" style={{ color: textSecondary }}>
                Estamos trabajando en la sección de proyectos. Próximamente podrás ver aquí una selección de mis trabajos más destacados.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProyectosView); 