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
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="cert-page">
      <ServicesNavbar />

      {/* HERO SECTION */}
      <section className="cert-hero biz-hero-custom">
        <div className="cert-container">
          <div className="cert-hero__inner cert-reveal">
            <span className="cert-eyebrow light">Operational Backbone</span>
            <h1>Moving Business <br /> <span className="cert-highlight">Forward.</span></h1>
            <p className="cert-hero__sub">
              From logistics and international trade to large-scale catering and general contracting, 
              Bravelion manages the essential functions that keep industry in motion.
            </p>
            <div className="cert-hero__actions">
              <a href="#biz-services" className="cert-btn-primary">View Divisions</a>
              <a href="/contact" className="cert-btn-outline">Partner With Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="biz-stats-strip cert-reveal">
        <div className="cert-container">
          <div className="biz-stats-grid">
            {stats.map((s, i) => (
              <div className="biz-stat-box" key={i}>
                <span className="biz-stat-num">{s.num}</span>
                <span className="biz-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TABS SECTION */}
      <section className="biz-portfolio" id="biz-services">
        <div className="cert-container">
          <div className="biz-portfolio__header cert-reveal">
            <span className="cert-eyebrow dark">Services</span>
            <h2 className="section-title">Business Divisions</h2>
            
            <div className="biz-tabs-nav">
              {services.map((svc, i) => (
                <button 
                  key={svc.id}
                  className={`biz-tab-trigger ${activeService === i ? 'active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="tab-icon">{svc.icon}</span>
                  <span className="tab-text">{svc.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="biz-tab-content cert-reveal">
            {services.map((svc, i) => (
              <div key={svc.id} className={`biz-panel-slide ${activeService === i ? 'active' : ''}`}>
                <div className="biz-panel-grid">
                  <div className="biz-panel-media">
                    <img src={svc.image} alt={svc.title} />
                    <div className="biz-panel-overlay"></div>
                  </div>
                  <div className="biz-panel-info">
                    <span className="biz-panel-id">Division {svc.id.replace('2', '')}</span>
                    <h3>{svc.title}</h3>
                    <p className="biz-panel-desc">{svc.desc}</p>
                    
                    <div className="biz-delivery-list">
                      <h4>Capabilities</h4>
                      <ul>
                        {svc.highlights.map((h, j) => (
                          <li key={j}><span>—</span> {h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="biz-panel-footer">
                      <div className="biz-tags">
                        {svc.tags.map(t => <span key={t} className="biz-mini-tag">{t}</span>)}
                      </div>
                      <a href="/contact" className="cert-btn-primary">Enquire for Project</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE (GRID) */}
      <section className="biz-ops-section">
        <div className="cert-container">
          <div className="biz-ops-header cert-reveal">
             <span className="cert-eyebrow light">The Bravelion Way</span>
             <h2>Operational Principles</h2>
          </div>
          <div className="biz-ops-grid">
            {capabilities.map((cap, i) => (
              <div className="biz-op-card cert-reveal" key={i}>
                <span className="op-index">0{i+1}</span>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BREAK */}
      <section className="biz-quote-break">
         <div className="cert-container">
            <div className="quote-box cert-reveal">
              <span className="quote-mark">“</span>
              <blockquote>
                We handle the logistics, trade, and contracting — so our clients can focus 
                entirely on their core business growth.
              </blockquote>
            </div>
         </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default BusinessPage;