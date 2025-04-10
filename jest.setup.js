// Importar las utilidades de testing de Jest
import '@testing-library/jest-dom';

// Mockear next/dynamic para evitar problemas con componentes cargados dinámicamente
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...args) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const mockDynamic = dynamicModule.default;
    const [importFunc, options] = args;
    const Loading = options?.loading;
    
    if (Loading) {
      return Loading;
    }
    
    return mockDynamic(importFunc, { ...options, loading: () => null });
  },
}));

// Mockear framer-motion para que no cause problemas en los tests
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    h1: 'h1',
  },
  AnimatePresence: ({ children }) => children,
}));

// Mockear next/router para evitar errores
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }),
}));

// Evitar errores con next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }) => children,
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
})); 