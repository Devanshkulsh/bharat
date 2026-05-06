import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
              
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-stone-700">Full Name <span className="text-primary">*</span></label>
                    <input type="text" id="name" required className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-ink placeholder:text-stone-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-bold text-stone-700">Phone Number <span className="text-primary">*</span></label>
                    <input type="tel" id="phone" required className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-ink placeholder:text-stone-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="+91 90000 00000" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-stone-700">Email Address</label>
                  <input type="email" id="email" className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-ink placeholder:text-stone-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="johndoe@example.com" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-stone-700">Your Inquiry <span className="text-primary">*</span></label>
                  <textarea id="message" required rows={4} className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-ink placeholder:text-stone-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Submit Inquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
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
            {/* Embedded Map */}
            <div className="relative h-full w-full overflow-hidden rounded-4xl shadow-[0_18px_55px_rgb(35_31_32/0.08)] bg-stone-100">
              {/* Using a standard generic Google Maps embed focused on Muzaffarnagar */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.852244098141!2d77.74779631251684!3d29.549796975072848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c02d3e3ee6929%3A0xf2e43a61a9fe9eb9!2sBharat%20Ayurved%20Medical%20College%20%26%20Hospital%20Research%20Centre!5e0!3m2!1sen!2sin!4v1778068776890!5m2!1sen!2sin" 
                className="absolute inset-0 h-full w-full border-0 filter grayscale-[0.2] contrast-[1.05]"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location Map"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
