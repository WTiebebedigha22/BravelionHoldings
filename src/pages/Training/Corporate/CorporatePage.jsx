import React, { useEffect, useRef } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Corporate.css';

const packages = [
  { tier: 'Starter', icon: '🌱', code: 'CP-10', price: 'From ₦150,000', tagline: 'Small team excellence (up to 10)', features: ['1 course module (2–3 days)', 'On-site delivery', 'Course materials included', 'Certificate of participation', 'Basic post-training report'] },
  { tier: 'Professional', icon: '⚡', code: 'CP-25', price: 'From ₦480,000', tagline: 'Strategic growth (up to 25)', features: ['3 course modules', 'Blended Learning options', 'Full materials & workbooks', 'Industry certificates', 'Pre/post skills assessment', 'Dedicated coordinator'] },
  { tier: 'Enterprise', icon: '🏢', code: 'CP-MAX', price: 'Custom Quote', tagline: 'Full organizational scale (25+)', features: ['Unlimited modules & cohorts', 'Bespoke curriculum', 'LMS integration & tracking', 'Quarterly impact reports', 'Dedicated account manager'] },
];

const CorporatePage = () => {
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  return (
    <div className="cert-page">
      <TrainingNavbar />

      {/* HERO SECTION */}
      <section className="cert-hero">
        <div className="cert-container">
          <div className="cert-hero__inner cert-reveal">
            <span className="cert-eyebrow light">Strategic Human Capital</span>
            <h1>Architecting <br /> High-Performance <span className="cert-highlight">Workforces</span></h1>
            <p className="cert-hero__sub">
              Bespoke corporate training programs designed around your organizational needs, industry requirements, and team capacity goals.
            </p>
            <div className="cert-hero__actions">
              <a href="/enroll" className="cert-btn-primary">Request Briefing</a>
              <a href="#packages" className="cert-btn-outline">View Packages</a>
            </div>
          </div>
        </div>

        <div className="cert-hero__strip">
          <div className="cert-container cert-hero__strip-inner">
            <span className="cert-hero__strip-label">Sectors:</span>
            {['Oil & Gas', 'Fintech', 'Healthcare', 'Construction', 'Telecoms'].map(s => (
              <span key={s} className="cert-code-badge">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="cert-stats cert-reveal">
        <div className="cert-container">
          <div className="cert-stats__grid">
            <div className="cert-stat">
              <span className="cert-stat__value">50+</span>
              <span className="cert-stat__label">Enterprises Trained</span>
            </div>
            <div className="cert-stat__divider"></div>
            <div className="cert-stat">
              <span className="cert-stat__value">100%</span>
              <span className="cert-stat__label">Bespoke Design</span>
            </div>
            <div className="cert-stat__divider"></div>
            <div className="cert-stat">
              <span className="cert-stat__value">12k+</span>
              <span className="cert-stat__label">Professionals Upskilled</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE METHODOLOGY (Pathway) */}
      <section className="cert-pathway">
        <div className="cert-container">
          <div className="cert-pathway__header cert-reveal">
            <div>
              <span className="cert-eyebrow light">The Roadmap</span>
              <h2>Our Strategic Methodology</h2>
              <p>A proven lifecycle for sustainable skill development.</p>
            </div>
            <a href="/consultation" className="cert-link-arrow">Consult an Architect →</a>
          </div>

          <div className="cert-steps">
            {[
              { n: '01', t: 'Diagnostic', d: 'Comprehensive analysis of skill gaps and organizational goals.' },
              { n: '02', t: 'Design', d: 'Custom curriculum architecture tailored to your specific sector.' },
              { n: '03', t: 'Delivery', d: 'Expert-led sessions at your facility or our global hubs.' },
              { n: '04', t: 'Impact', d: 'Data-driven reporting showing ROI and performance shifts.' }
            ].map(step => (
              <div className="cert-step cert-reveal" key={step.n}>
                <div className="cert-step__number">{step.n}</div>
                <h4>{step.t}</h4>
                <p>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES (Cert List Style) */}
      <section className="cert-list-section" id="packages">
        <div className="cert-container">
          <div className="cert-list-header cert-reveal">
            <span className="cert-eyebrow dark">Training Solutions</span>
            <h2>Engagement Tiers</h2>
            <p>Flexible packages scalable to your organization's current headcount.</p>
          </div>

          <div className="cert-grid cert-reveal">
            {packages.map((pkg) => (
              <div className="cert-card" key={pkg.tier}>
                <div className="cert-card__top">
                  <span className="cert-card__icon">{pkg.icon}</span>
                  <span className="cert-card__code">{pkg.code}</span>
                </div>
                <span className="cert-card__area">Corporate Program</span>
                <h3 className="cert-card__title">{pkg.tier} Tier</h3>
                <p className="cert-card__desc">{pkg.tagline}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {pkg.features.slice(0, 3).map(f => (
                        <li key={f} style={{ fontSize: '0.75rem', color: '#5a6478', marginBottom: '4px' }}>• {f}</li>
                    ))}
                </ul>
                <a href="/enroll" className="cert-card__cta">Book Program →</a>
              </div>
            ))}
            <div className="cert-card" style={{ background: 'var(--navy)', color: '#fff' }}>
                <span className="cert-card__area" style={{ color: 'var(--goldenrod)' }}>Custom</span>
                <h3 className="cert-card__title" style={{ color: '#fff' }}>Bespoke Lab</h3>
                <p className="cert-card__desc" style={{ color: 'rgba(255,255,255,0.5)' }}>Need something entirely unique? Let's build it from scratch.</p>
                <a href="/contact" className="cert-link-arrow" style={{ color: 'var(--goldenrod)', borderColor: 'var(--goldenrod)' }}>Inquire Now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cert-cta">
        <div className="cert-container">
          <div className="cert-cta__inner cert-reveal">
            <div className="cert-cta__text">
              <span className="cert-eyebrow light">Elevate Your Team</span>
              <h2>Ready to Transform Your <br /> Organizational Performance?</h2>
              <p>Join the ranks of high-performing Nigerian enterprises investing in their greatest asset.</p>
            </div>
            <div className="cert-cta__actions">
              <a href="/enroll" className="cert-btn-primary">Secure a Proposal</a>
              <a href="/contact" className="cert-btn-outline">Speak to an Architect</a>
            </div>
          </div>
        </div>
      </section>

      <TrainingFooter />
    </div>
  );
};

export default CorporatePage;