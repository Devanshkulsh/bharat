import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, PlayCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    id: '1',
    videoId: 'LESr_LurYBA',
  },
  {
    id: '2',
    videoId: 'WsbVOahR37M',
  },
  {
    id: '3',
    videoId: 'ksbMHaxZ-8I',
  },
  {
    id: '4',
    videoId: 'C0XXAZx2ol0',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Helper to get high-quality default YouTube thumbnail
const getYouTubeThumbnail = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export default function VideoTestimonials() {
  const [activeId, setActiveId] = useState(testimonials[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[0];

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setIsPlaying(true);
  };

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Student Success Stories"
          title="Hear directly from our future healers"
          intro="Discover how our integrated curriculum and hands-on hospital exposure shape the journeys of our B.A.M.S. students."
          titleAs="h3"
        />

        {/* 2-Column Desktop Layout */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* LEFT: Main "Book Mockup" Video Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="relative rounded-r-3xl rounded-l-xl bg-white p-2 shadow-soft sm:p-4 md:p-6 lg:rounded-r-[2.5rem]">
              {/* Layered "Pages" Effect */}
              <div className="absolute inset-y-3 -right-3 -z-10 w-full rounded-r-3xl border border-orange-100 bg-[#fffdf9] shadow-sm lg:-right-4 lg:rounded-r-[2.5rem]" />
              <div className="absolute inset-y-6 -right-6 -z-20 w-full rounded-r-3xl border border-orange-50 bg-[#fffbfa] lg:-right-8 lg:rounded-r-[2.5rem]" />
              {/* Book Spine Binding Effect */}
              <div className="absolute inset-y-0 left-0 w-8 rounded-l-xl bg-linear-to-r from-stone-200/50 to-transparent mix-blend-multiply" />

              {/* Video Player / Image Facade */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink shadow-inner md:rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 h-full w-full"
                  >
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${activeTestimonial.videoId}?autoplay=1&rel=0&controls=0&modestbranding=1`}
                        title="Student Testimonial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    ) : (
                      <div className="group relative h-full w-full cursor-pointer overflow-hidden">
                        <img
                          src={getYouTubeThumbnail(activeTestimonial.videoId)}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink/40 transition-colors duration-300 group-hover:bg-ink/50" />

                        {/* Play Button Overlay */}
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 sm:h-24 sm:w-24"
                          aria-label="Play video"
                        >
                          <Play className="ml-2 h-10 w-10 sm:h-12 sm:w-12" fill="currentColor" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive 2x2 Grid Selection */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {testimonials.map((testimonial) => {
              const isActive = activeId === testimonial.id;

              return (
                <motion.button
                  variants={fadeUp}
                  key={testimonial.id}
                  onClick={() => handleSelect(testimonial.id)}
                  className={`group relative flex flex-col items-start overflow-hidden rounded-2xl bg-white p-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? 'shadow-md ring-2 ring-primary ring-offset-2'
                      : 'border border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md'
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={getYouTubeThumbnail(testimonial.videoId)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-colors ${isActive ? 'bg-primary/20' : 'bg-ink/30 group-hover:bg-ink/20'}`}
                    >
                      {isActive && isPlaying ? (
                        <span className="flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          Playing
                        </span>
                      ) : (
                        <PlayCircle className="h-8 w-8 text-white/90 shadow-sm transition-transform group-hover:scale-110" />
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
