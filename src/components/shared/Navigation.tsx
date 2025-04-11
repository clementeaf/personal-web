import React from 'react';
import { useMobileMenu } from '@/hooks';
import { NavigationProps } from '@/types';
import { WebNavigationBar } from '../ui/WebNavigationBar';
import { MobileNavigationMenu } from '../ui/MobileNavigationMenu';

const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onChangeView,
}) => {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <>
      <WebNavigationBar
        currentView={currentView}
        onChangeView={onChangeView}
      />
      
      {isMobileMenuOpen && (
        <MobileNavigationMenu
          currentView={currentView}
          onChangeView={onChangeView}
        />
      )}
    </>
  );
};

export default Navigation;