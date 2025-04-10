import React from 'react';
import ServicioCard from './ServicioCard';
import SectionTitle from '../shared/SectionTitle';

interface ServiciosViewProps {
  isActive: boolean;
}

const SERVICIOS = [
  {
    id: 1,
    titulo: 'Desarrollo Web',
    descripcion: 'Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías y mejores prácticas.'
  },
  {
    id: 2,
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android.'
  },
  {
    id: 3,
    titulo: 'Consultoría Técnica',
    descripcion: 'Asesoramiento en arquitectura de software, optimización y mejores prácticas de desarrollo.'
  },
  {
    id: 4,
    titulo: 'UI/UX Design',
    descripcion: 'Diseño de interfaces modernas y experiencias de usuario intuitivas y atractivas.'
  }
];

const ServiciosView: React.FC<ServiciosViewProps> = ({ isActive }) => {
  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <SectionTitle title="Servicios" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICIOS.map(servicio => (
              <ServicioCard 
                key={servicio.id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiciosView); 