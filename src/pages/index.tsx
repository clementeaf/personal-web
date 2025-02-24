import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Geist } from "next/font/google";
import GridBackground from "../components/GridBackground";
import { ThemeProvider, useTheme } from 'next-themes';
import ChatAI from "../components/ChatAI";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white text-base font-normal tracking-wider transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? 'Oscuro' : 'Claro'}
    </button>
  )
}

function HomeView({ isActive }: { isActive: boolean }) {
  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-2xl">
          <h1 className="dark:text-white text-black text-[8rem] font-bold leading-none tracking-tight">
            Clemente Falcone
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-[1px] w-12 dark:bg-white/30 bg-black/30"></div>
            <span className="dark:text-white/50 text-black/60 text-sm tracking-[0.2em] uppercase">
              Software Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiciosView({ isActive }: { isActive: boolean }) {
  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <h2 className="dark:text-white text-black text-5xl font-bold mb-12">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <h3 className="dark:text-white text-black text-xl font-semibold mb-4">Desarrollo Web</h3>
              <p className="dark:text-white/70 text-black/70 leading-relaxed">
                Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías y mejores prácticas.
              </p>
            </div>
            <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <h3 className="dark:text-white text-black text-xl font-semibold mb-4">Aplicaciones Móviles</h3>
              <p className="dark:text-white/70 text-black/70 leading-relaxed">
                Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android.
              </p>
            </div>
            <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <h3 className="dark:text-white text-black text-xl font-semibold mb-4">Consultoría Técnica</h3>
              <p className="dark:text-white/70 text-black/70 leading-relaxed">
                Asesoramiento en arquitectura de software, optimización y mejores prácticas de desarrollo.
              </p>
            </div>
            <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <h3 className="dark:text-white text-black text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="dark:text-white/70 text-black/70 leading-relaxed">
                Diseño de interfaces modernas y experiencias de usuario intuitivas y atractivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProyectosView({ isActive }: { isActive: boolean }) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
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

  return (
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <h2 className="dark:text-white text-black text-5xl font-bold mb-12">Proyectos</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full flex items-center justify-between p-6 hover:dark:bg-white/10 hover:bg-black/10 transition-all duration-500"
                >
                  <h3 className="dark:text-white text-black text-xl font-semibold">
                    {project.name}
                  </h3>
                  <svg
                    className={`w-5 h-5 dark:text-white/70 text-black/60 transform transition-transform duration-500 ease-in-out ${
                      expandedProject === project.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  expandedProject === project.id ? 'max-h-[800px] opacity-100 scale-y-100 origin-top' : 'max-h-0 opacity-0 scale-y-95 origin-top'
                }`}>
                  <div className={`px-6 pb-6 space-y-6 transform transition-all duration-700 ease-in-out ${
                    expandedProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <p className="dark:text-white/70 text-black/70 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/20 dark:bg-white/20">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 dark:text-white/70 text-black/60 hover:dark:text-white hover:text-black transition-colors"
                      >
                        <span>Ver proyecto</span>
                        <svg
                          className="w-4 h-4 transform -rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactoView({ isActive, onOpenChat }: { isActive: boolean; onOpenChat: () => void }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    <div className={`fixed inset-0 flex flex-col justify-center transition-all duration-500 ${
      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <h2 className="dark:text-white text-black text-5xl font-bold mb-12">Contacto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={handleInputBlur}
                  className="w-full bg-transparent dark:text-white text-black border-b dark:border-white/10 border-black/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Nombre"
                />
                <label className="absolute left-0 -top-2 text-sm dark:text-white/50 text-black/50 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all">
                  Nombre
                </label>
                {isTyping === 'name' && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-75" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-150" />
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  onFocus={() => handleInputFocus('email')}
                  onBlur={handleInputBlur}
                  className="w-full bg-transparent dark:text-white text-black border-b dark:border-white/10 border-black/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Email"
                />
                <label className="absolute left-0 -top-2 text-sm dark:text-white/50 text-black/50 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all">
                  Email
                </label>
                {isTyping === 'email' && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-75" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-150" />
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <textarea
                  required
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  onFocus={() => handleInputFocus('message')}
                  onBlur={handleInputBlur}
                  rows={4}
                  className="w-full bg-transparent dark:text-white text-black border-b dark:border-white/10 border-black/10 px-0 py-4 focus:outline-none focus:border-blue-500 peer placeholder-transparent resize-none"
                  placeholder="Mensaje"
                />
                <label className="absolute left-0 -top-2 text-sm dark:text-white/50 text-black/50 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm transition-all">
                  Mensaje
                </label>
                {isTyping === 'message' && (
                  <div className="absolute right-0 top-6">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-75" />
                      <div className="w-1 h-1 rounded-full dark:bg-white/40 bg-black/40 animate-pulse delay-150" />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group relative overflow-hidden px-6 py-3 rounded-lg dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors"
              >
                <div className={`absolute inset-0 dark:bg-white/10 bg-black/10 transition-transform duration-300 ${
                  isSending ? 'translate-x-0' : '-translate-x-full'
                }`} />
                <span className="relative flex items-center gap-2 dark:text-white text-black">
                  {isSending ? (
                    <>
                      <span>Enviando</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full dark:bg-white bg-black animate-bounce" />
                        <div className="w-1 h-1 rounded-full dark:bg-white bg-black animate-bounce delay-75" />
                        <div className="w-1 h-1 rounded-full dark:bg-white bg-black animate-bounce delay-150" />
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

              {sendStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mensaje enviado correctamente</span>
                </div>
              )}
            </form>

            {/* Info de contacto */}
            <div className="space-y-8">
              <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <h3 className="dark:text-white text-black text-xl font-semibold">Información de contacto</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contacto@clementefalcone.com" 
                    className="flex items-center gap-3 dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contacto@clementefalcone.com</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/clementefalcone" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>linkedin.com/in/clementefalcone</span>
                  </a>
                  <a 
                    href="https://github.com/clementefalcone" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>github.com/clementefalcone</span>
                  </a>
                </div>
              </div>

              <div className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="dark:text-white text-black text-xl font-semibold mb-4">¿Prefieres el chat?</h3>
                <p className="dark:text-white/70 text-black/70 leading-relaxed mb-4">
                  También puedes contactarme a través del asistente IA. Estará encantado de ayudarte y responder tus preguntas.
                </p>
                <button 
                  onClick={onOpenChat}
                  className="group flex items-center gap-2 dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleViewChange = (view: string) => {
    if (currentView === view || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentView(view);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) { // Scrolling down
          if (currentView === 'home') {
            handleViewChange('servicios');
          } else if (currentView === 'servicios') {
            handleViewChange('proyectos');
          } else if (currentView === 'proyectos') {
            handleViewChange('contacto');
          }
        } else { // Scrolling up
          if (currentView === 'contacto') {
            handleViewChange('proyectos');
          } else if (currentView === 'proyectos') {
            handleViewChange('servicios');
          } else if (currentView === 'servicios') {
            handleViewChange('home');
          }
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentView, isTransitioning]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <GridBackground />
      
      <div className={`${geist.className} fixed inset-0`}>
        <Head>
          <title>Clemente Falcone</title>
          <meta name="description" content="Software Engineer Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <header className="fixed w-full p-8 flex justify-end items-center z-[200]">
          <nav className="flex items-center gap-12">
            {mounted && <ThemeToggle />}
            <button 
              onClick={() => handleViewChange('servicios')}
              className={`dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white text-base font-normal tracking-wider transition-colors ${
                currentView === 'servicios' ? 'dark:!text-white !text-black' : ''
              }`}
            >
              Servicios
            </button>
            <button 
              onClick={() => handleViewChange('proyectos')}
              className={`dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white text-base font-normal tracking-wider transition-colors ${
                currentView === 'proyectos' ? 'dark:!text-white !text-black' : ''
              }`}
            >
              Proyectos
            </button>
            <button 
              onClick={() => handleViewChange('contacto')}
              className={`dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white text-base font-normal tracking-wider transition-colors ${
                currentView === 'contacto' ? 'dark:!text-white !text-black' : ''
              }`}
            >
              Contacto
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="group flex items-center gap-2 dark:text-white/70 text-black/60 hover:text-black dark:hover:text-white text-base font-normal tracking-wider transition-colors"
            >
              <span>Asistente IA</span>
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
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative min-h-screen z-[50]">
          <HomeView isActive={currentView === 'home'} />
          <ServiciosView isActive={currentView === 'servicios'} />
          <ProyectosView isActive={currentView === 'proyectos'} />
          <ContactoView 
            isActive={currentView === 'contacto'} 
            onOpenChat={() => setIsChatOpen(true)}
          />
        </main>

        <ChatAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
