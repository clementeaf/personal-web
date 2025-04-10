import { useTheme } from 'next-themes';
import React from 'react';
import { SectionTitleProps } from '@/types';

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <h2 
      className="text-3xl sm:text-4xl font-bold mb-8 pt-16 md:pt-0" 
      style={{ color: isDark ? '#ffffff' : '#000000' }}
    >
      {title}
    </h2>
  );
};

export default SectionTitle; 