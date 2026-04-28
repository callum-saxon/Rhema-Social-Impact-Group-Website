import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { LogoBadge } from './Logo.jsx';

const links = [
  { to: '/about',          label: 'About' },
  { to: '/services',       label: 'Services' },
  { to: '/our-process',    label: 'Our Process' },
  { to: '/partners',       label: 'Partners' },
  { to: '/property-atlas', label: 'Property Atlas' },
  { to: '/contact',        label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="rh-nav">
      <div className="container rh-nav__inner">
        <Link to="/" className="rh-logo-link" aria-label="Rhema Social Impact Group — home" onClick={() => setOpen(false)}>
          <LogoBadge size={56} />
        </Link>

        <nav aria-label="Primary">
          <ul className="rh-nav__menu">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rh-nav__cta">
          <a className="btn btn--primary" href="mailto:hello@rhemasi.co.uk" style={{ padding: '10px 16px', fontSize: 14 }}>
            <Mail size={16} /> hello@rhemasi.co.uk
          </a>
          <button
            className="rh-burger"
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`rh-mobile ${open ? 'open' : ''}`}>
        <div className="container">
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li><a href="mailto:hello@rhemasi.co.uk">hello@rhemasi.co.uk</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
