import { motion } from 'framer-motion';
import { timeline } from '@/data/siteContent';

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-orange-200 sm:block" />
      <div className="grid gap-6">
        {timeline.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            className="relative rounded-lg border border-orange-100 bg-white p-6 shadow-soft sm:ml-12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="absolute -left-[3.25rem] top-6 hidden h-8 w-8 rounded-full border-4 border-cream bg-primary sm:block" />
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{item.year}</p>
            <h3 className="mt-2 text-xl font-black text-ink">{item.title}</h3>
            <p className="mt-3 leading-7 text-stone-700">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
