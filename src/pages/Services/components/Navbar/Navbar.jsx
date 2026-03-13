import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import "./Navbar.css";

const navItems = [
  {
    label: 'Engineering & Construction',
    path: '/services/engineering',
    children: [
      { label: 'Electrical, Civil & Mechanical', path: '/services/engineering#electrical' },
      { label: 'Construction & Civil Works', path: '/services/engineering#construction' },
      { label: 'Electrical Installation & Projects', path: '/services/engineering#installation' },
      { label: 'Waste Management Solutions', path: '/services/engineering#waste' },
    ],
  },
  {
    label: 'Energy & Oil Gas',
    path: '/services/energy',
    children: [
      { label: 'Oil & Gas Training & Consultancy', path: '/services/energy#oilgas' },
      { label: 'Field Operations & Energy Training', path: '/services/energy#field' },
      { label: 'Energy Consultancy', path: '/services/energy#consultancy' },
      { label: 'Solar & Power Distribution', path: '/services/energy#solar' },
    ],
  },
  {
    label: 'Training & Development',
    path: '/services/training',
    children: [
      { label: 'ICT & Digital Skills', path: '/services/training#ict' },
      { label: 'Certification & Skills Upgrading', path: '/services/training#certification' },
      { label: 'Vocational & Capacity Development', path: '/services/training#vocational' },
      { label: 'HSE & Wellness Trainings', path: '/services/training#hse' },
      { label: 'Investment & Financial Literacy', path: '/services/training#financial' },
      { label: 'Entrepreneurship & Business', path: '/services/training#entrepreneurship' },
    ],
  },
  {
    label: 'Business & Operations',
    path: '/services/business',
    children: [
      { label: 'Transportation & Logistics', path: '/services/business#logistics' },
      { label: 'Import & Export Services', path: '/services/business#trade' },
      { label: 'Catering & Event Management', path: '/services/business#catering' },
      { label: 'General Contracting', path: '/services/business#contracting' },
    ],
  },
];

const ServicesNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`header-wrapper ${scrolled ? 'header--scrolled' : ''}`}>

      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="container top-bar__content">
          <div className="contact-info">
            <a href="mailto:services@bravelionholdings.com" className="contact-item">
              <Mail size={12} strokeWidth={2.5} />
              <span>services@bravelionholdings.com</span>
            </a>
            <a href="tel:+2347081728260" className="contact-item">
              <Phone size={12} strokeWidth={2.5} />
              <span>+234 708 172 8260</span>
            </a>
          </div>
          <div className="top-bar__right">
            <span>Integrated Solutions. Measurable Results.</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <nav className="navbar" ref={dropdownRef}>
        <div className="container navbar__container">

          <Link to="/services" className="navbar__BraveLion">
            <img src="/BraveLion.png" alt="Bravelion Services" />
          </Link>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`navbar__menu-overlay ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          />

          <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li
                key={item.path}
                className="navbar__item"
                onMouseEnter={() => !menuOpen && setActiveDropdown(item.path)}
                onMouseLeave={() => !menuOpen && setActiveDropdown(null)}
              >

                {/* ── DESKTOP link + chevron ── */}
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'navbar__link active-link' : 'navbar__link'}
                  onClick={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={13}
                    className={`navbar__chevron ${activeDropdown === item.path ? 'open' : ''}`}
                  />
                </Link>

                {/* ── DESKTOP dropdown ── */}
                <div className={`navbar__dropdown ${activeDropdown === item.path ? 'active' : ''}`}>
                  <div className="navbar__dropdown-inner">
                    <p className="navbar__dropdown-heading">{item.label}</p>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className="navbar__dropdown-link"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <ArrowRight size={11} />
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── MOBILE accordion ── */}
                <div className="navbar__accordion">
                  <button
                    className={location.pathname === item.path ? 'navbar__accordion-toggle active-link' : 'navbar__accordion-toggle'}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.path ? null : item.path)
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={mobileExpanded === item.path ? 'open' : ''}
                    />
                  </button>
                  <ul className={`navbar__accordion-list ${mobileExpanded === item.path ? 'open' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} className="navbar__accordion-link">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </li>
            ))}

            {/* CTA */}
            <li className="nav-cta">
              <Link to="/contact">
                <span>Request a Profile</span>
                <ArrowRight size={14} />
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default ServicesNavbar;