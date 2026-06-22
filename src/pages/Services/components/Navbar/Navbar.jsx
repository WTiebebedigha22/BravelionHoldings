/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

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

    window.addEventListener("scroll", onScroll);

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

  const isActive = (to) => location.pathname === to;

  return (
    <header className={`header-wrapper ${scrolled ? "header--scrolled" : ""}`}>

      {/* TOP BAR */}

      <div className="top-bar">

        <div className="container top-bar__content">

          <div className="contact-info">

            <a
              href="mailto:services@bravelionholdings.com"
              className="contact-item"
            >
              <Mail size={12} />
              <span>services@bravelionholdings.com</span>
            </a>

            <a
              href="tel:+2347081728260"
              className="contact-item"
            >
              <Phone size={12} />
              <span>+234 708 172 8260</span>
            </a>

          </div>

          <div className="top-bar__right">

            <span>
              Integrated Solutions. Measurable Results.
            </span>

          </div>

        </div>

      </div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="container navbar__container">

          <div className="navbar__brand">

            <Link
              to="/services"
              className="navbar__logo"
            >
              <img
                src="/BraveLion.png"
                alt="Bravelion Services"
              />
            </Link>

            <Link
              to="/"
              className="navbar__logo navbar__logo--group"
            >
              <img
                src="/image.png"
                alt="Bravelion Group"
              />
            </Link>

          </div>

          {/* DESKTOP LINKS */}

          <ul className="navbar__links">

            {servicesLinks.map((link) => (

              <li key={link.to}>

                <Link
                  to={link.to}
                  className={isActive(link.to) ? "active-link" : ""}
                >
                  {link.label}
                </Link>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <div className="nav-cta">

            <Link to="/contact">

              Request Profile

              <ArrowUpRight size={14} />

            </Link>

          </div>

          {/* MOBILE TOGGLE */}

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <X size={20} /> : <Menu size={20} />}

          </button>

        </div>

      </nav>

      {/* OVERLAY */}

      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}

      <div
        className={`mobile-drawer ${menuOpen ? "active" : ""}`}
      >

        <div className="mobile-head">

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >

            <img
              src="/BraveLion.png"
              alt="Bravelion"
            />

          </Link>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(false)}
          >

            <X size={20} />

          </button>

        </div>

        <ul>

          {servicesLinks.map((link) => (

            <li key={link.to}>

              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={isActive(link.to) ? "active-link" : ""}
              >

                {link.label}

                <ArrowUpRight size={14} />

              </Link>

            </li>

          ))}

        </ul>

        <div className="mobile-footer">

          <Link
            to="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >

            Request Profile

          </Link>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >

            ← Back to Group

          </Link>

        </div>

      </div>

    </header>
  );
};

export default ServicesNavbar;