import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import "./Footer.css";

const EnergyFooter = () => {
  return (
    <footer className="estates-footer footer--energy">

      {/* ===== NEWSLETTER BANNER ===== */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h3>Stay Powered Up</h3>
            <p>Get the latest energy sector insights, training schedules, and project updates delivered to your inbox.</p>
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
            <Link to="/energy">
              <img src="/BraveLion.png" alt="Bravelion Energy" className="footer__logo" />
            </Link>
            <p className="footer__tagline">
              Power. Precision. Delivering energy and oil &amp; gas infrastructure
              services with compliance-led training, consultancy, and power
              distribution solutions.
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
              <li><Link to="/energy">Overview</Link></li>
              <li><Link to="/energy/oil-gas-consultancy">Oil & Gas Consultancy</Link></li>
              <li><Link to="/energy/energy-training">Energy Training</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* --- Capabilities --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Capabilities</h4>
            <ul className="footer__col-links">
              <li><Link to="/energy/oil-gas-consultancy">Oil & Gas Consultancy</Link></li>
              <li><Link to="/energy/energy-training">Energy Training</Link></li>
              <li><Link to="/energy/power-distribution-solar">Power Distribution & Solar</Link></li>
              <li><Link to="/services">Bravelion Services</Link></li>
              <li><Link to="/estates">Bravelion Estates</Link></li>
              <li><Link to="/training">Bravelion Training</Link></li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Head Office</h4>
            <ul className="footer__contact-list">
              <li>
                <Mail size={14} strokeWidth={2.5} />
                <a href="mailto:info@bravelionholdings.com">info@bravelionholdings.com</a>
              </li>
              <li>
                <Phone size={14} strokeWidth={2.5} />
                <a href="tel:+2347081728260">+234 708 172 8260</a>
              </li>
              <li>
                <MapPin size={14} strokeWidth={2.5} />
                <span>House T4034 Brains & Hammers Estate, 5th Avenue, Gwarimpa, Abuja, Nigeria.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <p>&copy; {new Date().getFullYear()} Bravelion Group. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default EnergyFooter;