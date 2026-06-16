import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const servicesLinks = [
  { label: "Engineering", to: "/services/engineering" },
  { label: "Energy & Gas", to: "/services/energy" },
  { label: "Training",     to: "/services/training" },
  { label: "Operations",   to: "/services/business" },
];

const ServicesNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to) => location.pathname === to;

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>

      {/* ===== TOP BAR ===== */}
      <div className="topbar topbar--services">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a href="mailto:services@bravelionholdings.com" className="topbar__item">
              <Mail size={11} strokeWidth={2.5} />
              services@bravelionholdings.com
            </a>
            <a href="tel:+2347081728260" className="topbar__item">
              <Phone size={11} strokeWidth={2.5} />
              +234 708 172 8260
            </a>
          </div>
          <span className="topbar__tagline">
            Integrated Solutions. Measurable Results.
          </span>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="navbar navbar--services">
        <div className="container navbar__inner">

          <Link to="/services" className="navbar__logo" aria-label="Bravelion Services — Home">
            <img src="/BraveLion.png" alt="Bravelion Group" />
          </Link>
          <Link to="/" className="navbar__logo" aria-label="Bravelion Group — Home">
            <img src="/image.png" alt="Bravelion Group" />
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {servicesLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`navbar__link${isActive(link.to) ? " navbar__link--active" : ""}`}
                >
                  {link.label}
                  {isActive(link.to) && <span className="navbar__link-dot" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__end">
            <Link to="/contact" className="navbar__cta navbar__cta--services">
              Request Profile <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`navbar__toggle${menuOpen ? " navbar__toggle--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer__head">
          <Link to="/services" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <img src="/BraveLion.png" alt="Bravelion Group" />
          </Link>
          <button
            className="navbar__toggle navbar__toggle--open"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer__links">
          {servicesLinks.map((link, i) => (
            <li key={link.to} style={{ "--i": i }}>
              <Link
                to={link.to}
                className={`mobile-drawer__link${isActive(link.to) ? " mobile-drawer__link--active" : ""}`}
              >
                {link.label}
                <ArrowUpRight size={14} className="mobile-drawer__arrow" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__foot">
          <Link
            to="/contact"
            className="mobile-drawer__cta mobile-drawer__cta--services"
            onClick={() => setMenuOpen(false)}
          >
            Request Profile <ArrowUpRight size={14} />
          </Link>
          <Link to="/" className="mobile-drawer__group-link">
            ← Back to Bravelion Group
          </Link>
          <div className="mobile-drawer__contacts">
            <a href="mailto:services@bravelionholdings.com" className="topbar__item">
              <Mail size={12} /> services@bravelionholdings.com
            </a>
            <a href="tel:+2347081728260" className="topbar__item">
              <Phone size={12} /> +234 708 172 8260
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default ServicesNavbar;