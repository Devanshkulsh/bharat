import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import HeroSection from '@/components/ui/HeroSection';
// import ProgramCard from '@/components/ui/ProgramCard';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { site } from '@/data/siteContent';
import Facilities from '@/components/home/Facilities';
import CourseBAMS from '@/components/home/CourseBAMS';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import CampusGallery from '@/components/home/CampusGallery';
import HospitalHome from '@/components/home/HospitalHome';
import ContactUs from '@/components/home/ContactUs';

export default function Home() {
  return (
    <AnimatedPageWrapper>
      <HeroSection />

      <SectionWrapper
        eyebrow="About us"
        title="An Ayurveda institution built around learning, care, and clinical discipline"
        intro="Bharat Ayurvedic Medical College, Hospital & Research Center is positioned as a focused home for BAMS education with classroom depth, hospital exposure, and a research-aware academic environment."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            className="relative overflow-hidden rounded-4xl border border-orange-100 bg-white p-6 shadow-soft sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-100/70 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-green-100/80 blur-2xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img
                className="h-24 w-24 rounded-full border-4 border-cream object-cover shadow-soft sm:h-28 sm:w-28"
                src={site.logo}
                alt={`${site.fullName} logo`}
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {site.shortName}
                </p>
                <h3 className="mt-2 text-2xl font-black text-ink sm:text-3xl">{site.fullName}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
                  {site.location}
                </p>
              </div>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: 'BAMS', label: 'Core academic focus' },
                { value: 'Hospital', label: 'Clinical learning support' },
                { value: 'Research', label: 'Evidence-aware culture' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-cream px-4 py-5">
                  <p className="text-lg font-black text-ink">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="rounded-4xl border border-orange-100 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="text-2xl font-black text-ink sm:text-3xl">
                A campus experience shaped around Ayurveda practice
              </h3>
              <p className="mt-4 leading-8 text-stone-700">
                The college building is well planned, newly constructed, earthquake resistant,
                pollution free and has lush green Surrounding. The class rooms are constructed in a
                way to accommodate 100 students at a time with full natural light and having modern
                teaching aids as slides.
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Overhead projectors, computers, mikes, etc. Hospital has seven different OPD’S:
                Viz-Kaya Chikitsa, Shalya, Shalaklya, Stri, Prasuti, Balroga, Swastha Rakshan,
                Panchkarma & Yoga, Dental Dept, X-Ray, ECG, Pathology Lab.
              </p>
              <Link
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-white transition hover:bg-secondary"
                to="/about"
              >
                Learn more about us
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <Facilities />
      <CourseBAMS />
      <VideoTestimonials />
      <CampusGallery />
      <HospitalHome />
      <ContactUs />
    </AnimatedPageWrapper>
  );
}
