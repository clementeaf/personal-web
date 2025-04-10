import React, { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import ProyectoCard from './ProyectoCard';

interface ProyectosViewProps {
  isActive: boolean;
}

const PROYECTOS = [
  {
    id: 1,
    name: "Portfolio Personal",
    description: "Sitio web personal desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye efectos visuales únicos y una interfaz de chat con IA.",
    image: "/projects/portfolio.png",
    url: "https://github.com/username/portfolio"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con gestión de productos, carrito de compras y procesamiento de pagos.",
    image: "/projects/ecommerce.png",
    url: "https://github.com/username/ecommerce"
  },
  {
    id: 3,
    name: "Task Management App",
    description: "Aplicación de gestión de tareas con características de colaboración en tiempo real y organización de proyectos.",
    image: "/projects/taskapp.png",
    url: "https://github.com/username/taskapp"
  }
];

const ProyectosView: React.FC<ProyectosViewProps> = ({ isActive }) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <SectionTitle title="Proyectos" />
          <div className="space-y-4">
            {PROYECTOS.map((proyecto) => (
              <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                isExpanded={expandedProject === proyecto.id}
                toggleExpand={() => toggleExpand(proyecto.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProyectosView); 