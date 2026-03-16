import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Enroll.css';

const courseOptions = [
  'Digital Skills Fundamentals', 'Cybersecurity Awareness', 'Data Analysis & Visualization',
  'Electrical Installation Basics', 'Construction Site Management', 'Business Planning & Strategy',
  'Leadership & People Management', 'Personal Financial Planning', 'Investment Strategies for Beginners',
  'Workplace Safety Essentials', 'Mental Health & Wellness at Work', 'Digital Entrepreneurship & E-Commerce',
  'NEBOSH IGC Preparation', 'ISO 45001 Lead Implementer', 'IOSH Managing Safely',
  'First Aid & Basic Life Support', 'Fire Safety & Emergency Response', 'Corporate Training Program',
  'Other / Not Listed',
];

const EnrollPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', course: '', type: 'Individual', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('tp-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.tp-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) return;
    setSubmitted(true);
  };

  return (
    <>
      <TrainingNavbar />
      <div className="tp">

        <section className="tp-hero enroll-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner">
            <div className="tp-hero__label">📝 Enrollment</div>
            <h1 className="tp-hero__title">Start Your<br /><em>Training Journey.</em></h1>
            <p className="tp-hero__sub">Fill in your details below and our team will confirm your enrollment, course dates, and any preparation materials within 24 hours.</p>
          </div>
        </section>

        <section className="enroll-body">
          <div className="enroll-inner">

            {/* FORM SIDE */}
            <div className="enroll-form-wrap tp-reveal">
              {submitted ? (
                <div className="enroll-success">
                  <span className="enroll-success__icon">✅</span>
                  <h2>Enrollment Received!</h2>
                  <p>Thank you, <strong>{form.name}</strong>. Our team will confirm your enrollment for <strong>{form.course}</strong> within 24 hours.</p>
                  <p>A confirmation email will be sent to <strong>{form.email}</strong>.</p>
                  <a href="/training/schedule" className="tp-btn tp-btn--green" style={{ marginTop: '24px' }}>View Full Schedule</a>
                </div>
              ) : (
                <form className="enroll-form" onSubmit={handleSubmit}>
                  <h2 className="enroll-form__title">Enrollment Form</h2>
                  <p className="enroll-form__sub">All fields marked * are required.</p>

                  <div className="enroll-row">
                    <div className="enroll-field">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Chukwuemeka Obi" required />
                    </div>
                    <div className="enroll-field">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                    </div>
                  </div>

                  <div className="enroll-row">
                    <div className="enroll-field">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" />
                    </div>
                    <div className="enroll-field">
                      <label>Organization / Company</label>
                      <input type="text" name="org" value={form.org} onChange={handleChange} placeholder="Organization name (if applicable)" />
                    </div>
                  </div>

                  <div className="enroll-field enroll-field--full">
                    <label>Course / Program *</label>
                    <select name="course" value={form.course} onChange={handleChange} required>
                      <option value="">Select a course or program…</option>
                      {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="enroll-field enroll-field--full">
                    <label>Enrollment Type</label>
                    <div className="enroll-radio-group">
                      {['Individual', 'Corporate / Team'].map(t => (
                        <label key={t} className={`enroll-radio ${form.type === t ? 'enroll-radio--active' : ''}`}>
                          <input type="radio" name="type" value={t} checked={form.type === t} onChange={handleChange} />
                          <span>{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="enroll-field enroll-field--full">
                    <label>Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about any specific requirements, preferred dates, or questions…" />
                  </div>

                  <button type="submit" className="tp-btn tp-btn--green enroll-submit">
                    Submit Enrollment Request →
                  </button>
                  <p className="enroll-note">We'll respond within 24 hours to confirm your enrollment and share next steps.</p>
                </form>
              )}
            </div>

            {/* INFO SIDE */}
            <div className="enroll-info tp-reveal">
              <div className="enroll-info__card">
                <h3>What Happens Next?</h3>
                <ol className="enroll-steps">
                  {[
                    ['📬', 'We receive your form and review it within a few hours.'],
                    ['📞', 'Our team contacts you to confirm your course, dates, and payment.'],
                    ['💳', 'Payment is completed — we accept bank transfer, POS, and mobile money.'],
                    ['📦', 'You receive a confirmation email with course materials and venue/login details.'],
                    ['🎓', 'Attend your training and earn your certificate upon completion.'],
                  ].map(([icon, text], i) => (
                    <li key={i}>
                      <span className="enroll-steps__icon">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="enroll-info__contact">
                <h4>Need Help Choosing?</h4>
                <p>Speak to our training team directly — we'll match you to the right program.</p>
                <a href="mailto:training@bravelionholdings.com" className="enroll-contact-link">📧 training@bravelionholdings.com</a>
                <a href="tel:+2347081728260" className="enroll-contact-link">📞 +234 708 172 8260</a>
              </div>

              <div className="enroll-info__guarantee">
                <span className="enroll-info__guarantee-icon">🛡</span>
                <div>
                  <h4>Quality Guarantee</h4>
                  <p>All programs are delivered by certified professionals. If you are not satisfied after Day 1, we will find an alternative arrangement — no questions asked.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
      <TrainingFooter />
    </>
  );
};

export default EnrollPage;