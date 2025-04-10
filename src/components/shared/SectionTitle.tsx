import { useTheme } from 'next-themes';
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <h2 
      className="text-5xl font-bold mb-12" 
      style={{ color: isDark ? '#ffffff' : '#000000' }}
    >
      {title}
    </h2>
  );
};

export default SectionTitle; 