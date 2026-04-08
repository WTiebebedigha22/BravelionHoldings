import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Clock, Award,
  CheckCircle, Shield, Users, BookOpen
} from "lucide-react";
import TrainingNavbar from "../components/Navbar/Navbar";
import TrainingFooter from "../components/Footer/Footer";
import "./HSE.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const programs = [
  { icon: "⛑",  title: "Workplace Safety Fundamentals",      dur: "2 Days",  cert: true,  desc: "Hazard identification, risk assessment matrices, PPE standards, and incident reporting procedures for all workplace environments." },
  { icon: "🔥", title: "Fire Safety & Emergency Response",   dur: "1 Day",   cert: true,  desc: "Fire prevention protocols, extinguisher handling, evacuation planning, and emergency coordination for designated site wardens." },
  { icon: "🩺", title: "First Aid & Basic Life Support",     dur: "2 Days",  cert: true,  desc: "CPR, wound management, fracture support, shock response, and first responder protocols certified to international standards." },
  { icon: "🧠", title: "Mental Health & Wellbeing at Work",  dur: "1 Day",   cert: false, desc: "Workplace stress management, burnout prevention, mental health first aid awareness, and building a psychologically safe team culture." },
  { icon: "⚡", title: "Electrical Safety in the Workplace", dur: "2 Days",  cert: true,  desc: "Electrical hazard identification, lockout/tagout procedures, arc flash awareness, and safe work practices around live systems." },
  { icon: "🏗",  title: "Construction & Site Safety",         dur: "3 Days",  cert: true,  desc: "Site safety management, working at heights, scaffolding standards, excavation safety, and contractor management compliance." },
  { icon: "☢", title: "Chemical Handling & COSHH",          dur: "2 Days",  cert: true,  desc: "Safe handling of hazardous substances, COSHH assessment, storage regulations, spill response, and exposure prevention." },
  { icon: "🌡", title: "HSE Management Systems (ISO 45001)", dur: "5 Days",  cert: true,  desc: "Full implementation pathway for ISO 45001 occupational health and safety management systems including audit and documentation." },
];

const stats = [
  { value: "8",      label: "HSE Programmes" },
  { value: "100%",   label: "Certified Facilitators" },
  { value: "1,000+", label: "Professionals Trained" },
  { value: "NEBOSH", label: "Aligned Curriculum" },
];

const whyPoints = [
  "Regulatory compliance — OSHA, NEBOSH, ISO 45001",
  "Reduced workplace incident rates and liability",
  "Improved workforce morale and retention",
  "Corporate HSE audit readiness",
];

const deliveryModes = [
  {
    icon: BookOpen,
    title: "Classroom Training",
    body: "Instructor-led sessions at our training centre. Full theory, practical drills, and assessment included.",
  },
  {
    icon: Shield,
    title: "On-Site Training",
    body: "We bring certified trainers to your workplace — minimising disruption and maximising relevance to your actual environment.",
  },
  {
    icon: Users,
    title: "Corporate Cohorts",
    body: "Dedicated cohorts for your team with customised content aligned to your industry, site, and regulatory requirements.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const HSEPage = () => {
  const obsRef = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("hse-visible")),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".hse-reveal").forEach((el) => obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  return (
    <>
      <TrainingNavbar />

      <div className="hse-page">

        {/* ===== HERO ===== */}
        <section className="hse-hero">
          <div className="hse-container hse-hero__inner">
            <p className="hse-eyebrow">Health, Safety &amp; Environment — Bravelion Training Institute</p>
            <h1>
              Safety is Not Optional.<br />
              <span className="hse-highlight">Train Right.</span>
            </h1>
            <p className="hse-hero__sub">
              Eight certified HSE programmes covering workplace safety, fire response,
              first aid, mental health, and compliance — built to international standards.
            </p>
            <div className="hse-hero__actions">
              <Link to="/training/enroll" className="hse-btn-primary">
                Book HSE Training <ArrowRight size={15} />
              </Link>
              <a href="#hse-programs" className="hse-btn-outline">
                View Programmes
              </a>
            </div>
          </div>

          {/* Accreditation strip */}
          <div className="hse-hero__strip">
            <div className="hse-container hse-hero__strip-inner">
              <span className="hse-hero__strip-label">Aligned with</span>
              {["NEBOSH", "IOSH", "ISO 45001", "OSHA Standards"].map((a) => (
                <span key={a} className="hse-accreditation-badge">{a}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="hse-stats hse-reveal">
          <div className="hse-container hse-stats__grid">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="hse-stat">
                  <span className="hse-stat__value">{s.value}</span>
                  <span className="hse-stat__label">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="hse-stat__divider" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===== WHY HSE ===== */}
        <section className="hse-why hse-reveal">
          <div className="hse-container hse-why__grid">
            <div className="hse-why__text">
              <span className="hse-eyebrow dark">Why It Matters</span>
              <h2>Why HSE Training Matters for Your Organisation.</h2>
              <p>
                A single preventable incident can cost more than a year of
                comprehensive safety training. Investing in HSE compliance
                protects your people, your business, and meets your legal obligations.
              </p>
              <ul className="hse-why__list">
                {whyPoints.map((item) => (
                  <li key={item}>
                    <CheckCircle size={14} className="hse-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="hse-link-arrow">
                Speak to an HSE Advisor <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="hse-why__cards">
              <div className="hse-impact-card">
                <span className="hse-impact-card__value">68%</span>
                <p>of workplace incidents are preventable with proper safety training.</p>
              </div>
              <div className="hse-impact-card hse-impact-card--accent">
                <span className="hse-impact-card__value">4×</span>
                <p>return on investment for every ₦1 spent on workplace safety programmes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAMMES ===== */}
        <section className="hse-programs-section" id="hse-programs">
          <div className="hse-container">
            <div className="hse-programs-header hse-reveal">
              <div>
                <span className="hse-eyebrow dark">HSE Training Programmes</span>
                <h2>Eight specialised programmes.</h2>
                <p>All delivered by certified HSE professionals with field experience.</p>
              </div>
              <Link to="/training/enroll" className="hse-link-arrow">
                Book a Programme <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="hse-programs-grid hse-reveal">
              {programs.map((p) => (
                <div className="hse-card" key={p.title}>
                  <div className="hse-card__top">
                    <span className="hse-card__icon">{p.icon}</span>
                    {p.cert && (
                      <span className="hse-card__cert">
                        <Award size={11} /> Certified
                      </span>
                    )}
                  </div>
                  <h3 className="hse-card__title">{p.title}</h3>
                  <p className="hse-card__desc">{p.desc}</p>
                  <div className="hse-card__foot">
                    <span className="hse-card__dur">
                      <Clock size={11} /> {p.dur}
                    </span>
                    <Link to="/training/enroll" className="hse-card__cta">
                      Book <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DELIVERY MODES ===== */}
        <section className="hse-delivery hse-reveal">
          <div className="hse-container">
            <div className="hse-delivery__header">
              <span className="hse-eyebrow light">How We Deliver</span>
              <h2>Training Delivery Options.</h2>
              <p>Flexible formats for individuals and corporate teams.</p>
            </div>
            <div className="hse-delivery__grid">
              {deliveryModes.map((d) => {
                const Icon = d.icon;
                return (
                  <div className="hse-delivery-card" key={d.title}>
                    <div className="hse-delivery-card__icon">
                      <Icon size={18} />
                    </div>
                    <h4>{d.title}</h4>
                    <p>{d.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="hse-cta hse-reveal">
          <div className="hse-container hse-cta__inner">
            <div className="hse-cta__text">
              <span className="hse-eyebrow">Book a Programme</span>
              <h2>Protect Your Team.<br />Start Today.</h2>
              <p>
                Speak to our HSE training team about the right programme
                for your organisation.
              </p>
            </div>
            <div className="hse-cta__actions">
              <Link to="/training/enroll" className="hse-btn-primary">
                Book HSE Training <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="hse-btn-outline-gold">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <TrainingFooter />
    </>
  );
};

export default HSEPage;