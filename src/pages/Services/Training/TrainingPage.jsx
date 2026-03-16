/* eslint-disable no-unused-vars */
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
  const [activeFilter, setActiveFilter] = useState('all');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('td-in-view')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.td-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <ServicesNavbar />

      <div className="td-page">

        {/* ══ HERO ══ */}
        <section className="td-hero">
          <div className="td-hero__bg" />
          <div className="td-hero__content">

            <div className="td-hero__left">
              <div className="td-hero__eyebrow-row">
                <span className="td-eyebrow-tag">Training &amp; Development</span>
                <span className="td-eyebrow-tag td-eyebrow-tag--dim">Bravelion Holdings</span>
              </div>

              <h1 className="td-hero__title">
                Invest in Skills.<br />
                <em>Transform</em><br />
                Careers.
              </h1>

              <p className="td-hero__sub">
                Six specialized training divisions — digital skills, professional
                certification, vocational development, entrepreneurship, financial
                literacy, and health & safety — all under one institute.
              </p>

              <div className="td-hero__actions">
                <a href="/contact" className="td-btn td-btn--green">Enroll Today</a>
                <a href="#td-programs" className="td-btn td-btn--ghost">Browse Programs</a>
              </div>

              <div className="td-hero__badges">
                {programs.map(p => (
                  <span key={p.id} className="td-hero__badge">
                    <span>{p.icon}</span> {p.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="td-hero__right">
              {/* Stacked program cards preview */}
              <div className="td-hero__cards">
                {programs.slice(0, 3).map((p, i) => (
                  <div
                    key={p.id}
                    className="td-hero__card"
                    style={{
                      backgroundImage: `linear-gradient(rgba(7,26,14,0.65), rgba(7,26,14,0.85)), url(${p.image})`,
                      transform: `translateY(${i * 12}px) scale(${1 - i * 0.04})`,
                      zIndex: 3 - i,
                    }}
                  >
                    <span className="td-hero__card-icon">{p.icon}</span>
                    <span className="td-hero__card-label">{p.label}</span>
                    <span className="td-hero__card-id">{p.id}</span>
                  </div>
                ))}
                <div className="td-hero__card-stat">
                  <span className="td-hero__card-stat-num">500+</span>
                  <span className="td-hero__card-stat-label">Professionals Trained</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="td-stats td-reveal">
          <div className="td-stats__inner">
            {stats.map((s, i) => (
              <div className="td-stat" key={i}>
                <span className="td-stat__num">{s.num}</span>
                <span className="td-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ INTRO ══ */}
        <section className="td-intro td-reveal">
          <div className="td-intro__inner">
            <div className="td-intro__left">
              <div className="td-bar" />
              <h2>A Full Training Ecosystem<br />for Every Professional.</h2>
              <p>
                Whether you are an individual seeking career advancement, a corporate
                team building capacity, or an organization meeting regulatory training
                requirements — our institute has a program built for your needs.
              </p>
              <a href="/contact" className="td-text-link">Request a training brochure <span>→</span></a>
            </div>
            <div className="td-intro__right">
              <div className="td-outcomes-grid">
                {outcomes.map((o, i) => (
                  <div className="td-outcome" key={i}>
                    <span className="td-outcome__icon">{o.icon}</span>
                    <h4>{o.title}</h4>
                    <p>{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROGRAMS ══ */}
        <section className="td-programs" id="td-programs">
          <div className="td-programs__header td-reveal">
            <div className="td-bar" />
            <h2>Our Training Programs</h2>
            <p>Six divisions. Hundreds of professionals trained. One trusted institute.</p>
          </div>

          {/* Program selector */}
          <div className="td-selector td-reveal">
            {programs.map((p, i) => (
              <button
                key={p.id}
                className={`td-selector__btn ${activeProgram === i ? 'active' : ''}`}
                onClick={() => setActiveProgram(i)}
              >
                <span className="td-selector__icon">{p.icon}</span>
                <span className="td-selector__label">{p.label}</span>
                <span className="td-selector__id">{p.id}</span>
              </button>
            ))}
          </div>

          {/* Program panels */}
          <div className="td-panel-wrap">
            {programs.map((p, i) => (
              <div
                key={p.id}
                id={p.anchor}
                className={`td-panel ${activeProgram === i ? 'td-panel--active' : ''}`}
              >
                <div className="td-panel__image-side">
                  <div
                    className="td-panel__image"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="td-panel__image-num">{p.id}</div>
                  <div className="td-panel__image-icon">{p.icon}</div>
                </div>

                <div className="td-panel__text-side">
                  <span className="td-panel__eyebrow">{p.label}</span>
                  <h3 className="td-panel__title">{p.title}</h3>
                  <p className="td-panel__desc">{p.desc}</p>

                  <div className="td-panel__highlights">
                    <p className="td-panel__hl-head">Program coverage:</p>
                    <ul>
                      {p.highlights.map((h, j) => (
                        <li key={j}>
                          <span className="td-check">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="td-panel__tags">
                    {p.tags.map(t => <span key={t} className="td-tag">{t}</span>)}
                  </div>

                  <div className="td-panel__btns">
                    <a href="/contact" className="td-btn td-btn--green">Enroll in This Program</a>
                    <a href="/contact" className="td-btn td-btn--outline">Request Brochure</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ VISUAL BREAK ══ */}
        <section className="td-visual-break">
          <div className="td-visual-break__img" />
          <div className="td-visual-break__content">
            <blockquote>
              "At Bravelion, we believe professional development is not a one-time event
              — it's a continuous journey toward excellence."
            </blockquote>
            <a href="/contact" className="td-btn td-btn--ghost-light">Start Your Journey</a>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="td-cta td-reveal">
          <div className="td-cta__inner">
            <span className="td-cta__eyebrow">Ready to Learn?</span>
            <h2>Advance Your Career<br />with Bravelion Training.</h2>
            <p>
              Enroll in one of our professional development programs and gain
              the competitive edge your career deserves.
            </p>
            <div className="td-cta__btns">
              <a href="/contact" className="td-btn td-btn--green">Enroll Now</a>
              <a href="/services" className="td-btn td-btn--outline-dark">All Services</a>
            </div>
          </div>
        </section>

      </div>

      <ServicesFooter />
    </>
  );
};

export default TrainingDevPage;