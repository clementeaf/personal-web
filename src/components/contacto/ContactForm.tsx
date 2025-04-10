import React, { useState } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { FormState, SendStatus, ContactFormProps } from '@/types';
import FormField from '@/components/ui/FormField';
import StatusMessage from '@/components/ui/StatusMessage';
import Card from '../shared/Card';

/**
 * Componente principal de formulario de contacto
 */
const ContactForm: React.FC<ContactFormProps> = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');
  const { text, textSecondary } = useThemeColors();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendStatus('pending');

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSendStatus('success');
    
    // Resetear formulario después de envío exitoso
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setSendStatus('idle');
    }, 3000);
  };

  const isFormDisabled = sendStatus === 'pending' || sendStatus === 'success';

  return (
    <Card className="p-4 shadow-md dark:shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto">
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1" style={{ color: text }}>
            Envíame un mensaje
          </h3>
          <p className="text-xs" style={{ color: textSecondary }}>
            Completa el formulario para ponerte en contacto conmigo
          </p>
        </div>

        <FormField
          name="name"
          label="Nombre"
          value={formState.name}
          onChange={handleChange}
          disabled={isFormDisabled}
          required
        />

        <FormField
          type="email"
          name="email"
          label="Email"
          value={formState.email}
          onChange={handleChange}
          disabled={isFormDisabled}
          required
        />

        <FormField
          type="textarea"
          name="message"
          label="Mensaje"
          value={formState.message}
          onChange={handleChange}
          disabled={isFormDisabled}
          required
          rows={3}
        />

        <StatusMessage 
          status={sendStatus}
          successMessage="¡Mensaje enviado con éxito! Gracias por contactarme."
          errorMessage="Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
        />

        <button
          type="submit"
          disabled={isFormDisabled}
          className="w-full group relative overflow-hidden px-6 py-2 rounded-lg border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          aria-label="Enviar mensaje"
        >
          <div className={`absolute inset-0 bg-black/5 dark:bg-white/5 transition-transform duration-300 ${
            sendStatus === 'pending' ? 'translate-x-0' : '-translate-x-full'
          }`} />
          <span className="relative flex justify-center items-center gap-2 text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors font-bold text-sm">
            {sendStatus === 'pending' ? (
              <>
                <span>Enviando</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full animate-bounce bg-black dark:bg-white" />
                  <div className="w-1 h-1 rounded-full animate-bounce delay-75 bg-black dark:bg-white" />
                  <div className="w-1 h-1 rounded-full animate-bounce delay-150 bg-black dark:bg-white" />
                </div>
              </>
            ) : (
              <>
                <span>Enviar mensaje</span>
                <svg
                  className="w-3 h-3 transform transition-transform group-hover:translate-x-1"
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
              </>
            )}
          </span>
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;