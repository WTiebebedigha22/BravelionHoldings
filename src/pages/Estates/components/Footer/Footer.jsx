import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import "./Footer.css";

const EstatesFooter = () => {
  return (
    <footer className="estates-footer">

      {/* ===== NEWSLETTER BANNER ===== */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h3>Stay Ahead of the Market</h3>
            <p>Get the latest property listings, investment insights, and market trends delivered to your inbox.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">
              <span>Subscribe</span>
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
            <Link to="/estates">
              <img src="/BraveLion.jpg" alt="Bravelion Estates" className="footer__logo" />
            </Link>
            <p className="footer__tagline">
              Premium Real Estate & Development Across Africa. Building wealth through strategic property investment.
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

          {/* --- Quick Links --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/estates/property">Property</Link></li>
              <li><Link to="/estates/why-us">Why Us</Link></li>
              <li><Link to="/estates/insights">Insights & Opinion</Link></li>
              <li><Link to="/estates/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* --- Property Types --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Property Types</h4>
            <ul className="footer__col-links">
              <li><Link to="/estates/property?type=residential">Residential</Link></li>
              <li><Link to="/estates/property?type=commercial">Commercial</Link></li>
              <li><Link to="/estates/property?type=land">Land & Plots</Link></li>
              <li><Link to="/estates/property?type=luxury">Luxury Homes</Link></li>
              <li><Link to="/estates/property?type=offplan">Off-Plan Projects</Link></li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <Mail size={14} strokeWidth={2.5} />
                <a href="mailto:estates@bravelionholdings.com">estates@bravelionholdings.com</a>
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
          <p>&copy; {new Date().getFullYear()} Bravelion Estates & Development. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/estates/privacy-policy">Privacy Policy</Link>
            <Link to="/estates/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default EstatesFooter;