/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ArrowRight } from 'lucide-react';
import "./Navbar.css";

// Flattened nav items for direct linking
const navItems = [
  { label: 'Engineering', path: '/services/engineering' },
  { label: 'Energy & Gas', path: '/services/energy' },
  { label: 'Training', path: '/services/training' },
  { label: 'Operations', path: '/services/business' },
];

const ServicesNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
      <nav className="navbar">
        <div className="container navbar__container">
          
          <div className="navbar__brand-group">
            <Link to="/Services" className="navbar__logo">
              <img src="/BraveLion.png" alt="Bravelion Services" />
            </Link>
            <Link to="/" className="navbar__logo">
              <img src="/logo.png" alt="Bravelion Home" />
            </Link>
          </div>

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
              <li key={item.path} className="navbar__item">
                <Link
                  to={item.path}
                  className={`navbar__link ${location.pathname === item.path ? 'active-link' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-cta">
              <Link to="/contact">
                <span>Request Profile</span>
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