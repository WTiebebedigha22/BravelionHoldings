import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import ServicesNavbar from "./components/Navbar/Navbar";
import ServicesFooter from "./components/Footer/Footer";

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'training', label: 'Training' },
  { id: 'energy', label: 'Energy' },
  { id: 'business', label: 'Business' },
];

const services = [
  {
    id: 'A',
    category: 'engineering',
    title: 'Electrical, Civil & Mechanical Services',
    desc: 'Comprehensive engineering services spanning electrical systems, civil infrastructure, mechanical operations, and industrial equipment supply and maintenance.',
    tags: ['Electrical', 'Civil Works', 'Mechanical', 'Equipment Supply', 'Maintenance'],
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    icon: '⚡',
  },
  {
    id: 'B',
    category: 'training',
    title: 'Professional Training & Consultancy — Oil & Gas',
    desc: 'Specialized training and consultancy programs built for the oil and gas sector, covering field operations, energy systems, and technical compliance.',
    tags: ['Oil & Gas', 'Field Operations', 'Energy Training', 'Technical Consultancy'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    icon: '🛢',
  },
  {
    id: 'C',
    category: 'business',
    title: 'Entrepreneurship, Business Management & ICT',
    desc: 'Empowering entrepreneurs and business leaders with practical training in business strategy, management systems, and digital technology integration.',
    tags: ['Entrepreneurship', 'Business Management', 'ICT', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    icon: '📊',
  },
  {
    id: 'D',
    category: 'energy',
    title: 'Electrical Facilities & Projects Installation',
    desc: 'End-to-end electrical project delivery including rural and urban electrification, power distribution networks, automation controls, and solar/inverter systems.',
    tags: ['Electrification', 'Solar Systems', 'Inverter', 'Automation', 'Power Distribution'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    icon: '🔌',
  },
  {
    id: 'E',
    category: 'engineering',
    title: 'Construction & Civil Works',
    desc: 'Full-scope construction and civil engineering services from groundworks and structural builds to finishing — delivered on time, on budget, and to spec.',
    tags: ['Construction', 'Civil Engineering', 'Structural Works', 'Project Delivery'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    icon: '🏗',
  },
  {
    id: 'F',
    category: 'business',
    title: 'Transportation & Logistics Services',
    desc: 'Reliable transportation and logistics solutions for goods and personnel, supporting industrial operations, project sites, and commercial supply chains.',
    tags: ['Transportation', 'Logistics', 'Supply Chain', 'Fleet Management'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    icon: '🚛',
  },
  {
    id: 'G',
    category: 'business',
    title: 'Import & Export of Goods and Services',
    desc: 'End-to-end import and export facilitation, including trade documentation, customs compliance, and international procurement support.',
    tags: ['Import', 'Export', 'Trade', 'Procurement', 'Customs'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
    icon: '🌍',
  },
  {
    id: 'H',
    category: 'engineering',
    title: 'Waste Management Solutions',
    desc: 'Sustainable and compliant waste management services for industrial, commercial, and community environments — including collection, treatment, and disposal.',
    tags: ['Waste Management', 'Environmental', 'Sustainability', 'Industrial Waste'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    icon: '♻',
  },
  {
    id: 'I',
    category: 'energy',
    title: 'Oil & Gas Field Operations & Energy Training',
    desc: 'Hands-on operational training for oil and gas field environments — covering safety protocols, energy management, equipment handling, and technical upskilling.',
    tags: ['Oil & Gas', 'Field Operations', 'Energy', 'Technical Training'],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800',
    icon: '⛽',
  },
  {
    id: 'J',
    category: 'training',
    title: 'ICT, Digital Skills & Innovation Trainings',
    desc: 'Future-ready digital skills training covering software tools, cybersecurity fundamentals, data literacy, and technology-driven innovation for professionals.',
    tags: ['ICT', 'Digital Skills', 'Cybersecurity', 'Innovation', 'Data'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    icon: '💻',
  },
  {
    id: 'K',
    category: 'training',
    title: 'Certification & Skills Upgrading Programs',
    desc: 'Structured certification pathways and skills upgrading programs aligned with industry standards and regulatory requirements across multiple sectors.',
    tags: ['Certification', 'Skills Upgrading', 'Professional Development', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    icon: '🎓',
  },
  {
    id: 'L',
    category: 'energy',
    title: 'Consultancy in Energy',
    desc: 'Strategic energy consultancy services supporting project feasibility, energy audits, renewable integration, and regulatory compliance for energy sector clients.',
    tags: ['Energy Consultancy', 'Feasibility', 'Renewables', 'Audit', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    icon: '💡',
  },
  {
    id: 'M',
    category: 'training',
    title: 'Vocational & Professional Capacity Development',
    desc: 'Practical vocational training and professional capacity building programs designed to close skills gaps and build a competent, job-ready workforce.',
    tags: ['Vocational Training', 'Capacity Building', 'Workforce', 'Skills Development'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    icon: '🔧',
  },
  {
    id: 'N',
    category: 'business',
    title: 'Catering, Event Management & General Contracting',
    desc: 'Full-service catering, professional event management, and general contracting for corporate, industrial, and community projects of all scales.',
    tags: ['Catering', 'Event Management', 'General Contracting', 'Corporate Events'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
    icon: '🎪',
  },
  {
    id: 'O',
    category: 'training',
    title: 'Investment & Financial Literacy Trainings',
    desc: 'Practical investment and financial literacy programs equipping individuals and organizations to make informed financial decisions and build long-term wealth.',
    tags: ['Investment', 'Financial Literacy', 'Wealth Management', 'Personal Finance'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    icon: '📈',
  },
  {
    id: 'P',
    category: 'training',
    title: 'Health, Safety & Wellness Trainings',
    desc: 'Comprehensive HSE and wellness training programs covering workplace safety, emergency response, mental health awareness, and regulatory health standards.',
    tags: ['HSE', 'Workplace Safety', 'Wellness', 'Emergency Response', 'Health'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800',
    icon: '🛡',
  },
];

const stats = [
  { number: '16+', label: 'Service Divisions' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '10+', label: 'Years of Excellence' },
  { number: '98%', label: 'Client Retention Rate' },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const observerRef = useRef(null);

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    // Re-observe after filter changes
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach(el => {
        observerRef.current?.observe(el);
      });
    }, 50);
  }, [activeCategory]);

  return (
    <>
      <ServicesNavbar />

      <div className="sv-page">

        {/* ===== HERO ===== */}
        <section className="sv-hero">
          <div className="sv-hero__bg" />
          <div className="sv-hero__content">
            <span className="sv-hero__eyebrow">Bravelion Holdings — Service Portfolio</span>
            <h1 className="sv-hero__title">
              Diversified. <br />
              <em>Integrated.</em> <br />
              Delivered.
            </h1>
            <p className="sv-hero__sub">
              From electrical engineering and energy consultancy to professional
              training, logistics, and civil construction — Bravelion delivers
              across 16 service divisions with measurable results.
            </p>
            <div className="sv-hero__actions">
              <a href="/contact" className="sv-btn sv-btn--blue">Speak to an Expert</a>
              <a href="#services-grid" className="sv-btn sv-btn--outline">Explore Services</a>
            </div>
          </div>
          <div className="sv-hero__index-strip">
            {services.slice(0, 8).map(s => (
              <span key={s.id} className="sv-hero__index-item">{s.id}. {s.title.split(' ').slice(0, 3).join(' ')}</span>
            ))}
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="sv-stats reveal">
          <div className="sv-stats__inner">
            {stats.map((s, i) => (
              <div className="sv-stat" key={i}>
                <span className="sv-stat__num">{s.number}</span>
                <span className="sv-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="sv-intro reveal">
          <div className="sv-intro__inner">
            <div className="sv-intro__left">
              <div className="sv-anchor-bar" />
              <h2>One Trusted Partner. <br />Across Every Sector.</h2>
            </div>
            <div className="sv-intro__right">
              <p>
                Bravelion Holdings operates as a multidisciplinary solutions
                provider, delivering engineering, energy, training, logistics,
                and consultancy services to government bodies, private enterprises,
                and communities across Nigeria and beyond.
              </p>
              <p>
                Our integrated model means clients benefit from a single
                accountable partner — reducing procurement complexity while
                gaining access to a full spectrum of technical and professional expertise.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="sv-grid-section" id="services-grid">
          <div className="sv-grid-section__header reveal">
            <div className="sv-anchor-bar" />
            <h2>Our Service Portfolio</h2>
            <p>16 integrated service divisions built to solve real problems.</p>
          </div>

          {/* Filter Tabs */}
          <div className="sv-filters reveal">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`sv-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="sv-grid">
            {filtered.map((service, i) => (
              <div
                className="sv-card reveal"
                key={service.id}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div
                  className="sv-card__image"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(10,22,40,0.75)), url(${service.image})`
                  }}
                >
                  <span className="sv-card__letter">{service.id}</span>
                  <span className="sv-card__icon">{service.icon}</span>
                </div>
                <div className="sv-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="sv-card__tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="sv-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="/contact" className="sv-card__link">
                    Enquire <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== STANDARDS BAND ===== */}
        <section className="sv-standards reveal">
          <div className="sv-standards__inner">
            <div className="sv-standards__left">
              <div className="sv-anchor-bar" />
              <h2>Governed by Standards. <br />Driven by Results.</h2>
              <p>
                Every service we deliver is backed by regulatory compliance,
                quality assurance processes, and a culture of accountability
                that puts client outcomes first.
              </p>
              <a href="/contact" className="sv-btn sv-btn--blue" style={{ marginTop: '32px', display: 'inline-flex' }}>
                Request Company Profile
              </a>
            </div>
            <div className="sv-standards__grid">
              {[
                { label: 'Regulatory Compliance', desc: 'Aligned with national and sector-specific regulatory frameworks.' },
                { label: 'Quality Assurance', desc: 'Structured QA/QC processes on every engagement.' },
                { label: 'HSE Integration', desc: 'Safety embedded into every project and service delivery.' },
                { label: 'Client Accountability', desc: 'Clear reporting, milestones, and outcome tracking.' },
              ].map((item, i) => (
                <div className="sv-standard-card" key={i}>
                  <span className="sv-standard-card__num">0{i + 1}</span>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="sv-cta reveal">
          <div className="sv-cta__inner">
            <span className="sv-cta__eyebrow">Work With Us</span>
            <h2>Ready to Start a Project <br />or Enroll in a Program?</h2>
            <p>
              Whether you need an engineering solution, a training program,
              or a strategic consultant — our team is ready to deliver.
            </p>
            <div className="sv-cta__buttons">
              <a href="/contact" className="sv-btn sv-btn--blue">Get in Touch</a>
              <a href="/about" className="sv-btn sv-btn--ghost">About Bravelion</a>
            </div>
          </div>
        </section>

      </div>

      <ServicesFooter />
    </>
  );
};

export default Services;