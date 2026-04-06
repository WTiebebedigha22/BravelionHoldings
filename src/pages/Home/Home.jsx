import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./Home.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const subsidiaries = [
  {
    number: "01",
    name: "Bravelion Services Ltd",
    tagline: "Technical Services & NDT",
    description:
      "Professional facility management, non-destructive testing, procurement, and operational support for oil & gas, construction, and power sectors.",
    link: "/services",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    name: "Bravelion Estates & Development Ltd",
    tagline: "Real Estate & Development",
    description:
      "Premium residential, commercial, and mixed-use developments engineered for long-term asset value across Nigeria's fastest-growing cities.",
    link: "/estates",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    name: "Bravelion Training & Consulting Ltd",
    tagline: "Executive Education & Advisory",
    description:
      "Internationally accredited certification programmes, workforce development, and strategic consulting designed to transform individuals and organisations.",
    link: "/training",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

const stats = [
  { value: "3",    label: "Specialized Divisions" },
  { value: "500+", label: "Professionals Trained" },
  { value: "15+",  label: "Years of Excellence" },
  { value: "4",    label: "Countries Served" },
];

const pillars = [
  {
    title: "Trust",
    body: "Every engagement is grounded in transparency, accountability, and honest delivery.",
  },
  {
    title: "Results",
    body: "We measure success by the tangible outcomes we create for clients and communities.",
  },
  {
    title: "Excellence",
    body: "Operational discipline and a commitment to quality underpin everything we build.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Home = () => {
  return (
    <div className="home-page">

      {/* ===== HERO ===== */}
      <section className="home-hero">
        <div className="container home-hero-inner">
          <p className="home-eyebrow">Bravelion Group &mdash; Est. Africa</p>
          <h1>
            Built on Trust.<br />
            <span className="home-highlight">Driven by Results.</span>
          </h1>
          <p className="home-hero-sub">
            A diversified holding company operating across technical services,
            real estate, and professional training — delivering impact across Africa.
          </p>
          <div className="home-hero-actions">
            <Link to="/about" className="btn-primary">
              Discover the Group <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats strip anchored to hero bottom */}
        <div className="hero-stats-strip">
          <div className="container hero-stats-inner">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBSIDIARIES ===== */}
      <section className="subsidiaries-section">
        <div className="container">
          <div className="subsidiaries-header">
            <div>
              <span className="home-section-eyebrow">Our Structure</span>
              <h2>Three Divisions. One Vision.</h2>
              <p>
                Excellence, innovation, and sustainable growth — delivered
                through three specialised subsidiaries.
              </p>
            </div>
            <Link to="/about" className="link-arrow-home">
              About the Group <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="subsidiary-grid">
            {subsidiaries.map((item) => (
              <div className="subsidiary-card" key={item.number}>
                <div
                  className="subsidiary-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span className="subsidiary-number">{item.number}</span>
                </div>
                <div className="subsidiary-content">
                  <span className="subsidiary-tagline">{item.tagline}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={item.link} className="subsidiary-link">
                    Explore Division <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="pillars-section">
        <div className="container pillars-grid">
          <div className="pillars-intro">
            <span className="home-section-eyebrow light">Our Principles</span>
            <h2>What we stand for.</h2>
            <p>
              The values that shape every decision, every project,
              and every relationship at Bravelion Group.
            </p>
            <Link to="/about" className="btn-ghost-light-sm">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
          <div className="pillars-list">
            {pillars.map((p, i) => (
              <div className="pillar-item" key={p.title}>
                <span className="pillar-index">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="home-cta">
        <div className="container home-cta-inner">
          <div className="home-cta-text">
            <span className="home-section-eyebrow light">Let's Build Together</span>
            <h2>Partner With Bravelion Group</h2>
            <p>
              Build strategic partnerships that create measurable value
              and sustainable growth across Africa.
            </p>
          </div>
          <div className="home-cta-actions">
            <Link to="/contact" className="btn-primary-gold">
              Contact Our Office <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost-light">
              About the Group
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;