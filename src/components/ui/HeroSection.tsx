import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { site } from '@/data/siteContent';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-cream px-5 py-20 sm:px-8 lg:px-12">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-14rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-accent shadow-sm backdrop-blur">
            <BadgeCheck size={18} aria-hidden="true" />
            {site.shortName} | {site.location}
          </div>
          <h1 className="text-balance max-w-4xl text-4xl font-black leading-tight text-ink sm:text-6xl lg:text-7xl">
            {site.fullName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-bold text-white shadow-soft hover:bg-secondary"
              to="/programs"
            >
              Explore programs
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-4 font-bold text-primary hover:bg-white"
              to="/about"
            >
              About the college
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="justify-self-center rounded-full bg-white p-5 shadow-soft"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <img
            className="h-44 w-44 rounded-full object-cover sm:h-60 sm:w-60"
            src={site.logo}
            alt={`${site.fullName} logo`}
          />
        </motion.div>
      </div>
    </section>
  );
}
