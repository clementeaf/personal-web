import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Ignora los errores de ESLint durante la compilación
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora los errores de TypeScript durante la compilación
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
