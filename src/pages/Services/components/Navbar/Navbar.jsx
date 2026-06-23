/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import "../../../../components/common/Navbar/navbar.css";

const servicesLinks = [
  { label: "Engineering", to: "/services/engineering" },
  { label: "Energy & Gas", to: "/services/energy" },
  { label: "Training", to: "/services/training" },
  { label: "Operations", to: "/services/business" },
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
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      {/* ===== TOP BAR ===== */}
      <div className="topbar">
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
          <span className="topbar__tagline">Integrated Engineering & Industrial Solutions.</span>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Bravelion Group — Home">
            <img src="/BraveLion.png" alt="Bravelion Group" />
          </Link>

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

          <div className="navbar__cta-wrapper">
            <Link to="/contact" className="navbar__cta">
              Request Profile <ArrowUpRight size={13} />
            </Link>
          </div>

          <button
            className={`navbar__toggle${menuOpen ? " navbar__toggle--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}
        role="dialog"
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer__head">
          <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <img src="/BraveLion.png" alt="Bravelion Group" />
          </Link>
          <button
            className="navbar__toggle navbar__toggle--open"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="sr-only">Close menu</span>
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer__links">
          {servicesLinks.map((item, i) => (
            <li key={item.to} style={{ "--i": i }}>
              <Link
                to={item.to}
                className={`mobile-drawer__link${isActive(item.to) ? " mobile-drawer__link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={14} className="mobile-drawer__arrow" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__foot">
          <Link to="/contact" className="mobile-drawer__cta" onClick={() => setMenuOpen(false)}>
            Request Profile <ArrowUpRight size={14} />
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

