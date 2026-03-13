import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import '../styles/training-shared.css';
import './Corporate.css';

const packages = [
  {
    tier: 'Starter',
    icon: '🌱',
    price: 'From ₦150,000',
    tagline: 'For small teams (up to 10)',
    features: ['1 course module (2–3 days)', 'Classroom or on-site delivery', 'Course materials included', 'Certificate of participation', 'Basic post-training report'],
    cta: 'Book Starter',
    highlight: false,
  },
  {
    tier: 'Professional',
    icon: '⚡',
    price: 'From ₦480,000',
    tagline: 'For growing teams (up to 25)',
    features: ['3 course modules (up to 2 weeks)', 'Classroom + on-site delivery', 'Full materials & workbooks', 'Industry-recognised certificates', 'Pre/post skills assessment', 'Dedicated training coordinator'],
    cta: 'Book Professional',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    icon: '🏢',
    price: 'Custom Pricing',
    tagline: 'For large organizations (25+)',
    features: ['Unlimited modules & cohorts', 'Fully bespoke curriculum', 'Regulatory compliance alignment', 'LMS integration & tracking', 'Quarterly impact reports', 'Dedicated account manager'],
    cta: 'Request Enterprise Quote',
    highlight: false,
  },
];

const sectors = [
  { icon: '⛽', name: 'Oil & Gas',           desc: 'HSE, technical skills, regulatory compliance, and field operations training.' },
  { icon: '🏥', name: 'Healthcare',           desc: 'Patient safety, wellness, first aid, and professional development programs.' },
  { icon: '🏗',  name: 'Construction',         desc: 'Site safety, supervisory skills, quality management, and project delivery.' },
  { icon: '🏦', name: 'Financial Services',   desc: 'Compliance, financial literacy, leadership, and customer service training.' },
  { icon: '📡', name: 'Telecom & Technology', desc: 'ICT skills, cybersecurity awareness, digital transformation programs.' },
  { icon: '🎓', name: 'Education',            desc: 'Educator capacity building, ICT integration, and institutional leadership.' },
];

const CorporatePage = () => {
  const [activeTier, setActiveTier] = useState(1);
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('tp-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.tp-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  return (
    <>
      <TrainingNavbar />
      <div className="tp">

        <section className="tp-hero corp-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner corp-hero__inner">
            <div className="corp-hero__left">
              <div className="tp-hero__label">🏢 Corporate Training</div>
              <h1 className="tp-hero__title">Train Your Team.<br /><em>Transform</em><br />Your Business.</h1>
              <p className="tp-hero__sub">Bespoke corporate training programs designed around your organizational needs, industry requirements, and team capacity goals.</p>
              <div className="tp-hero__actions">
                <a href="/training/enroll" className="tp-btn tp-btn--green">Request a Program</a>
                <a href="#corp-packages" className="tp-btn tp-btn--ghost">View Packages</a>
              </div>
            </div>
            <div className="corp-hero__right">
              {sectors.slice(0,4).map(s => (
                <div className="corp-hero__sector" key={s.name}>
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="tp-stats tp-reveal">
          {[['50+','Organizations Trained'],['100%','Bespoke Design'],['6','Industry Sectors'],['500+','Employees Upskilled']].map(([n,l]) => (
            <div className="tp-stat" key={l}><span className="tp-stat__num">{n}</span><span className="tp-stat__label">{l}</span></div>
          ))}
        </div>

        {/* WHY CORPORATE */}
        <section className="tp-section tp-reveal">
          <div className="tp-section__header">
            <div className="tp-bar" /><h2>Why Choose Corporate Training?</h2>
            <p>Investing in your team is the highest-ROI business decision you can make.</p>
          </div>
          <div className="tp-cards">
            {[
              { icon: '🎯', title: 'Bespoke Content',     body: 'Every program is tailored to your industry, your processes, and your team specific skill gaps — not generic off-the-shelf content.' },
              { icon: '📍', title: 'On-Site Delivery',    body: 'We come to you. Training at your workplace maximizes attendance, relevance, and immediate applicability of new skills.' },
              { icon: '📊', title: 'Measurable Impact',   body: 'Pre and post-training assessments with detailed reports showing skills improvement and ROI for your investment.' },
              { icon: '🤝', title: 'Dedicated Support',   body: 'A dedicated training coordinator manages your program end-to-end — scheduling, logistics, materials, and follow-up.' },
              { icon: '📜', title: 'Compliant Outcomes',  body: 'Programs aligned with regulatory requirements, industry standards, and certification bodies relevant to your sector.' },
              { icon: '🔄', title: 'Ongoing Partnership', body: 'We build long-term training partnerships — quarterly programs, refresher courses, and annual development plans.' },
            ].map(item => (
              <div className="tp-card" key={item.title}>
                <span className="tp-card__icon">{item.icon}</span>
                <h4 className="tp-card__title">{item.title}</h4>
                <p className="tp-card__body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <div className="corp-packages-bg" id="corp-packages">
          <div className="corp-packages">
            <div className="corp-packages__header tp-reveal">
              <div className="tp-bar" /><h2>Training Packages</h2>
              <p>Flexible packages for teams of all sizes. Custom pricing available for all options.</p>
            </div>
            <div className="corp-tiers tp-reveal">
              {packages.map((pkg, i) => (
                <div
                  key={pkg.tier}
                  className={`corp-tier ${pkg.highlight ? 'corp-tier--featured' : ''} ${activeTier === i ? 'corp-tier--active' : ''}`}
                  onClick={() => setActiveTier(i)}
                >
                  {pkg.highlight && <span className="corp-tier__badge">Most Popular</span>}
                  <span className="corp-tier__icon">{pkg.icon}</span>
                  <h3 className="corp-tier__name">{pkg.tier}</h3>
                  <p className="corp-tier__tagline">{pkg.tagline}</p>
                  <p className="corp-tier__price">{pkg.price}</p>
                  <ul className="corp-tier__features">
                    {pkg.features.map(f => (
                      <li key={f}><span className="hse-check">✦</span><span>{f}</span></li>
                    ))}
                  </ul>
                  <a href="/training/enroll" className={`tp-btn ${pkg.highlight ? 'tp-btn--green' : 'tp-btn--outline'}`} style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTORS */}
        <section className="tp-section tp-reveal">
          <div className="tp-section__header">
            <div className="tp-bar" /><h2>Industries We Serve</h2>
            <p>Sector-specific programs for the unique demands of each industry.</p>
          </div>
          <div className="corp-sectors">
            {sectors.map(s => (
              <div className="corp-sector-card" key={s.name}>
                <span className="corp-sector-card__icon">{s.icon}</span>
                <div>
                  <h4 className="corp-sector-card__name">{s.name}</h4>
                  <p className="corp-sector-card__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="tp-cta-strip tp-reveal">
          <div className="tp-cta-strip__inner">
            <span className="tp-cta-strip__eye">Let's Talk</span>
            <h2>Build a Program for<br />Your Organization.</h2>
            <p>Tell us about your team, your industry, and your training goals — we'll design the right program.</p>
            <div className="tp-cta-strip__btns">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Request a Corporate Program</a>
              <a href="/contact" className="tp-btn tp-btn--ghost">Speak to Our Team</a>
            </div>
          </div>
        </div>
      </div>
      <TrainingFooter />
    </>
  );
};

export default CorporatePage;