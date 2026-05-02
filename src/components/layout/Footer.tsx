import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { navItems, site } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img className="h-14 w-14 rounded-full object-cover" src={site.logo} alt={`${site.fullName} logo`} />
            <div>
              <p className="font-black">{site.fullName}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-orange-100">
                <MapPin size={16} aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-stone-300">{site.tagline}</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} className="text-sm font-semibold text-stone-200 hover:text-highlight" to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-stone-400">
        © {new Date().getFullYear()} {site.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
