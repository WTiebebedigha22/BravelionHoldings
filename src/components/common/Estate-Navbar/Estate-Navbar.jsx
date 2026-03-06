import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import "./Estate-Navbar.css";

const EstateNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header-wrapper ${scrolled ? "header--scrolled" : ""}`}>
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="container top-bar__content">
          <div className="contact-info">
            <a
              href="mailto:info@bravelionholdings.com"
              className="contact-item"
            >
              <Mail size={12} strokeWidth={2.5} />
              <span>info@bravelionholdings.com</span>
            </a>
            <a href="tel:+2347081728260" className="contact-item">
              <Phone size={12} strokeWidth={2.5} />
              <span>+234 708 172 8260</span>
            </a>
          </div>

          <div className="top-bar__right">
            <span>Building Africa’s Future Through Excellence.</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <nav className="navbar">
        <div className="container navbar__container">
          <Link to="/" className="navbar__BraveLion">
            <img src="/BraveLion.png" alt="Bravelion Group BraveLion" />
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
                to="/"
                className={location.pathname === "/estates" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "active-link" : ""
                }
              >
                Bravelion Services
              </Link>
            </li>

            <li>
              <Link
                to="/estates"
                className={
                  location.pathname === "/estates" ? "active-link" : ""
                }
              >
                Estates & Development
              </Link>
            </li>

            <li>
              <Link
                to="/training"
                className={
                  location.pathname === "/training" ? "active-link" : ""
                }
              >
                Training & Consulting
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact" ? "active-link" : ""
                }
              >
                Contact
              </Link>
            </li>

            <li className="nav-cta">
              <Link to="/contact">
                <span>Partner With Us</span>
                <ArrowRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default EstateNavbar;
