import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import "./Footer.css";

const TrainingFooter = () => {
  return (
    <footer className="training-footer">

      {/* ===== NEWSLETTER BANNER ===== */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h3>Stay Ahead in Your Industry</h3>
            <p>Get notified about upcoming training programs, certification deadlines, and industry insights.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">
              <span>Get Updates</span>
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
            <Link to="/training">
              <img src="/BraveLion.png" alt="Bravelion Training" className="footer__logo" />
            </Link>
            <p className="footer__tagline">
              Industry-driven training and certification programs designed to equip professionals with practical skills across safety, project management, and technical operations.
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

          {/* --- Training Programs --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Programs</h4>
            <ul className="footer__col-links">
              <li><Link to="/training/courses">All Courses</Link></li>
              <li><Link to="/training/hse">HSE Training</Link></li>
              <li><Link to="/training/certifications">Certifications</Link></li>
              <li><Link to="/training/corporate">Corporate Programs</Link></li>
              <li><Link to="/training/schedule">Training Schedule</Link></li>
            </ul>
          </div>

          {/* --- Quick Links --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/training/enroll">Enroll Now</Link></li>
              <li><Link to="/training/verify">Verify Certificate</Link></li>
              <li><Link to="/about">About Bravelion</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <Mail size={14} strokeWidth={2.5} />
                <a href="mailto:training@bravelionholdings.com">training@bravelionholdings.com</a>
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
          <p>&copy; {new Date().getFullYear()} Bravelion Training & Consulting. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/training/privacy-policy">Privacy Policy</Link>
            <Link to="/training/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default TrainingFooter;