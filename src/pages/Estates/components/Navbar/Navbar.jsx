import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ArrowRight } from 'lucide-react';
import "./navbar.css";

const EstatesNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header-wrapper ${scrolled ? 'header--scrolled' : ''}`}>

      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="container top-bar__content">
          <div className="contact-info">
            <a href="mailto:estates@bravelionholdings.com" className="contact-item">
              <Mail size={12} strokeWidth={2.5} />
              <span>estates@bravelionholdings.com</span>
            </a>
            <a href="tel:+2347081728260" className="contact-item">
              <Phone size={12} strokeWidth={2.5} />
              <span>+234 708 172 8260</span>
            </a>
          </div>

          <div className="top-bar__right">
            <span>Premium Real Estate & Development Across Africa.</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <nav className="navbar">
        <div className="container navbar__container">

          <Link to="/estates" className="navbar__BraveLion">
            <img src="/BraveLion.png" alt="Bravelion Estates" />
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
          ></div>

          <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>

            <li>
              <Link
                to="/estates/property"
                className={location.pathname === "/estates/property" ? "active-link" : ""}
              >
                Property
              </Link>
            </li>

            <li>
              <Link
                to="/estates/why-us"
                className={location.pathname === "/estates/why-us" ? "active-link" : ""}
              >
                Why Us
              </Link>
            </li>

            <li>
              <Link
                to="/estates/insights"
                className={location.pathname === "/estates/insights" ? "active-link" : ""}
              >
                Insights & Opinion
              </Link>
            </li>

            <li>
              <Link
                to="/estates/contact"
                className={location.pathname === "/estates/contact" ? "active-link" : ""}
              >
                Contact Us
              </Link>
            </li>

            <li className="nav-cta">
              <Link to="/estates/contact">
                <span>Find a Property</span>
                <ArrowRight size={14} />
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default EstatesNavbar;