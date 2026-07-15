import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import EnergyNavbar from "../components/navbar/EnergyNavbar";
import EnergyFooter from "../components/footer/EnergyFooter";
import "../Energy.css";
import "../EnergyDivisionPage.css";
import "./EnergyTraining.css";

const deliverables = [
  "Field operations procedures & drills grounded in operational reality",
  "Energy management & equipment handling for competent deployment",
  "Emergency response, crisis preparedness and incident handling",
  "Safety-first competency reinforcement and performance follow-up",
];

const capabilities = [
  { icon: Zap, title: "Competence Builder", body: "Hands-on training designed for field readiness and safe execution." },
  { icon: ShieldCheck, title: "Safety Embedded", body: "HSE principles integrated into every module and exercise." },
  { icon: CheckCircle, title: "Operational Practicality", body: "Program outcomes aligned with real-world job performance." },
];

export default function EnergyTraining() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("cert-visible")),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".cert-reveal").forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="cert-page">
      <EnergyNavbar />

      <div className="en-energy-page training-energy-page">
        <section className="en-energy-hero sv-hero-custom">
          <div className="cert-container">
            <div className="en-energy-hero__inner cert-reveal">
              <div className="en-energy-hero__text">
                <span className="cert-eyebrow light">Energy Training & Workforce Readiness</span>
                <h1>
                  Train the team. <br />
                  <span className="cert-highlight">Operate with confidence.</span>
                </h1>
                <p className="cert-hero__sub">
                  Hands-on training for field personnel—grounded in safety, competence, and operational delivery reality.
                </p>
                <div className="cert-hero__actions">
                  <Link to="/contact" className="cert-btn-primary">
                    Enrol / Enquire <ArrowRight size={15} />
                  </Link>
                  <Link to="/energy/oil-gas-consultancy" className="cert-btn-outline">
                    Need Consultancy Too? <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-hero__visual">
                <img
                  src="https://images.unsplash.com/photo-1595839095673-3f96e5cf05a5?auto=format&fit=crop&q=80&w=2000"
                  alt="Training and workforce readiness"
                  className="en-energy-hero__img"
                />
                <div className="en-energy-hero__badge">
                  <span className="badge-val">500+</span>
                  <span className="badge-lab">Personnel Trained</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="en-energy-divisions">
          <div className="cert-container">
            <div className="en-energy-divisions__header cert-reveal">
              <span className="cert-eyebrow dark">Training Focus</span>
              <h2 className="section-title">What we teach</h2>
              <p className="en-energy-divisions__sub">Competency development for safe field operations and operational performance.</p>
            </div>

            <div className="en-energy-division-panel cert-reveal" style={{ marginTop: "2rem" }}>
              <div className="en-energy-division-panel__left">
                <div className="en-energy-division-panel__icon">
                  <Zap size={18} />
                </div>
                <h3>Workforce Readiness Programs</h3>
                <p>
                  Practical training modules built to strengthen procedures, safety habits, and job performance across energy and oil & gas environments.
                </p>

                <div className="en-energy-division-panel__bullets">
                  {deliverables.map((b) => (
                    <div className="en-energy-bullet" key={b}>
                      <CheckCircle size={14} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="en-energy-division-panel__cta">
                  <Link to="/training" className="cert-btn-primary">
                    Build Your Course Plan <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-division-panel__right">
                <div className="en-energy-division-panel__card">
                  <span className="en-energy-division-panel__card-kicker">How we deliver</span>
                  <h4 className="en-energy-division-panel__card-title">Safety + competence</h4>
                  <p className="en-energy-division-panel__card-body">Every program is structured for real workplace readiness and measurable outcomes.</p>

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

        <section className="cert-cta">
          <div className="cert-container">
            <div className="cert-cta__inner cert-reveal">
              <div className="cert-cta__text">
                <span className="cert-eyebrow light">Get in touch</span>
                <h2>Upgrade your workforce with Bravelion.</h2>
                <p>Tell us your role requirements and we’ll propose the right training division plan.</p>
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

