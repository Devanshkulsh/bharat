import { useRef } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const galleryItems = [
  {
    id: '1',
    title: 'Advanced Rasashastra Lab',
    category: 'Practical Training',
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'In-House Ayurvedic Hospital',
    category: 'Clinical Exposure',
    src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'Samhita & Siddhanta Library',
    category: 'Academics',
    src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    title: 'Dravyaguna Botanical Garden',
    category: 'Nature & Botany',
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    title: 'Yoga & Meditation Hall',
    category: 'Wellness',
    src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    title: 'Modern Classrooms',
    category: 'Infrastructure',
    src: 'https://images.unsplash.com/photo-1510511459019-5efa3702469d?auto=format&fit=crop&q=80&w=1200',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function CampusGallerySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      // Dynamically calculate the exact width of one card + the gap (24px for gap-6)
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-cream relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      {/* Decorative leaf graphic */}
      <div className="absolute -top-10 right-0 -translate-y-12 translate-x-1/4 opacity-5 pointer-events-none">
        <Leaf className="w-96 h-96 text-accent" />
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Campus Life"
              title="Where ancient wisdom meets modern infrastructure"
              intro="Swipe through our sprawling green campus, state-of-the-art laboratories, and extensive clinical facilities designed for comprehensive B.A.M.S. training."
              titleAs="h3"
            />
          </div>

          {/* Slider Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 pb-4"
          >
            <button
              onClick={() => scroll('left')}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm transition-all hover:bg-primary hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-ink transition-colors group-hover:text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm transition-all hover:bg-primary hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-ink transition-colors group-hover:text-white" />
            </button>
          </motion.div>
        </div>

        {/* Custom Hide-Scrollbar Container + Snap Scrolling */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          ref={scrollRef}
          className="mt-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              // EXACT WIDTH MATH:
              // Mobile (1 item): 100% width
              // Tablet (md - 2 items): 50% width minus half a gap (12px)
              // Desktop (lg - 3 items): 33.333% width minus two-thirds of a gap (16px)
              className="group relative flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-orange-100 shadow-[0_18px_55px_rgb(35_31_32/0.06)] bg-white md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-4/5">
                <img
                  src={item.src}
                  alt={item.title}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute bottom-0 left-0 flex w-full flex-col items-start p-6 sm:p-8">
                  <span className="mb-3 inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation controls */}
        <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={() => scroll('left')}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm active:bg-orange-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm active:bg-orange-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-ink" />
          </button>
        </div>
      </div>
    </section>
  );
}
