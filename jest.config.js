const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Proporciona la ruta al archivo next.config.js para cargar la configuración de next
  dir: './',
});

// Cualquier configuración personalizada de Jest que quieras agregar
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
  },
};

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar
// la configuración de Next.js, que es async
module.exports = createJestConfig(customJestConfig); 