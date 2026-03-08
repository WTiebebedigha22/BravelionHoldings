import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ArrowRight } from 'lucide-react';
import "./Navbar.css";

const ServicesNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
          ></div>

          <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>

            <li>
              <Link
                to="/services/real-estate"
                className={location.pathname === "/src/pages/Estates/Estates.jsx" ? "active-link" : ""}
              >
                Real Estate
              </Link>
            </li>

            <li>
              <Link
                to="/services/training"
                className={location.pathname === "/src/pages/Training/Training.jsx" ? "active-link" : ""}
              >
                Training & Certification
              </Link>
            </li>

            <li>
              <Link
                to="/services/consultancy"
                className={location.pathname === "/services/consultancy" ? "active-link" : ""}
              >
                Consultancy
              </Link>
            </li>

            <li>
              <Link
                to="/services/facility-management"
                className={location.pathname === "/services/facility-management" ? "active-link" : ""}
              >
                Facility Management
              </Link>
            </li>

            <li>
              <Link
                to="/services/advisory"
                className={location.pathname === "/services/advisory" ? "active-link" : ""}
              >
                Investment Advisory
              </Link>
            </li>

            <li className="nav-cta">
              <Link to="/services/contact">
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