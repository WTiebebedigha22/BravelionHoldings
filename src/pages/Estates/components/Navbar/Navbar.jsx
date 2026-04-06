import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowUpRight, Building2 } from "lucide-react";
import "./Navbar.css";

const estatesLinks = [
  { label: "Property", to: "/estates/property" },
  { label: "Why Us", to: "/estates/why" },
  { label: "Insights & Opinion", to: "/estates/insights" },
  { label: "Contact Us", to: "/contact" },
];

const EstatesNavbar = () => {
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
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      {/* ===== TOP BAR ===== */}
      <div className="topbar topbar--estates">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a
              href="mailto:estates@bravelionholdings.com"
              className="topbar__item"
            >
              <Mail size={11} strokeWidth={2.5} />
              estates@bravelionholdings.com
            </a>
            <a href="tel:+2347081728260" className="topbar__item">
              <Phone size={11} strokeWidth={2.5} />
              +234 708 172 8260
            </a>
          </div>
          <span className="topbar__tagline">
            Premium Real Estate & Development Across Africa.
          </span>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="navbar navbar--estates">
        <div className="container navbar__inner">
          {/* Logo + division badge */}
          <Link
            to="/estates"
            className="navbar__logo"
            aria-label="Bravelion Estates — Home"
          >
            <img src="/BraveLion.png" alt="Bravelion Group" />
            <div className="navbar__division-badge">
              <span className="badge__divider" />
              <span className="badge__name">Estates &amp; Development</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {estatesLinks.map((link) => (
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

          {/* Back to Group + CTA */}
          <div className="navbar__end">
            <Link to="/" className="navbar__group-link">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Group
            </Link>
            <Link
              to="/estates/contact"
              className="navbar__cta navbar__cta--estates"
            >
              Find a Property <ArrowUpRight size={13} />
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
          <Link
            to="/estates"
            className="navbar__logo"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/BraveLion.png" alt="Bravelion Group" />
            <span className="navbar__division-badge">
              <Building2 size={10} /> Estates
            </span>
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
          {estatesLinks.map((link, i) => (
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
            to="/estates/contact"
            className="mobile-drawer__cta mobile-drawer__cta--estates"
            onClick={() => setMenuOpen(false)}
          >
            Find a Property <ArrowUpRight size={14} />
          </Link>
          <Link to="/" className="mobile-drawer__group-link">
            ← Back to Bravelion Group
          </Link>
          <div className="mobile-drawer__contacts">
            <a
              href="mailto:estates@bravelionholdings.com"
              className="topbar__item"
            >
              <Mail size={12} /> estates@bravelionholdings.com
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

export default EstatesNavbar;
