import React, { useEffect, useRef, useState } from 'react';
import ServicesNavbar from '../components/Navbar/Navbar';
import ServicesFooter from '../components/Footer/Footer';
import './Business.css';

const services = [
  {
    id: 'F',
    anchor: 'logistics',
    icon: '🚛',
    label: 'Transportation · Logistics',
    title: 'Transportation & Logistics Services',
    desc: 'Reliable transportation and logistics solutions for goods and personnel — supporting industrial operations, project sites, corporate organizations, and commercial supply chains across Nigeria with a professional, punctual, and accountable approach.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Freight & cargo transportation management',
      'Project site logistics & supply support',
      'Fleet management & vehicle provisioning',
      'Personnel transportation contracts',
    ],
    tags: ['Transportation', 'Logistics', 'Supply Chain', 'Fleet Management', 'Personnel Haulage'],
  },
  {
    id: 'G',
    anchor: 'trade',
    icon: '🌍',
    label: 'Import · Export',
    title: 'Import & Export of Goods and Services',
    desc: 'End-to-end import and export facilitation including trade documentation, customs compliance, international procurement, and supply chain coordination — enabling Nigerian businesses to trade seamlessly across borders.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Import & export documentation & coordination',
      'Customs brokerage & compliance advisory',
      'International procurement & supplier sourcing',
      'Trade finance advisory support',
    ],
    tags: ['Import', 'Export', 'International Trade', 'Customs Compliance', 'Procurement'],
  },
  {
    id: 'N',
    anchor: 'catering',
    icon: '🎪',
    label: 'Catering · Event Management',
    title: 'Catering & Event Management',
    desc: 'Full-service catering and professional event management for corporate functions, industrial site catering, product launches, conferences, and community events of all scales — executed with precision and attention to detail.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Corporate & industrial site catering',
      'Conference & seminar planning & management',
      'Product launch & brand activation events',
      'Full event logistics & on-site coordination',
    ],
    tags: ['Corporate Catering', 'Event Management', 'Site Catering', 'Conferences', 'Product Launches'],
  },
  {
    id: 'N2',
    anchor: 'contracting',
    icon: '📋',
    label: 'General Contracting',
    title: 'General Contracting Services',
    desc: 'Versatile general contracting covering procurement, project execution, facility support, and administrative contracting for government bodies, enterprises, and institutions — with reliable documentation and full compliance management.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Government & institutional supply contracts',
      'Goods & services procurement management',
      'Subcontractor coordination & management',
      'Contract documentation & compliance',
    ],
    tags: ['General Contracting', 'Procurement', 'Project Execution', 'Facility Support', 'Government Contracts'],
  },
];

const stats = [
  { num: '4', label: 'Business Service Lines' },
  { num: 'NGN', label: 'Local-First Approach' },
  { num: '100%', label: 'Client Accountability' },
  { num: 'B2B', label: 'Enterprise Focus' },
];

const capabilities = [
  { title: 'Operational Reliability', desc: 'Consistently delivering against contracts and service agreements with zero-excuse accountability.' },
  { title: 'Cross-Border Expertise', desc: 'Deep knowledge of import/export regulations, documentation, and customs processes in Nigeria.' },
  { title: 'Event Excellence', desc: 'End-to-end event delivery from concept through catering to post-event evaluation.' },
  { title: 'Fleet & Logistics', desc: 'Managed transport solutions with professional drivers, tracked vehicles, and scheduling systems.' },
  { title: 'Government Experience', desc: 'Proven track record delivering supply and contracting services to government and public sector bodies.' },
  { title: 'Documentation & Compliance', desc: 'Rigorous administrative systems ensuring every contract is properly documented and audit-ready.' },
];

const BusinessPage = () => {
  const [activeService, setActiveService] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('biz-in-view')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.biz-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <ServicesNavbar />
      <div className="biz-page">

        {/* HERO */}
        <section className="biz-hero">
          <div className="biz-hero__bg" />
          <div className="biz-hero__lines" />
          <div className="biz-hero__body">
            <div className="biz-hero__left">
              <div className="biz-hero__tag-row">
                <span className="biz-hero__tag">Business &amp; Operations</span>
                <span className="biz-hero__tag biz-hero__tag--dim">Bravelion Holdings</span>
              </div>
              <h1 className="biz-hero__title">
                Moving Business<br />
                <span className="biz-hero__title-accent">Forward.</span>
              </h1>
              <p className="biz-hero__sub">
                From transportation and logistics to international trade, catering,
                and general contracting — Bravelion powers the operational backbone
                of businesses and institutions across Nigeria.
              </p>
              <div className="biz-hero__actions">
                <a href="/contact" className="biz-btn biz-btn--primary">Start a Conversation</a>
                <a href="#biz-services" className="biz-btn biz-btn--ghost">Explore Services</a>
              </div>
              <div className="biz-hero__strip">
                {['Transportation', 'Logistics', 'Import', 'Export', 'Catering', 'Events', 'Contracting'].map((d, i) => (
                  <span key={i} className="biz-pill">{d}</span>
                ))}
              </div>
            </div>
            <div className="biz-hero__right">
              <div className="biz-hero__visual">
                <div className="biz-hero__img biz-hero__img--main"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800')` }} />
                <div className="biz-hero__img biz-hero__img--accent"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=500')` }} />
                <div className="biz-hero__badge">
                  <span className="biz-hero__badge-num">4</span>
                  <span className="biz-hero__badge-text">Business<br />Divisions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="biz-stats biz-reveal">
          <div className="biz-stats__inner">
            {stats.map((s, i) => (
              <div className="biz-stat" key={i}>
                <span className="biz-stat__num">{s.num}</span>
                <span className="biz-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section className="biz-intro biz-reveal">
          <div className="biz-intro__inner">
            <div className="biz-intro__left">
              <div className="biz-bar" />
              <h2>Operational Excellence<br />Across Every Function.</h2>
            </div>
            <div className="biz-intro__right">
              <p>Our business and operations division handles the practical, logistical, and commercial functions that keep organizations running efficiently. From moving goods across borders to feeding site workers and managing events — we bring the same standard of professionalism to every engagement.</p>
              <p>We serve corporate clients, government institutions, industrial sites, and growing businesses that need a reliable, accountable operations partner.</p>
              <a href="/contact" className="biz-text-link">Talk to our operations team <span>→</span></a>
            </div>
          </div>
        </section>

        {/* SERVICE TABS */}
        <section className="biz-services" id="biz-services">
          <div className="biz-services__header biz-reveal">
            <div className="biz-bar" />
            <h2>Our Business Divisions</h2>
            <p>Four operational service lines keeping clients running and growing.</p>
          </div>
          <div className="biz-tabs biz-reveal">
            {services.map((svc, i) => (
              <button key={svc.id}
                className={`biz-tab ${activeService === i ? 'biz-tab--active' : ''}`}
                onClick={() => setActiveService(i)}>
                <span className="biz-tab__icon">{svc.icon}</span>
                <span className="biz-tab__label">{svc.label}</span>
                <span className="biz-tab__id">{svc.id.replace('2', '')}</span>
              </button>
            ))}
          </div>
          <div className="biz-panel">
            {services.map((svc, i) => (
              <div key={svc.id} id={svc.anchor}
                className={`biz-panel__item ${activeService === i ? 'biz-panel__item--active' : ''}`}>
                <div className="biz-panel__image-wrap">
                  <div className="biz-panel__image"
                    style={{ backgroundImage: `linear-gradient(to right, rgba(10,5,30,0.92) 0%, rgba(10,5,30,0.3) 60%, transparent 100%), url(${svc.image})` }} />
                  <div className="biz-panel__image-id">{svc.id.replace('2', '')}</div>
                </div>
                <div className="biz-panel__content">
                  <span className="biz-panel__eyebrow">{svc.label}</span>
                  <h3 className="biz-panel__title">{svc.title}</h3>
                  <p className="biz-panel__desc">{svc.desc}</p>
                  <div className="biz-panel__highlights">
                    <p className="biz-panel__highlights-heading">What we deliver:</p>
                    <ul>
                      {svc.highlights.map((h, j) => (
                        <li key={j}><span className="biz-check">◆</span><span>{h}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="biz-panel__tags">
                    {svc.tags.map(t => <span key={t} className="biz-tag">{t}</span>)}
                  </div>
                  <a href="/contact" className="biz-btn biz-btn--primary biz-panel__cta">Enquire About This Service</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="biz-capabilities biz-reveal">
          <div className="biz-capabilities__inner">
            <div className="biz-capabilities__header">
              <div className="biz-bar" />
              <h2>How We Operate</h2>
              <p>Six principles that define how we deliver business services.</p>
            </div>
            <div className="biz-capabilities__grid">
              {capabilities.map((cap, i) => (
                <div className="biz-cap-card biz-reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="biz-cap-card__num">0{i + 1}</span>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISUAL BREAK */}
        <section className="biz-visual-break">
          <div className="biz-visual-break__image" />
          <div className="biz-visual-break__overlay">
            <blockquote>
              "We handle the logistics, supply chain, events, and contracting — so
              our clients can focus entirely on growing their core business."
            </blockquote>
            <a href="/about" className="biz-btn biz-btn--ghost" style={{ marginTop: '28px' }}>
              Our Company Values
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="biz-cta biz-reveal">
          <div className="biz-cta__inner">
            <span className="biz-cta__eye">Partner With Us</span>
            <h2>Let's Handle the<br />Operations.</h2>
            <p>Our business services team is ready to take on your logistics, trade, catering, and contracting needs — professionally and reliably.</p>
            <div className="biz-cta__btns">
              <a href="/contact" className="biz-btn biz-btn--primary">Get in Touch</a>
              <a href="/services" className="biz-btn biz-btn--outline-lt">View All Services</a>
            </div>
          </div>
        </section>

      </div>
      <ServicesFooter />
    </>
  );
};

export default BusinessPage;