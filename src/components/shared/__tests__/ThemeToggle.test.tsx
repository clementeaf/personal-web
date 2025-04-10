import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from 'next-themes';

// Mockear el hook useTheme
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Configuración por defecto del mock
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: 'light',
      setTheme: jest.fn(),
    }));
  });

  it('renderiza correctamente en tema claro', () => {
    render(<ThemeToggle />);
    expect(screen.getByText('Claro')).toBeInTheDocument();
  });

  it('renderiza correctamente en tema oscuro', () => {
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: 'dark',
      setTheme: jest.fn(),
    }));
    
    render(<ThemeToggle />);
    expect(screen.getByText('Oscuro')).toBeInTheDocument();
  });

  it('llama a setTheme cuando se hace clic', () => {
    const mockSetTheme = jest.fn();
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: 'light',
      setTheme: mockSetTheme,
    }));
    
    render(<ThemeToggle />);
    fireEvent.click(screen.getByText('Claro'));
    
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
}); 