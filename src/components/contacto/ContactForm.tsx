import React, { useState } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { text, textSecondary } = useThemeColors();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSendStatus('success');
    setIsSending(false);
  };

  const handleInputFocus = (field: string) => setIsTyping(field);
  const handleInputBlur = () => setIsTyping(null);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <input
          type="text"
          required
          value={formState.name}
          onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
          onFocus={() => handleInputFocus('name')}
          onBlur={handleInputBlur}
          style={{ color: text }}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent"
          placeholder="Nombre"
        />
        <label 
          style={{ color: textSecondary }}
          className="absolute left-0 -top-2 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all"
        >
          Nombre
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          required
          value={formState.email}
          onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
          onFocus={() => handleInputFocus('email')}
          onBlur={handleInputBlur}
          style={{ color: text }}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent"
          placeholder="Email"
        />
        <label 
          style={{ color: textSecondary }}
          className="absolute left-0 -top-2 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          required
          value={formState.message}
          onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
          onFocus={() => handleInputFocus('message')}
          onBlur={handleInputBlur}
          rows={4}
          style={{ color: text }}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent resize-none"
          placeholder="Mensaje"
        />
        <label 
          style={{ color: textSecondary }}
          className="absolute left-0 -top-2 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all"
        >
          Mensaje
        </label>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group relative overflow-hidden px-6 py-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      >
        <div className={`absolute inset-0 bg-black/10 dark:bg-white/10 transition-transform duration-300 ${
          isSending ? 'translate-x-0' : '-translate-x-full'
        }`} />
        <span className="relative flex items-center gap-2" style={{ color: text }}>
          {isSending ? (
            <>
              <span>Enviando</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full animate-bounce" style={{ background: text }} />
                <div className="w-1 h-1 rounded-full animate-bounce delay-75" style={{ background: text }} />
                <div className="w-1 h-1 rounded-full animate-bounce delay-150" style={{ background: text }} />
              </div>
            </>
          ) : (
            <>
              <span>Enviar mensaje</span>
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
            </>
          )}
        </span>
      </button>
    </form>
  );
};

export default ContactForm; 