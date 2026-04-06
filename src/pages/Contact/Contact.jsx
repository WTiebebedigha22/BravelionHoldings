import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import "./Contact.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const offices = [
  {
    label: "Head Office",
    city: "Abuja",
    address: "House T4034 Brains & Hammers Estate, 5th Avenue, Gwarimpa",
    country: "Abuja, Nigeria",
  },
  {
    label: "Regional Office",
    city: "Uyo",
    address: "No. 1 Udoekpa Street Mbiabong Etoi (Shelter Afrique), Uyo",
    country: "Akwa Ibom, Nigeria",
  },
  {
    label: "Field / Project Office",
    city: "Ibeno",
    address: "No. 14, Essenem Street, Iwuoachang, Ibeno",
    country: "Akwa Ibom, Nigeria",
  },
  {
    label: "International Office",
    city: "Cape Town",
    address: "16 Twin Salis Strokes Street, West Beach, Table View",
    country: "Cape Town 7441, South Africa",
  },
];

const contacts = [
  {
    icon: Mail,
    label: "Email",
    lines: [
      { text: "info@bravelionholdings.com",     href: "mailto:info@bravelionholdings.com" },
      { text: "training@bravelionholdings.com",  href: "mailto:training@bravelionholdings.com" },
      { text: "services@bravelionholdings.com",  href: "mailto:services@bravelionholdings.com" },
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "+234 708 172 8260", href: "tel:+2347081728260" },
    ],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: [
      { text: "Mon – Fri: 8:00 AM – 5:00 PM" },
      { text: "Saturday: 9:00 AM – 2:00 PM" },
    ],
  },
];

const services = [
  "Training Programs",
  "Real Estate",
  "Consultancy",
  "Engineering Services",
  "NDT & Inspection",
  "Partnership / Investment",
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <p className="contact-eyebrow">Contact Bravelion Group</p>
          <h1>
            Let's Start a<br />
            <span className="contact-highlight">Conversation.</span>
          </h1>
          <p className="contact-hero-sub">
            Whether you're exploring training programmes, real estate opportunities,
            technical services, or a strategic partnership — our team is ready.
          </p>
          <div className="contact-hero-offices">
            {offices.map((o) => (
              <div className="hero-office-chip" key={o.city}>
                <MapPin size={11} />
                <span>{o.city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN GRID ===== */}
      <section className="contact-main">
        <div className="container contact-grid">

          {/* LEFT — INFO */}
          <aside className="contact-sidebar">

            <div className="sidebar-block">
              <span className="sidebar-eyebrow">Our Offices</span>
              <div className="offices-list">
                {offices.map((o) => (
                  <div className="office-item" key={o.city}>
                    <div className="office-dot" />
                    <div>
                      <span className="office-label">{o.label} — {o.city}</span>
                      <p className="office-address">{o.address}</p>
                      <p className="office-country">{o.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-divider" />

            <div className="sidebar-block">
              <span className="sidebar-eyebrow">Direct Contact</span>
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <div className="contact-detail" key={c.label}>
                    <div className="contact-detail-icon">
                      <Icon size={14} />
                    </div>
                    <div>
                      <span className="contact-detail-label">{c.label}</span>
                      {c.lines.map((line) =>
                        line.href ? (
                          <a key={line.text} href={line.href} className="contact-detail-value link">
                            {line.text}
                          </a>
                        ) : (
                          <p key={line.text} className="contact-detail-value">{line.text}</p>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </aside>

          {/* RIGHT — FORM */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Received</h3>
                <p>
                  Thank you for reaching out. A member of our team will
                  respond to your inquiry within one business day.
                </p>
                <button className="btn-reset" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <span className="sidebar-eyebrow">Inquiry Form</span>
                  <h2>Send Us a Message</h2>
                  <p>Fill in the details below and we'll get back to you promptly.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" placeholder="e.g. Adaeze Okafor" required />
                    </div>
                    <div className="form-field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+234 000 000 0000" />
                    </div>
                    <div className="form-field">
                      <label>Service of Interest</label>
                      <select>
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>Your Location</label>
                      <input type="text" placeholder="City, Country" />
                    </div>
                    <div className="form-field">
                      <label>Engagement Type</label>
                      <select>
                        <option value="">Select locale</option>
                        <option>National</option>
                        <option>International</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field full-width">
                    <label>Message <span>*</span></label>
                    <textarea rows="6" placeholder="Tell us about your project, requirement, or inquiry..." required />
                  </div>

                  <button type="submit" className="contact-submit">
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="contact-cta">
        <div className="container contact-cta-inner">
          <div className="cta-text">
            <span className="sidebar-eyebrow light">What's Next</span>
            <h2>Ready to Work With Bravelion?</h2>
            <p>Our team is committed to delivering excellence across every service line.</p>
          </div>
          <div className="cta-links">
            <Link to="/" className="btn-primary-gold">
              Return to Home <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn-ghost-light">
              Explore Services <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;