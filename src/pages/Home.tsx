import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import HeroSection from '@/components/ui/HeroSection';
import ProgramCard from '@/components/ui/ProgramCard';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { programs } from '@/data/programs';
import { highlights, values } from '@/data/siteContent';

export default function Home() {
  return (
    <AnimatedPageWrapper>
      <HeroSection />

      <SectionWrapper
        eyebrow="Academic ecosystem"
        title="A practical Ayurveda campus for future physicians"
        intro="The MVP website presents the college as a focused home for BAMS education, hospital-led clinical exposure, and research habits."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="rounded-lg border border-orange-100 bg-white p-6 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="mb-5 inline-flex rounded-lg bg-orange-50 p-3 text-primary">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="bg-cream"
        eyebrow="Featured programs"
        title="Start with the core learning pathways"
        intro="Each card opens an accessible modal with richer detail and sample learning outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.slice(0, 4).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <Link
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-white hover:bg-primary"
          to="/programs"
        >
          View all programs
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </SectionWrapper>

      <SectionWrapper eyebrow="Institution values" title="Rooted, disciplined, and service-oriented">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.label}
                className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-soft"
                whileHover={{ y: -4 }}
              >
                <span className="rounded-lg bg-green-50 p-3 text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <span className="font-black text-ink">{value.label}</span>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </AnimatedPageWrapper>
  );
}
