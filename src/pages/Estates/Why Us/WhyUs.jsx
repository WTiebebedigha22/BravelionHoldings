import React, { useEffect, useRef } from 'react';
import EstatesNavbar from '../components/Navbar/Navbar';
import EstatesFooter from '../components/Footer/Footer';
import './WhyUs.css';

const stats = [
  { number: '10+', label: 'Completed Projects' },
  { number: '₦2B+', label: 'Property Value Delivered' },
  { number: '98%', label: 'Client Satisfaction Rate' },
  { number: '6+', label: 'Years of Excellence' },
];

const reasons = [
  {
    index: '01',
    title: 'End-to-End Development',
    body: 'From land acquisition and architectural design to construction management and turnkey handover — we handle every phase with precision and accountability.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
  },
  {
    index: '02',
    title: 'Prime Location Strategy',
    body: 'We identify high-growth corridors before the market catches on. Every Bravelion development is positioned for maximum capital appreciation and long-term yield.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=900',
  },
  {
    index: '03',
    title: 'Transparent Investment Process',
    body: 'No hidden fees, no ambiguity. Our investors receive structured documentation, milestone updates, and clear return projections from day one.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900',
  },
  {
    index: '04',
    title: 'Architectural Excellence',
    body: 'Every structure we build meets international design and construction standards — blending modern aesthetics with structural integrity and sustainable materials.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=900',
  },
];

const pillars = [
  { icon: '⬡', label: 'Structural Integrity' },
  { icon: '⬡', label: 'Regulatory Compliance' },
  { icon: '⬡', label: 'Sustainable Design' },
  { icon: '⬡', label: 'Investment Security' },
  { icon: '⬡', label: 'Community Focus' },
  { icon: '⬡', label: 'On-Time Delivery' },
];

const testimonials = [
  {
    quote: 'Bravelion exceeded every expectation. The documentation was thorough, the build quality exceptional, and the team kept us informed every step of the way.',
    name: 'Adaeze Okonkwo',
    title: 'Property Investor, Lagos',
  },
  {
    quote: 'I have purchased property with three firms before. Bravelion is the only one that delivered exactly what was promised — on time and on budget.',
    name: 'Emeka Nwosu',
    title: 'Homeowner, Abuja',
  },
  {
    quote: 'Their site inspection process and transparent pricing gave me the confidence to invest. My ROI has exceeded projections in year one.',
    name: 'Fatima Al-Hassan',
    title: 'Real Estate Investor, Port Harcourt',
  },
];

const WhyUs = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <EstatesNavbar />

      <div className="whyus-page">

        {/* ===== HERO ===== */}
        <section className="wu-hero">
          <div className="wu-hero__bg" />
          <div className="wu-hero__content">
            <span className="wu-hero__eyebrow">Why Bravelion Estates</span>
            <h1 className="wu-hero__title">
              The Standard <br />
              <em>Others Aspire To.</em>
            </h1>
            <p className="wu-hero__sub">
              In a market crowded with promises, we deliver proof — through
              completed projects, satisfied investors, and properties that
              hold and grow in value.
            </p>
            <div className="wu-hero__actions">
              <a href="/estates/property" className="wu-btn wu-btn--gold">
                View Our Projects
              </a>
              <a href="/estates/contact" className="wu-btn wu-btn--outline">
                Speak to Sales
              </a>
            </div>
          </div>
          <div className="wu-hero__scroll-hint">
            <span />
          </div>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section className="wu-stats reveal">
          <div className="wu-stats__inner">
            {stats.map((s, i) => (
              <div className="wu-stat" key={i}>
                <span className="wu-stat__num">{s.number}</span>
                <span className="wu-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== REASONS ===== */}
        <section className="wu-reasons">
          <div className="wu-reasons__header reveal">
            <div className="wu-anchor-bar" />
            <h2>Four Reasons Investors <br />Choose Bravelion</h2>
          </div>

          <div className="wu-reasons__list">
            {reasons.map((r, i) => (
              <div className={`wu-reason reveal ${i % 2 !== 0 ? 'wu-reason--flip' : ''}`} key={i}>
                <div className="wu-reason__image-wrap">
                  <div
                    className="wu-reason__image"
                    style={{ backgroundImage: `url(${r.image})` }}
                  />
                  <div className="wu-reason__index">{r.index}</div>
                </div>
                <div className="wu-reason__text">
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                  <a href="/estates/contact" className="wu-text-link">
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PILLARS BANNER ===== */}
        <section className="wu-pillars reveal">
          <div className="wu-pillars__inner">
            <div className="wu-pillars__left">
              <div className="wu-anchor-bar" />
              <h2>Built on Six Uncompromising Commitments</h2>
              <p>
                Every decision we make — from site selection to material
                sourcing — is governed by these core commitments to our
                clients and communities.
              </p>
            </div>
            <div className="wu-pillars__grid">
              {pillars.map((p, i) => (
                <div className="wu-pillar" key={i}>
                  <span className="wu-pillar__icon">◈</span>
                  <span className="wu-pillar__label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="wu-testimonials">
          <div className="wu-testimonials__header reveal">
            <div className="wu-anchor-bar" />
            <h2>What Our Clients Say</h2>
            <p>Real words from real investors and homeowners.</p>
          </div>

          <div className="wu-testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="wu-testimonial reveal" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="wu-testimonial__quote-mark">"</div>
                <p className="wu-testimonial__body">{t.quote}</p>
                <div className="wu-testimonial__author">
                  <span className="wu-testimonial__name">{t.name}</span>
                  <span className="wu-testimonial__title">{t.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="wu-cta reveal">
          <div className="wu-cta__inner">
            <span className="wu-cta__eyebrow">Ready to Invest?</span>
            <h2>Secure a Property That Grows <br />in Value and Impact.</h2>
            <p>
              Join hundreds of investors and homeowners who have trusted
              Bravelion Estates to deliver on every promise.
            </p>
            <div className="wu-cta__buttons">
              <a href="/estates/contact" className="wu-btn wu-btn--gold">
                Book a Site Inspection
              </a>
              <a href="/estates/property" className="wu-btn wu-btn--ghost">
                Browse Properties
              </a>
            </div>
          </div>
        </section>

      </div>

      <EstatesFooter />
    </>
  );
};

export default WhyUs;