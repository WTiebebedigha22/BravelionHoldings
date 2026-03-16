import React, { useEffect, useRef } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './HSE.css';

const programs = [
  { icon: '⛑',  title: 'Workplace Safety Fundamentals',     dur: '2 Days',  cert: true,  desc: 'Hazard identification, risk assessment matrices, PPE standards, and incident reporting procedures for all workplace environments.' },
  { icon: '🔥', title: 'Fire Safety & Emergency Response',  dur: '1 Day',   cert: true,  desc: 'Fire prevention protocols, extinguisher handling, evacuation planning, and emergency coordination for designated site wardens.' },
  { icon: '🩺', title: 'First Aid & Basic Life Support',    dur: '2 Days',  cert: true,  desc: 'CPR, wound management, fracture support, shock response, and first responder protocols certified to international standards.' },
  { icon: '🧠', title: 'Mental Health & Wellbeing at Work', dur: '1 Day',   cert: false, desc: 'Workplace stress management, burnout prevention, mental health first aid awareness, and building a psychologically safe team culture.' },
  { icon: '⚡', title: 'Electrical Safety in the Workplace',dur: '2 Days',  cert: true,  desc: 'Electrical hazard identification, lockout/tagout procedures, arc flash awareness, and safe work practices around live systems.' },
  { icon: '🏗',  title: 'Construction & Site Safety',        dur: '3 Days',  cert: true,  desc: 'Site safety management, working at heights, scaffolding standards, excavation safety, and contractor management compliance.' },
  { icon: '☢', title: 'Chemical Handling & COSHH',         dur: '2 Days',  cert: true,  desc: 'Safe handling of hazardous substances, COSHH assessment, storage regulations, spill response, and exposure prevention.' },
  { icon: '🌡', title: 'HSE Management Systems (ISO 45001)',dur: '5 Days',  cert: true,  desc: 'Full implementation pathway for ISO 45001 occupational health and safety management systems including audit and documentation.' },
];

const stats = [
  { num: '8', label: 'HSE Programs' },
  { num: '100%', label: 'Certified Facilitators' },
  { num: '1,000+', label: 'Professionals Trained' },
  { num: 'NEBOSH', label: 'Aligned Curriculum' },
];

const HSEPage = () => {
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

        <section className="tp-hero hse-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner">
            <div className="tp-hero__label">⛑ Health, Safety &amp; Environment</div>
            <h1 className="tp-hero__title">Safety is Not<br />Optional. <em>Train Right.</em></h1>
            <p className="tp-hero__sub">Eight certified HSE programs covering workplace safety, fire response, first aid, mental health, and compliance — built to international standards.</p>
            <div className="tp-hero__actions">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Book HSE Training</a>
              <a href="#hse-programs" className="tp-btn tp-btn--ghost">View Programs</a>
            </div>
          </div>
          <div className="hse-hero__badge-wrap">
            <div className="hse-hero__badge">
              <span className="hse-hero__badge-icon">🏆</span>
              <span className="hse-hero__badge-text">NEBOSH Aligned</span>
            </div>
            <div className="hse-hero__badge">
              <span className="hse-hero__badge-icon">✅</span>
              <span className="hse-hero__badge-text">Certified Facilitators</span>
            </div>
          </div>
        </section>

        <div className="tp-stats tp-reveal">
          {stats.map(s => (
            <div className="tp-stat" key={s.label}><span className="tp-stat__num">{s.num}</span><span className="tp-stat__label">{s.label}</span></div>
          ))}
        </div>

        {/* WHY HSE */}
        <div className="hse-why-bg tp-reveal">
          <div className="hse-why">
            <div className="hse-why__left">
              <div className="tp-bar" />
              <h2>Why HSE Training Matters for Your Organization</h2>
              <p>A single preventable incident can cost more than a year of comprehensive safety training. Investing in HSE compliance protects your people, protects your business, and meets your legal obligations.</p>
              <ul className="hse-why__list">
                {['Regulatory compliance (OSHA, NEBOSH, ISO 45001)', 'Reduced workplace incident rates and liability', 'Improved workforce morale and retention', 'Corporate HSE audit readiness'].map(item => (
                  <li key={item}><span className="hse-check">✦</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="hse-why__right">
              <div className="hse-stat-card">
                <span className="hse-stat-card__num">68%</span>
                <p className="hse-stat-card__text">of workplace incidents are preventable with proper safety training</p>
              </div>
              <div className="hse-stat-card hse-stat-card--green">
                <span className="hse-stat-card__num">4×</span>
                <p className="hse-stat-card__text">return on investment for every ₦1 spent on workplace safety programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMS */}
        <section className="tp-section" id="hse-programs">
          <div className="tp-section__header tp-reveal">
            <div className="tp-bar" /><h2>HSE Training Programs</h2>
            <p>Eight specialized programs. All delivered by certified HSE professionals.</p>
          </div>
          <div className="hse-programs tp-reveal">
            {programs.map((p, i) => (
              <div className="hse-card" key={i}>
                <div className="hse-card__top">
                  <span className="hse-card__icon">{p.icon}</span>
                  {p.cert && <span className="hse-card__cert">📜 Certified</span>}
                </div>
                <h3 className="hse-card__title">{p.title}</h3>
                <p className="hse-card__desc">{p.desc}</p>
                <div className="hse-card__foot">
                  <span className="hse-card__dur">⏱ {p.dur}</span>
                  <a href="/training/enroll" className="hse-card__cta">Book →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERY */}
        <div className="hse-delivery-bg tp-reveal">
          <div className="tp-section">
            <div className="tp-section__header tp-section__header--light">
              <div className="tp-bar" /><h2>Training Delivery Options</h2>
              <p>Flexible formats for individuals and corporate teams.</p>
            </div>
            <div className="tp-cards">
              {[
                { icon: '🏫', title: 'Classroom Training', body: 'Instructor-led sessions at our training centre. Full theory, practical drills, and assessment included.' },
                { icon: '🏭', title: 'On-site Training', body: 'We bring certified trainers to your workplace — minimizing disruption and maximizing relevance to your actual environment.' },
                { icon: '👥', title: 'Corporate Cohorts', body: 'Dedicated cohorts for your team with customized content aligned to your industry, site, and regulatory requirements.' },
              ].map(item => (
                <div className="tp-card tp-card--dark" key={item.title}>
                  <span className="tp-card__icon">{item.icon}</span>
                  <h4 className="tp-card__title">{item.title}</h4>
                  <p className="tp-card__body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tp-cta-strip tp-reveal">
          <div className="tp-cta-strip__inner">
            <span className="tp-cta-strip__eye">Book a Program</span>
            <h2>Protect Your Team.<br />Start Today.</h2>
            <p>Speak to our HSE training team about the right program for your organization.</p>
            <div className="tp-cta-strip__btns">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Book HSE Training</a>
              <a href="/contact" className="tp-btn tp-btn--ghost">Request a Quote</a>
            </div>
          </div>
        </div>
      </div>
      <TrainingFooter />
    </>
  );
};

export default HSEPage;