import { useTheme } from 'next-themes';
import React from 'react';
import { SectionTitleProps } from '@/types';

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <h2 
      className="text-2xl sm:text-3xl font-bold mb-6" 
      style={{ color: isDark ? '#ffffff' : '#000000' }}
    >
      {title}
    </h2>
  );
};

export default SectionTitle; 