import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedPageWrapperProps = {
  children: ReactNode;
};

export default function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
