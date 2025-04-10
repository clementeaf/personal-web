import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card; 