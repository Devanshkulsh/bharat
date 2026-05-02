import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import ProgramCard from '@/components/ui/ProgramCard';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <AnimatedPageWrapper>
      <SectionWrapper
        className="bg-cream"
        eyebrow="Programs"
        title="BAMS-focused academic pathways"
        intro="The program catalog is structured as reusable data so official seat count, eligibility, fee, and admission details can be added without redesigning the page."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Program experience" title="What students can expect">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            'Integrated Ayurveda and modern medical foundations',
            'Hospital case exposure and supervised patient interaction',
            'Research, documentation, seminars, and community health work',
          ].map((text) => (
            <div key={text} className="rounded-lg border border-orange-100 bg-white p-6 shadow-soft">
              <p className="text-lg font-black leading-8 text-ink">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </AnimatedPageWrapper>
  );
}
