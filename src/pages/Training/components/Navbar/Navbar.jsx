import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ArrowRight } from 'lucide-react';
import "./Navbar.css";

const TrainingNavbar = () => {
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
            <a href="mailto:training@bravelionholdings.com" className="contact-item">
              <Mail size={12} strokeWidth={2.5} />
              <span>training@bravelionholdings.com</span>
            </a>
            <a href="tel:+2347081728260" className="contact-item">
              <Phone size={12} strokeWidth={2.5} />
              <span>+234 708 172 8260</span>
            </a>
          </div>
          <div className="top-bar__right">
            <span>Empowering Professionals. Building Capacity.</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <nav className="navbar">
        <div className="container navbar__container">

          <Link to="/" className="navbar__BraveLion">
            <img src="/BraveLion.png" alt="Bravelion Training" />
          </Link>
          <Link to="/" className="navbar__BraveLion">
            <img src="/logo.png" alt="Bravelion Training" />
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
                to="/training/courses"
                className={location.pathname === "/training/courses" ? "active-link" : ""}
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/training/hse"
                className={location.pathname === "/training/hse" ? "active-link" : ""}
              >
                HSE Training
              </Link>
            </li>

            <li>
              <Link
                to="/training/certifications"
                className={location.pathname === "/training/certifications" ? "active-link" : ""}
              >
                Certifications
              </Link>
            </li>

            <li>
              <Link
                to="/training/corporate"
                className={location.pathname === "/training/corporate" ? "active-link" : ""}
              >
                Corporate Programs
              </Link>
            </li>

            <li>
              <Link
                to="/training/schedule"
                className={location.pathname === "/training/schedule" ? "active-link" : ""}
              >
                Schedule
              </Link>
            </li>

            <li className="nav-cta">
              <Link to="/training/enroll">
                <span>Enroll Now</span>
                <ArrowRight size={14} />
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TrainingNavbar;