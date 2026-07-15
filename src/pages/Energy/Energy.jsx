import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle, Zap, ShieldCheck, Wrench } from "lucide-react";
import "./Energy.css";
import EnergyNavbar from "./components/navbar/EnergyNavbar";
import EnergyFooter from "./components/footer/EnergyFooter";

const sections = [
  {
    eyebrow: "Bravelion Energy Ltd",
    title: "Powering sustainable energy outcomes.",
    subtitle:
      "Energy and oil & gas infrastructure services designed for regulatory compliance, operational precision, and long-term value creation across Africa.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000",
  },
];

const energyDivisions = [
  {
    title: "Oil & Gas Consultancy",
    desc: "Strategic advisory bridging regulation, technical review, and safe operational delivery for upstream, midstream, and downstream assets.",
    bullets: [
      "Regulatory alignment & compliance support",
      "Technical project review & feasibility",
      "Operations improvement & risk management",
    ],
  },
  {
    title: "Energy Training & Workforce Readiness",
    desc: "Hands-on training programmes for field personnel—grounded in safety, competence, and operational reality.",
    bullets: [
      "Field operations procedures & drills",
      "Energy management & equipment handling",
      "Emergency response & crisis preparedness",
    ],
  },
  {
    title: "Power Distribution & Solar Solutions",
    desc: "End-to-end power delivery support—from design and installation through monitoring and maintenance.",
    bullets: [
      "Solar PV system design & installation",
      "Off-grid & hybrid energy solutions",
      "Distribution setup, monitoring & upkeep",
    ],
  },
];

const stats = [
  { value: "15+", label: "Years Energy Focus" },
  { value: "500+", label: "Personnel Trained" },
  { value: "30+", label: "Projects Delivered" },
  { value: "4", label: "Core Divisions" },
];

const capabilities = [
  { icon: CheckCircle, title: "Compliance Led", body: "Aligned with sector regulatory expectations and safety standards." },
  { icon: CheckCircle, title: "Operational Precision", body: "Structured delivery from feasibility through execution and handover." },
  { icon: CheckCircle, title: "Sustainability Focus", body: "Balancing energy security with cleaner future pathways." },
];

export default function Energy() {
  const [active, setActive] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("cert-visible");
        }),
      { threshold: 0.15 },
    );

    document.querySelectorAll(".cert-reveal").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const current = energyDivisions[active] ?? energyDivisions[0];

  return (
    <div className="cert-page">
      <EnergyNavbar />
      <div className="en-energy-page">
        {/* ===== HERO ===== */}
        <section className="en-energy-hero sv-hero-custom">
          <div className="cert-container">
            <div className="en-energy-hero__inner cert-reveal">
              <div className="en-energy-hero__text">
                <span className="cert-eyebrow light">Strategic Infrastructure</span>
                <h1>
                  Power.<br />
                  <span className="cert-highlight">Precision.</span>
                </h1>
                <p className="cert-hero__sub">
                  {sections[0].subtitle}
                </p>
                <div className="cert-hero__actions">
                  <Link to="/contact" className="cert-btn-primary">
                    Engage Energy Team <ArrowRight size={15} />
                  </Link>
                  <Link to="/services/energy" className="cert-btn-outline">
                    View Energy Capabilities <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-hero__visual">
                <img src={sections[0].image} alt="Energy infrastructure" className="en-energy-hero__img" />
                <div className="en-energy-hero__badge">
                  <span className="badge-val">15+</span>
                  <span className="badge-lab">Years Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="en-energy-stats cert-reveal">
          <div className="cert-container">
            <div className="en-energy-stats__grid">
              {stats.map((s) => (
                <div className="en-energy-stat" key={s.label}>
                  <span className="en-energy-stat__value">{s.value}</span>
                  <span className="en-energy-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVISIONS ===== */}
        <section className="en-energy-divisions">
          <div className="cert-container">
            <div className="en-energy-divisions__header cert-reveal">
              <span className="cert-eyebrow dark">Business Divisions</span>
              <h2 className="section-title">Bravelion Energy Ltd</h2>
              <p className="en-energy-divisions__sub">
                Switch between focus areas to explore how the division delivers value through compliance, competence, and execution.
              </p>

              <div className="en-energy-tabs" role="tablist">
                {energyDivisions.map((d, i) => {
                  const to =
                    d.title === "Oil & Gas Consultancy"
                      ? "/energy/oil-gas-consultancy"
                      : d.title === "Energy Training & Workforce Readiness"
                        ? "/energy/energy-training"
                        : "/energy/power-distribution-solar";

                  return (
                    <Link
                      key={d.title}
                      to={to}
                      className={`en-energy-tab${active === i ? " en-energy-tab--active" : ""}`}
                      role="tab"
                      aria-selected={active === i}
                      onClick={() => setActive(i)}
                    >
                      {d.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="en-energy-division-panel cert-reveal">
              <div className="en-energy-division-panel__left">
                <div className="en-energy-division-panel__icon">
                  {React.createElement(current.icon, { size: 18 })}
                </div>
                <h3>{current.title}</h3>
                <p>{current.desc}</p>

                <div className="en-energy-division-panel__bullets">
                  {current.bullets.map((b) => (
                    <div className="en-energy-bullet" key={b}>
                      <CheckCircle size={14} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="en-energy-division-panel__cta">
                  <Link to="/contact" className="cert-btn-primary">
                    Start a Project <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-division-panel__right">
                <div className="en-energy-division-panel__card">
                  <span className="en-energy-division-panel__card-kicker">Focus Snapshot</span>
                  <h4 className="en-energy-division-panel__card-title">Operationally ready</h4>
                  <p className="en-energy-division-panel__card-body">
                    Every engagement is governed by structured QA/QC and safety protocols to deliver verifiable outcomes.
                  </p>
                  <div className="en-energy-division-panel__capabilities">
                    {capabilities.map((c) => (
                      <div className="en-energy-cap" key={c.title}>
                        <span className="en-energy-cap__icon">
                          <c.icon size={14} />
                        </span>
                        <div>
                          <strong>{c.title}</strong>
                          <div className="en-energy-cap__body">{c.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cert-cta">
          <div className="cert-container">
            <div className="cert-cta__inner cert-reveal">
              <div className="cert-cta__text">
                <span className="cert-eyebrow light">Get in touch</span>
                <h2>Build energy capacity with Bravelion.</h2>
                <p>
                  Share your scope and we’ll respond with a clear engagement plan.
                </p>
              </div>
              <div className="cert-cta__actions">
                <Link to="/contact" className="cert-btn-primary">
                  Contact Our Team <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <EnergyFooter />
    </div>
  );
}


