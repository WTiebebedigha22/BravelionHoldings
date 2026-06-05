import React, { useEffect, useRef, useState } from 'react';
import './Consulting.css';
import ServicesNavbar from "../components/Navbar/Navbar";
import ServicesFooter from "../components/Footer/Footer";

const Consulting = () => {
  const [activeTab, setActiveTab] = useState('approach');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('consult-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.consult-reveal').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const practices = [
    {
      id: 1,
      title: 'Strategy & Growth',
      color: '#DAA520',
      description: 'Transform your business with data-driven strategies that unlock new markets, drive revenue, and create sustainable competitive advantage.',
      capabilities: ['Market Entry Strategy', 'Corporate Transformation', 'Growth Acceleration', 'M&A Advisory'],
      caseStudy: 'Helped a manufacturing firm increase revenue by 156% in 18 months'
    },
    {
      id: 2,
      title: 'Operations Excellence',
      color: '#0a1f44',
      description: 'Optimize your operations, reduce costs, and improve efficiency through lean methodologies and process reengineering.',
      capabilities: ['Supply Chain Optimization', 'Process Improvement', 'Cost Reduction', 'Quality Management'],
      caseStudy: 'Reduced operational costs by 32% for a logistics company'
    },
    {
      id: 3,
      title: 'Digital Innovation',
      color: '#DAA520',
      description: 'Leverage cutting-edge technology to modernize your business, enhance customer experiences, and drive digital transformation.',
      capabilities: ['Digital Strategy', 'AI & Automation', 'Cloud Migration', 'Customer Experience'],
      caseStudy: 'Digitally transformed a retail chain resulting in 45% efficiency gain'
    },
    {
      id: 4,
      title: 'Risk & Compliance',
      color: '#0a1f44',
      description: 'Navigate complex regulatory landscapes with comprehensive risk management frameworks and compliance solutions.',
      capabilities: ['Enterprise Risk Management', 'Regulatory Compliance', 'Internal Audit', 'Cybersecurity'],
      caseStudy: 'Achieved 100% regulatory compliance for a financial institution'
    },
    {
      id: 5,
      title: 'People & Culture',
      color: '#DAA520',
      description: 'Build high-performing teams, develop leadership capabilities, and create cultures that drive organizational success.',
      capabilities: ['Leadership Development', 'Talent Strategy', 'Change Management', 'Culture Transformation'],
      caseStudy: 'Reduced employee turnover by 58% through culture initiatives'
    },
    {
      id: 6,
      title: 'Sustainability',
      color: '#0a1f44',
      description: 'Integrate sustainable practices into your core strategy, reduce environmental impact, and create long-term value.',
      capabilities: ['ESG Strategy', 'Carbon Reduction', 'Sustainable Supply Chain', 'Impact Reporting'],
      caseStudy: 'Helped an energy company achieve net-zero targets 3 years early'
    }
  ];

  const engagements = [
    { type: 'Strategic Review', duration: '2-4 weeks', outcome: 'Clear roadmap & prioritized initiatives' },
    { type: 'Transformation Program', duration: '3-6 months', outcome: 'End-to-end implementation & capability building' },
    { type: 'Interim Leadership', duration: 'Flexible', outcome: 'Experienced leaders driving immediate impact' },
    { type: 'Advisory Retainer', duration: 'Ongoing', outcome: 'Continuous strategic guidance & support' }
  ];

  const testimonials = [
    {
      quote: "Bravelion Consulting transformed our approach to strategy. Their team brought fresh perspectives and delivered measurable results within months.",
      author: "Chief Executive Officer",
      company: "Leading Energy Group",
      rating: 5
    },
    {
      quote: "The operational efficiency program they designed saved us over $2M annually. Truly world-class consulting expertise.",
      author: "Operations Director",
      company: "Global Manufacturing Corp",
      rating: 5
    },
    {
      quote: "Their digital transformation roadmap was exactly what we needed. Practical, actionable, and results-driven.",
      author: "CTO",
      company: "FinTech Innovators",
      rating: 5
    }
  ];

  return (
    <div className="consult-page">
      <ServicesNavbar />

      {/* ===== HERO WITH SPLIT LAYOUT ===== */}
      <section className="consult-hero">
        <div className="consult-hero__split">
          <div className="consult-hero__content consult-reveal">
            <div className="consult-badge">Premium Consulting Partner</div>
            <h1>Transform Vision <br />Into <span className="consult-highlight">Reality</span></h1>
            <p className="consult-hero__desc">
              We partner with forward-thinking organizations to solve complex challenges, 
              seize opportunities, and build lasting competitive advantage.
            </p>
            <div className="consult-hero__stats">
              <div className="hero-stat">
                <span className="hero-stat-num">150+</span>
                <span className="hero-stat-label">Successful Engagements</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">25+</span>
                <span className="hero-stat-label">Industry Experts</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">98%</span>
                <span className="hero-stat-label">Client Retention</span>
              </div>
            </div>
            <div className="consult-hero__actions">
              <a href="/contact" className="consult-btn-primary">Start Your Journey →</a>
              <a href="#practices" className="consult-btn-secondary">Explore Practices</a>
            </div>
          </div>
          <div className="consult-hero__visual consult-reveal">
            <div className="consult-visual-grid">
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
            </div>
            <div className="consult-quote-float">
              <span className="quote-mark">"</span>
              <p>They didn't just advise us — they transformed how we operate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRACTICES SECTION (MASONRY STYLE) ===== */}
      <section className="consult-practices" id="practices">
        <div className="consult-container">
          <div className="consult-section-header consult-reveal">
            <span className="consult-eyebrow">Our Expertise</span>
            <h2>Consulting Practices</h2>
            <p>Specialized expertise across key business domains to address your unique challenges.</p>
          </div>
          <div className="consult-practices-grid">
            {practices.map((practice, idx) => (
              <div className="consult-practice-card consult-reveal" key={practice.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="practice-icon" style={{ background: `${practice.color}15`, color: practice.color }}>
                  {practice.icon}
                </div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
                <div className="practice-capabilities">
                  {practice.capabilities.map((cap, i) => (
                    <span key={i} className="capability-tag">{cap}</span>
                  ))}
                </div>
                <div className="practice-case">
                  <span className="case-label">Impact Story:</span>
                  <span className="case-text">{practice.caseStudy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH TIMELINE ===== */}
      <section className="consult-approach">
        <div className="consult-container">
          <div className="consult-section-header consult-reveal">
            <span className="consult-eyebrow">How We Work</span>
            <h2>Our Consulting Approach</h2>
            <p>A proven methodology that delivers results, every time.</p>
          </div>
          
          <div className="approach-tabs consult-reveal">
            {['approach', 'process', 'engagement'].map(tab => (
              <button 
                key={tab}
                className={`approach-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'approach' && 'Our Philosophy'}
                {tab === 'process' && 'The Process'}
                {tab === 'engagement' && 'Engagement Models'}
              </button>
            ))}
          </div>

          <div className="approach-content consult-reveal">
            {activeTab === 'approach' && (
              <div className="approach-philosophy">
                <div className="philosophy-grid">
                  <div className="philosophy-item">
                    <div className="philosophy-num">01</div>
                    <h4>Client-Centric</h4>
                    <p>We start with your unique context, challenges, and aspirations — not a predetermined solution.</p>
                  </div>
                  <div className="philosophy-item">
                    <div className="philosophy-num">02</div>
                    <h4>Data-Driven</h4>
                    <p>Every recommendation is grounded in rigorous analysis and real-world evidence.</p>
                  </div>
                  <div className="philosophy-item">
                    <div className="philosophy-num">03</div>
                    <h4>Collaborative</h4>
                    <p>We work alongside your team, building capabilities and ensuring lasting impact.</p>
                  </div>
                  <div className="philosophy-item">
                    <div className="philosophy-num">04</div>
                    <h4>Results-Focused</h4>
                    <p>Success is measured by tangible outcomes, not just deliverables.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="approach-process">
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Discovery & Diagnosis</h4>
                      <p>Deep-dive assessment to understand your challenges, opportunities, and organizational dynamics.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Strategy & Roadmap</h4>
                      <p>Develop actionable strategies with clear milestones, success metrics, and implementation timelines.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Execution & Delivery</h4>
                      <p>Hands-on implementation with regular checkpoints, adjustments, and knowledge transfer.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Sustain & Optimize</h4>
                      <p>Ongoing support to embed changes, measure outcomes, and drive continuous improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'engagement' && (
              <div className="approach-engagements">
                <div className="engagements-grid">
                  {engagements.map((eng, idx) => (
                    <div className="engagement-card" key={idx}>
                      <h4>{eng.type}</h4>
                      <div className="engagement-duration">{eng.duration}</div>
                      <p>{eng.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS CAROUSEL / SCROLL ===== */}
      <section className="consult-testimonials">
        <div className="consult-container">
          <div className="consult-section-header consult-reveal">
            <span className="consult-eyebrow">Client Success</span>
            <h2>What Our Partners Say</h2>
            <p>Real results from real partnerships.</p>
          </div>
          <div className="testimonials-scroll consult-reveal">
            {testimonials.map((testimonial, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT METRICS BANNER ===== */}
      <section className="consult-impact">
        <div className="consult-container">
          <div className="impact-banner consult-reveal">
            <div className="impact-left">
              <span className="impact-eyebrow">Measurable Impact</span>
              <h3>Delivering Tangible Results Across Industries</h3>
            </div>
            <div className="impact-right">
              <div className="impact-metric">
                <span className="metric-value">$500M+</span>
                <span className="metric-label">Client Value Created</span>
              </div>
              <div className="impact-metric">
                <span className="metric-value">35%</span>
                <span className="metric-label">Average Efficiency Gain</span>
              </div>
              <div className="impact-metric">
                <span className="metric-value">4.8/5</span>
                <span className="metric-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS SECTION ===== */}
      <section className="consult-insights">
        <div className="consult-container">
          <div className="consult-section-header consult-reveal">
            <span className="consult-eyebrow">Thought Leadership</span>
            <h2>Latest Insights</h2>
            <p>Perspectives on strategy, transformation, and the future of business.</p>
          </div>
          <div className="insights-grid consult-reveal">
            <div className="insight-card">
              <div className="insight-category">Article</div>
              <h4>The Future of Digital Transformation in Africa</h4>
              <p>How organizations can leverage technology to leapfrog traditional growth barriers.</p>
              <a href="#" className="insight-link">Read More →</a>
            </div>
            <div className="insight-card">
              <div className="insight-category">White Paper</div>
              <h4>Sustainable Growth Strategies for 2025</h4>
              <p>A framework for balancing profitability with environmental responsibility.</p>
              <a href="#" className="insight-link">Download →</a>
            </div>
            <div className="insight-card">
              <div className="insight-category">Case Study</div>
              <h4>From Crisis to Opportunity: A Transformation Story</h4>
              <p>How we helped a manufacturing client pivot and thrive during market disruption.</p>
              <a href="#" className="insight-link">Read Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="consult-cta">
        <div className="consult-container">
          <div className="cta-block consult-reveal">
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our consulting expertise can help you achieve your most ambitious goals.</p>
              <div className="cta-actions">
                <a href="/contact" className="consult-btn-primary">Schedule a Consultation →</a>
                <a href="#" className="consult-btn-outline">Download Capability Statement</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesFooter />
    </div>
  );
};

export default Consulting;