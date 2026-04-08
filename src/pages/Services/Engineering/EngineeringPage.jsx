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
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="cert-page">
      <ServicesNavbar />

      {/* ══ GEOMETRIC HERO ══ */}
      <section className="cert-hero eng-hero-custom">
        <div className="eng-grid-bg" />
        <div className="cert-container">
          <div className="eng-hero-layout cert-reveal">
            <div className="eng-hero-content">
              <span className="cert-eyebrow light">Foundations of Excellence</span>
              <h1>Built to Last. <br /><span className="cert-highlight">Engineered</span> <br />to Perform.</h1>
              <p className="cert-hero__sub">
                From structural civil works to complex electrical distribution and sustainable 
                waste management, Bravelion provides the technical backbone for Nigeria's infrastructure.
              </p>
              <div className="cert-hero__actions">
                <a href="#eng-services" className="cert-btn-primary">View Disciplines</a>
                <a href="/contact" className="cert-btn-outline">Request Quote</a>
              </div>
            </div>
            
            <div className="eng-hero-visual">
              <div className="eng-image-main">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Construction" />
                <div className="eng-stat-sticker">
                  <strong>10+</strong>
                  <span>Years of Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNICAL STATS ══ */}
      <section className="eng-stats-bar cert-reveal">
        <div className="cert-container">
          <div className="eng-stats-flex">
            {stats.map((s, i) => (
              <div className="eng-stat-item" key={i}>
                <span className="eng-stat-val">{s.num}</span>
                <span className="eng-stat-lab">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE NAVIGATOR ══ */}
      <section className="eng-portfolio" id="eng-services">
        <div className="cert-container">
          <div className="eng-section-top cert-reveal">
            <span className="cert-eyebrow dark">Engineering Divisions</span>
            <h2 className="section-title">Multi-Discipline Delivery</h2>
            
            <div className="eng-tab-strip">
              {services.map((svc, i) => (
                <button 
                  key={svc.id}
                  className={`eng-tab-btn ${activeService === i ? 'active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="tab-idx">{svc.id}</span>
                  <span className="tab-name">{svc.label.split('·')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="eng-active-display cert-reveal">
            {services.map((svc, i) => (
              <div key={svc.id} className={`eng-panel-view ${activeService === i ? 'active' : ''}`}>
                <div className="eng-panel-grid">
                  <div className="eng-panel-info">
                    <span className="eng-panel-tag">{svc.label}</span>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    
                    <div className="eng-checklist">
                      {svc.highlights.map((h, j) => (
                        <div className="check-item" key={j}>
                          <span className="check-bullet"></span>
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="eng-panel-bottom">
                       <div className="eng-tags-cloud">
                          {svc.tags.map(t => <span key={t} className="eng-mini-tag">{t}</span>)}
                       </div>
                       <a href="/contact" className="cert-btn-primary">Enquire for Project</a>
                    </div>
                  </div>
                  <div className="eng-panel-media">
                    <img src={svc.image} alt={svc.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES GRID ══ */}
      <section className="eng-delivery-block">
        <div className="cert-container">
          <div className="eng-delivery-header cert-reveal">
            <span className="cert-eyebrow light">Operational Standards</span>
            <h2>How We Deliver.</h2>
          </div>
          <div className="eng-delivery-grid">
            {capabilities.map((cap, i) => (
              <div className="eng-cap-card cert-reveal" key={i}>
                <span className="eng-cap-index">0{i+1}</span>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE & VALUES ══ */}
      <section className="eng-vision-break">
         <div className="cert-container">
            <div className="eng-vision-content cert-reveal">
               <blockquote>
                 "Structural integrity, compliance, and sustainable engineering — 
                 non-negotiable on every project we commission."
               </blockquote>
               <a href="/about" className="cert-btn-outline">Our Values</a>
            </div>
         </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default EngineeringPage;