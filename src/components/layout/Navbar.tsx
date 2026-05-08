import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems, site } from '@/data/siteContent';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const closeMobileMenu = () => {
    setOpen(false);
    setOpenMobileSubmenu(null);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
      isActive ? 'bg-primary text-white' : 'text-stone-700 hover:bg-orange-50 hover:text-primary'
    }`;

  const desktopDropdownClass = ({ isActive }: { isActive: boolean }) =>
    `group/link relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-orange-50/80 text-primary'
        : 'text-stone-600 hover:bg-stone-50 hover:text-primary'
    }`;

  const mobileDropdownClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex items-center gap-3 rounded-lg py-2.5 pl-5 pr-3 text-sm font-semibold transition-colors before:absolute before:left-2 before:top-1/2 before:h-[60%] before:w-[2px] before:-translate-y-1/2 before:rounded-full before:bg-orange-100 ${
      isActive
        ? 'bg-orange-50/50 text-primary before:!bg-primary'
        : 'text-stone-600 hover:bg-stone-50 hover:text-primary hover:before:bg-orange-300'
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

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <NavLink className={linkClass} to={item.href}>
                <span className="inline-flex items-center gap-1">
                  {item.label}
                  {item.children?.length ? (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-180" aria-hidden="true" />
                  ) : null}
                </span>
              </NavLink>

              {item.children?.length ? (
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-4 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {/* Invisible hover bridge to prevent menu closing when moving mouse */}
                  <div className="absolute -top-3 left-0 right-0 h-6 bg-transparent" />
                  
                  {/* Dropdown Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-orange-100/50 bg-white/95 p-2 shadow-xl shadow-ink/5 backdrop-blur-md ring-1 ring-black/5">
                    {/* Decorative top border */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-linear-to-r from-primary to-accent opacity-80" />
                    
                    <div className="mt-1 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <NavLink key={child.href} className={desktopDropdownClass} to={child.href}>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-200 transition-colors group-hover/link:bg-primary" />
                          <span className="min-w-0 whitespace-normal break-words transition-transform group-hover/link:translate-x-1">{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink hover:bg-orange-50 lg:hidden"
          onClick={() =>
            setOpen((current) => {
              if (current) {
                setOpenMobileSubmenu(null);
              }
              return !current;
            })
          }
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
              <div key={item.href} className="rounded-xl border border-orange-100/80 bg-white">
                <div className="flex items-center">
                  <NavLink
                    className={({ isActive }) =>
                      `flex-1 rounded-l-xl px-3 py-2.5 text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-stone-700 hover:bg-orange-50 hover:text-primary'
                      }`
                    }
                    to={item.href}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>

                  {item.children?.length ? (
                    <button
                      type="button"
                      className="mr-2 rounded-md p-2 text-stone-600 hover:bg-orange-50"
                      onClick={() =>
                        setOpenMobileSubmenu((current) =>
                          current === item.href ? null : item.href
                        )
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openMobileSubmenu === item.href}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileSubmenu === item.href ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : null}
                </div>

                {item.children?.length && openMobileSubmenu === item.href ? (
                  <div className="mb-2 mt-1 flex flex-col gap-1 px-4">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        className={mobileDropdownClass}
                        to={child.href}
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
