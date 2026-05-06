import { Link } from 'react-router-dom';
import { FormEvent, lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { site } from '@/data/siteContent';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function HeroSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

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

          <form className="grid gap-4" onSubmit={handleSubmit} aria-label="Hero enquiry form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Full name
                <input
                  className="min-h-12 rounded-xl border border-stone-300 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-primary"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Phone number
                <input
                  className="min-h-12 rounded-xl border border-stone-300 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-primary"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Email
                <input
                  className="min-h-12 rounded-xl border border-stone-300 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-primary"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Program interest
                <select
                  className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                  name="program"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="bams">BAMS</option>
                  <option value="hospital-training">Hospital Training</option>
                  <option value="research">Research Opportunities</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-ink">
              Message
              <textarea
                className="min-h-28 rounded-xl border border-stone-300 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-primary"
                name="message"
                placeholder="Tell us what you'd like to know"
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-secondary"
            >
              <Send size={18} aria-hidden="true" />
              Send enquiry
            </button>

            {sent ? (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-accent" role="status">
                Thanks. This enquiry form is ready for API integration.
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
