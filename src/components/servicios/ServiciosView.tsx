import React from 'react';
import ServicioCard from './ServicioCard';
import SectionTitle from '../shared/SectionTitle';
import { ServiciosViewProps, Servicio } from '@/types';

const SERVICIOS: Servicio[] = [
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
    <div className={`fixed inset-0 flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Servicios" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
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