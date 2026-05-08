import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

const APPLICATION_FORM_DIV_ID = 'formsID7375';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function NewHero2() {
  return (
    <section className="relative overflow-hidden bg-cream pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32">
      {/* Ambient background glows for added depth */}
      <div className="absolute -left-40 top-20 h-125 w-125 rounded-full bg-orange-200/30 blur-[100px] pointer-events-none" />

      {/* The dark accent block:
        Strictly edged to the right, top, and bottom like a vertical rectangle.
        Hidden on mobile to maintain text readability, visible on desktop.
      */}
      <div className="absolute bottom-0 right-0 top-0 hidden w-[35vw] bg-ink lg:block xl:w-[40vw]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We use a flex column on mobile, reverting to the grid on desktop */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:items-center xl:gap-16">
          {/* 1. Typography Block (Always First) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="order-1 flex flex-col items-start pt-0 lg:pt-0 lg:pb-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/60 px-4 py-2 backdrop-blur-sm shadow-sm"
            >
              <Leaf className="h-4 w-4 text-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
                Welcome to the Institution
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-black leading-[1.15] text-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.1]"
            >
              A world-class education is applicable for building the future
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              Rooted in ancient wisdom, equipped with modern science. Start your journey towards
              becoming a distinguished Ayurvedic physician today.
            </motion.p>

            {/* Desktop CTAs (Hidden on mobile, integrated into typography block) */}
            <div className="hidden lg:block w-full">
              <motion.div
                variants={fadeUp}
                className="mt-8 flex w-full flex-col sm:w-auto sm:flex-row sm:items-center gap-4"
              >
                <a className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cream">
                  View Campus
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-8 text-base font-bold text-stone-600"
              >
                <a
                  href="#courses"
                  className="group flex items-center gap-2 transition-colors hover:text-primary"
                >
                  Explore our courses
                  <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>
                <a
                  href="#online"
                  className="group flex items-center gap-2 transition-colors hover:text-primary"
                >
                  Study Online
                  <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Form Panel (Right column) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
            className="order-2 relative w-full lg:mt-0"
          >
            <div className="relative z-10 lg:pr-12 xl:pr-16">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-[0_18px_55px_rgb(35_31_32/0.15)] lg:rounded-3xl">
                <div
                  id={APPLICATION_FORM_DIV_ID}
                  className="min-h-160 w-full overflow-y-auto p-4 sm:p-6"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl lg:rounded-3xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* 3. Mobile CTAs (Ordered 3rd on mobile, hidden on desktop) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="order-3 flex flex-col items-start w-full pb-16 lg:hidden"
          >
            <motion.div
              variants={fadeUp}
              className="mt-4 flex flex-row gap-4 text-sm font-bold text-stone-600 sm:flex-row sm:gap-8 sm:text-base"
            >
              <a
                href="#courses"
                className="group flex items-center gap-2 transition-colors hover:text-primary"
              >
                Explore our courses
                <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </a>
              <a
                href="#online"
                className="group flex items-center gap-2 transition-colors hover:text-primary"
              >
                Study Online
                <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
