import React from 'react';
import Card from '../shared/Card';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ContactInfoProps } from '@/types';
import ContactItem from '../ui/ContactItem';
import { EmailIcon, LinkedInIcon, GitHubIcon, ArrowRightIcon } from '../ui/icons/ContactIcons';

/**
 * Componente que muestra información de contacto y opción de chat
 */
const ContactInfo: React.FC<ContactInfoProps> = ({ onOpenChat }) => {
  const { text, textSecondary } = useThemeColors();

  return (
    <div className="space-y-8">
      <Card>
        <h3 className="text-xl font-semibold" style={{ color: text }}>Información de contacto</h3>
        <div className="space-y-4 mt-4">
          <ContactItem 
            href="mailto:carriagadafalcone@gmail.com" 
            icon={<EmailIcon />}
            label="carriagadafalcone@gmail.com"
          />
          
          <ContactItem 
            href="https://linkedin.com/in/clemente-falcone" 
            icon={<LinkedInIcon />}
            label="linkedin.com/in/clemente-falcone"
            target="_blank"
            rel="noopener noreferrer"
          />
          
          <ContactItem 
            href="https://github.com/clementeaf" 
            icon={<GitHubIcon />}
            label="github.com/clementeaf"
            target="_blank"
            rel="noopener noreferrer"
          />
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
          <ArrowRightIcon />
        </button>
      </Card>
    </div>
  );
};

export default ContactInfo; 