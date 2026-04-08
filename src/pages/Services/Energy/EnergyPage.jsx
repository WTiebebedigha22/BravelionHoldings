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
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const svc = services[activeService];

  return (
    <div className="cert-page">
      <ServicesNavbar />

      {/* ══ HERO SECTION ══ */}
      <section className="cert-hero en-hero-custom">
        <div className="cert-container">
          <div className="en-hero-split cert-reveal">
            <div className="en-hero-text">
              <span className="cert-eyebrow light">Strategic Infrastructure</span>
              <h1>Power. <br /><span className="cert-highlight">Precision.</span> <br />Process.</h1>
              <p className="cert-hero__sub">
                Specialized energy and oil & gas services designed for Africa's 
                evolving industrial landscape—from regulatory consultancy to 
                renewable power distribution.
              </p>
              <div className="cert-hero__actions">
                <a href="#en-services" className="cert-btn-primary">Explore Divisions</a>
                <a href="/contact" className="cert-btn-outline">Consult Our Team</a>
              </div>
            </div>

            <div className="en-hero-visual-panel">
               <div className="en-visual-main">
                  <img src={svc.image} alt={svc.label} className="en-main-img" />
                  <div className="en-visual-badge">
                    <span className="badge-val">{svc.stat.val}</span>
                    <span className="badge-lab">{svc.stat.label}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTOR STATS ══ */}
      <section className="en-stats-strip cert-reveal">
        <div className="cert-container">
          <div className="en-stats-grid">
            {stats.map((s, i) => (
              <div className="en-stat-box" key={i}>
                <span className="en-stat-num">{s.num}</span>
                <span className="en-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTEGRATED SERVICES ══ */}
      <section className="en-services-section" id="en-services">
        <div className="cert-container">
          <div className="en-section-header cert-reveal">
            <span className="cert-eyebrow dark">Industrial Portfolio</span>
            <h2 className="section-title">Energy Service Divisions</h2>
            
            <div className="en-tab-nav">
              {services.map((s, i) => (
                <button 
                  key={s.id} 
                  className={`en-nav-item ${activeService === i ? 'active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="nav-id">{s.id}</span>
                  <span className="nav-label">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="en-active-panel cert-reveal">
            <div className="en-panel-grid">
              <div className="en-panel-content">
                <span className="panel-cat">Technical Division</span>
                <h3>{svc.title}</h3>
                <p className="panel-desc">{svc.desc}</p>
                
                <div className="panel-deliverables">
                  <h4>Core Deliverables</h4>
                  <ul>
                    {svc.highlights.map((h, j) => (
                      <li key={j}><span>◈</span> {h}</li>
                    ))}
                  </ul>
                </div>

                <div className="panel-footer">
                  <div className="panel-tags">
                    {svc.tags.map(t => <span key={t} className="en-mini-tag">{t}</span>)}
                  </div>
                  <a href="/contact" className="cert-btn-primary">Initiate Project Scope</a>
                </div>
              </div>
              <div className="en-panel-side-media">
                <img src={svc.image} alt="Service Visual" />
                <div className="en-side-stat-overlay">
                  <strong>{svc.stat.val}</strong>
                  <span>{svc.stat.label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section className="en-cap-block">
        <div className="cert-container">
          <div className="en-cap-grid">
            <div className="en-cap-intro cert-reveal">
               <span className="cert-eyebrow light">Competitive Edge</span>
               <h2>Engineered for Excellence.</h2>
               <p>Our division combines technical depth with regulatory alignment to ensure verifiable outcomes.</p>
            </div>
            {capabilities.map((cap, i) => (
              <div className="en-cap-item cert-reveal" key={i}>
                <span className="cap-icon">{cap.icon}</span>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="cert-cta">
        <div className="cert-container">
          <div className="cert-cta__inner cert-reveal">
            <div className="cert-cta__text">
              <span className="cert-eyebrow light">Contact Us</span>
              <h2>Power Your Project.</h2>
              <p>Discuss your technical scope or consultancy requirements with our lead engineers.</p>
            </div>
            <div className="cert-cta__actions">
              <a href="/contact" className="cert-btn-primary">Request Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default EnergyPage;