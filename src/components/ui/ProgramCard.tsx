import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Program } from '@/data/programs';

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full rounded-lg border border-orange-100 bg-white p-6 text-left shadow-soft transition-colors hover:border-secondary"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <span className="mb-5 inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-accent">
          {program.duration}
        </span>
        <h3 className="text-xl font-black text-ink">{program.title}</h3>
        <p className="mt-4 leading-7 text-stone-700">{program.summary}</p>
      </motion.button>

      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${program.id}-title`}
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-2xl sm:p-8"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                  {program.duration}
                </p>
                <h2 id={`${program.id}-title`} className="mt-2 text-2xl font-black text-ink">
                  {program.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-full p-2 text-stone-700 hover:bg-stone-100"
                onClick={() => setOpen(false)}
                aria-label="Close program details"
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 leading-8 text-stone-700">{program.details}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {program.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-lg bg-cream p-4 text-sm font-semibold text-ink">
                  {outcome}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
