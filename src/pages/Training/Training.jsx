import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, GraduationCap, Award,
  Users, BarChart2, CheckCircle, BookOpen
} from "lucide-react";
import TrainingNavbar from "./components/Navbar/Navbar";
import TrainingFooter from "./components/Footer/Footer";
import "./Training.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "95%",  label: "Completion Rate" },
  { value: "30+",  label: "Accredited Courses" },
  { value: "10+",  label: "Corporate Clients" },
];

const pillars = [
  {
    icon: BookOpen,
    tag: "Technical Mastery",
    title: "Industry-Focused Training Programs.",
    body: "Practical, industry-aligned programmes designed to equip professionals with real-world skills across engineering, real estate, project management, safety, and business operations.",
    image: "https://images.unsplash.com/photo-1581091870627-3f5de3b0b3d1?auto=format&fit=crop&q=80&w=1400",
    caption: "Technical Training",
  },
  {
    icon: Award,
    tag: "Global Certification",
    title: "Certified Professional Development.",
    body: "Our courses prepare participants for globally recognised certifications while strengthening technical competence, leadership capacity, and regulatory awareness across sectors.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1400",
    caption: "Certification Programmes",
  },
  {
    icon: Users,
    tag: "Capacity Building",
    title: "Workforce Readiness & Growth.",
    body: "Through hands-on workshops, simulations, and mentorship programmes, we build workforce confidence, improve operational performance, and drive measurable productivity growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
    caption: "Workforce Development",
  },
];

const programAreas = [
  { icon: GraduationCap, title: "Health, Safety & Environmental (HSE)",      desc: "NEBOSH, IOSH, and industry-specific HSE certification programmes." },
  { icon: BarChart2,     title: "Engineering & Technical Certification",       desc: "NDT, ASNT Level I–III, PCN, ISO 9712, and process engineering." },
  { icon: BookOpen,      title: "Real Estate & Property Management",           desc: "Development, valuation, facilities management, and investment analysis." },
  { icon: Users,         title: "Project Management & Leadership",             desc: "PMP, Prince2, executive leadership, and organisational development." },
  { icon: ArrowUpRight,  title: "Business Strategy & Entrepreneurship",        desc: "Corporate governance, financial management, and growth strategy." },
  { icon: Award,         title: "Regulatory Compliance & Legal Frameworks",    desc: "Industry regulations, contract law, and compliance management." },
];

const accreditations = ["NEBOSH", "IOSH", "ASNT", "PCN", "ISO 9712", "PMP"];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Training = () => {
  return (
    <>
      <TrainingNavbar />

      <div className="training-page">

        {/* ===== HERO ===== */}
        <section className="training-hero">
          <div className="training-container training-hero__inner">
            <p className="training-eyebrow">Bravelion Training &amp; Consulting</p>
            <h1>
              Building Skills.<br />
              <span className="training-highlight">Empowering Futures.</span>
            </h1>
            <p className="training-hero__sub">
              Transformative training programmes that develop technical expertise,
              leadership excellence, and workforce readiness across multiple industries.
            </p>
            <div className="training-hero__actions">
              <Link to="/contact" className="training-btn-primary">
                Request Course Brochure <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="training-btn-outline">
                Speak to an Advisor
              </Link>
            </div>
          </div>

          {/* Accreditation strip */}
          <div className="hero-accreditations">
            <div className="training-container hero-accreditations__inner">
              <span className="hero-accreditations__label">Accredited by</span>
              <div className="hero-accreditations__list">
                {accreditations.map((a) => (
                  <span key={a} className="accreditation-badge">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="training-stats">
          <div className="training-container">
            <div className="training-stats__grid">
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="training-stat">
                    <span className="training-stat__value">{s.value}</span>
                    <span className="training-stat__label">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className="training-stat__divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="training-intro">
          <div className="training-container training-intro__grid">
            <div className="training-intro__text">
              <span className="training-eyebrow">Our Approach</span>
              <h2>A structured path to professional excellence.</h2>
              <p>
                Bravelion Training Institute delivers internationally accredited
                certification programmes, executive education, and practical skills
                development for professionals and organisations driving Africa's growth.
              </p>
              <p>
                Every programme is designed with industry input, delivered by
                certified practitioners, and assessed against global competency standards.
              </p>
              <Link to="/about" className="training-link-arrow">
                About the Institute <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="training-intro__image">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
                alt="Professional training session"
                loading="lazy"
              />
              <div className="training-intro__badge">
                <GraduationCap size={16} />
                Certified &amp; Industry-Aligned
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRAINING PILLARS ===== */}
        <section className="training-pillars">
          <div className="training-container">
            <div className="training-pillars__header">
              <div>
                <span className="training-eyebrow">Our Training Pillars</span>
                <h2>A structured approach to professional development.</h2>
              </div>
              <Link to="/contact" className="training-link-arrow">
                Enrol Now <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="pillars-grid">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    className={`pillar-row${i % 2 !== 0 ? " pillar-row--reverse" : ""}`}
                    key={p.title}
                  >
                    <div className="pillar-row__image">
                      <img src={p.image} alt={p.caption} loading="lazy" />
                      <span className="pillar-row__caption">{p.caption}</span>
                    </div>
                    <div className="pillar-row__text">
                      <span className="training-eyebrow">{p.tag}</span>
                      <div className="pillar-row__icon">
                        <Icon size={18} />
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                      <Link to="/contact" className="training-link-arrow">
                        Learn More <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== PROGRAMME AREAS ===== */}
        <section className="training-programs">
          <div className="training-container">
            <div className="training-programs__header">
              <span className="training-eyebrow">What We Offer</span>
              <h2>Our Programme Areas.</h2>
              <p>
                Specialised training designed to meet evolving industry demands
                and regulatory requirements across Nigeria and West Africa.
              </p>
            </div>

            <div className="programs-grid">
              {programAreas.map((prog) => {
                const Icon = prog.icon;
                return (
                  <div className="program-card" key={prog.title}>
                    <div className="program-card__icon">
                      <Icon size={18} />
                    </div>
                    <h4>{prog.title}</h4>
                    <p>{prog.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== DARK PROMISE BAND ===== */}
        <section className="training-promise">
          <div className="training-container training-promise__inner">
            <div className="training-promise__text">
              <span className="training-eyebrow light">Our Commitment</span>
              <h2>Competence-led.<br />Results-driven.</h2>
              <p>
                Every Bravelion programme is delivered by certified practitioners
                with active industry experience. We do not offer classroom theory
                in isolation — every concept is grounded in operational reality.
              </p>
            </div>
            <div className="training-promise__checklist">
              {[
                "Certified instructors with field experience",
                "Globally recognised accreditations",
                "Customisable corporate training packages",
                "Post-training competency assessments",
                "CPD-recognised learning hours",
                "On-site and virtual delivery options",
              ].map((item) => (
                <div className="promise-check" key={item}>
                  <CheckCircle size={15} className="promise-check__icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="training-cta">
          <div className="training-container training-cta__inner">
            <div className="training-cta__text">
              <span className="training-eyebrow">Get Started</span>
              <h2>Advance your career<br />with Bravelion.</h2>
              <p>
                Enrol in one of our professional training programmes today
                and gain the competitive edge you deserve.
              </p>
            </div>
            <div className="training-cta__actions">
              <Link to="/contact" className="training-btn-primary">
                Request Course Brochure <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="training-btn-ghost">
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </section>

      </div>

      <TrainingFooter />
    </>
  );
};

export default Training;