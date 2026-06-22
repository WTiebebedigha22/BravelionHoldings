/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import "./navbar.css";

const divisionGroups = [
  { label: "Bravelion Services", to: "/services" },
  { label: "Bravelion Estates & Development", to: "/estates" },
  { label: "Bravelion Training & Consulting", to: "/training" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const isDivisionActive = () =>
    divisionGroups.some((group) => isActive(group.to));

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>

      {/* ===== TOP BAR ===== */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a href="mailto:info@bravelionholdings.com" className="topbar__item">
              <Mail size={11} strokeWidth={2.5} />
              info@bravelionholdings.com
            </a>
            <a href="tel:+2347081728260" className="topbar__item">
              <Phone size={11} strokeWidth={2.5} />
              +234 708 172 8260
            </a>
          </div>
          <span className="topbar__tagline">
            Building Global Value Through Excellence.
          </span>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="navbar">
        <div className="container navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Bravelion Group — Home">
            <img src="/BraveLion.png" alt="Bravelion Group" />
          </Link>
          <Link to="/" className="navbar__logo" aria-label="Bravelion Group — Home">
            <img src="/image.png" alt="Bravelion Group" />
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
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

            {/* Divisions dropdown — desktop */}
            <li className="navbar__dropdown" ref={dropdownRef}>
              <button
                className={`navbar__dropdown-btn${isDivisionActive() ? " navbar__dropdown-btn--active" : ""}`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Divisions
                <ChevronDown
                  size={14}
                  className={`navbar__dropdown-icon${dropdownOpen ? " navbar__dropdown-icon--rotated" : ""}`}
                />
              </button>
              <div className={`navbar__dropdown-menu${dropdownOpen ? " navbar__dropdown-menu--open" : ""}`}>
                {divisionGroups.map((group) => (
                  <Link
                    key={group.to}
                    to={group.to}
                    className={`navbar__dropdown-item${isActive(group.to) ? " navbar__dropdown-item--active" : ""}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {group.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>

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

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
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
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer__links">
          {/* Regular nav links */}
          {navLinks.map((item, i) => (
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

          {/* Divisions — accordion row */}
          <li style={{ "--i": navLinks.length }}>
            <button
              className={`mobile-drawer__accordion-btn${isDivisionActive() ? " mobile-drawer__link--active" : ""}`}
              onClick={() => setMobileDropdownOpen((v) => !v)}
              aria-expanded={mobileDropdownOpen}
            >
              <span>DIVISIONS</span>
              <ChevronDown
                size={15}
                className={`mobile-drawer__accordion-icon${mobileDropdownOpen ? " mobile-drawer__accordion-icon--open" : ""}`}
              />
            </button>

            {/* Accordion panel */}
            <div
              className={`mobile-drawer__accordion-panel${mobileDropdownOpen ? " mobile-drawer__accordion-panel--open" : ""}`}
            >
              {divisionGroups.map((group) => (
                <Link
                  key={group.to}
                  to={group.to}
                  className={`mobile-drawer__sub-link${isActive(group.to) ? " mobile-drawer__sub-link--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {group.label}
                  <ArrowUpRight size={13} className="mobile-drawer__arrow" />
                </Link>
              ))}
            </div>
          </li>
        </ul>

        <div className="mobile-drawer__foot">
          <Link to="/contact" className="mobile-drawer__cta" onClick={() => setMenuOpen(false)}>
            Partner With Us <ArrowUpRight size={14} />
          </Link>
          <div className="mobile-drawer__contacts">
            <a href="mailto:info@bravelionholdings.com" className="topbar__item">
              <Mail size={12} /> info@bravelionholdings.com
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

export default Navbar;