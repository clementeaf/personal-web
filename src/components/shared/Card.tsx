import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 