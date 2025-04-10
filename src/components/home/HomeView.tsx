import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeViewProps {
  isActive: boolean;
}

const HomeView: React.FC<HomeViewProps> = ({ isActive }) => {
  const { text, textSecondary } = useThemeColors();

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-[8rem] font-bold leading-none tracking-tight"
                style={{ color: text }}
                variants={itemVariants}
              >
                Clemente
                <br />
                Falcone
              </motion.h1>
              <motion.div 
                className="flex items-center gap-4 mt-4"
                variants={itemVariants}
              >
                <div 
                  className="h-[1px] w-12"
                  style={{ backgroundColor: textSecondary }}
                />
                <span 
                  className="text-sm tracking-[0.2em] uppercase"
                  style={{ color: textSecondary }}
                >
                  Software Engineer
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(HomeView); 