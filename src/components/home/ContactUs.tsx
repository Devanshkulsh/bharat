import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Map from '../ui/Map';
import EmbeddedLeadForm from '../ui/EmbeddedLeadForm';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Campus Address',
    content: 'Bharat Ayurvedic Medical College, Hospital & Research Center, 10 KM. Mile Stone, Roorkee Rd, Muzaffarnagar, Uttar Pradesh 251307',
    link: 'https://maps.app.goo.gl/si6zhrzdBXqNSdbc6',
  },
  {
    icon: Phone,
    title: 'Admissions Helpline',
    content: '+91 9084681367 \n +91 9084681347',
    link: 'tel:+919084681367',
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: 'bamcmzn@rediffmail.com',
    link: 'mailto:bamcmzn@rediffmail.com',
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-24 lg:px-12 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We are here to help you start your journey"
          intro="Whether you have questions about our B.A.M.S. admissions, hospital facilities, or campus life, our dedicated team is ready to assist you."
          titleAs="h3"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Form */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8 lg:col-span-5"
          >
            {/* Detail Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((detail, idx) => (
                <motion.a
                  variants={fadeUp}
                  key={idx}
                  href={detail.link}
                  className="group flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-orange-100 bg-cream/50 p-6 transition-all hover:-translate-y-1 hover:bg-cream hover:shadow-[0_18px_55px_rgb(35_31_32/0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <detail.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-ink">{detail.title}</h4>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-600 group-hover:text-stone-800">
                      {detail.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact Form */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm sm:p-8">
              <h4 className="text-xl font-bold text-ink">Send a Message</h4>
              <p className="mt-2 text-sm text-stone-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              <EmbeddedLeadForm containerId="formsID7375-contact" mirrorFromId="formsID7375" className="mt-6 space-y-4" />
            </motion.div>
          </motion.div>

          {/* Right Column: Map & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative flex h-125 flex-col lg:col-span-7 lg:h-auto"
          >
            <Map
              center={[77.747796, 29.549797]}
              zoom={14.2}
              title="Bharat Ayurvedic Medical College"
              address="10 KM. Mile Stone, Roorkee Rd, Muzaffarnagar, Uttar Pradesh 251307"
              locationUrl="https://maps.app.goo.gl/si6zhrzdBXqNSdbc6"
              className="h-full w-full rounded-4xl border-orange-100 shadow-[0_18px_55px_rgb(35_31_32/0.08)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
