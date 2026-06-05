import React, { useEffect, useRef, useState } from 'react';
import './Advisory.css';
import ServicesNavbar from "../components/Navbar/Navbar";
import ServicesFooter from "../components/Footer/Footer";

const advisoryCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'strategy', label: 'Strategy & Operations' },
  { id: 'finance', label: 'Finance & Investment' },
  { id: 'digital', label: 'Digital Transformation' },
  { id: 'risk', label: 'Risk & Compliance' },
  { id: 'hr', label: 'HR & Leadership' },
];

const advisoryServices = [
  {
    id: '01',
    category: 'strategy',
    title: 'Corporate Strategy Development',
    desc: 'Strategic planning, market entry strategies, competitive positioning, and long-term growth roadmaps tailored to your industry and organizational goals.',
    tags: ['Strategic Planning', 'Market Entry', 'Growth Strategy', 'Competitive Analysis'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    category: 'finance',
    title: 'Financial Advisory & Investment',
    desc: 'Expert financial guidance including investment analysis, portfolio management, capital raising, mergers & acquisitions, and financial restructuring.',
    tags: ['Investment Analysis', 'M&A', 'Capital Raising', 'Financial Restructuring'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    category: 'digital',
    title: 'Digital Transformation Consulting',
    desc: 'End-to-end digital strategy, technology implementation, process automation, and organizational change management for the digital age.',
    tags: ['Digital Strategy', 'Automation', 'Change Management', 'Tech Implementation'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04',
    category: 'risk',
    title: 'Risk Management & Compliance',
    desc: 'Comprehensive risk assessment frameworks, regulatory compliance solutions, internal audit services, and enterprise risk management.',
    tags: ['Risk Assessment', 'Compliance', 'Internal Audit', 'ERM'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '05',
    category: 'hr',
    title: 'HR Consulting & Leadership Development',
    desc: 'Strategic HR solutions including talent acquisition, performance management, organizational design, and executive coaching programs.',
    tags: ['Talent Management', 'Leadership', 'Org Design', 'Executive Coaching'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '06',
    category: 'strategy',
    title: 'Operational Excellence Consulting',
    desc: 'Process optimization, supply chain management, lean methodologies, and operational efficiency improvements across your organization.',
    tags: ['Process Optimization', 'Supply Chain', 'Lean Methods', 'Efficiency'],
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '07',
    category: 'finance',
    title: 'Business Valuation & Due Diligence',
    desc: 'Comprehensive business valuation services, financial due diligence for transactions, and independent valuation opinions for strategic decisions.',
    tags: ['Valuation', 'Due Diligence', 'Financial Analysis', 'Transaction Support'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '08',
    category: 'digital',
    title: 'Data Analytics & Business Intelligence',
    desc: 'Data-driven decision making through advanced analytics, BI dashboards, predictive modeling, and actionable business insights.',
    tags: ['Data Analytics', 'BI', 'Predictive Modeling', 'Insights'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '09',
    category: 'risk',
    title: 'Cybersecurity Advisory',
    desc: 'Security assessments, risk frameworks, incident response planning, and compliance with data protection regulations.',
    tags: ['Cybersecurity', 'Risk Framework', 'Incident Response', 'Data Protection'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '10',
    category: 'hr',
    title: 'Change Management & Transformation',
    desc: 'Guiding organizations through major transitions with structured change management frameworks and stakeholder engagement strategies.',
    tags: ['Change Management', 'Transformation', 'Stakeholder Engagement', 'Culture'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '11',
    category: 'strategy',
    title: 'Market Research & Intelligence',
    desc: 'Deep market analysis, competitor intelligence, customer insights, and trend forecasting to inform strategic decisions.',
    tags: ['Market Research', 'Competitive Intel', 'Customer Insights', 'Forecasting'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '12',
    category: 'finance',
    title: 'Project Finance & Feasibility Studies',
    desc: 'Financial modeling, feasibility analysis, project funding strategies, and investment case development for capital-intensive projects.',
    tags: ['Project Finance', 'Feasibility', 'Financial Modeling', 'Investment'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc8079?auto=format&fit=crop&q=80&w=800',
  },
];

const stats = [
  { number: '50+', label: 'Consultants' },
  { number: '200+', label: 'Projects Completed' },
  { number: '15+', label: 'Industries Served' },
  { number: '95%', label: 'Client Satisfaction' },
];

const Advisory = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const observerRef = useRef(null);

  const filtered = activeCategory === 'all'
    ? advisoryServices
    : advisoryServices.filter(s => s.category === activeCategory);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('adv-visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.adv-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="adv-page">
      <ServicesNavbar />

      {/* ===== HERO ===== */}
      <section className="adv-hero">
        <div className="adv-container">
          <div className="adv-hero__inner adv-reveal">
            <span className="adv-eyebrow light">Strategic Advisory</span>
            <h1>Expert Guidance <br /> <span className="adv-highlight">For Complex Decisions.</span></h1>
            <p className="adv-hero__sub">
              Bravelion Advisory delivers world-class consulting services that combine deep industry 
              expertise with actionable insights to drive sustainable growth and competitive advantage.
            </p>
            <div className="adv-hero__actions">
              <a href="#advisory-grid" className="adv-btn-primary">Explore Services</a>
              <a href="/contact" className="adv-btn-outline">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="adv-stats-band adv-reveal">
        <div className="adv-container">
          <div className="adv-stats-grid">
            {stats.map((s, i) => (
              <div className="adv-stat-item" key={i}>
                <span className="adv-stat-num">{s.number}</span>
                <span className="adv-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="adv-portfolio" id="advisory-grid">
        <div className="adv-container">
          <div className="adv-portfolio__header adv-reveal">
            <span className="adv-eyebrow dark">Our Expertise</span>
            <h2 className="section-title">Advisory Services</h2>
            
            <div className="adv-filters">
              {advisoryCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`adv-filter ${activeCategory === cat.id ? 'adv-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="adv-portfolio__grid">
            {filtered.map((service) => (
              <div className="adv-portfolio-card adv-reveal" key={service.id}>
                <div className="adv-card-media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="adv-card-overlay">
                    <span className="adv-card-icon">{service.icon}</span>
                  </div>
                  <span className="adv-card-index">{service.id}</span>
                </div>
                <div className="adv-card-content">
                  <span className="adv-card-cat">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="adv-card-tags">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="adv-mini-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="/contact" className="adv-card-link">Discuss Your Needs →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY BLOCK ===== */}
      <section className="adv-methodology-block">
        <div className="adv-container">
          <div className="adv-methodology-inner">
            <div className="adv-methodology-text adv-reveal">
              <span className="adv-eyebrow light">Our Approach</span>
              <h2>Proven Methodology. <br />Tangible Results.</h2>
              <p>Our four-phase advisory framework ensures structured delivery, measurable outcomes, and lasting value for every client engagement.</p>
              <a href="/contact" className="adv-btn-primary">Learn More</a>
            </div>
            <div className="adv-methodology-grid-cards">
               {[
                { t: 'Discovery', d: 'Deep-dive assessment of your challenges, opportunities, and organizational context.' },
                { t: 'Strategy', d: 'Data-driven strategy development with clear roadmaps and success metrics.' },
                { t: 'Execution', d: 'Hands-on implementation support with regular progress reviews.' },
                { t: 'Optimization', d: 'Continuous refinement and knowledge transfer for lasting capability.' }
               ].map((item, i) => (
                 <div className="adv-method-card adv-reveal" key={i}>
                    <span className="method-num">0{i+1}</span>
                    <h4>{item.t}</h4>
                    <p>{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="adv-industries">
        <div className="adv-container">
          <div className="adv-industries__header adv-reveal">
            <span className="adv-eyebrow dark">Across Sectors</span>
            <h2>Industries We Serve</h2>
            <p className="adv-industries__sub">
              Our advisory expertise spans multiple sectors, delivering tailored solutions for unique industry challenges.
            </p>
          </div>
          <div className="adv-industries-grid">
            {[
              'Oil & Gas', 'Energy & Utilities', 'Financial Services', 
              'Telecommunications', 'Manufacturing', 'Healthcare', 
              'Real Estate', 'Technology', 'Government & Public Sector'
            ].map((industry, i) => (
              <div className="adv-industry-card adv-reveal" key={i}>
                <span className="adv-industry-icon">🏢</span>
                <span className="adv-industry-name">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="adv-cta">
        <div className="adv-container">
          <div className="adv-cta__inner adv-reveal">
            <div className="adv-cta__text">
              <span className="adv-eyebrow light">Start Your Journey</span>
              <h2>Ready to Transform <br />Your Business?</h2>
              <p>Let's discuss how our advisory expertise can help you achieve your strategic objectives.</p>
            </div>
            <div className="adv-cta__actions">
              <a href="/contact" className="adv-btn-primary">Schedule a Discovery Call</a>
            </div>
          </div>
        </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default Advisory;