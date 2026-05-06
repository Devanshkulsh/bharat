import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { navItems, site } from '@/data/siteContent';

const socialLinks = [
  { video: '/social/facebook.webm', href: 'https://www.facebook.com/bamchrc', label: 'Facebook' },
  {
    video: '/social/insta.webm',
    href: 'https://www.instagram.com/bharatayurvedmedicalcollege/?igsh=bmVjcWFkMGVpOTY5#',
    label: 'Instagram',
  },
  { video: '/social/youtube.webm', href: 'https://www.youtube.com/@Bamchrc', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-white/10 object-cover shadow-lg"
                src={site.logo}
                alt={`${site.fullName} logo`}
              />
              <div>
                <p className="text-xl font-black tracking-wide">{site.fullName}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-orange-100/80">
                  <MapPin size={16} aria-hidden="true" className="text-primary" />
                  {site.location}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-stone-300">{site.tagline}</p>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Connect With Us
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <div key={social.label} className="relative perspective:[1000px]">
                  <motion.a
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-stone-300 transform-3d"
                    whileHover={{
                      rotateX: -15,
                      rotateY: 15,
                      y: -8,
                      scale: 1.1,
                      backgroundColor: 'rgba(216, 67, 21, 0.9)',
                      borderColor: 'rgba(216, 67, 21, 1)',
                      boxShadow: '0 20px 40px -10px rgba(216, 67, 21, 0.5)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <motion.div
                      className="transform-[translateZ(20px)]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <video
                        className="h-10 w-10 rounded-2xl object-cover"
                        src={social.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                      />
                    </motion.div>
                  </motion.a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:pl-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            Quick Links
          </p>
          <nav
            className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3"
            aria-label="Footer Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="group flex items-center gap-2 text-sm font-semibold text-stone-300 transition-colors hover:text-white"
                to={item.href}
              >
                <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="text-sm text-stone-400">
          Developed & maintained by{' '}
          <a
            href="https://ntechzy.in"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-orange-100 transition-colors hover:text-white"
          >
            Ntechzy
          </a>
        </p>
      </div>
    </footer>
  );
}
