import React, { useEffect, useRef, useState } from 'react';
import ServicesNavbar from '../components/Navbar/Navbar';
import ServicesFooter from '../components/Footer/Footer';
import './Energy.css';

const services = [
  {
    id: 'B',
    anchor: 'oilgas',
    icon: '⛽',
    label: 'Oil & Gas Consultancy',
    title: 'Oil & Gas Training & Consultancy',
    desc: 'Specialized oil and gas training and consultancy services that bridge the gap between regulatory compliance, technical expertise, and operational safety for upstream, midstream, and downstream operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Upstream, midstream & downstream consultancy',
      'Regulatory compliance advisory (DPR/NUPRC)',
      'Technical skills training for field personnel',
      'Operations management & process optimization',
    ],
    tags: ['Oil & Gas', 'Consultancy', 'DPR/NUPRC Compliance', 'Field Operations', 'Upstream'],
    stat: { val: '15+', label: 'Years Industry Experience' },
  },
  {
    id: 'I',
    anchor: 'field',
    icon: '🏗',
    label: 'Field Operations & Training',
    title: 'Field Operations & Energy Training',
    desc: 'Hands-on field operations and energy training programs designed to build competent, safety-conscious field personnel capable of managing complex energy infrastructure with precision and efficiency.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Field operations procedures & safety drills',
      'Equipment handling & preventive maintenance',
      'Emergency response & crisis management',
      'Pipeline operations & integrity management',
    ],
    tags: ['Field Operations', 'Energy Training', 'Safety', 'Pipeline', 'Emergency Response'],
    stat: { val: '500+', label: 'Field Personnel Trained' },
  },
  {
    id: 'L',
    anchor: 'consultancy',
    icon: '📡',
    label: 'Energy Consultancy',
    title: 'Energy Consultancy Services',
    desc: 'Strategic energy consultancy covering project feasibility, energy audits, investment advisory, and technical review — supporting government bodies, corporates, and developers across the energy value chain.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Energy feasibility studies & project review',
      'Investment advisory & energy finance guidance',
      'Energy audit & efficiency assessment',
      'Policy advisory & regulatory engagement',
    ],
    tags: ['Energy Consultancy', 'Feasibility Studies', 'Investment Advisory', 'Energy Audit'],
    stat: { val: '30+', label: 'Projects Advised' },
  },
  {
    id: 'D',
    anchor: 'solar',
    icon: '☀️',
    label: 'Solar & Power Distribution',
    title: 'Solar & Power Distribution Solutions',
    desc: 'End-to-end solar energy and power distribution services — from system design and installation to grid integration and maintenance — delivering clean, reliable, and scalable power solutions for businesses and institutions.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Solar PV system design & installation',
      'Off-grid & hybrid power solutions',
      'Power distribution network setup',
      'Operations, monitoring & maintenance',
    ],
    tags: ['Solar Energy', 'Power Distribution', 'Renewable Energy', 'Off-Grid', 'PV Systems'],
    stat: { val: '100%', label: 'Renewable Ready' },
  },
];

const stats = [
  { num: '15+', label: 'Years in Energy Sector' },
  { num: '4', label: 'Energy Divisions' },
  { num: '500+', label: 'Personnel Trained' },
  { num: '30+', label: 'Projects Delivered' },
];

const capabilities = [
  { icon: '🔬', title: 'Technical Expertise', desc: 'Deep sector knowledge across oil & gas, renewables, and power infrastructure.' },
  { icon: '📋', title: 'Regulatory Alignment', desc: 'Full compliance with DPR/NUPRC, NERC, and international energy standards.' },
  { icon: '⚙️', title: 'Operational Precision', desc: 'Structured project management from feasibility through execution and handover.' },
  { icon: '🌱', title: 'Sustainability Focus', desc: 'Balancing energy security with a clear commitment to cleaner energy futures.' },
  { icon: '🤝', title: 'Strategic Partnerships', desc: 'Strong relationships with industry operators, regulators, and suppliers.' },
  { icon: '📊', title: 'Data-Driven Approach', desc: 'Evidence-based consultancy and training built on verifiable field outcomes.' },
];

const EnergyPage = () => {
  const [activeService, setActiveService] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('en-in-view')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.en-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const svc = services[activeService];

  return (
    <>
      <ServicesNavbar />
      <div className="en-page">

        {/* ══ HERO ══ */}
        <section className="en-hero">
          <div className="en-hero__bg" />
          <div className="en-hero__inner">

            <div className="en-hero__left">
              <div className="en-hero__label-row">
                <span className="en-label">Energy &amp; Oil Gas</span>
                <span className="en-label en-label--dim">Bravelion Holdings</span>
              </div>
              <h1 className="en-hero__title">
                Power.<br />
                <em>Process.</em><br />
                Precision.
              </h1>
              <p className="en-hero__sub">
                Specialized energy and oil & gas services — from field operations
                training and consultancy to solar installations and power distribution.
                Built for the demands of Africa's evolving energy sector.
              </p>
              <div className="en-hero__actions">
                <a href="/contact" className="en-btn en-btn--orange">Request Consultation</a>
                <a href="#en-services" className="en-btn en-btn--ghost">Explore Services</a>
              </div>
            </div>

            <div className="en-hero__right">
              <div className="en-hero__selector">
                <p className="en-hero__selector-label">Our Four Energy Divisions</p>
                {services.map((s, i) => (
                  <button
                    key={s.id + s.anchor}
                    className={`en-hero__svc ${activeService === i ? 'en-hero__svc--active' : ''}`}
                    onClick={() => setActiveService(i)}
                  >
                    <span className="en-hero__svc-icon">{s.icon}</span>
                    <div className="en-hero__svc-body">
                      <span className="en-hero__svc-label">{s.label}</span>
                      <span className="en-hero__svc-stat">{s.stat.val} · {s.stat.label}</span>
                    </div>
                    <div className="en-hero__svc-indicator" />
                  </button>
                ))}
              </div>

              <div className="en-hero__preview-card">
                <div
                  className="en-hero__preview-img"
                  style={{ backgroundImage: `url(${svc.image})` }}
                />
                <div className="en-hero__preview-footer">
                  <span className="en-hero__preview-id">{svc.id}</span>
                  <span className="en-hero__preview-name">{svc.label}</span>
                  <span className="en-hero__preview-stat">{svc.stat.val} {svc.stat.label}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="en-stats en-reveal">
          <div className="en-stats__inner">
            {stats.map((s, i) => (
              <div className="en-stat" key={i}>
                <span className="en-stat__num">{s.num}</span>
                <span className="en-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ INTRO ══ */}
        <section className="en-intro en-reveal">
          <div className="en-intro__inner">
            <div className="en-intro__left">
              <div className="en-bar" />
              <h2>Africa's Energy Sector<br />Demands More.<br />We Deliver It.</h2>
              <a href="/contact" className="en-text-link">Partner with our energy team <span>→</span></a>
            </div>
            <div className="en-intro__right">
              <p>
                From crude oil fields to solar rooftops — Bravelion's energy division
                provides the technical expertise, regulatory knowledge, and operational
                capacity needed to navigate one of the world's most complex and consequential
                industries.
              </p>
              <p>
                Our team combines decades of field experience with structured consultancy
                frameworks, ensuring every engagement produces tangible, measurable outcomes
                for our clients and their organizations.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="en-services" id="en-services">
          <div className="en-services__header en-reveal">
            <div className="en-bar" />
            <h2>Energy Service Divisions</h2>
            <p>Four specialized divisions. One integrated energy partner.</p>
          </div>

          <div className="en-tabs en-reveal">
            {services.map((s, i) => (
              <button
                key={`tab-${s.anchor}`}
                className={`en-tab ${activeService === i ? 'en-tab--active' : ''}`}
                onClick={() => setActiveService(i)}
              >
                <div className="en-tab__top">
                  <span className="en-tab__icon">{s.icon}</span>
                  <span className="en-tab__id">{s.id}</span>
                </div>
                <span className="en-tab__label">{s.label}</span>
                <span className="en-tab__stat">{s.stat.val}</span>
              </button>
            ))}
          </div>

          <div className="en-panels">
            {services.map((s, i) => (
              <div
                key={s.anchor}
                id={s.anchor}
                className={`en-panel ${activeService === i ? 'en-panel--active' : ''}`}
              >
                <div className="en-panel__image-wrap">
                  <div
                    className="en-panel__image"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="en-panel__image-overlay">
                    <div className="en-panel__float-stat">
                      <span className="en-panel__float-val">{s.stat.val}</span>
                      <span className="en-panel__float-label">{s.stat.label}</span>
                    </div>
                    <span className="en-panel__image-id">{s.id}</span>
                  </div>
                </div>

                <div className="en-panel__content">
                  <span className="en-panel__eyebrow">{s.label}</span>
                  <h3 className="en-panel__title">{s.title}</h3>
                  <p className="en-panel__desc">{s.desc}</p>

                  <div className="en-panel__highlights">
                    <p className="en-panel__hl-head">What we deliver:</p>
                    <ul>
                      {s.highlights.map((h, j) => (
                        <li key={j}>
                          <span className="en-check">◈</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="en-panel__tags">
                    {s.tags.map(t => <span key={t} className="en-tag">{t}</span>)}
                  </div>

                  <div className="en-panel__btns">
                    <a href="/contact" className="en-btn en-btn--orange">Request This Service</a>
                    <a href="/contact" className="en-btn en-btn--ghost-dark">Download Profile</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CAPABILITIES ══ */}
        <section className="en-capabilities en-reveal">
          <div className="en-capabilities__inner">
            <div className="en-capabilities__header">
              <div className="en-bar" />
              <h2>What Sets Our Energy Division Apart</h2>
              <p>Technical depth. Regulatory alignment. Real-world outcomes.</p>
            </div>
            <div className="en-capabilities__grid">
              {capabilities.map((cap, i) => (
                <div className="en-cap-card en-reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="en-cap-card__icon">{cap.icon}</span>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VISUAL BREAK ══ */}
        <section className="en-visual-break">
          <div className="en-visual-break__bg" />
          <div className="en-visual-break__content">
            <p className="en-visual-break__overline">The Energy Imperative</p>
            <blockquote>
              "Nigeria's energy future demands expertise, discipline,
              and a commitment to operational excellence. That is what
              we bring to every engagement."
            </blockquote>
            <div className="en-visual-break__pills">
              {['Oil & Gas', 'Solar Power', 'Field Training', 'Energy Consultancy'].map(item => (
                <span key={item} className="en-visual-break__pill">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="en-cta en-reveal">
          <div className="en-cta__inner">
            <div className="en-cta__left">
              <span className="en-cta__eye">Ready to Engage?</span>
              <h2>Power Your Project<br />with Bravelion Energy.</h2>
              <p>
                Whether you need field training, strategic consultancy, solar installation,
                or oil & gas advisory — our energy team is ready to scope, plan, and deliver.
              </p>
              <div className="en-cta__btns">
                <a href="/contact" className="en-btn en-btn--orange">Start a Project</a>
                <a href="/services" className="en-btn en-btn--outline-dark">All Services</a>
              </div>
            </div>
            <div className="en-cta__right">
              <div className="en-cta__contact-card">
                <p className="en-cta__card-title">Reach Our Energy Team</p>
                <p className="en-cta__card-body">
                  Contact us directly to discuss your project scope, training requirements,
                  or consultancy needs.
                </p>
                <a href="mailto:services@bravelionholdings.com" className="en-cta__card-contact">
                  📧 services@bravelionholdings.com
                </a>
                <a href="tel:+2347081728260" className="en-cta__card-contact">
                  📞 +234 708 172 8260
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <ServicesFooter />
    </>
  );
};

export default EnergyPage;