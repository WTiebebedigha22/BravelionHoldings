import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle, ShieldCheck, Wrench } from "lucide-react";
import EnergyNavbar from "../components/navbar/EnergyNavbar";
import EnergyFooter from "../components/footer/EnergyFooter";
import "../Energy.css";
import "../EnergyDivisionPage.css";
import "./OilGasConsultancy.css";

const deliverables = [
  "Regulatory alignment & compliance support for upstream, midstream & downstream assets",
  "Technical project review, feasibility, and risk-based recommendations",
  "Operations improvement & safety-driven risk management",
  "Stakeholder-ready reporting and compliance documentation",
];

const capabilities = [
  { icon: ShieldCheck, title: "Compliance Led", body: "Aligned with sector regulatory expectations and safety standards." },
  { icon: Wrench, title: "Technical Precision", body: "Structured delivery from review through execution and handover." },
  { icon: CheckCircle, title: "Operational Readiness", body: "Process controls built to reduce downtime and improve performance." },
];

export default function OilGasConsultancy() {
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

      <div className="en-energy-page oilgas-energy-page">
        <section className="en-energy-hero sv-hero-custom">
          <div className="cert-container">
            <div className="en-energy-hero__inner cert-reveal">
              <div className="en-energy-hero__text">
                <span className="cert-eyebrow light">Oil & Gas Consultancy</span>
                <h1>
                  Advisory for <br />
                  <span className="cert-highlight">Safe & Compliant</span> delivery.
                </h1>
                <p className="cert-hero__sub">
                  Strategic consultancy that bridges regulation, technical review, and operational execution for upstream, midstream and downstream projects.
                </p>
                <div className="cert-hero__actions">
                  <Link to="/contact" className="cert-btn-primary">
                    Engage Energy Team <ArrowRight size={15} />
                  </Link>
                  <Link to="/energy/power-distribution-solar" className="cert-btn-outline">
                    Explore Power Solutions <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-hero__visual">
                <img
                  src="https://images.unsplash.com/photo-1648555394313-494797ad48fc?auto=format&fit=crop&q=80&w=2000"
                  alt="Oil and gas infrastructure"
                  className="en-energy-hero__img"
                />
                <div className="en-energy-hero__badge">
                  <span className="badge-val">15+</span>
                  <span className="badge-lab">Years Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="en-energy-divisions">
          <div className="cert-container">
            <div className="en-energy-divisions__header cert-reveal">
              <span className="cert-eyebrow dark">Deliverables</span>
              <h2 className="section-title">What we deliver</h2>
              <p className="en-energy-divisions__sub">Practical outputs designed to support approvals, safe operations and stakeholder communication.</p>
            </div>

            <div className="en-energy-division-panel cert-reveal" style={{ marginTop: "2rem" }}>
              <div className="en-energy-division-panel__left">
                <div className="en-energy-division-panel__icon">
                  <Wrench size={18} />
                </div>
                <h3>Oil & Gas Consultancy Services</h3>
                <p>
                  From regulatory readiness to technical review and operational improvement, we help teams deliver projects with measurable confidence.
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
                    Start a Project <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="en-energy-division-panel__right">
                <div className="en-energy-division-panel__card">
                  <span className="en-energy-division-panel__card-kicker">Capability Snapshot</span>
                  <h4 className="en-energy-division-panel__card-title">Confidence through structure</h4>
                  <p className="en-energy-division-panel__card-body">
                    Each engagement is designed for clarity, compliance, and operationally-ready outcomes.
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

        <section className="cert-cta">
          <div className="cert-container">
            <div className="cert-cta__inner cert-reveal">
              <div className="cert-cta__text">
                <span className="cert-eyebrow light">Get in touch</span>
                <h2>Build compliance-ready capacity with Bravelion.</h2>
                <p>Share your project scope and we’ll respond with a clear consultancy plan.</p>
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

