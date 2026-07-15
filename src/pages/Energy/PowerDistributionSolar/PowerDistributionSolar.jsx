import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import EnergyNavbar from "../components/navbar/EnergyNavbar";
import EnergyFooter from "../components/footer/EnergyFooter";
import "../Energy.css";
import "../EnergyDivisionPage.css";
import "./PowerDistributionSolar.css";

const deliverables = [
  "Solar PV system design & installation support",
  "Off-grid & hybrid energy solutions for reliable power",
  "Distribution setup, monitoring and preventive maintenance",
  "Operational handover and performance support",
];

const capabilities = [
  { icon: ShieldCheck, title: "Grid-Ready Planning", body: "Design support that considers reliability, safety and long-term upkeep." },
  { icon: Zap, title: "Clean Power Delivery", body: "End-to-end execution support from system design through monitoring." },
  { icon: CheckCircle, title: "Maintenance Mindset", body: "Operations support built to reduce downtime and sustain performance." },
];

export default function PowerDistributionSolar() {
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

      <div className="en-energy-page power-energy-page">
        <section className="en-energy-hero sv-hero-custom">
          <div className="cert-container">
            <div className="en-energy-hero__inner cert-reveal">
              <div className="en-energy-hero__text">
                <span className="cert-eyebrow light">Power Distribution & Solar Solutions</span>
                <h1>
                  Power delivery, <br />
                  <span className="cert-highlight">reliability by design.</span>
                </h1>
                <p className="cert-hero__sub">
                  End-to-end support—from design and installation through monitoring and maintenance—delivering clean, reliable and scalable power solutions.
                </p>
                <div className="cert-hero__actions">
                  <Link to="/contact" className="cert-btn-primary">
                    Request a Quote <ArrowRight size={15} />
                  </Link>
                  <Link to="/energy/energy-training" className="cert-btn-outline">
                    Train Your Team <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-hero__visual">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000"
                  alt="Solar and power distribution"
                  className="en-energy-hero__img"
                />
                <div className="en-energy-hero__badge">
                  <span className="badge-val">100%</span>
                  <span className="badge-lab">Renewable Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="en-energy-divisions">
          <div className="cert-container">
            <div className="en-energy-divisions__header cert-reveal">
              <span className="cert-eyebrow dark">Delivery Scope</span>
              <h2 className="section-title">What we deliver</h2>
              <p className="en-energy-divisions__sub">Clean power solutions with operational monitoring, maintenance and reliable performance support.</p>
            </div>

            <div className="en-energy-division-panel cert-reveal" style={{ marginTop: "2rem" }}>
              <div className="en-energy-division-panel__left">
                <div className="en-energy-division-panel__icon">
                  <ShieldCheck size={18} />
                </div>
                <h3>Solar & Power Distribution Services</h3>
                <p>
                  From system design to installation and ongoing monitoring, we help clients build sustainable energy capacity with confidence.
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
                  <Link to="/contact" className="cert-btn-primary">
                    Start a Power Project <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-division-panel__right">
                <div className="en-energy-division-panel__card">
                  <span className="en-energy-division-panel__card-kicker">Operationally ready</span>
                  <h4 className="en-energy-division-panel__card-title">Reliability through structure</h4>
                  <p className="en-energy-division-panel__card-body">Built for safe installation, transparent handover and maintenance-minded operations.</p>

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
                <h2>Deliver reliable power with Bravelion.</h2>
                <p>Tell us your distribution and solar scope and we’ll propose an engagement plan.</p>
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

