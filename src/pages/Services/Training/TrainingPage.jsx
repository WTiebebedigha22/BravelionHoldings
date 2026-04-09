import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import ServicesNavbar from "../components/Navbar/Navbar";
import ServicesFooter from "../components/Footer/Footer";
import "./Training.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const programs = [
  {
    id: "J",
    anchor: "ict",
    icon: "💻",
    label: "ICT & Digital Skills",
    title: "ICT, Digital Skills & Innovation Trainings",
    desc: "Future-ready digital skills training covering software productivity tools, cybersecurity fundamentals, data literacy, cloud computing, and technology-driven innovation for professionals across all industries.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Software tools & productivity training",
      "Cybersecurity awareness & fundamentals",
      "Data analysis & visualization workshops",
      "Digital transformation strategy programmes",
    ],
    tags: ["ICT", "Digital Skills", "Cybersecurity", "Data Literacy", "Cloud", "Innovation"],
  },
  {
    id: "K",
    anchor: "certification",
    icon: "🎓",
    label: "Certification Programmes",
    title: "Certification & Skills Upgrading Programmes",
    desc: "Structured certification pathways and skills upgrading programmes aligned with industry standards and regulatory requirements — preparing professionals for globally recognised qualifications across multiple sectors.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Industry-recognised certification preparation",
      "Skills gap assessment & planning",
      "Exam readiness coaching & mock tests",
      "Post-certification career support",
    ],
    tags: ["Professional Certification", "Skills Upgrading", "Industry Standards", "Compliance", "Assessment"],
  },
  {
    id: "M",
    anchor: "vocational",
    icon: "🔧",
    label: "Vocational Development",
    title: "Vocational & Professional Capacity Development",
    desc: "Practical vocational training and professional capacity building programmes designed to close skills gaps and build a competent, job-ready workforce for industry, enterprise, and community development.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Trade & technical skills training",
      "Apprenticeship & mentorship programmes",
      "Workplace competency development",
      "Corporate capacity building engagements",
    ],
    tags: ["Vocational Training", "Capacity Building", "Workforce", "Trade Skills", "Job Readiness"],
  },
  {
    id: "C",
    anchor: "entrepreneurship",
    icon: "📊",
    label: "Entrepreneurship & Business",
    title: "Entrepreneurship, Business Management & ICT",
    desc: "Empowering entrepreneurs and business leaders with practical training in business strategy, management systems, financial planning, and digital technology integration to build resilient, growth-oriented enterprises.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Business planning & strategy development",
      "SME development & growth programmes",
      "Financial management & planning training",
      "Leadership & management skills",
    ],
    tags: ["Entrepreneurship", "Business Management", "Strategy", "Leadership", "SME Development"],
  },
  {
    id: "O",
    anchor: "financial",
    icon: "📈",
    label: "Investment & Finance",
    title: "Investment & Financial Literacy Trainings",
    desc: "Practical investment and financial literacy programmes equipping individuals and organisations to make informed financial decisions, manage risk intelligently, and build sustainable long-term wealth.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Personal financial planning fundamentals",
      "Investment strategy & portfolio analysis",
      "Risk management & financial protection",
      "Corporate financial literacy programmes",
    ],
    tags: ["Investment", "Financial Literacy", "Wealth Management", "Risk Management", "Personal Finance"],
  },
  {
    id: "P",
    anchor: "hse",
    icon: "🛡",
    label: "Health, Safety & Wellness",
    title: "Health, Safety & Wellness Trainings",
    desc: "Comprehensive HSE and wellness training programmes covering workplace safety standards, emergency response procedures, mental health awareness, and regulatory health compliance for organisations across all sectors.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=1400",
    highlights: [
      "Workplace HSE compliance programmes",
      "Emergency response & first aid training",
      "Mental health & wellness awareness",
      "Safety management systems development",
    ],
    tags: ["HSE Training", "Workplace Safety", "Emergency Response", "Wellness", "Regulatory Compliance"],
  },
];

const stats = [
  { value: "6",    label: "Training Divisions" },
  { value: "500+", label: "Professionals Trained" },
  { value: "95%",  label: "Completion Rate" },
  { value: "100%", label: "Industry-Relevant" },
];

const outcomes = [
  { icon: "🎯", title: "Practical Skills",      desc: "Every programme is built around real-world application, not just theory." },
  { icon: "📋", title: "Industry Alignment",    desc: "Curricula co-developed with sector professionals and regulatory frameworks." },
  { icon: "🏅", title: "Recognised Outcomes",   desc: "Certificates and qualifications recognised by employers and institutions." },
  { icon: "🔄", title: "Continuous Learning",   desc: "Structured pathways that grow with your career and organisation." },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const TrainingPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const obsRef = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("td-visible")),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".td-reveal").forEach((el) => obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  const active = programs[activeProgram];

  return (
    <>
      <ServicesNavbar />

      <div className="td-page">

        {/* ===== HERO ===== */}
        <section className="td-hero">
          <div className="td-container td-hero__inner">
            <p className="td-eyebrow">Institute of Professional Growth — Bravelion Training</p>
            <h1>
              Invest in Skills.<br />
              <span className="td-highlight">Transform Careers.</span>
            </h1>
            <p className="td-hero__sub">
              Bridging the gap between theory and industry expertise through six
              specialised training divisions designed for the modern Nigerian professional.
            </p>
            <div className="td-hero__actions">
              <Link to="/contact" className="td-btn-primary">
                Enrol Today <ArrowRight size={15} />
              </Link>
              <a href="#td-programs" className="td-btn-outline">
                Browse Curricula
              </a>
            </div>
          </div>

          {/* Division strip */}
          <div className="td-hero__strip">
            <div className="td-container td-hero__strip-inner">
              <span className="td-hero__strip-label">Training Divisions</span>
              {programs.map((p) => (
                <span key={p.id} className="td-division-badge">
                  {p.icon} {p.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="td-stats td-reveal">
          <div className="td-container td-stats__grid">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="td-stat">
                  <span className="td-stat__value">{s.value}</span>
                  <span className="td-stat__label">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="td-stat__divider" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===== OUTCOMES ===== */}
        <section className="td-outcomes td-reveal">
          <div className="td-container">
            <div className="td-outcomes__header">
              <span className="td-eyebrow dark">The Bravelion Advantage</span>
              <h2>A full training ecosystem.</h2>
              <p>
                Every division is designed with one goal: measurable professional
                growth that translates directly into career and organisational impact.
              </p>
            </div>
            <div className="td-outcomes__grid">
              {outcomes.map((o) => (
                <div className="td-outcome-card" key={o.title}>
                  <span className="td-outcome-card__icon">{o.icon}</span>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROGRAMME SELECTOR ===== */}
        <section className="td-programs" id="td-programs">
          <div className="td-container">

            <div className="td-programs__header td-reveal">
              <span className="td-eyebrow dark">Our Programmes</span>
              <h2>Six specialised training divisions.</h2>
              <p>Select a division to explore its curriculum and enrol.</p>
            </div>

            <div className="td-selector td-reveal">

              {/* Tab list */}
              <div className="td-tabs">
                {programs.map((p, i) => (
                  <button
                    key={p.id}
                    className={`td-tab${activeProgram === i ? " td-tab--active" : ""}`}
                    onClick={() => setActiveProgram(i)}
                  >
                    <span className="td-tab__id">{p.id}</span>
                    <span className="td-tab__label">{p.label}</span>
                  </button>
                ))}
              </div>

              {/* Active panel */}
              <div className="td-panel">
                <div className="td-panel__image">
                  <img src={active.image} alt={active.title} />
                  <span className="td-panel__caption">
                    <span className="td-panel__icon">{active.icon}</span>
                    {active.label}
                  </span>
                </div>
                <div className="td-panel__text">
                  <span className="td-eyebrow dark">{active.label}</span>
                  <h3>{active.title}</h3>
                  <p>{active.desc}</p>

                  <ul className="td-panel__highlights">
                    {active.highlights.map((h) => (
                      <li key={h}>
                        <CheckCircle size={13} className="td-panel__check" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="td-panel__tags">
                    {active.tags.map((t) => (
                      <span key={t} className="td-panel__tag">{t}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="td-btn-primary">
                    Enrol Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== QUOTE ===== */}
        <section className="td-quote td-reveal">
          <div className="td-container">
            <blockquote>
              "At Bravelion, we believe professional development is not a one-time event —
              it's a continuous journey toward excellence."
            </blockquote>
            <cite>Bravelion Training &amp; Consulting Ltd</cite>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="td-cta td-reveal">
          <div className="td-container td-cta__inner">
            <div className="td-cta__text">
              <span className="td-eyebrow light">Get Started</span>
              <h2>Ready to grow your skills?</h2>
              <p>
                Speak to our team about the right training division for
                your goals or your organisation's workforce needs.
              </p>
            </div>
            <div className="td-cta__actions">
              <Link to="/contact" className="td-btn-primary">
                Enrol Today <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="td-btn-outline-gold">
                Corporate Enquiry <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <ServicesFooter />
    </>
  );
};

export default TrainingPage;