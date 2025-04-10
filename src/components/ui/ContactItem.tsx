import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ContactItemProps } from '@/types';

/**
 * Componente reutilizable para elementos de contacto con ícono
 */
const ContactItem: React.FC<ContactItemProps> = ({
  href,
  icon,
  label,
  target,
  rel,
  onClick
}) => {
  const { textSecondary } = useThemeColors();

  return (
    <a 
      href={href} 
      target={target}
      rel={rel}
      onClick={onClick}
      style={{ color: textSecondary }}
      className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default ContactItem; 