import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <span className="contact-badge">Get In Touch</span>
          <h1>
            Let’s Start a <br />
            <span className="highlight">Conversation</span>
          </h1>
          <p>
            Whether you're interested in our training programs, real estate services,
            consultancy, or partnerships — our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="contact-content">

        {/* LEFT SIDE - INFO */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Head Office</h3>
            <p>Plot 12 Business District</p>
            <p>Lagos, Nigeria</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@braveliongroup.com</p>
            <p>training@braveliongroup.com</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+234 800 000 0000</p>
            <p>+234 801 000 0000</p>
          </div>

          <div className="info-card">
            <h3>Working Hours</h3>
            <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
            <p>Saturday: 9:00 AM – 2:00 PM</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-wrapper">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <select>
                <option>Select Service</option>
                <option>Training Programs</option>
                <option>Real Estate</option>
                <option>Consultancy</option>
                <option>Engineering Services</option>
              </select>
            </div>

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit" className="contact-btn">
              Submit Inquiry
            </button>
          </form>
        </div>

      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="map-section">
        <iframe
          title="Bravelion Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.378...replace_with_real_map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* ================= CTA ================= */}
      <section className="contact-cta">
        <h3>Ready to Work With Bravelion?</h3>
        <p>Our team is committed to delivering excellence across every service line.</p>
        <a href="/" className="cta-home-btn">Return to Home</a>
      </section>

    </div>
  );
};

export default Contact;