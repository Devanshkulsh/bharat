import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import ContactForm from '@/components/ui/ContactForm';
import SectionWrapper from '@/components/ui/SectionWrapper';

type PlaceholderPageProps = {
  title: string;
  showContact?: boolean;
};

export default function PlaceholderPage({ title, showContact = false }: PlaceholderPageProps) {
  return (
    <AnimatedPageWrapper>
      <SectionWrapper
        className="bg-cream"
        eyebrow="Coming next"
        title={title}
        intro={`${title} content is scaffolded and ready for official photos, copy, documents, and data.`}
      >
        {showContact ? (
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        ) : (
          <div className="rounded-lg border border-orange-100 bg-white p-8 shadow-soft">
            <p className="max-w-2xl leading-8 text-stone-700">
              This page is connected to routing and navigation. Add the official content model here
              when the section is ready for production publishing.
            </p>
          </div>
        )}
      </SectionWrapper>
    </AnimatedPageWrapper>
  );
}
