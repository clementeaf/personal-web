import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { FormFieldProps } from '@/types';

/**
 * Componente reutilizable para campos de formulario con estilos coherentes y mejorados
 */
const FormField: React.FC<FormFieldProps> = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4
}) => {
  const { text, textSecondary } = useThemeColors();
  
  // Clases base compartidas
  const baseClasses = "w-full px-3 py-2 focus:outline-none bg-transparent peer placeholder-transparent";
  
  // Clases específicas para textarea
  const textareaClasses = `${baseClasses} border border-gray-300 dark:border-gray-400 rounded-md focus:border-black dark:focus:border-white`;
  
  // Clases específicas para inputs de texto
  const inputClasses = `${baseClasses} border-b border-gray-300 dark:border-gray-400 focus:border-black dark:focus:border-white`;
  
  // Etiqueta de campo mejorada para mayor visibilidad
  const labelClasses = "absolute left-3 -top-2.5 text-xs font-medium peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-medium transition-all";
  
  const id = `field-${name}`;
  
  return (
    <div className="relative mb-4">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          style={{ color: text }}
          className={`${textareaClasses} resize-none`}
          placeholder={label}
          disabled={disabled}
          aria-label={label}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          style={{ color: text }}
          className={inputClasses}
          placeholder={label}
          disabled={disabled}
          aria-label={label}
          aria-required={required}
        />
      )}
      <label 
        htmlFor={id}
        style={{ color: textSecondary }}
        className={labelClasses}
      >
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {/* Indicador de campo activo con mayor contraste */}
      <div 
        className={`h-0.5 w-0 bg-gray-800 dark:bg-white absolute bottom-0 left-0 transition-all duration-300 ${
          value ? 'w-full' : ''
        }`}
      />
    </div>
  );
};

export default FormField; 