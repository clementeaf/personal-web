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
      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-black dark:hover:text-white transition-colors truncate"
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="truncate">{label}</span>
    </a>
  );
};

export default ContactItem; 