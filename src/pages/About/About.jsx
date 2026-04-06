import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, HardHat, GraduationCap, MapPin, CheckCircle, Users } from "lucide-react";
import "./About.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const realEstateProjects = [
  {
    id: 1,
    title: "Bravelion Court",
    location: "Abuja, FCT",
    type: "Residential Estate",
    status: "Completed",
    description:
      "A gated residential development featuring 24 premium terrace and semi-detached homes with smart-home integration, landscaped communal areas, and 24-hour security.",
    highlights: ["24 Units", "Smart-Home Ready", "Gated Community"],
  },
  {
    id: 2,
    title: "Meridian Commercial Hub",
    location: "Lekki, Lagos",
    type: "Mixed-Use Development",
    status: "Ongoing",
    description:
      "A multi-storey mixed-use facility combining Grade-A office floors, ground-level retail units, and structured parking — designed to serve the fast-growing Lekki corridor.",
    highlights: ["12 Office Floors", "Retail Units", "800+ Car Park"],
  },
  {
    id: 3,
    title: "Riverside Heights",
    location: "Port Harcourt, Rivers",
    type: "Luxury Apartments",
    status: "Completed",
    description:
      "Forty waterfront luxury apartments across two towers, offering panoramic river views, rooftop amenities, gym facilities, and underground secure parking.",
    highlights: ["40 Luxury Units", "Waterfront Views", "Rooftop Amenities"],
  },
  {
    id: 4,
    title: "Greenfield Industrial Park",
    location: "Ogun State",
    type: "Industrial / Logistics",
    status: "In Planning",
    description:
      "A large-scale logistics and light-industrial park designed to support manufacturing clusters, cold-chain storage, and last-mile distribution operations.",
    highlights: ["50-Hectare Site", "Cold-Chain Storage", "Road & Rail Access"],
  },
];

const ndtServices = [
  {
    icon: "🔬",
    title: "Ultrasonic Testing (UT)",
    description: "High-frequency sound wave inspection for internal defects in welds, pipelines, and structural steel without material damage.",
  },
  {
    icon: "🧲",
    title: "Magnetic Particle Testing (MT)",
    description: "Detection of surface and near-surface discontinuities in ferromagnetic materials across oil & gas and construction sectors.",
  },
  {
    icon: "💡",
    title: "Radiographic Testing (RT)",
    description: "X-ray and gamma-ray imaging for weld quality verification and detection of internal flaws in pressure vessels and pipelines.",
  },
  {
    icon: "🔍",
    title: "Visual & Optical Inspection",
    description: "Systematic visual assessment using borescopes, drones, and remote cameras for confined spaces and elevated structures.",
  },
  {
    icon: "⚡",
    title: "Eddy Current Testing (ECT)",
    description: "Electromagnetic technique for detecting surface cracks and measuring conductivity in heat exchangers and tubing.",
  },
  {
    icon: "📐",
    title: "Structural Integrity Assessment",
    description: "Comprehensive fitness-for-service evaluations and remaining life assessments for ageing infrastructure and industrial assets.",
  },
];

const trainingPrograms = [
  {
    category: "NDT & Inspection",
    courses: ["ASNT Level I / II / III Certification Prep", "PCN Ultrasonic Testing", "Weld Inspection & Quality Control", "Pipeline Integrity Management"],
  },
  {
    category: "Executive & Business",
    courses: ["Strategic Leadership Programme", "Financial Management for Non-Finance Managers", "Project Management Professional (PMP) Prep", "Corporate Governance & Compliance"],
  },
  {
    category: "Health, Safety & Environment",
    courses: ["NEBOSH International General Certificate", "IOSH Managing Safely", "Environmental Impact Assessment", "Emergency Response & Crisis Management"],
  },
  {
    category: "Technical & Engineering",
    courses: ["Process Plant Operations", "Corrosion Engineering & Control", "Instrumentation & Control Systems", "Mechanical Integrity & Reliability"],
  },
];

const ndtCredentials = [
  { value: "ASNT", label: "Certified Standards" },
  { value: "PCN", label: "Accreditation" },
  { value: "ISO 9712", label: "Compliance" },
  { value: "15+", label: "Years in Field" },
];

const trainingStats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "30+", label: "Accredited Courses" },
  { value: "10+", label: "Corporate Clients" },
  { value: "NEBOSH / IOSH", label: "Certified Partners" },
];

const leadershipTeam = [
  {
    initials: "OA",
    name: "Oluwaseun Adeyemi",
    title: "Group Managing Director",
    bio: "20+ years leading diversified enterprises across West Africa. Former partner at a Big-4 advisory firm with deep expertise in M&A, governance, and operational strategy.",
  },
  {
    initials: "CN",
    name: "Chukwuemeka Nwosu",
    title: "MD, Bravelion Services Ltd",
    bio: "Seasoned engineer and ASNT Level III practitioner with 18 years in oil & gas inspection, asset integrity, and technical services delivery across Nigeria and Ghana.",
  },
  {
    initials: "FA",
    name: "Fatima Al-Hassan",
    title: "MD, Bravelion Estates & Development",
    bio: "Certified project management professional and RICS-qualified surveyor. Led real estate development projects valued in excess of ₦15 billion across Abuja and Lagos.",
  },
  {
    initials: "BT",
    name: "Babatunde Taiwo",
    title: "MD, Bravelion Training & Consulting",
    bio: "NEBOSH-certified trainer and executive coach with 15 years delivering HSE, NDT, and leadership programmes for IOCs, EPC contractors, and government institutions.",
  },
];

const divisions = [
  {
    number: "01",
    name: "Bravelion Services Ltd",
    tagline: "Technical Services & NDT",
    description: "Providing professional operational support, procurement, and enterprise technical solutions across oil & gas, power, and construction.",
    link: "/services",
  },
  {
    number: "02",
    name: "Bravelion Estates & Development Ltd",
    tagline: "Real Estate & Development",
    description: "Developing premium residential and commercial real estate projects designed for long-term asset value across Nigeria.",
    link: "/estates",
  },
  {
    number: "03",
    name: "Bravelion Training & Consulting Ltd",
    tagline: "Executive Education & Advisory",
    description: "Delivering internationally accredited certification programmes, workforce development, and strategic advisory services.",
    link: "/training",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const About = () => {
  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="hero-inner container">
          <p className="hero-eyebrow">Bravelion Group &mdash; Est. Africa</p>
          <h1>
            Building Sustainable<br />
            Enterprises <span className="text-highlight">Across Africa.</span>
          </h1>
          <p className="hero-sub">
            A diversified holding company operating across technical services,
            real estate development, and professional training — creating
            long-term value through disciplined leadership.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Engage With Us <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll-cue">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="who-section">
        <div className="container who-grid">
          <div className="who-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2>A strategic parent company driving structural growth.</h2>
            <p>
              Established with a vision to lead across emerging sectors, Bravelion Group
              operates as the strategic holding company for three high-performance
              subsidiaries. Our integrated model gives each division focused expertise
              while sharing governance, direction, and financial strength.
            </p>
            <p>
              We are privately owned, operationally disciplined, and built for the long term.
            </p>
            <Link to="/contact" className="link-arrow">
              Partner with us <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="who-stats">
            <div className="big-stat">
              <span className="big-stat-number">3</span>
              <span className="big-stat-label">Specialized Divisions</span>
            </div>
            <div className="big-stat">
              <span className="big-stat-number">100<small>%</small></span>
              <span className="big-stat-label">Independent Ownership</span>
            </div>
            <div className="big-stat accent">
              <span className="big-stat-number">∞</span>
              <span className="big-stat-label">Long-Term Growth Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIVISIONS ===== */}
      <section className="divisions-section">
        <div className="container">
          <div className="divisions-header">
            <span className="section-eyebrow">Our Structure</span>
            <h2>Three pillars. One group.</h2>
          </div>
          <div className="divisions-list">
            {divisions.map((d) => (
              <div className="division-row" key={d.number}>
                <span className="division-number">{d.number}</span>
                <div className="division-info">
                  <span className="division-tagline">{d.tagline}</span>
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                </div>
                <Link to={d.link} className="division-link">
                  Explore <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL ESTATE PROJECTS ===== */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-header">
            <div>
              <span className="section-eyebrow light">Bravelion Estates & Development</span>
              <h2>Featured Projects</h2>
            </div>
            <Link to="/estates" className="btn-ghost-light">
              Full Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="projects-grid">
            {realEstateProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <Building2 size={40} className="project-placeholder-icon" />
                  <span className={`project-status status-${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                    {project.status}
                  </span>
                  <span className="project-location">
                    <MapPin size={11} /> {project.location}
                  </span>
                </div>
                <div className="project-body">
                  <span className="project-type">{project.type}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-highlights">
                    {project.highlights.map((h) => (
                      <span className="highlight-chip" key={h}>
                        <CheckCircle size={10} /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NDT & TECHNICAL SERVICES ===== */}
      <section className="ndt-section">
        <div className="container">
          <div className="ndt-intro">
            <div className="ndt-intro-text">
              <span className="section-eyebrow">Bravelion Services Ltd</span>
              <h2>Non-Destructive Testing & Technical Services</h2>
              <p>
                Industry-certified inspection, asset integrity, and engineering support
                to the oil & gas, power, and construction sectors across Nigeria and West Africa.
              </p>
              <div className="credentials-strip">
                {ndtCredentials.map((item) => (
                  <div className="credential-item" key={item.label}>
                    <span className="credential-value">{item.value}</span>
                    <span className="credential-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="link-arrow">
                View all technical services <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="ndt-grid">
              {ndtServices.map((svc) => (
                <div className="ndt-card" key={svc.title}>
                  <div className="ndt-icon">{svc.icon}</div>
                  <h4>{svc.title}</h4>
                  <p>{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINING & CONSULTING ===== */}
      <section className="training-section">
        <div className="container">
          <div className="training-header">
            <div>
              <span className="section-eyebrow">Bravelion Training & Consulting</span>
              <h2>Professional Training Programmes</h2>
              <p>
                Internationally recognised certifications and executive education
                for professionals and organisations driving Africa's growth.
              </p>
            </div>
            <Link to="/training" className="btn-primary">
              Browse Programmes <ArrowRight size={15} />
            </Link>
          </div>
          <div className="training-grid">
            {trainingPrograms.map((prog) => (
              <div className="training-card" key={prog.category}>
                <h4 className="training-category">{prog.category}</h4>
                <ul className="training-list">
                  {prog.courses.map((course) => (
                    <li key={course}>
                      <CheckCircle size={13} className="check-icon" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="training-stats-bar">
            {trainingStats.map((stat) => (
              <div className="training-stat" key={stat.label}>
                <span className="training-stat-value">{stat.value}</span>
                <span className="training-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION / MISSION / MOTTO ===== */}
      <section className="vmm-section">
        <div className="container">
          <div className="vmm-grid">
            <div className="vmm-card">
              <span className="vmm-number">01</span>
              <h3>Vision</h3>
              <p>
                To build a globally respected brand that delivers practical,
                high-quality solutions across diverse industries — improving
                lives and creating enduring value.
              </p>
            </div>
            <div className="vmm-card">
              <span className="vmm-number">02</span>
              <h3>Mission</h3>
              <p>
                We identify real needs and deliver reliable, well-executed solutions.
                Through expertise, innovation, and integrity, we provide measurable
                results our clients can consistently trust.
              </p>
            </div>
            <div className="vmm-card vmm-accent">
              <span className="vmm-number">03</span>
              <h3>Motto</h3>
              <p className="vmm-motto-text">
                "Built on Trust,<br />Driven by Results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-header">
            <span className="section-eyebrow">The Leadership</span>
            <h2>Grounded in accountability.<br />Built for the long term.</h2>
          </div>
          <div className="team-grid">
            {leadershipTeam.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">{member.initials}</div>
                <div className="team-info">
                  <span className="team-role">{member.title}</span>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container cta-inner">
          <div className="cta-text">
            <span className="section-eyebrow light">Let's Build Together</span>
            <h2>Partner With Bravelion Group</h2>
            <p>Collaborate to build scalable, future-focused enterprises across Africa.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary-gold">
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-ghost-light">
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;