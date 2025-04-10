import React from 'react';
import Card from '../shared/Card';
import { useThemeColors } from '@/hooks/useThemeColors';

interface ServicioCardProps {
  titulo: string;
  descripcion: string;
}

const ServicioCard: React.FC<ServicioCardProps> = ({ titulo, descripcion }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4" style={{ color: text }}>
        {titulo}
      </h3>
      <p style={{ color: textSecondary }} className="leading-relaxed">
        {descripcion}
      </p>
    </Card>
  );
};

export default ServicioCard; 