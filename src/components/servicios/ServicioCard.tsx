import React from 'react';
import Card from '../shared/Card';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ServicioCardProps } from '@/types';

const ServicioCard: React.FC<ServicioCardProps> = ({ titulo, descripcion }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <Card className="p-4 md:p-6 h-full">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4" style={{ color: text }}>
        {titulo}
      </h3>
      <p style={{ color: textSecondary }} className="text-sm sm:text-base leading-relaxed">
        {descripcion}
      </p>
    </Card>
  );
};

export default ServicioCard; 