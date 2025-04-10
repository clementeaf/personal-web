import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { ContactoViewProps } from '@/types';

const ContactoView: React.FC<ContactoViewProps> = ({ isActive, onOpenChat }) => {
  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <SectionTitle title="Contacto" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo onOpenChat={onOpenChat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactoView); 