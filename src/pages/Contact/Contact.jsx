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
            <p>House T4034 Brains & Hammers Estate, 5th Avenue, Gwarimpa</p>
            <p>Abuja, Nigeria.</p>
          </div>
          
          <div className="info-card">
            <h3>Regional Office</h3>
            <p>No. 1 Udoekpa Street Mbiabong Etoi (Shelter Afrique), Uyo</p>
            <p>Akwa Ibom, Nigeria.</p>
          </div>
          
          <div className="info-card">
            <h3>Field/Project Office</h3>
            <p>No.14, Essenem Street, Iwuoachang, Ibeno,</p>
            <p>Akwa Ibom, Nigeria.</p>
          </div>
          
          <div className="info-card">
            <h3>International Office</h3>
            <p>16 Twin Salis Strokes Strret, West Beach, Table view</p>
            <p>Cape Town, 7441 South Africa.</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@bravelionholdings.com</p>
            <p>training@bravelionholdings.com</p>
            <p>services@bravelionholdings.com</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <a href="tel:+2347081728260">+234 708 172 8260</a>
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
      +

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