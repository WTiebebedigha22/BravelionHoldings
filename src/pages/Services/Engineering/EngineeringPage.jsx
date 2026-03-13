import React, { useEffect, useRef, useState } from 'react';
import ServicesNavbar from '../components/Navbar/Navbar';
import ServicesFooter from '../components/Footer/Footer';
import './Engineering.css';

const services = [
  {
    id: 'A',
    anchor: 'electrical',
    icon: '⚡',
    label: 'Electrical · Civil · Mechanical',
    title: 'Electrical, Civil & Mechanical Services',
    desc: 'Comprehensive engineering solutions spanning electrical systems, civil infrastructure, mechanical operations, and industrial equipment supply and maintenance. We handle everything from initial assessment through to long-term service contracts.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Industrial equipment procurement & supply',
      'Preventive & corrective maintenance contracts',
      'System installation & commissioning',
      'Long-term technical support agreements',
    ],
    tags: ['Electrical Engineering', 'Civil Works', 'Mechanical Systems', 'Equipment Supply', 'Maintenance'],
  },
  {
    id: 'E',
    anchor: 'construction',
    icon: '🏗',
    label: 'Construction & Civil',
    title: 'Construction & Civil Works',
    desc: 'Full-scope construction and civil engineering from groundworks and structural builds to finishing — delivered on time, on budget, and to specification. We manage the entire project lifecycle with rigorous quality control at every phase.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Commercial & residential project delivery',
      'Road & infrastructure construction',
      'Full project management & site supervision',
      'Bill of quantities & cost estimation',
    ],
    tags: ['Construction Management', 'Civil Engineering', 'Structural Works', 'Site Management', 'QA/QC'],
  },
  {
    id: 'D',
    anchor: 'installation',
    icon: '🔌',
    label: 'Power & Electrification',
    title: 'Electrical Facilities & Projects Installation',
    desc: 'End-to-end electrical project delivery including rural and urban electrification, power distribution networks, industrial controls and automation systems, and complete solar and inverter installations for off-grid and grid-tied applications.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Solar PV system design & installation',
      'Rural & urban electrification projects',
      'Power distribution network engineering',
      'Industrial controls & automation systems',
    ],
    tags: ['Rural Electrification', 'Solar PV', 'Inverter Systems', 'Power Distribution', 'Automation'],
  },
  {
    id: 'H',
    anchor: 'waste',
    icon: '♻',
    label: 'Waste Management',
    title: 'Waste Management Solutions',
    desc: 'Sustainable, regulatory-compliant waste management services for industrial, commercial, and community environments — covering collection, treatment, processing, and compliant disposal with full environmental documentation.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Industrial waste collection & disposal',
      'Environmental impact assessments',
      'Waste treatment, recycling & processing',
      'Community waste management programs',
    ],
    tags: ['Industrial Waste', 'Environmental Compliance', 'Waste Treatment', 'Recycling', 'Sustainability'],
  },
];

const stats = [
  { num: '4', label: 'Engineering Disciplines' },
  { num: '50+', label: 'Projects Delivered' },
  { num: '10+', label: 'Years Experience' },
  { num: '100%', label: 'Compliance Record' },
];

const capabilities = [
  { title: 'Project Management', desc: 'End-to-end delivery with rigorous milestone tracking and client reporting.' },
  { title: 'HSE Integration', desc: 'Safety embedded from planning through to final commissioning on every project.' },
  { title: 'Regulatory Compliance', desc: 'Full alignment with Nigerian and international engineering standards.' },
  { title: 'Quality Assurance', desc: 'Structured QA/QC processes ensuring consistent, reliable outcomes.' },
  { title: 'Technical Expertise', desc: 'Multi-discipline engineers with sector-specific experience and certifications.' },
  { title: 'Maintenance Contracts', desc: 'Long-term service agreements keeping your systems operational and efficient.' },
];

const EngineeringPage = () => {
  const [activeService, setActiveService] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('eng-in-view')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.eng-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <ServicesNavbar />

      <div className="eng-page">

        {/* ══ HERO ══ */}
        <section className="eng-hero">
          <div className="eng-hero__grid-overlay" />
          <div className="eng-hero__body">

            <div className="eng-hero__left">
              <div className="eng-hero__tag-row">
                <span className="eng-hero__tag">Engineering &amp; Construction</span>
                <span className="eng-hero__tag eng-hero__tag--outline">Bravelion Holdings</span>
              </div>
              <h1 className="eng-hero__title">
                Built to Last.<br />
                <span className="eng-hero__title-stroke">Engineered</span><br />
                to Perform.
              </h1>
              <p className="eng-hero__sub">
                From heavy civil construction and electrical installation to mechanical
                systems and waste management — Bravelion delivers complete,
                multi-discipline engineering solutions across Nigeria.
              </p>
              <div className="eng-hero__actions">
                <a href="/contact" className="eng-btn eng-btn--primary">Request a Quote</a>
                <a href="#eng-services" className="eng-btn eng-btn--ghost-white">Explore Services</a>
              </div>
              <div className="eng-hero__discipline-strip">
                {['Electrical', 'Civil', 'Mechanical', 'Construction', 'Power & Solar', 'Waste Mgmt'].map((d, i) => (
                  <span key={i} className="eng-discipline">{d}</span>
                ))}
              </div>
            </div>

            <div className="eng-hero__right">
              <div className="eng-hero__image-stack">
                <div
                  className="eng-hero__img eng-hero__img--main"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800')` }}
                />
                <div
                  className="eng-hero__img eng-hero__img--secondary"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600')` }}
                />
                <div className="eng-hero__float-card">
                  <span className="eng-hero__float-num">10+</span>
                  <span className="eng-hero__float-label">Years Engineering<br />Excellence</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="eng-stats eng-reveal">
          <div className="eng-stats__inner">
            {stats.map((s, i) => (
              <div className="eng-stat" key={i}>
                <span className="eng-stat__num">{s.num}</span>
                <span className="eng-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ INTRO ══ */}
        <section className="eng-intro eng-reveal">
          <div className="eng-intro__inner">
            <div className="eng-intro__left">
              <div className="eng-bar" />
              <h2>Multidisciplinary Engineering<br />Under One Roof.</h2>
            </div>
            <div className="eng-intro__right">
              <p>
                Our engineering division brings together electrical, civil, mechanical,
                and environmental expertise — enabling clients to engage a single
                accountable partner for complex, multi-discipline projects.
              </p>
              <p>
                From initial scoping and feasibility through to final commissioning
                and long-term maintenance, we deliver on every promise with
                documented quality standards and full regulatory compliance.
              </p>
              <a href="/contact" className="eng-text-link">
                Speak to our engineering team <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══ SERVICE TABS ══ */}
        <section className="eng-services" id="eng-services">
          <div className="eng-services__header eng-reveal">
            <div className="eng-bar" />
            <h2>Our Engineering Divisions</h2>
            <p>Four specialist disciplines. One integrated delivery team.</p>
          </div>

          <div className="eng-tabs eng-reveal">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                className={`eng-tab ${activeService === i ? 'eng-tab--active' : ''}`}
                onClick={() => setActiveService(i)}
              >
                <span className="eng-tab__icon">{svc.icon}</span>
                <span className="eng-tab__label">{svc.label}</span>
                <span className="eng-tab__id">{svc.id}</span>
              </button>
            ))}
          </div>

          <div className="eng-panel">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.anchor}
                className={`eng-panel__item ${activeService === i ? 'eng-panel__item--active' : ''}`}
              >
                <div className="eng-panel__image-wrap">
                  <div
                    className="eng-panel__image"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(8,18,34,0.85) 0%, rgba(8,18,34,0.2) 60%, transparent 100%), url(${svc.image})`
                    }}
                  />
                  <div className="eng-panel__image-id">{svc.id}</div>
                </div>

                <div className="eng-panel__content">
                  <span className="eng-panel__eyebrow">{svc.label}</span>
                  <h3 className="eng-panel__title">{svc.title}</h3>
                  <p className="eng-panel__desc">{svc.desc}</p>

                  <div className="eng-panel__highlights">
                    <p className="eng-panel__highlights-heading">What we deliver:</p>
                    <ul>
                      {svc.highlights.map((h, j) => (
                        <li key={j}>
                          <span className="eng-check">◆</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="eng-panel__tags">
                    {svc.tags.map(t => <span key={t} className="eng-tag">{t}</span>)}
                  </div>

                  <a href="/contact" className="eng-btn eng-btn--primary eng-panel__cta">
                    Enquire About This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CAPABILITIES ══ */}
        <section className="eng-capabilities eng-reveal">
          <div className="eng-capabilities__inner">
            <div className="eng-capabilities__header">
              <div className="eng-bar" />
              <h2>How We Deliver</h2>
              <p>Six core capabilities that underpin every project we take on.</p>
            </div>
            <div className="eng-capabilities__grid">
              {capabilities.map((cap, i) => (
                <div className="eng-cap-card eng-reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="eng-cap-card__num">0{i + 1}</span>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VISUAL BREAK ══ */}
        <section className="eng-visual-break">
          <div className="eng-visual-break__image" />
          <div className="eng-visual-break__overlay">
            <blockquote>
              "Structural integrity, compliance, and sustainable engineering —
              non-negotiable on every Bravelion project."
            </blockquote>
            <a href="/about" className="eng-btn eng-btn--ghost-white" style={{ marginTop: '28px' }}>
              Our Company Values
            </a>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="eng-cta eng-reveal">
          <div className="eng-cta__inner">
            <span className="eng-cta__eye">Start a Project</span>
            <h2>Ready to Build Something<br />That Lasts?</h2>
            <p>
              Talk to our engineering team about your next project —
              from feasibility and design through to final delivery and maintenance.
            </p>
            <div className="eng-cta__btns">
              <a href="/contact" className="eng-btn eng-btn--primary">Get in Touch</a>
              <a href="/services" className="eng-btn eng-btn--outline-dark">View All Services</a>
            </div>
          </div>
        </section>

      </div>

      <ServicesFooter />
    </>
  );
};

export default EngineeringPage;