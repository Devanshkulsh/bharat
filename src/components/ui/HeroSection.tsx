import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import EmbeddedLeadForm from '@/components/ui/EmbeddedLeadForm';

const APPLICATION_FORM_DIV_ID = 'formsID7375';
const CAMPUS_TOUR_URL = 'https://youtu.be/z3fD2wBYV5w?si=_DUWh3p2RRZZDN0K';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isFormOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFormOpen(false);
    };

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFormOpen]);

  const openCampusTour = () => {
    window.open(CAMPUS_TOUR_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="relative w-full overflow-x-hidden bg-cream">
        <div className="absolute inset-0 z-0">
          <img src="/hero.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-br from-ink/95 via-ink/86 to-ink/65" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center justify-center overflow-x-clip px-4 py-20 sm:px-6 md:min-h-[680px] lg:px-8">
          <motion.div
            className="flex w-full flex-col items-center text-center text-white"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* NEW "ADMISSIONS OPEN" UI: Eyebrow text with pulsing dot */}
            <motion.div
              variants={item}
              className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm"
            >
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              Admissions Open <span className="opacity-60 text-white">&bull;</span> Session 2026-2027
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-5xl text-4xl font-extrabold leading-tight text-secondary sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Bharat Ayurvedic Medical College
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-3xl px-2 text-sm leading-7 text-white/85 sm:px-0 sm:text-base md:text-lg md:leading-8"
            >
              Join Bharat Ayurvedic Medical College, Hospital & Research Center for a focused
              B.A.M.S. journey built on strong classroom learning, hospital exposure, and a
              disciplined approach to Ayurveda practice in Bharat Ayurvedic Medical College,
              Hospital & Research Center, 10 KM. Mile Stone, Roorkee Rd, Muzaffarnagar, Uttar
              Pradesh 251307.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex w-full flex-col justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
            >
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-secondary active:scale-95 sm:w-auto sm:py-3.5 sm:text-base"
              >
                Apply Now
              </button>
              <button
                type="button"
                onClick={openCampusTour}
                className="flex w-full items-center justify-center rounded-full border-2 border-secondary bg-transparent px-8 py-3 text-sm font-semibold text-secondary transition-all hover:scale-105 hover:bg-secondary hover:text-white active:scale-95 sm:w-auto sm:py-3.5 sm:text-base"
              >
                Campus Tour
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal remains the same */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 transition-opacity sm:p-6 ${
          isFormOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Application form"
        aria-hidden={!isFormOpen}
        onMouseDown={() => setIsFormOpen(false)}
      >
        <div
          className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[90vh] sm:rounded-3xl"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3 sm:px-6">
            <p className="text-sm font-bold text-ink sm:text-base">Application Form</p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="rounded-lg p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close application form"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="h-full w-full overflow-y-auto p-2 sm:p-4">
            <EmbeddedLeadForm
              containerId={APPLICATION_FORM_DIV_ID}
              className="min-h-120 w-full max-w-full overflow-x-hidden overflow-y-auto sm:min-h-137.5"
            />
          </div>
        </div>
      </div>
    </>
  );
}