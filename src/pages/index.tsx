import { useState, useEffect, useCallback } from "react";
import { Geist } from "next/font/google";
import { ThemeProvider, useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { ViewName } from '@/types';
import SEO from "@/components/shared/SEO";
import { useNavigation, useNavigationControls } from '@/hooks';

// Componentes estáticos
import GridBackground from "../components/GridBackground";
import Navigation from "../components/shared/Navigation";

// Componentes cargados dinámicamente
const HomeView = dynamic(() => import("../components/home/HomeView"), {
  loading: () => <div className="animate-pulse">Cargando...</div>
});

const ServiciosView = dynamic(() => import("../components/servicios/ServiciosView"), {
  loading: () => <div className="animate-pulse">Cargando...</div>
});

const ProyectosView = dynamic(() => import("../components/proyectos/ProyectosView"), {
  loading: () => <div className="animate-pulse">Cargando...</div>
});

const ContactoView = dynamic(() => import("../components/contacto/ContactoView"), {
  loading: () => <div className="animate-pulse">Cargando...</div>
});

const ChatAI = dynamic(() => import("../components/ChatAI"), {
  ssr: false,
  loading: () => <div className="fixed right-5 bottom-5 p-4 bg-black/10 dark:bg-white/10 rounded-full animate-pulse"></div>
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { setTheme } = useTheme();
  
  // Sistema de navegación centralizado
  const navigation = useNavigation();
  const { currentView, isTransitioning, navigateTo } = navigation;
  const { swipeHandlers } = useNavigationControls(navigation);
  
  useEffect(() => {
    setMounted(true);
    // Forzar el tema claro al inicio
    setTheme('light');
  }, [setTheme]);

  const handleOpenChat = useCallback(() => {
    setIsChatOpen(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {/* SEO Mejorado */}
      <SEO />
      
      <GridBackground />
      
      <div 
        className={`${geist.className} fixed inset-0`}
        {...swipeHandlers}
      >
        {/* Navegación */}
        {mounted && (
          <Navigation 
            currentView={currentView} 
            onChangeView={navigateTo} 
            onOpenChat={handleOpenChat}
          />
        )}

        {/* Contenido principal */}
        <main className="relative min-h-screen z-[50] touch-none">
          <HomeView isActive={currentView === 'home'} />
          <ServiciosView isActive={currentView === 'servicios'} />
          <ProyectosView isActive={currentView === 'proyectos'} />
          <ContactoView 
            isActive={currentView === 'contacto'} 
            onOpenChat={handleOpenChat}
          />
        </main>

        <ChatAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
