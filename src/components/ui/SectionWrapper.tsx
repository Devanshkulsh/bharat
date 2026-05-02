import type { ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  as?: ElementType;
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
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-black text-ink sm:text-4xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-lg leading-8 text-stone-700">{intro}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </Tag>
  );
}
