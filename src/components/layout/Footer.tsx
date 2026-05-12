import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
    <footer className="overflow-x-clip bg-ink px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        
        {/* Column 1: Brand & About */}
        <div className="flex flex-col">
          <div className="flex min-w-0 items-center gap-4">
            <img
              className="h-14 w-14 rounded-full border-2 border-white/10 object-cover shadow-lg"
              src={site.logo}
              alt={`${site.fullName} logo`}
            />
            <div className="min-w-0">
              <p className="wrap-break-words text-lg font-black leading-tight tracking-wide">{site.fullName}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-stone-300">
            {site.tagline || "Empowering students through classical Ayurveda and modern clinical diagnostics for a holistic medical career."}
          </p>
          <div className="mt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Connect With Us
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <div key={social.label} className="relative perspective:[1000px]">
                  <motion.a
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-300 transform-3d"
                    whileHover={{
                      rotateX: -15,
                      rotateY: 15,
                      y: -4,
                      scale: 1.1,
                      backgroundColor: 'rgba(216, 67, 21, 0.9)',
                      borderColor: 'rgba(216, 67, 21, 1)',
                      boxShadow: '0 15px 30px -10px rgba(216, 67, 21, 0.5)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <video
                      className="h-8 w-8 rounded-xl object-cover"
                      src={social.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden="true"
                    />
                  </motion.a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:pl-8">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            Quick Links
          </p>
          <nav className="flex flex-col gap-y-4" aria-label="Footer Navigation">
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

        {/* Column 3: Admissions & Programs */}
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            Admissions
          </p>
          <ul className="flex flex-col gap-y-4 text-sm font-semibold text-stone-300">
            <li>
              <Link to="/admissions" className="hover:text-white transition-colors">B.A.M.S. Program</Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-white transition-colors">Eligibility Criteria</Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-white transition-colors">Fee Structure</Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-white transition-colors">Scholarships</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            Contact Info
          </p>
          <ul className="flex flex-col gap-y-4 text-sm text-stone-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              <a href='https://maps.app.goo.gl/si6zhrzdBXqNSdbc6' className="wrap-break-words hover:text-white transition-colors">{site.location}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-primary" />
              <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">+91 {site.phone || "81910 00501"}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white transition-colors">{site.email || "info@bamchrc.com"}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-sm text-stone-400 text-center sm:text-left">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="text-sm text-stone-400">
          Developed & Maintained by{' '}
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
