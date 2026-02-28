import React from 'react';
import './Training.css';

const Training = () => {
  const pillars = [
    {
      title: "Industry-Focused Training Programs",
      desc: "We deliver practical, industry-aligned training programs designed to equip professionals with real-world skills across engineering, real estate, project management, safety, and business operations.",
      image: "https://images.unsplash.com/photo-1581091870627-3f5de3b0b3d1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Certified Professional Development",
      desc: "Our courses prepare participants for globally recognized certifications while strengthening technical competence, leadership capacity, and regulatory awareness.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Workforce Readiness & Capacity Building",
      desc: "Through hands-on workshops, simulations, and mentorship programs, we build workforce confidence, improve operational performance, and drive measurable productivity growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="hse-page">
      {/* --- HERO SECTION --- */}
      <section className="hse-hero">
        <div className="hse-hero-overlay">
          <div className="service-badge">Bravelion Training Institute</div>
          <h1 className="hse-title">
            Building Skills. <br />
            <span className="text-highlight">Empowering Futures.</span>
          </h1>
          <p className="hse-subtitle">
            At Bravelion, we provide transformative training programs that develop
            technical expertise, leadership excellence, and workforce readiness
            across multiple industries.
          </p>
        </div>
      </section>

      <div className="body-wrapper">
        {/* --- PERFORMANCE METRICS --- */}
        <section className="hse-stats-container">
          <div className="hse-stats-grid">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Professionals Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Completion Rate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Industry-Relevant Curriculum</span>
            </div>
          </div>
        </section>

        {/* --- CORE TRAINING PILLARS --- */}
        <section className="pillars-section">
          <div className="section-intro">
            <div className="blue-anchor-bar"></div>
            <h2>Our Training Pillars</h2>
            <p>
              A structured approach to professional development that ensures
              competence, compliance, and career growth.
            </p>
          </div>
          
          <div className="pillar-grid">
            {pillars.map((pillar, i) => (
              <div key={i} className="pillar-card">
                <div 
                  className="pillar-image" 
                  style={{ backgroundImage: `url(${pillar.image})` }}
                ></div>
                <div className="pillar-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROGRAM AREAS --- */}
        <section className="compliance-feature">
          <div className="compliance-content">
            <div className="blue-anchor-bar"></div>
            <h2>Our Program Areas</h2>
            <p className="main-p">
              Bravelion offers specialized training programs tailored to meet
              evolving industry demands and regulatory requirements.
            </p>
            
            <div className="compliance-list">
              <div className="check-item"><span>✓</span> Health, Safety & Environmental (HSE) Training</div>
              <div className="check-item"><span>✓</span> Engineering & Technical Certification Programs</div>
              <div className="check-item"><span>✓</span> Real Estate Development & Property Management</div>
              <div className="check-item"><span>✓</span> Project Management & Leadership Development</div>
              <div className="check-item"><span>✓</span> Business Strategy & Entrepreneurship</div>
            </div>
          </div>
          <div className="compliance-visual">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
              alt="Professional training session" 
            />
            <div className="floating-badge">Certified & Industry-Aligned</div>
          </div>
        </section>

        {/* --- ENROLLMENT CTA --- */}
        <section className="hse-footer-cta">
          <div className="cta-inner">
            <h3>Advance Your Career with Bravelion</h3>
            <p>Enroll in one of our professional training programs today and gain the competitive edge you deserve.</p>
            <a href="/Contact" className="cta-button">Request Course Brochure</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;