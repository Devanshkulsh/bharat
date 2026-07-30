import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definition for the site prop
export interface SiteInfo {
  logo?: string;
  shortName: string;
  fullName: string;
  location?: string;
}

interface AboutHomeProps {
  site: SiteInfo;
}

export default function AboutHome({ site }: AboutHomeProps) {
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Organic Image Collage (Matched to Exact UI Reference) */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            {/* Aspect container to maintain the shape ratio */}
            <div className="relative aspect-[1.1/1] w-full">
              
              {/* --- BACKGROUND BLOBS --- */}
              {/* Left Dark Blue Blob */}
              <div className="absolute top-[20%] -left-[4%] z-0 h-[40%] w-[25%] -rotate-12 rounded-[2.5rem] bg-primary" />
              
              {/* Right Highlight Blob */}
              <div className="absolute top-[25%] -right-[2%] z-0 h-[35%] w-[20%] rotate-12 rounded-[2rem] bg-highlight" />
              
              {/* Bottom Secondary Blob */}
              <div className="absolute bottom-[-2%] right-[10%] z-0 h-[22%] w-[45%] -rotate-6 rounded-[2rem] bg-secondary" />

              {/* --- FOREGROUND IMAGES --- */}
              {/* Image 1: Main Left Group (z-20 so it sits above Image 2, but below Image 3) */}
              <div className="absolute left-[2%] top-[5%] z-20 h-[65%] w-[64%] overflow-hidden rounded-tl-[5rem] rounded-tr-[1.5rem] rounded-bl-[4rem] rounded-br-[2rem] border-[8px] border-white bg-white shadow-soft">
                <img
                  src="/home/about/1.webp"
                  alt="Group of diverse students"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image 2: Top Right Lab (z-10 so it sits behind Image 1 and Image 3) */}
              <div className="absolute right-[2%] top-[8%] z-10 h-[46%] w-[46%] overflow-hidden rounded-tl-[1.5rem] rounded-tr-[4.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] border-[8px] border-white bg-white shadow-soft">
                <img
                  src="/home/about/2.webp"
                  alt="Students in a laboratory"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image 3: Bottom Right Library (z-30 so it overlaps both Image 1 and Image 2) */}
              <div className="absolute bottom-[2%] right-[14%] z-30 h-[52%] w-[44%] overflow-hidden rounded-tl-[2rem] rounded-tr-[1.5rem] rounded-bl-[2.5rem] rounded-br-[5rem] border-[8px] border-white bg-white shadow-soft">
                <img
                  src="/home/about/3.webp"
                  alt="Library interior with books"
                  className="h-full w-full object-cover object-top"
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Text Content & Layout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 font-bold text-primary">
              <GraduationCap aria-hidden="true" size={22} />
              <span className="text-sm uppercase tracking-[0.18em]">{site.fullName}</span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-3 text-balance text-3xl font-black text-ink sm:text-4xl lg:text-5xl">
              An Ayurveda institution built around learning, care, and clinical discipline
            </h2>

            {/* Intro Paragraph */}
            <p className="mt-6 text-base leading-8 text-stone-700">
              {site.shortName} is positioned as a focused home for BAMS education with classroom depth, hospital exposure, and a research-aware academic environment. The college building is well planned, newly constructed, earthquake-resistant, pollution-free, and has lush green surroundings.
            </p>

            {/* Horizontal List of Key Pillars */}
            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              {[
                { value: 'BAMS', label: 'Core Focus' },
                { value: 'Hospital', label: 'Clinical' },
                { value: 'Research', label: 'Evidence' },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                  <span className="text-base font-bold text-ink">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Secondary Paragraph */}
            <p className="mt-8 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              The classrooms are constructed to accommodate 100 students at a time with full natural light and modern teaching aids like overhead projectors, computers, and mics. Our hospital features seven different OPDs: Kaya Chikitsa, Shalya, Shalakya, Stri Prasuti, Balroga, Swastha Rakshan, Panchkarma & Yoga, plus a Dental Dept, X-Ray, ECG, and Pathology Lab.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link 
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cream" 
                to="/about"
              >
                Explore More
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
