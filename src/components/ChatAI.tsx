import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  model?: 'grok-3' | 'gemini';
  timestamp: number;
  pending?: boolean;
}

export default function ChatAI({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: '¡Hola! Soy tu asistente personal. ¿En qué puedo ayudarte hoy?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'grok-3' | 'gemini'>('grok-3');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: Date.now(),
      model: selectedModel
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      // TODO: Implementar llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: '```python\ndef hello_world():\n    print("Hello from ' + selectedModel + '")\n```\n\nEsta es una respuesta de ejemplo con soporte para markdown y código.',
        timestamp: Date.now(),
        model: selectedModel
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Lo siento, hubo un error al procesar tu mensaje.',
        timestamp: Date.now()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const regenerateLastResponse = () => {
    const lastUserMessageIndex = [...messages].reverse().findIndex(m => m.role === 'user');
    if (lastUserMessageIndex === -1) return;
    
    const newMessages = messages.slice(0, messages.length - lastUserMessageIndex);
    setMessages(newMessages);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <div 
      className={`fixed right-0 top-[calc(25vh-5px)] bottom-[calc(25vh-5px)] w-[400px] dark:bg-black/95 bg-white/95 backdrop-blur-sm shadow-xl rounded-l-2xl border dark:border-white/10 border-black/10 transition-all duration-300 ease-in-out pointer-events-auto z-[100] ${
        isOpen 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-[420px] opacity-0 pointer-events-none'
      }`}
      style={{ WebkitBackdropFilter: 'blur(8px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-2.5 border-b dark:border-white/10 border-black/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            <h3 className="dark:text-white text-black font-medium text-sm">Asistente IA</h3>
          </div>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value as 'grok-3' | 'gemini')}
            className="dark:bg-white/5 bg-black/5 dark:text-white/70 text-black/60 text-xs rounded-lg px-2 py-1 border-0 focus:ring-1 focus:ring-blue-500/50"
          >
            <option value="grok-3">Grok-3</option>
            <option value="gemini">Gemini</option>
          </select>
        </div>
        <button 
          onClick={onClose}
          className="dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white rounded-lg p-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto h-[calc(100%-96px)] p-3 space-y-2.5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} ${
              message.role === 'system' ? 'justify-center' : ''
            }`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                message.role === 'user'
                  ? 'dark:bg-blue-500/20 bg-blue-500/10 dark:text-white text-black'
                  : message.role === 'system'
                  ? 'dark:bg-white/5 bg-black/5 dark:text-white/70 text-black/70 text-center text-xs'
                  : 'dark:bg-white/5 bg-black/5 dark:text-white text-black'
              }`}
            >
              {message.role === 'assistant' ? (
                <div className="prose dark:prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              ) : (
                message.content
              )}
              {message.role === 'assistant' && (
                <div className="flex items-center justify-end gap-2 mt-2 text-xs dark:text-white/40 text-black/40">
                  <button 
                    onClick={() => regenerateLastResponse()} 
                    className="hover:dark:text-white/70 hover:text-black/70"
                  >
                    Regenerar
                  </button>
                  <span>·</span>
                  <button className="hover:dark:text-white/70 hover:text-black/70">
                    Copiar
                  </button>
                  <span>·</span>
                  <span>{message.model}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="dark:bg-white/5 bg-black/5 rounded-xl px-3 py-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full dark:bg-white/40 bg-black/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full dark:bg-white/40 bg-black/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full dark:bg-white/40 bg-black/40 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 border-t dark:border-white/10 border-black/10 bg-inherit rounded-b-2xl">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Envía un mensaje..."
            className="w-full dark:bg-white/5 bg-black/5 dark:text-white text-black rounded-xl px-3 py-2 pr-20 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:focus:bg-white/10 focus:bg-black/10"
            style={{ minHeight: '32px', maxHeight: '96px' }}
          />
          <div className="absolute right-2 bottom-[7px] flex gap-2">
            <button
              type="button"
              className="dark:text-white/70 text-black/60 p-1.5 rounded-lg hover:dark:bg-white/10 hover:bg-black/10 transition-colors"
              title="Adjuntar archivo"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <button
              type="submit"
              disabled={!input.trim()}
              className="dark:bg-white/10 bg-black/10 dark:text-white text-black p-1.5 rounded-lg hover:dark:bg-white/20 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg 
                className="w-3.5 h-3.5 transform rotate-90" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 