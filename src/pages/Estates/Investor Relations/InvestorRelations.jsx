import React, { useEffect, useRef, useState } from 'react';
import EstatesNavbar from '../components/Navbar/Navbar';
import EstateFooter from '../components/Footer/Footer';
import './InvestorRelations.css';

/* ── DATA ────────────────────────────────────────────────── */

const metrics = [
  { num: '₦12B+',  label: 'Total Asset Value Managed' },
  { num: '340+',   label: 'Units Delivered' },
  { num: '18%',    label: 'Avg. Annual ROI' },
  { num: '92%',    label: 'Investor Retention Rate' },
];

const opportunities = [
  {
    id: 'OPP01',
    type: 'Off-Plan',
    title: 'The Meridian Residences',
    location: 'Eko Atlantic, Lagos',
    minInvestment: '₦55,000,000',
    targetReturn: '22–28% over 24 months',
    status: 'Open',
    units: '48 Units',
    desc: 'Premium waterfront apartments in the fastest-appreciating corridor in West Africa. Early investors receive priority unit selection and a fixed return guarantee structure.',
    highlights: ['Waterfront location', 'Fixed return option', 'C of O ready', 'Flexible payment'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'OPP02',
    type: 'Commercial',
    title: 'Victoria Square Business Hub',
    location: 'Victoria Island, Lagos',
    minInvestment: '₦80,000,000',
    targetReturn: '14–18% per annum',
    status: 'Open',
    units: '12 Office Suites',
    desc: 'Grade A commercial suites in a fully tenanted business hub. Rental income-generating from day one, with a managed lease structure requiring zero day-to-day involvement.',
    highlights: ['Fully tenanted', 'Managed lease', 'Quarterly income', 'Prime V/I address'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'OPP03',
    type: 'Land Bank',
    title: 'Ibeju-Lekki Strategic Land Portfolio',
    location: 'Ibeju-Lekki, Lagos',
    minInvestment: '₦15,000,000',
    targetReturn: '40–60% over 36 months',
    status: 'Limited',
    units: 'Plots from 500sqm',
    desc: 'Strategic land acquisition along the Lekki Free Trade Zone corridor — one of the highest-appreciation corridors in Nigeria, driven by infrastructure and industrial investment.',
    highlights: ['C of O titles', 'LFTZ proximity', 'High capital gain', 'Pooled entry available'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'OPP04',
    type: 'Luxury',
    title: 'Maitama Crown Villas',
    location: 'Maitama, Abuja',
    minInvestment: '₦120,000,000',
    targetReturn: '20–25% over 18 months',
    status: 'Exclusive',
    units: '6 Villas Only',
    desc: "Ultra-premium villa development in Abuja's most prestigious residential address. Strictly limited to six units. A rare opportunity for high-net-worth investors seeking trophy assets.",
    highlights: ['6 units only', 'Trophy asset', 'Smart home tech', 'Guaranteed exit strategy'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=900',
  },
];

const process = [
  { step: '01', title: 'Initial Consultation', desc: 'Schedule a private call with our investment team to discuss your objectives, risk appetite, and preferred asset classes.' },
  { step: '02', title: 'Due Diligence Package', desc: 'Receive a comprehensive investment memorandum including title documents, feasibility studies, projected returns, and exit strategies.' },
  { step: '03', title: 'Investment Agreement', desc: 'A formal investment agreement is prepared and reviewed by both parties, outlining all terms, timelines, and return structures.' },
  { step: '04', title: 'Capital Deployment', desc: 'Funds are deployed into the agreed asset. You receive regular development updates and quarterly financial reports.' },
  { step: '05', title: 'Return Realisation', desc: 'At the agreed horizon, returns are distributed via the agreed mechanism — rental income, capital gain, or structured exit.' },
];

const faqs = [
  { q: 'What is the minimum investment amount?', a: 'Our investment opportunities start from ₦15,000,000 for land bank positions. Off-plan residential and commercial opportunities begin at ₦55,000,000. We also offer pooled investment structures for qualified investors.' },
  { q: 'How are returns structured and paid?', a: 'Returns vary by asset class. Off-plan developments offer capital appreciation at exit. Commercial properties generate quarterly rental income. Land bank positions deliver capital gains at the point of resale. All structures are detailed in your investment memorandum.' },
  { q: 'What legal protections do investors have?', a: 'Every investment is backed by a formal investment agreement, verified title documents (C of O or R of O), and in applicable cases, escrow arrangements. We recommend independent legal review of all documentation.' },
  { q: 'Can foreign investors participate?', a: 'Yes. We facilitate foreign investor participation with appropriate FX structuring, regulatory compliance, and repatriation planning. Contact our investment desk for a tailored briefing.' },
  { q: 'What is the typical investment horizon?', a: 'Horizons range from 18 months for luxury villa developments to 36+ months for land bank positions. Off-plan residential opportunities typically run 24–30 months from investment to exit.' },
  { q: 'Is there an early exit option?', a: 'Selected investment structures include secondary market provisions allowing transfer of interest to another qualified investor prior to the primary exit date, subject to agreement terms.' },
];

const statusStyle = {
  Open:      { bg: '#f0fdf4', color: 'goldenrod', border: 'rgba(21,128,61,0.25)' },
  Limited:   { bg: '#fefce8', color: '#a16207', border: 'rgba(161,98,7,0.25)' },
  Exclusive: { bg: '#fdf4ff', color: '#7e22ce', border: 'rgba(126,34,206,0.25)' },
};

/* ── COMPONENT ───────────────────────────────────────────── */

export default function InvestorRelations() {
  const [activeOpp, setActiveOpp]   = useState(0);
  const [openFaq,   setOpenFaq]     = useState(null);
  const obsRef                       = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('ir-in')),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.ir-reveal').forEach(el => obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  const opp = opportunities[activeOpp];

  return (
    <>
      <EstatesNavbar />
      <div className="ir-page">

        {/* ══ HERO ══ */}
        <section className="ir-hero">
          <div className="ir-hero__texture" />
          <div className="ir-hero__glow" />

          <div className="ir-hero__inner">
            <div className="ir-hero__left">
              <div className="ir-hero__label-row">
                <span className="ir-label">Investor Relations</span>
                <span className="ir-label ir-label--dim">Bravelion Estates</span>
              </div>

              <h1 className="ir-hero__title">
                Build Wealth.<br />
                <em>Through</em><br />
                Property.
              </h1>

              <p className="ir-hero__sub">
                Structured real estate investment opportunities across residential,
                commercial, and land assets — with transparent terms, verified titles,
                and a track record of delivering above-market returns.
              </p>

              <div className="ir-hero__actions">
                <a href="#ir-opportunities" className="ir-btn ir-btn--gold">
                  View Opportunities
                </a>
                <a href="/estates/contact" className="ir-btn ir-btn--ghost">
                  Speak to Investment Desk
                </a>
              </div>
            </div>

            <div className="ir-hero__right">
              {/* Floating trust card */}
              <div className="ir-hero__trust-card">
                <div className="ir-hero__trust-card-img"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=900)' }}
                />
                <div className="ir-hero__trust-card-body">
                  <span className="ir-hero__trust-overline">Portfolio Performance</span>
                  <div className="ir-hero__trust-metrics">
                    <div className="ir-tm">
                      <span className="ir-tm__num">18%</span>
                      <span className="ir-tm__label">Avg. Annual ROI</span>
                    </div>
                    <div className="ir-tm-divider" />
                    <div className="ir-tm">
                      <span className="ir-tm__num">₦12B+</span>
                      <span className="ir-tm__label">Assets Managed</span>
                    </div>
                    <div className="ir-tm-divider" />
                    <div className="ir-tm">
                      <span className="ir-tm__num">340+</span>
                      <span className="ir-tm__label">Units Delivered</span>
                    </div>
                  </div>
                  <p className="ir-hero__trust-note">
                    Performance figures represent portfolio averages across completed investments since 2019.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="ir-stats">
            {metrics.map((m, i) => (
              <div className="ir-stat" key={i}>
                <span className="ir-stat__num">{m.num}</span>
                <span className="ir-stat__label">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY INVEST ══ */}
        <section className="ir-why ir-reveal">
          <div className="ir-why__inner">
            <div className="ir-why__left">
              <div className="ir-bar" />
              <h2>Why Nigerian Real Estate.<br />Why Now. Why Bravelion.</h2>
              <p>
                Nigeria's real estate market is underpinned by structural demographic
                demand, currency-hedge value, and compounding supply shortfalls that no
                policy cycle has yet resolved. The fundamentals for long-term capital
                appreciation remain among the strongest of any emerging market asset class.
              </p>
              <p>
                What Bravelion adds is the intelligence, legal rigour, and operational
                infrastructure to access the best opportunities — and the track record
                to demonstrate that we deliver on what we promise.
              </p>
              <a href="/estates/insights" className="ir-text-link">
                Read our market intelligence <span>→</span>
              </a>
            </div>

            <div className="ir-why__right">
              {[
                { icon: '📈', title: 'Currency-Hedge Asset',    desc: 'Nigerian real estate is priced in naira but benchmarked to dollar values in premium corridors, providing natural FX hedge properties.' },
                { icon: '🏙', title: 'Structural Demand',       desc: 'A 700,000-unit annual housing deficit underpins sustained price floors in well-located residential and commercial assets.' },
                { icon: '📋', title: 'Title-Verified Only',     desc: 'Every investment we offer has verified title documentation. We do not bring speculative or unverified opportunities to our investors.' },
                { icon: '🔒', title: 'Structured Agreements',   desc: 'All investments are governed by formal investment agreements with clear timelines, return structures, and dispute resolution mechanisms.' },
                { icon: '👁', title: 'Full Transparency',       desc: 'Quarterly financial reporting, development update calls, and direct access to the investment team throughout your holding period.' },
                { icon: '🚪', title: 'Managed Exit Options',    desc: 'We structure clear exit pathways into every opportunity — whether rental income, capital gain sale, or managed secondary transfer.' },
              ].map((item, i) => (
                <div className="ir-why-card ir-reveal" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="ir-why-card__icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ OPPORTUNITIES ══ */}
        <section className="ir-opps" id="ir-opportunities">
          <div className="ir-opps__header ir-reveal">
            <div className="ir-opps__header-left">
              <div className="ir-bar" />
              <h2>Current Investment<br />Opportunities</h2>
              <p>Four vetted opportunities across asset classes. Each with a full due diligence package available on request.</p>
            </div>
            <div className="ir-opps__tabs ir-reveal">
              {opportunities.map((o, i) => (
                <button
                  key={o.id}
                  className={`ir-opp-tab ${activeOpp === i ? 'ir-opp-tab--active' : ''}`}
                  onClick={() => setActiveOpp(i)}
                >
                  <span className="ir-opp-tab__type">{o.type}</span>
                  <span className="ir-opp-tab__name">{o.title}</span>
                  <span
                    className="ir-opp-tab__status"
                    style={{ color: statusStyle[o.status].color, background: statusStyle[o.status].bg, borderColor: statusStyle[o.status].border }}
                  >{o.status}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ir-opp-panel ir-reveal">
            <div className="ir-opp-panel__image-wrap">
              <div
                className="ir-opp-panel__image"
                style={{ backgroundImage: `url(${opp.image})` }}
                key={opp.id}
              />
              <div className="ir-opp-panel__image-overlay" />
              <div className="ir-opp-panel__image-badge">
                <span className="ir-opp-panel__badge-num">{opp.minInvestment}</span>
                <span className="ir-opp-panel__badge-label">Minimum Investment</span>
              </div>
              <span
                className="ir-opp-panel__status-pill"
                style={{ color: statusStyle[opp.status].color, background: statusStyle[opp.status].bg, borderColor: statusStyle[opp.status].border }}
              >{opp.status}</span>
            </div>

            <div className="ir-opp-panel__content">
              <span className="ir-opp-panel__type">{opp.type}</span>
              <h3 className="ir-opp-panel__title">{opp.title}</h3>
              <p className="ir-opp-panel__location">📍 {opp.location} · {opp.units}</p>
              <p className="ir-opp-panel__desc">{opp.desc}</p>

              <div className="ir-opp-panel__return">
                <span className="ir-opp-panel__return-label">Target Return</span>
                <span className="ir-opp-panel__return-val">{opp.targetReturn}</span>
              </div>

              <div className="ir-opp-panel__highlights">
                {opp.highlights.map(h => (
                  <span key={h} className="ir-hl-chip">✦ {h}</span>
                ))}
              </div>

              <div className="ir-opp-panel__btns">
                <a href="/estates/contact" className="ir-btn ir-btn--gold">
                  Request Due Diligence Package
                </a>
                <a href="/estates/contact" className="ir-btn ir-btn--outline">
                  Book Investor Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="ir-process ir-reveal">
          <div className="ir-process__inner">
            <div className="ir-process__header">
              <div className="ir-bar" />
              <h2>How It Works</h2>
              <p>Five steps from initial conversation to return realisation.</p>
            </div>

            <div className="ir-steps">
              {process.map((s, i) => (
                <div className="ir-step ir-reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="ir-step__connector" />
                  <span className="ir-step__num">{s.step}</span>
                  <h4 className="ir-step__title">{s.title}</h4>
                  <p className="ir-step__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VISUAL BREAK ══ */}
        <section className="ir-break">
          <div className="ir-break__bg" />
          <div className="ir-break__content">
            <p className="ir-break__overline">Our Philosophy</p>
            <blockquote>
              "We do not sell property. We structure wealth. Every opportunity
              we bring to investors has passed the same scrutiny we apply
              to our own capital."
            </blockquote>
            <p className="ir-break__attr">— Bravelion Estates Investment Desk</p>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="ir-faq ir-reveal">
          <div className="ir-faq__inner">
            <div className="ir-faq__header">
              <div className="ir-bar" />
              <h2>Investor FAQs</h2>
              <p>Answers to the questions we hear most often.</p>
            </div>

            <div className="ir-faq__list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`ir-faq-item ${openFaq === i ? 'ir-faq-item--open' : ''}`}
                >
                  <button
                    className="ir-faq-item__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="ir-faq-item__chevron">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div className="ir-faq-item__a">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="ir-cta ir-reveal">
          <div className="ir-cta__inner">
            <div className="ir-cta__left">
              <span className="ir-cta__eye">Ready to Invest?</span>
              <h2>Your First Conversation<br />Is Always Confidential.</h2>
              <p>
                Our investment desk is available for private consultations Monday
                to Friday. Share your objectives and we'll identify the right
                opportunity from our current portfolio.
              </p>
              <div className="ir-cta__btns">
                <a href="/estates/contact" className="ir-btn ir-btn--gold">
                  Schedule a Consultation
                </a>
                <a href="/estates/property" className="ir-btn ir-btn--outline-dark">
                  Browse All Properties
                </a>
              </div>
            </div>

            <div className="ir-cta__right">
              <div className="ir-cta__contact-card">
                <p className="ir-cta__card-title">Investment Desk</p>
                <p className="ir-cta__card-body">
                  For private investment enquiries, due diligence requests,
                  and portfolio discussions.
                </p>
                <a href="mailto:invest@bravelionestates.com" className="ir-cta__contact-link">
                  📧 invest@bravelionestates.com
                </a>
                <a href="tel:+2347081728260" className="ir-cta__contact-link">
                  📞 +234 708 172 8260
                </a>
                <div className="ir-cta__card-hours">
                  <span>🕐</span>
                  <span>Mon – Fri, 9am – 6pm (WAT)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <EstateFooter />
    </>
  );
}