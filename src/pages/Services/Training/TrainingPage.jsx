import React, { useEffect, useRef, useState } from 'react';
import ServicesNavbar from '../components/Navbar/Navbar';
import ServicesFooter from '../components/Footer/Footer';
import './Training.css';

const programs = [
  {
    id: 'J',
    anchor: 'ict',
    icon: '💻',
    label: 'ICT & Digital Skills',
    title: 'ICT, Digital Skills & Innovation Trainings',
    desc: 'Future-ready digital skills training covering software productivity tools, cybersecurity fundamentals, data literacy, cloud computing, and technology-driven innovation for professionals across all industries.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Software tools & productivity training',
      'Cybersecurity awareness & fundamentals',
      'Data analysis & visualization workshops',
      'Digital transformation strategy programs',
    ],
    tags: ['ICT', 'Digital Skills', 'Cybersecurity', 'Data Literacy', 'Cloud', 'Innovation'],
  },
  {
    id: 'K',
    anchor: 'certification',
    icon: '🎓',
    label: 'Certification Programs',
    title: 'Certification & Skills Upgrading Programs',
    desc: 'Structured certification pathways and skills upgrading programs aligned with industry standards and regulatory requirements — preparing professionals for globally recognized qualifications across multiple sectors.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Industry-recognized certification preparation',
      'Skills gap assessment & planning',
      'Exam readiness coaching & mock tests',
      'Post-certification career support',
    ],
    tags: ['Professional Certification', 'Skills Upgrading', 'Industry Standards', 'Compliance', 'Assessment'],
  },
  {
    id: 'M',
    anchor: 'vocational',
    icon: '🔧',
    label: 'Vocational Development',
    title: 'Vocational & Professional Capacity Development',
    desc: 'Practical vocational training and professional capacity building programs designed to close skills gaps and build a competent, job-ready workforce for industry, enterprise, and community development.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Trade & technical skills training',
      'Apprenticeship & mentorship programs',
      'Workplace competency development',
      'Corporate capacity building engagements',
    ],
    tags: ['Vocational Training', 'Capacity Building', 'Workforce', 'Trade Skills', 'Job Readiness'],
  },
  {
    id: 'C',
    anchor: 'entrepreneurship',
    icon: '📊',
    label: 'Entrepreneurship & Business',
    title: 'Entrepreneurship, Business Management & ICT',
    desc: 'Empowering entrepreneurs and business leaders with practical training in business strategy, management systems, financial planning, and digital technology integration to build resilient, growth-oriented enterprises.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Business planning & strategy development',
      'SME development & growth programs',
      'Financial management & planning training',
      'Leadership & management skills',
    ],
    tags: ['Entrepreneurship', 'Business Management', 'Strategy', 'Leadership', 'SME Development'],
  },
  {
    id: 'O',
    anchor: 'financial',
    icon: '📈',
    label: 'Investment & Finance',
    title: 'Investment & Financial Literacy Trainings',
    desc: 'Practical investment and financial literacy programs equipping individuals and organizations to make informed financial decisions, manage risk intelligently, and build sustainable long-term wealth.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Personal financial planning fundamentals',
      'Investment strategy & portfolio analysis',
      'Risk management & financial protection',
      'Corporate financial literacy programs',
    ],
    tags: ['Investment', 'Financial Literacy', 'Wealth Management', 'Risk Management', 'Personal Finance'],
  },
  {
    id: 'P',
    anchor: 'hse',
    icon: '🛡',
    label: 'Health, Safety & Wellness',
    title: 'Health, Safety & Wellness Trainings',
    desc: 'Comprehensive HSE and wellness training programs covering workplace safety standards, emergency response procedures, mental health awareness, and regulatory health compliance for organizations across all sectors.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Workplace HSE compliance programs',
      'Emergency response & first aid training',
      'Mental health & wellness awareness',
      'Safety management systems development',
    ],
    tags: ['HSE Training', 'Workplace Safety', 'Emergency Response', 'Wellness', 'Regulatory Compliance'],
  },
];

const stats = [
  { num: '6', label: 'Training Divisions' },
  { num: '500+', label: 'Professionals Trained' },
  { num: '95%', label: 'Completion Rate' },
  { num: '100%', label: 'Industry-Relevant' },
];

const outcomes = [
  { icon: '🎯', title: 'Practical Skills', desc: 'Every program is built around real-world application, not just theory.' },
  { icon: '📋', title: 'Industry Alignment', desc: 'Curricula co-developed with sector professionals and regulatory frameworks.' },
  { icon: '🏅', title: 'Recognized Outcomes', desc: 'Certificates and qualifications recognized by employers and institutions.' },
  { icon: '🔄', title: 'Continuous Learning', desc: 'Structured pathways that grow with your career and organization.' },
];

const TrainingDevPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);
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
    <div className="cert-page td-theme">
      <ServicesNavbar />

      {/* ══ ORGANIC HERO ══ */}
      <section className="td-hero-wrap">
        <div className="td-hero-blob" />
        <div className="cert-container">
          <div className="td-hero-grid cert-reveal">
            <div className="td-hero-info">
              <span className="cert-eyebrow dark">Institute of Professional Growth</span>
              <h1 className="td-main-title">Invest in Skills. <br /><em>Transform</em> <br />Careers.</h1>
              <p className="cert-hero__sub">
                Bridging the gap between theory and industry expertise through six specialized 
                training divisions designed for the modern Nigerian professional.
              </p>
              <div className="td-hero-btns">
                <a href="/contact" className="td-btn-solid">Enroll Today</a>
                <a href="#td-programs" className="td-btn-text">Browse Curricula <span>↓</span></a>
              </div>
            </div>

            <div className="td-hero-stack">
              {programs.slice(0, 3).map((p, i) => (
                <div key={p.id} className={`td-stack-card card-${i}`}>
                   <img src={p.image} alt={p.label} />
                   <div className="td-card-overlay">
                      <span className="td-card-icon">{p.icon}</span>
                      <span className="td-card-name">{p.label}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ LEARNING STATS ══ */}
      <section className="td-stats-section cert-reveal">
        <div className="cert-container">
          <div className="td-stats-grid">
            {stats.map((s, i) => (
              <div className="td-stat-box" key={i}>
                <span className="td-stat-num">{s.num}</span>
                <span className="td-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUTCOMES SECTION ══ */}
      <section className="td-outcomes cert-reveal">
        <div className="cert-container">
          <div className="td-section-header">
             <span className="cert-eyebrow dark">The Bravelion Advantage</span>
             <h2>A Full Training Ecosystem</h2>
          </div>
          <div className="td-outcome-cards">
             {outcomes.map((o, i) => (
               <div className="td-outcome-item" key={i}>
                  <div className="td-outcome-icon">{o.icon}</div>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ══ PROGRAM SELECTOR ══ */}
      <section className="td-programs-main" id="td-programs">
        <div className="cert-container">
          <div className="td-tabs-container cert-reveal">
            {programs.map((p, i) => (
              <button 
                key={p.id} 
                className={`td-tab ${activeProgram === i ? 'active' : ''}`}
                onClick={() => setActiveProgram(i)}
              >
                <span className="td-tab-idx">{p.id}</span>
                <span className="td-tab-label">{p.label}</span>
              </button>
            ))}
          </div>

          <div className="td-active-panel cert-reveal">
            {programs.map((p, i) => (
              <div key={p.id} className={`td-panel-content ${activeProgram === i ? 'active' : ''}`}>
                <div className="td-panel-inner">
                  <div className="td-panel-text">
                    <span className="td-panel-tag">{p.label}</span>
                    <h3>{p.title}</h3>
                    <p className="td-panel-p">{p.desc}</p>
                    
                    <div className="td-highlights-list">
                      {p.highlights.map((h, j) => (
                        <div className="td-hl-item" key={j}>
                          <span className="td-bullet"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="td-panel-footer">
                       <div className="td-tag-wrap">
                          {p.tags.map(t => <span key={t} className="td-mini-tag">{t}</span>)}
                       </div>
                       <a href="/contact" className="td-btn-solid">Enroll Now</a>
                    </div>
                  </div>
                  <div className="td-panel-image">
                    <img src={p.image} alt={p.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOURNEY BREAK ══ */}
      <section className="td-quote-break">
         <div className="cert-container cert-reveal">
            <blockquote>
              "At Bravelion, we believe professional development is not a one-time event — 
              it's a continuous journey toward excellence."
            </blockquote>
         </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default TrainingDevPage;