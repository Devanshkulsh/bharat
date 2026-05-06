import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

type SectionWrapperProps = {
  as?: 'section' | 'div' | 'main';
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionWrapper({
  as: Tag = 'section',
  eyebrow,
  title,
  intro,
  className = '',
  children,
}: SectionWrapperProps) {
  return (
    <Tag className={`px-5 py-16 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          </motion.div>
        )}
        {children}
      </div>
    </Tag>
  );
}
