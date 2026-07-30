import TiltedCard from '../ui/TiltedCard';
import SectionHeading from '../ui/SectionHeading';

const facilities = [
  {
    title: 'Laboratories & Museums',
    image: '/home/facilities/labs.webp',
  },
  {
    title: 'Play Ground',
    image: '/home/facilities/playground.webp',
  },
  {
    title: 'Pharmacy Profile',
    image: '/home/facilities/pharmacy-profile.webp',
  },
  {
    title: 'Herbal Garden',
    image: '/home/facilities/herbal-garden.webp',
  },
];

const Facilities = () => {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Facilities"
          title="Practical spaces built for learning and care"
          intro="Modern classrooms, clinical departments, and campus infrastructure are arranged to support daily academic training with strong patient-care exposure."
          titleAs="h3"
        />

        <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {facilities.map((facility) => (
            <div key={facility.title} className="flex flex-col items-center gap-4">
              <TiltedCard
                imageSrc={facility.image}
                altText={facility.title}
                captionText={facility.title}
                containerHeight="280px"
                containerWidth="280px"
                imageHeight="280px"
                imageWidth="280px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
              />
              <p className="text-center text-base font-bold text-ink">{facility.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
