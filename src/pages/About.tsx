import { motion } from 'framer-motion';
import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Timeline from '@/components/ui/Timeline';
import { site } from '@/data/siteContent';

export default function About() {
  return (
    <AnimatedPageWrapper>
      <SectionWrapper className="bg-cream" eyebrow="About" title={site.fullName}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            className="mx-auto h-56 w-56 rounded-full object-cover shadow-soft sm:h-72 sm:w-72"
            src={site.logo}
            alt={`${site.fullName} crest`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-stone-700">
              Bharat Ayurvedic Medical College, Hospital & Research Center is presented as a
              modern Ayurveda institution with a clear BAMS focus: strong classroom learning,
              clinical discipline through an attached hospital, and a research-oriented academic
              culture.
            </p>
            <p className="mt-5 leading-8 text-stone-700">
              The website structure is ready to grow into hospital services, admissions, gallery,
              alumni, and research sections as verified institutional content becomes available.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Journey"
        title="A clear path from foundation to practice"
        intro="This timeline is content-ready and can be updated with official dates, approvals, milestones, and campus achievements."
      >
        <Timeline />
      </SectionWrapper>

      <SectionWrapper className="bg-ink text-white" eyebrow="Campus intent" title="Education that stays close to care">
        <div className="grid gap-6 md:grid-cols-3">
          {['Classical Knowledge', 'Hospital Exposure', 'Community Orientation'].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-black text-highlight">{item}</h3>
              <p className="mt-3 leading-7 text-stone-300">
                A content block prepared for official copy, images, statistics, and supporting
                proof points.
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </AnimatedPageWrapper>
  );
}
