import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { StatusMessageProps } from '@/types';

/**
 * Componente reutilizable para mostrar mensajes de estado (éxito, error)
 */
const StatusMessage: React.FC<StatusMessageProps> = ({ 
  status, 
  successMessage, 
  errorMessage 
}) => {
  const { text } = useThemeColors();
  
  if (status === 'success') {
    return (
      <div className="py-3 px-4 rounded-lg bg-green-50 dark:bg-green-900/20">
        <p style={{ color: text }} className="text-sm">{successMessage}</p>
      </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div className="py-3 px-4 rounded-lg bg-red-50 dark:bg-red-900/20">
        <p style={{ color: text }} className="text-sm">{errorMessage}</p>
      </div>
    );
  }
  
  return null;
};

export default StatusMessage; 