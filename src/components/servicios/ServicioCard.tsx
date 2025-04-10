import React from 'react';
import Card from '../shared/Card';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ServicioCardProps } from '@/types';

const ServicioCard: React.FC<ServicioCardProps> = ({ titulo, descripcion }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <Card className="p-3 md:p-5 h-full">
      <h3 className="text-base sm:text-base md:text-lg font-semibold mb-2" style={{ color: text }}>
        {titulo}
      </h3>
      <p style={{ color: textSecondary }} className="text-xs sm:text-sm leading-relaxed">
        {descripcion}
      </p>
    </Card>
  );
};

export default ServicioCard; 