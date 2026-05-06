import { motion } from 'motion/react';
import { BookOpen, Stethoscope, ArrowRight, CheckCircle2, Download } from 'lucide-react';

const courseHighlights = [
  {
    title: 'Integrated Curriculum',
    description: 'Deep dive into Samhitas, anatomy, and modern diagnostic tools.',
    icon: BookOpen,
  },
  {
    title: 'Extensive Clinical Training',
    description: '1-year mandatory rotatory internship at our in-house hospital.',
    icon: Stethoscope,
  },
];

const eligibilityCriteria = [
  '10+2 Science (PCB) with minimum 50% aggregate',
  'Must have qualified NEET-UG examination',
  'Minimum 17 years of age as of 31st December',
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CourseBAMS() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Rich Media Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            {/* Main Image */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-soft border border-orange-100">
              <img
                src="/BAMS.png"
                alt="Ayurveda students studying herbal medicines in a laboratory"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/0 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Course Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.2em] text-primary"
            >
              Undergraduate Program
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl"
            >
              Bachelor of Ayurvedic Medicine and Surgery{' '}
              <span className="text-primary">(B.A.M.S.)</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-stone-700">
              Rooted in millennia-old wisdom and elevated by modern clinical methodologies, our
              B.A.M.S. program transforms dedicated students into compassionate healthcare
              professionals. Experience hands-on learning in our state-of-the-art hospital and
              expansive herbal gardens.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div variants={fadeUp} className="mt-8 grid gap-6 sm:grid-cols-2">
              {courseHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_18px_55px_rgb(35_31_32/0.06)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-ink">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Eligibility List */}
            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-orange-100"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
                Eligibility Requirements
              </h4>
              <ul className="mt-4 space-y-3">
                {eligibilityCriteria.map((criteria, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-base text-stone-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Apply for Admissions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all hover:-translate-y-1 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Download className="h-5 w-5" />
                Course Syllabus
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
