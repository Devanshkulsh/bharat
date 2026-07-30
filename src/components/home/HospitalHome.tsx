import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
  BedDouble,
  Stethoscope,
  Activity,
  Clock,
  ShieldPlus,
  HeartPulse,
  Droplets,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const hospitalStats = [
  { icon: BedDouble, value: '100+', label: 'Bedded Facility' },
  { icon: Stethoscope, value: '8+', label: 'Specialized OPDs' },
  { icon: Droplets, value: 'Advanced', label: 'Panchakarma Wing' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

const departments = [
  {
    name: 'Kayachikitsa',
    desc: 'Internal Medicine & holistic healing.',
    icon: Activity,
  },
  {
    name: 'Shalya Tantra',
    desc: 'General Surgery & parasurgical procedures.',
    icon: ShieldPlus,
  },
  {
    name: 'Prasuti & Stri Roga',
    desc: 'Obstetrics and Gynecology care.',
    icon: HeartPulse,
  },
  {
    name: 'Kaumarbhritya',
    desc: 'Pediatrics and neonatal healthcare.',
    icon: BedDouble, // Using BedDouble as a placeholder for pediatrics/ward
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HospitalHome() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Clinical Excellence"
          title="In-House Ayurvedic Hospital & Research Center"
          intro="Experience unparalleled clinical exposure at our fully functional, multi-specialty Ayurvedic hospital dedicated to holistic patient care and advanced medical research."
          titleAs="h3"
        />

        {/* Quick Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6"
        >
          {hospitalStats.map((stat, idx) => (
            <motion.div
              variants={fadeUp}
              key={idx}
              className="flex flex-col items-center justify-center rounded-3xl border border-orange-50 bg-cream p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="text-3xl font-black text-ink lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-stone-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Split Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Rich Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2.5rem] border border-orange-100 shadow-soft">
              <img
                src="/home/hospital.webp"
                alt="Modern hospital corridor with medical professionals"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Right Column: Departments & Details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <motion.h4 variants={fadeUp} className="text-2xl font-black text-ink sm:text-3xl">
              Specialized Clinical Departments
            </motion.h4>
            <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-stone-700">
              Our hospital bridges the gap between academic theory and practical application.
              Students undergo extensive rotatory internships across various specialized wards under
              the guidance of senior practitioners.
            </motion.p>

            {/* Departments List */}
            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-2 rounded-2xl border border-orange-100 bg-cream/50 p-5 transition-colors hover:bg-cream"
                >
                  <div className="flex items-center gap-3">
                    <dept.icon className="h-5 w-5 text-primary" />
                    <h5 className="text-base font-bold text-ink">{dept.name}</h5>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">{dept.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <button className="group flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all hover:-translate-y-1 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Explore All Facilities
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
