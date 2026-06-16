/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
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

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@bravelionholdings.com";

const EnrollPage = () => {
  const [form, setForm] = useState({
    name: '', email: '', org: '', course: '', type: 'Individual', message: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) return;

    setError(false);
    setSubmitting(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // Inject the phone number from controlled state into FormData
    formData.set('phone', phoneNumber || '');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="cert-page">
      <TrainingNavbar />

      {/* HERO SECTION */}
      <section className="cert-hero enroll-hero">
        <div className="cert-container">
          <div className="cert-hero__inner cert-reveal">
            <span className="cert-eyebrow light">Admissions</span>
            <h1>Begin Your <br /> <span className="cert-highlight">Transformation.</span></h1>
            <p className="cert-hero__sub">
              Submit your enrollment request below. Our registrar team will curate your
              onboarding experience and confirm your seat within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="enroll-section">
        <div className="cert-container">
          <div className="enroll-grid">

            {/* FORM SIDE */}
            <div className="enroll-form-card cert-reveal">
              {submitted ? (
                <div className="enroll-success-state">
                  <div className="success-icon">✓</div>
                  <h2 className="cert-card__title">Request Received</h2>
                  <p>
                    Thank you, <strong>{form.name}</strong>. A concierge from our training
                    department will reach out to <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="cert-btn-outline-gold"
                    style={{ marginTop: '2rem' }}
                  >
                    New Enrollment
                  </button>
                </div>
              ) : (
                <form className="cert-enroll-form" onSubmit={handleSubmit} noValidate>

                  {/* Hidden FormSubmit config */}
                  <input type="hidden" name="_subject" value="New enrollment application — Bravelion Training" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_cc" value="training@bravelionholdings.com" />

                  <span className="cert-eyebrow dark">Application Form</span>
                  <h2 className="form-header-title">Candidate Details</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} placeholder="Jack Aitken" required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="email@example.com" required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <PhoneInput
                        defaultCountry="NG"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        placeholder="708 172 8260"
                        international
                        withCountryCallingCode
                      />
                    </div>
                    <div className="form-group">
                      <label>Organization</label>
                      <input
                        type="text" name="org" value={form.org}
                        onChange={handleChange} placeholder="Company Name" />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label>Course Selection *</label>
                    <select name="course" value={form.course} onChange={handleChange} required>
                      <option value="">Select a program...</option>
                      {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Enrollment Type</label>
                    <input type="hidden" name="enrollment_type" value={form.type} />
                    <div className="cert-filters" style={{ marginBottom: 0 }}>
                      {['Individual', 'Corporate / Team'].map(t => (
                        <button
                          type="button"
                          key={t}
                          className={`cert-filter ${form.type === t ? 'cert-filter--active' : ''}`}
                          onClick={() => setForm(f => ({ ...f, type: t }))}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label>Additional Inquiries</label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} rows={4}
                      placeholder="Specific requirements or questions..."
                    />
                  </div>

                  {error && (
                    <p className="form-error">
                      Something went wrong sending your application. Please try again, or reach
                      us directly at{' '}
                      <a href="mailto:training@bravelionholdings.com">
                        training@bravelionholdings.com
                      </a>.
                    </p>
                  )}

                  <button type="submit" className="cert-btn-primary" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>

            {/* INFO SIDE */}
            <div className="enroll-sidebar cert-reveal">
              <div className="process-card">
                <span className="cert-eyebrow light">The Onboarding</span>
                <h3>Enrollment Lifecycle</h3>
                <div className="process-steps">
                  {[
                    { i: '01', t: 'Review',       d: 'Registrar validates your application and checks seat availability.' },
                    { i: '02', t: 'Consultation', d: 'Brief call to finalize dates, logistics, and payment methods.' },
                    { i: '03', t: 'Onboarding',   d: 'Receive your welcome kit, course materials, and login access.' },
                  ].map(step => (
                    <div className="process-step" key={step.i}>
                      <span className="step-num">{step.i}</span>
                      <div className="step-text">
                        <h4>{step.t}</h4>
                        <p>{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="support-card">
                <h4>Direct Registrar Access</h4>
                <p>For immediate assistance with team bookings:</p>
                <a href="tel:+2347081728260" className="cert-link-arrow">
                  Call +234 708 172 8260 →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <TrainingFooter />
    </div>
  );
};

export default EnrollPage;