import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeViewProps } from '@/types';

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
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl mx-auto md:mx-0">
              <motion.h1 
                className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.9] sm:leading-[0.95] md:leading-none tracking-tight"
                style={{ color: text }}
                variants={itemVariants}
              >
                <span className="block">Clemente</span>
                <span className="block">Falcone</span>
              </motion.h1>
              <motion.div 
                className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4"
                variants={itemVariants}
              >
                <div 
                  className="h-[1px] w-6 sm:w-12"
                  style={{ backgroundColor: textSecondary }}
                />
                <span 
                  className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em]"
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