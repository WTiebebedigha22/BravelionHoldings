import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Certifications.css';

const certs = [
  { code: 'NEBOSH IGC', area: 'Health & Safety', icon: '⛑', title: 'NEBOSH International General Certificate', desc: 'The globally recognised HSE qualification for health and safety professionals. Covers risk assessment, hazard management, and workplace safety law.' },
  { code: 'ISO 45001',  area: 'Health & Safety', icon: '🔒', title: 'ISO 45001 Lead Implementer',                desc: 'Full implementation training for the international occupational health and safety management system standard — audit-ready certification.' },
  { code: 'PMP',        area: 'Project Mgmt',    icon: '📋', title: 'Project Management Professional (PMP)',    desc: 'Preparation for the PMI PMP certification — covering project initiation, planning, execution, monitoring, and closure frameworks.' },
  { code: 'CompTIA',    area: 'ICT',             icon: '💻', title: 'CompTIA IT Fundamentals+',                 desc: 'Entry-level IT certification covering hardware, software, networking, and security concepts for non-technical and technical professionals.' },
  { code: 'IOSH',       area: 'Health & Safety', icon: '🛡',  title: 'IOSH Managing Safely',                    desc: 'Practical safety management training for line managers and supervisors — one of the most widely held safety qualifications globally.' },
  { code: 'CPA',        area: 'Finance',         icon: '📊', title: 'Certified Public Accountant (CPA) Prep',  desc: 'Structured preparation for the CPA examination covering auditing, financial accounting, regulation, and business environment concepts.' },
  { code: 'COREN',      area: 'Engineering',     icon: '⚙️', title: 'COREN Registration Prep (Nigeria)',        desc: 'Preparation support for the Council for the Regulation of Engineering in Nigeria — covering professional practice and competency requirements.' },
  { code: 'Six Sigma',  area: 'Operations',      icon: '📈', title: 'Lean Six Sigma Green Belt',               desc: 'Process improvement methodology training covering DMAIC, waste elimination, statistical analysis tools, and quality management frameworks.' },
];

const areas = ['All', 'Health & Safety', 'ICT', 'Project Mgmt', 'Finance', 'Engineering', 'Operations'];

const CertificationsPage = () => {
  const [area, setArea] = useState('All');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('tp-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.tp-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = certs.filter(c => area === 'All' || c.area === area);

  return (
    <>
      <TrainingNavbar />
      <div className="tp">

        <section className="tp-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner">
            <div className="tp-hero__label">🎓 Professional Certifications</div>
            <h1 className="tp-hero__title">Get Certified.<br /><em>Get Ahead.</em></h1>
            <p className="tp-hero__sub">Preparation programs for globally recognised professional certifications — aligned with international standards and delivered by certified practitioners.</p>
            <div className="tp-hero__actions">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Enroll in a Cert Program</a>
              <a href="#cert-list" className="tp-btn tp-btn--ghost">Browse Certifications</a>
            </div>
          </div>
        </section>

        <div className="tp-stats tp-reveal">
          {[['8+','Cert Programs'],['100%','Exam-Aligned'],['Global','Recognition'],['Expert','Facilitators']].map(([n,l]) => (
            <div className="tp-stat" key={l}><span className="tp-stat__num">{n}</span><span className="tp-stat__label">{l}</span></div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="cert-process-bg tp-reveal">
          <div className="cert-process">
            <div className="cert-process__header">
              <div className="tp-bar" />
              <h2>Our Certification Pathway</h2>
              <p>From skills gap to certified professional — in four structured steps.</p>
            </div>
            <div className="cert-steps">
              {[
                { step: '01', title: 'Assessment',   desc: 'We assess your current knowledge and identify gaps relative to the certification standard.' },
                { step: '02', title: 'Structured Training', desc: 'Instructor-led sessions covering all exam topics with practice questions and case studies.' },
                { step: '03', title: 'Exam Preparation', desc: 'Mock exams, revision clinics, and coaching from certified facilitators ahead of your exam date.' },
                { step: '04', title: 'Certification', desc: 'Sit your exam with confidence. Receive your internationally recognised certificate upon passing.' },
              ].map(s => (
                <div className="cert-step" key={s.step}>
                  <span className="cert-step__num">{s.step}</span>
                  <h4 className="cert-step__title">{s.title}</h4>
                  <p className="cert-step__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CERT LIST */}
        <section className="tp-section" id="cert-list">
          <div className="tp-section__header tp-reveal">
            <div className="tp-bar" /><h2>Certification Programs</h2>
            <p>Filter by professional area.</p>
          </div>

          <div className="cert-filters tp-reveal">
            {areas.map(a => (
              <button key={a} className={`courses-filter ${area === a ? 'courses-filter--active' : ''}`} onClick={() => setArea(a)}>{a}</button>
            ))}
          </div>

          <div className="cert-grid tp-reveal">
            {filtered.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-card__header">
                  <span className="cert-card__icon">{c.icon}</span>
                  <span className="cert-card__code">{c.code}</span>
                </div>
                <span className="tp-tag" style={{ marginBottom: '10px' }}>{c.area}</span>
                <h3 className="cert-card__title">{c.title}</h3>
                <p className="cert-card__desc">{c.desc}</p>
                <a href="/training/enroll" className="cert-card__cta">Enroll in Prep Program →</a>
              </div>
            ))}
          </div>
        </section>

        <div className="tp-cta-strip tp-reveal">
          <div className="tp-cta-strip__inner">
            <span className="tp-cta-strip__eye">Next Step</span>
            <h2>Your Certification<br />Journey Starts Here.</h2>
            <p>Enroll in a preparation program and let our certified facilitators guide you to success.</p>
            <div className="tp-cta-strip__btns">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Enroll Now</a>
              <a href="/contact" className="tp-btn tp-btn--ghost">Speak to an Advisor</a>
            </div>
          </div>
        </div>
      </div>
      <TrainingFooter />
    </>
  );
};

export default CertificationsPage;