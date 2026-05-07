import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { site } from '@/data/siteContent';
import EmbeddedLeadForm from '@/components/ui/EmbeddedLeadForm';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent sm:h-28" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:min-h-[calc(100vh-14rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1 className="max-w-4xl text-pretty text-3xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl xl:text-[3rem]">
            {site.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700 sm:mt-6 sm:text-lg sm:leading-8 lg:text-lg">
            {site.tagline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-center font-bold text-white shadow-soft transition hover:bg-secondary sm:min-w-52"
              to="/programs"
            >
              Explore programs
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary px-6 py-4 text-center font-bold text-primary transition hover:bg-white sm:min-w-52"
              to="/about"
            >
              About the college
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full justify-self-center rounded-4xl border border-white/70 bg-white/95 p-5 shadow-soft backdrop-blur sm:max-w-xl sm:p-7"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="mb-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Admissions Enquiry</p>
            <h2 className="mt-2 text-xl font-black text-ink sm:text-2xl lg:text-[1.5rem]">
              Start your application conversation
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600 lg:text-[0.85rem]">
              Share your details and our team can help with eligibility, programs, and the admission process.
            </p>
          </div>
          <EmbeddedLeadForm containerId="formsID7375" className="grid gap-4" />
        </motion.div>
      </div>
    </section>
  );
}
