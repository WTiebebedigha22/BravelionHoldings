import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ===== FOOTER TOP ===== */}
      <div className="footer-top">
        <div className="footer-container">

          {/* Column 1: Brand */}
          <div className="footer-column brand-col">
            <img src="/BraveLion.png" alt="Bravelion Group BraveLion" className="footer-BraveLion" />
            <img src="/logo.png" alt="Bravelion Group BraveLion" className="footer-BraveLion" />
            <p className="brand-pitch">
              Bravelion Group is a diversified enterprise operating across 
              technical services, real estate development, and professional 
              training. We build sustainable value through innovation, 
              excellence, and strategic partnerships.
            </p>
          </div>

          {/* Column 2: Our Companies */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Companies</h4>
            <ul className="footer-links">
              <li><Link to="/services">Bravelion Services Ltd</Link></li>
              <li><Link to="/estates">Bravelion Estates & Development Ltd</Link></li>
              <li><Link to="/training">Bravelion Training & Consulting Ltd</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4 className="footer-heading">Corporate</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Bravelion</Link></li>
              <li><Link to="/contact">Corporate Office</Link></li>
              <li><Link to="/training">Corporate Trainings</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column contact-col">
            <h4 className="footer-heading">Head Office</h4>
            <div className="contact-details">
              <div className="contact-line">
                <MapPin size={16} />
                <span>House T4034 Brains & Hammers Estate, 5th Avenue, Gwarimpa, Abuja, Nigeria.</span>
              </div>

              <a href="tel:+2347081728260" className="contact-line link">
                <Phone size={16} />
                <span>+234 708 172 8260</span>
              </a>

              <a href="mailto:info@bravelionholdings.com" className="contact-line link">
                <Mail size={16} />
                <span>info@bravelionholdings.com</span>
              </a>
            </div>

            <Link to="/contact" className="footer-cta-btn">
              Contact Corporate Office <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p className="copyright">
            &copy; {currentYear} Bravelion Group. All Rights Reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;