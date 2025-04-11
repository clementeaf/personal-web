import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { ContactoViewProps } from '@/types';

const ContactoView: React.FC<ContactoViewProps> = ({ isActive }) => {
  return (
    <div className={`fixed inset-0 flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Contacto" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-4 md:mt-8">
            <div className="order-2 md:order-1">
              <ContactForm />
            </div>
            <div className="order-1 md:order-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactoView); 