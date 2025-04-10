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
  
  // Clases con bordes más definidos y mejor contraste
  const inputClasses = "w-full bg-transparent border-b-2 border-black/30 border-black/40 px-0 py-2 focus:outline-none focus:border-black dark:border-white/40 peer placeholder-transparent";
  
  // Etiqueta de campo mejorada para mayor visibilidad
  const labelClasses = "absolute left-0 -top-3 text-xs font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:font-medium peer-focus:text-xs transition-all";
  
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
          className={`${inputClasses} resize-none`}
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
      
      {/* Indicador de campo activo */}
      <div 
        className={`h-0.5 w-0 bg-black dark:bg-blue-500 absolute bottom-0 left-0 transition-all duration-300 ${
          value ? 'w-full' : ''
        }`}
      />
    </div>
  );
};

export default FormField; 