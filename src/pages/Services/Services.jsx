import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import ServicesNavbar from "./components/Navbar/Navbar";
import ServicesFooter from "./components/Footer/Footer";

const categories = [
  { id: 'all', label: 'Complete Portfolio' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'training', label: 'Professional Development' },
  { id: 'energy', label: 'Energy & Power' },
  { id: 'business', label: 'Strategic Operations' },
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
  { number: '500+', label: 'Engagements' },
  { number: '10+', label: 'Years Experience' },
  { number: '98%', label: 'Retention' },
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
          if (entry.isIntersecting) entry.target.classList.add('cert-visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="cert-page">
      <ServicesNavbar />

      {/* ===== HERO ===== */}
      <section className="cert-hero sv-hero-custom">
        <div className="cert-container">
          <div className="cert-hero__inner cert-reveal">
            <span className="cert-eyebrow light">Core Competencies</span>
            <h1>Multidisciplinary <br /> <span className="cert-highlight">Excellence.</span></h1>
            <p className="cert-hero__sub">
              Bravelion Holdings operates at the intersection of technical precision and strategic 
              foresight, delivering integrated solutions across 16 specialized divisions.
            </p>
            <div className="cert-hero__actions">
              <a href="#services-grid" className="cert-btn-primary">Explore Portfolio</a>
              <a href="/contact" className="cert-btn-outline">Corporate Inquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="sv-stats-band cert-reveal">
        <div className="cert-container">
          <div className="sv-stats-grid">
            {stats.map((s, i) => (
              <div className="sv-stat-item" key={i}>
                <span className="sv-stat-num">{s.number}</span>
                <span className="sv-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="sv-portfolio" id="services-grid">
        <div className="cert-container">
          <div className="sv-portfolio__header cert-reveal">
            <span className="cert-eyebrow dark">Selection</span>
            <h2 className="section-title">Industrial Solutions</h2>
            
            <div className="cert-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`cert-filter ${activeCategory === cat.id ? 'cert-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sv-portfolio__grid">
            {filtered.map((service) => (
              <div className="sv-portfolio-card cert-reveal" key={service.id}>
                <div className="sv-card-media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="sv-card-overlay">
                    <span className="sv-card-icon">{service.icon}</span>
                  </div>
                  <span className="sv-card-index">{service.id}</span>
                </div>
                <div className="sv-card-content">
                  <span className="sv-card-cat">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="sv-card-tags">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="sv-mini-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="/contact" className="sv-card-link">Request Consultation →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STANDARDS (NAVY BLOCK) ===== */}
      <section className="sv-standards-block">
        <div className="cert-container">
          <div className="sv-standards-inner">
            <div className="sv-standards-text cert-reveal">
              <span className="cert-eyebrow light">Operational Rigor</span>
              <h2>Global Standards. <br />Local Impact.</h2>
              <p>Every engagement is governed by rigorous QA/QC protocols and international safety benchmarks.</p>
              <a href="/contact" className="cert-btn-primary">Company Profile</a>
            </div>
            <div className="sv-standards-grid-cards">
               {[
                { t: 'Compliance', d: 'Aligned with national regulatory frameworks.' },
                { t: 'Quality Control', d: 'Structured QA processes on every project.' },
                { t: 'Safety First', d: 'HSE protocols embedded in our DNA.' },
                { t: 'Integrity', d: 'Transparent reporting and accountability.' }
               ].map((item, i) => (
                 <div className="sv-rigor-card cert-reveal" key={i}>
                    <span className="rigor-num">0{i+1}</span>
                    <h4>{item.t}</h4>
                    <p>{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cert-cta">
        <div className="cert-container">
          <div className="cert-cta__inner cert-reveal">
            <div className="cert-cta__text">
              <span className="cert-eyebrow light">Contact Us</span>
              <h2>Partner With Excellence.</h2>
              <p>Let's discuss how our multidisciplinary team can support your objectives.</p>
            </div>
            <div className="cert-cta__actions">
              <a href="/contact" className="cert-btn-primary">Initiate Discussion</a>
            </div>
          </div>
        </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default Services;