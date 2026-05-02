import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems, site } from '@/data/siteContent';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
      isActive ? 'bg-primary text-white' : 'text-stone-700 hover:bg-orange-50 hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/92 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary">
        <Link className="flex min-w-0 items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <img className="h-12 w-12 rounded-full object-cover" src={site.logo} alt={`${site.fullName} logo`} />
          <span className="min-w-0">
            <span className="block truncate text-base font-black text-ink">{site.name}</span>
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-primary">{site.shortName}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} className={linkClass} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink hover:bg-orange-50 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-orange-100 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.href} className={linkClass} to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
