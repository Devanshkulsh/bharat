import { motion } from 'framer-motion';
import EmbeddedLeadForm from '@/components/ui/EmbeddedLeadForm';
import { site } from '@/data/siteContent';

const APPLICATION_FORM_DIV_ID = 'formsID7375';

const highlights = [
  { text: 'Full-Time B.A.M.S. Program' },
  { text: 'NCISM Norms Focused' },
  { text: 'Hospital-Integrated Clinical Learning' },
  { text: 'Classical Ayurveda + Modern Diagnostics' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQK';
    link.download = 'MSDS_BBA_AI_Brochure.pdf';
    link.click();
  };

  const scrollToLeadForm = () => {
    const form = document.getElementById(APPLICATION_FORM_DIV_ID);
    if (!form) return;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-cream">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/85 to-ink/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl overflow-x-clip px-4 pb-12 pt-8 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
          
          {/* Content Side */}
          <motion.div
            className="flex w-full flex-1 flex-col items-center text-center text-white lg:items-start lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - Reduced margin on mobile */}
            <motion.div
              variants={item}
              className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] font-medium tracking-wide shadow-sm backdrop-blur-md sm:mb-6 sm:py-1.5 sm:text-xs md:text-sm"
            >
              Admissions Open | Session 2026-2027
            </motion.div>

            {/* Title - Optimized size for mobile */}
            <motion.h1
              variants={item}
              className="mb-3 w-full text-3xl font-extrabold leading-[1.2] sm:mb-4 sm:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl"
            >
              <span className="text-secondary">{site.shortName}</span> Admissions
            </motion.h1>

            {/* Sub-heading - Reduced margin on mobile */}
            <motion.h2
              variants={item}
              className="mb-3 max-w-xl px-2 text-sm font-medium text-white/90 sm:mb-6 sm:px-0 sm:text-xl md:text-2xl"
            >
              Classical Ayurveda, clinical confidence, and research-minded care
            </motion.h2>

            {/* Description - Hidden or smaller on very small screens to save space */}
            <motion.p
              variants={item}
              className="mb-6 max-w-2xl px-2 text-xs leading-relaxed text-white/80 sm:mb-10 sm:px-0 sm:text-base md:text-lg"
            >
              Join {site.fullName} for a focused B.A.M.S. journey built on strong classroom
              learning, hospital exposure, and a disciplined approach to Ayurveda practice in{' '}
              {site.location}.
            </motion.p>

            {/* Highlights Tags - Tighter spacing for mobile */}
            <motion.div
              variants={item}
              className="mb-6 flex w-full flex-wrap justify-center gap-1.5 sm:mb-10 sm:gap-3 lg:justify-start"
            >
              {highlights.map((h) => (
                <span
                  key={h.text}
                  className="whitespace-normal rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] shadow-sm backdrop-blur-md transition-colors hover:bg-white/20 sm:px-4 sm:py-2 sm:text-xs md:text-sm"
                >
                  {h.text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons - Fixed visibility issue */}
            <motion.div
              variants={item}
              className="mb-8 flex w-full flex-col justify-center gap-2.5 px-4 sm:mb-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0 lg:justify-start"
            >
              <button
                onClick={scrollToLeadForm}
                className="flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-secondary active:scale-95 sm:w-auto sm:py-3.5 sm:text-base"
              >
                Apply Now
              </button>
              <button
                onClick={handleDownload}
                className="flex w-full items-center justify-center rounded-full border-2 border-secondary bg-transparent px-8 py-3 text-sm font-semibold text-secondary transition-all hover:scale-105 hover:bg-secondary hover:text-white active:scale-95 sm:w-auto sm:py-3.5 sm:text-base"
              >
                Campus Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="relative z-20 w-full min-w-0 max-w-md flex-shrink-0 px-2 lg:mt-0 lg:w-[420px] lg:px-0 xl:w-[480px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative overflow-x-clip overflow-y-hidden rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:rounded-3xl">
              <EmbeddedLeadForm
                containerId={APPLICATION_FORM_DIV_ID}
                className="min-h-[480px] w-full max-w-full overflow-x-hidden overflow-y-auto sm:min-h-[550px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}