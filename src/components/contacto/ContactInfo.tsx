import React from 'react';
import Card from '../shared/Card';
import { useThemeColors } from '@/hooks/useThemeColors';

interface ContactInfoProps {
  onOpenChat: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onOpenChat }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <div className="space-y-8">
      <Card>
        <h3 className="text-xl font-semibold" style={{ color: text }}>Información de contacto</h3>
        <div className="space-y-4 mt-4">
          <a 
            href="mailto:carriagadafalcone@gmail.com" 
            style={{ color: textSecondary }}
            className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>carriagadafalcone@gmail.com</span>
          </a>
          <a 
            href="https://linkedin.com/in/clemente-falcone" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: textSecondary }}
            className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>linkedin.com/in/clemente-falcone</span>
          </a>
          <a 
            href="https://github.com/clementeaf" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: textSecondary }}
            className="flex items-center gap-3 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>github.com/clementeaf</span>
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold mb-4" style={{ color: text }}>¿Prefieres el chat?</h3>
        <p style={{ color: textSecondary }} className="leading-relaxed mb-4">
          También puedes contactarme a través del asistente IA. Estará encantado de ayudarte y responder tus preguntas.
        </p>
        <button 
          onClick={onOpenChat}
          style={{ color: textSecondary }}
          className="group flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>Iniciar chat</span>
          <svg 
            className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </button>
      </Card>
    </div>
  );
};

export default ContactInfo; 