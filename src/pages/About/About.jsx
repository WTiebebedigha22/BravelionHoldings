import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            Building Sustainable Enterprises <br />
            <span className="text-highlight">Across Africa.</span>
          </h1>
          <p>
            Bravelion Group is a diversified holding company operating across
            technical services, real estate development, and professional training.
            We create long-term value through innovation, operational excellence,
            and disciplined leadership.
          </p>
        </div>
      </section>

      {/* ===== GROUP OVERVIEW ===== */}
      <section className="about-overview">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Established with a vision to drive structural growth across
              emerging sectors, Bravelion Group operates as a strategic
              parent company overseeing specialized subsidiaries.
            </p>
            <p>
              Our integrated model allows each division to operate with
              focused expertise while benefiting from shared governance,
              strategic direction, and financial strength.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>3</h3>
              <span>Specialized Divisions</span>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <span>Independent Ownership</span>
            </div>
            <div className="stat-box">
              <h3>Long-Term</h3>
              <span>Growth Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="vision-section">
        <div className="container vision-grid">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To build a globally respected brand that delivers practical, 
              high-quality solutions across diverse industries, improving lives and creating enduring value.
            </p>
          </div>

          <div className="vision-card">
            <h3>Our Mission</h3>
            <p>
              We identify real needs and deliver reliable, well-executed solutions. 
              Through expertise, innovation, and integrity, we provide measurable results our clients can consistently trust.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DIVISIONS ===== */}
      <section className="divisions-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Divisions</h2>
            <p>Three strategic pillars driving our growth.</p>
          </div>

          <div className="division-grid">

            <div className="division-card">
              <h3>Bravelion Services Ltd</h3>
              <p>
                Providing professional operational support, procurement,
                and enterprise technical solutions.
              </p>
              <Link to="/services">
                Explore Division <ArrowRight size={16} />
              </Link>
            </div>

            <div className="division-card">
              <h3>Bravelion Estates & Development Ltd</h3>
              <p>
                Developing premium residential and commercial real estate
                projects designed for long-term value.
              </p>
              <Link to="/estates">
                Explore Division <ArrowRight size={16} />
              </Link>
            </div>

            <div className="division-card">
              <h3>Bravelion Training & Consulting Ltd</h3>
              <p>
                Delivering executive education, workforce development,
                and strategic advisory services.
              </p>
              <Link to="/training">
                Explore Division <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP MESSAGE ===== */}
      <section className="leadership-section">
        <div className="container leadership-content">
          <h2>Leadership Commitment</h2>
          <p>
            At Bravelion Group, leadership is grounded in accountability,
            long-term thinking, and disciplined execution. We believe
            sustainable success is built through integrity and strategic clarity.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container cta-content">
          <h2>Partner With Bravelion Group</h2>
          <p>
            Let’s collaborate to build scalable, future-focused enterprises.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Our Team
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;