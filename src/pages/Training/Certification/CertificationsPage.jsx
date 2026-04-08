import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TrainingNavbar from "../components/Navbar/Navbar";
import TrainingFooter from "../components/Footer/Footer";
import "./Certifications.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const areas = ["All", "Health & Safety", "ICT", "Project Mgmt", "Finance", "Engineering", "Operations"];

const certs = [
  { code: "NEBOSH IGC", area: "Health & Safety", icon: "⛑",  title: "NEBOSH International General Certificate",  desc: "The globally recognised HSE qualification for health and safety professionals. Covers risk assessment, hazard management, and workplace safety law." },
  { code: "ISO 45001",  area: "Health & Safety", icon: "🔒", title: "ISO 45001 Lead Implementer",                 desc: "Full implementation training for the international occupational health and safety management system standard — audit-ready certification." },
  { code: "PMP",        area: "Project Mgmt",    icon: "📋", title: "Project Management Professional (PMP)",     desc: "Preparation for the PMI PMP certification — covering project initiation, planning, execution, monitoring, and closure frameworks." },
  { code: "CompTIA",    area: "ICT",             icon: "💻", title: "CompTIA IT Fundamentals+",                  desc: "Entry-level IT certification covering hardware, software, networking, and security concepts for non-technical and technical professionals." },
  { code: "IOSH",       area: "Health & Safety", icon: "🛡",  title: "IOSH Managing Safely",                     desc: "Practical safety management training for line managers and supervisors — one of the most widely held safety qualifications globally." },
  { code: "CPA",        area: "Finance",         icon: "📊", title: "Certified Public Accountant (CPA) Prep",   desc: "Structured preparation for the CPA examination covering auditing, financial accounting, regulation, and business environment concepts." },
  { code: "COREN",      area: "Engineering",     icon: "⚙️", title: "COREN Registration Prep (Nigeria)",         desc: "Preparation support for the Council for the Regulation of Engineering in Nigeria — covering professional practice and competency requirements." },
  { code: "Six Sigma",  area: "Operations",      icon: "📈", title: "Lean Six Sigma Green Belt",                desc: "Process improvement methodology training covering DMAIC, waste elimination, statistical analysis tools, and quality management frameworks." },
];

const stats = [
  { value: "8+",    label: "Cert Programmes" },
  { value: "100%",  label: "Exam-Aligned" },
  { value: "Global",label: "Recognition" },
  { value: "Expert",label: "Facilitators" },
];

const steps = [
  { step: "01", title: "Assessment",         desc: "We assess your current knowledge and identify gaps relative to the certification standard." },
  { step: "02", title: "Structured Training",desc: "Instructor-led sessions covering all exam topics with practice questions and case studies." },
  { step: "03", title: "Exam Preparation",   desc: "Mock exams, revision clinics, and coaching from certified facilitators ahead of your exam date." },
  { step: "04", title: "Certification",      desc: "Sit your exam with confidence. Receive your internationally recognised certificate upon passing." },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const CertificationsPage = () => {
  const [area, setArea] = useState("All");
  const obsRef          = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("cert-visible")),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".cert-reveal").forEach((el) => obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  const filtered = certs.filter((c) => area === "All" || c.area === area);

  return (
    <>
      <TrainingNavbar />

      <div className="cert-page">

        {/* ===== HERO ===== */}
        <section className="cert-hero">
          <div className="cert-container cert-hero__inner">
            <p className="cert-eyebrow">Professional Certifications — Bravelion Training Institute</p>
            <h1>
              Get Certified.<br />
              <span className="cert-highlight">Get Ahead.</span>
            </h1>
            <p className="cert-hero__sub">
              Preparation programmes for globally recognised professional
              certifications — aligned with international standards and
              delivered by certified practitioners.
            </p>
            <div className="cert-hero__actions">
              <Link to="/training/enroll" className="cert-btn-primary">
                Enrol in a Cert Programme <ArrowRight size={15} />
              </Link>
              <a href="#cert-list" className="cert-btn-outline">
                Browse Certifications
              </a>
            </div>
          </div>

          {/* Cert codes strip */}
          <div className="cert-hero__strip">
            <div className="cert-container cert-hero__strip-inner">
              <span className="cert-hero__strip-label">Programmes include</span>
              {certs.map((c) => (
                <span key={c.code} className="cert-code-badge">{c.code}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="cert-stats cert-reveal">
          <div className="cert-container cert-stats__grid">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="cert-stat">
                  <span className="cert-stat__value">{s.value}</span>
                  <span className="cert-stat__label">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="cert-stat__divider" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===== PATHWAY ===== */}
        <section className="cert-pathway cert-reveal">
          <div className="cert-container">
            <div className="cert-pathway__header">
              <div>
                <span className="cert-eyebrow dark">How It Works</span>
                <h2>Our Certification Pathway.</h2>
                <p>From skills gap to certified professional — in four structured steps.</p>
              </div>
              <Link to="/training/enroll" className="cert-link-arrow">
                Start Your Journey <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="cert-steps">
              {steps.map((s, i) => (
                <div className="cert-step" key={s.step}>
                  <div className="cert-step__number">{s.step}</div>
                  {i < steps.length - 1 && <div className="cert-step__connector" />}
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CERT LIST ===== */}
        <section className="cert-list-section" id="cert-list">
          <div className="cert-container">

            <div className="cert-list-header cert-reveal">
              <div>
                <span className="cert-eyebrow dark">Certification Programmes</span>
                <h2>Choose your qualification.</h2>
                <p>Filter by professional area.</p>
              </div>
            </div>

            <div className="cert-filters cert-reveal">
              {areas.map((a) => (
                <button
                  key={a}
                  className={`cert-filter${area === a ? " cert-filter--active" : ""}`}
                  onClick={() => setArea(a)}
                >
                  {a}
                </button>
              ))}
            </div>

            <div className="cert-grid cert-reveal">
              {filtered.map((c) => (
                <div className="cert-card" key={c.code}>
                  <div className="cert-card__top">
                    <span className="cert-card__icon">{c.icon}</span>
                    <span className="cert-card__code">{c.code}</span>
                  </div>
                  <span className="cert-card__area">{c.area}</span>
                  <h3 className="cert-card__title">{c.title}</h3>
                  <p className="cert-card__desc">{c.desc}</p>
                  <Link to="/training/enroll" className="cert-card__cta">
                    Enrol in Prep Programme <ArrowUpRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cert-cta cert-reveal">
          <div className="cert-container cert-cta__inner">
            <div className="cert-cta__text">
              <span className="cert-eyebrow light">Next Step</span>
              <h2>Your Certification<br />Journey Starts Here.</h2>
              <p>
                Enrol in a preparation programme and let our certified
                facilitators guide you to success.
              </p>
            </div>
            <div className="cert-cta__actions">
              <Link to="/training/enroll" className="cert-btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="cert-btn-outline-gold">
                Speak to an Advisor <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <TrainingFooter />
    </>
  );
};

export default CertificationsPage;