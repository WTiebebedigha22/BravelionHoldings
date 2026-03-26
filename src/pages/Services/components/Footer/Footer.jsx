import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import "./Footer.css";

const ServicesFooter = () => {
  return (
    <footer className="services-footer">

      {/* ===== NEWSLETTER BANNER ===== */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h3>Get Our Company Profile</h3>
            <p>Stay updated with our latest service offerings, training programs, and industry insights.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">
              <span>Request Now</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* --- Brand Column --- */}
          <div className="footer__brand">
            <Link to="/services">
              <img src="/BraveLion.jpg" alt="Bravelion Services" className="footer__logo" />
            </Link>
            <p className="footer__tagline">
              Delivering real estate development, professional training, and strategic consultancy solutions that drive growth and long-term value.
            </p>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* --- Our Services --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__col-links">
              <li><Link to="/services/real-estate">Real Estate Development</Link></li>
              <li><Link to="/services/advisory">Investment Advisory</Link></li>
              <li><Link to="/services/training">Training & Certification</Link></li>
              <li><Link to="/services/facility-management">Facility Management</Link></li>
              <li><Link to="/services/consultancy">Business Consultancy</Link></li>
            </ul>
          </div>

          {/* --- Quick Links --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/services/advisory">Investment Advisory</Link></li>
              <li><Link to="/services/contact">Request a Profile</Link></li>
              <li><Link to="/about">About Bravelion</Link></li>
              <li><Link to="/estates">Estates & Development</Link></li>
              <li><Link to="/training">Training Division</Link></li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <Mail size={14} strokeWidth={2.5} />
                <a href="mailto:services@bravelionholdings.com">services@bravelionholdings.com</a>
              </li>
              <li>
                <Phone size={14} strokeWidth={2.5} />
                <a href="tel:+2347081728260">+234 708 172 8260</a>
              </li>
              <li>
                <MapPin size={14} strokeWidth={2.5} />
                <span>No. 1 Udoekpa Street Mbiabong Etoi (Shelter Afrique), Uyo, Akwa Ibom, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <p>&copy; {new Date().getFullYear()} Bravelion Holdings. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/services/privacy-policy">Privacy Policy</Link>
            <Link to="/services/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default ServicesFooter;