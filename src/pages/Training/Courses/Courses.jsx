import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Search, Clock, BarChart2 } from "lucide-react";
import TrainingNavbar from "../components/Navbar/Navbar";
import TrainingFooter from "../components/Footer/Footer";
import "./Courses.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const categories = [
  "All",
  "ICT & Digital",
  "Vocational",
  "Business",
  "Finance",
  "Health & Safety",
];

const courses = [
  { id: "C01", cat: "ICT & Digital",   icon: "💻", title: "Digital Skills Fundamentals",          dur: "3 Days",  lvl: "Beginner",     desc: "Master core digital tools: MS Office suite, email management, cloud storage, and productivity platforms used in modern workplaces." },
  { id: "C02", cat: "ICT & Digital",   icon: "🔐", title: "Cybersecurity Awareness",               dur: "2 Days",  lvl: "Intermediate", desc: "Understand threats, data protection best practices, secure browsing, phishing prevention, and organisational security policies." },
  { id: "C03", cat: "ICT & Digital",   icon: "📊", title: "Data Analysis & Visualization",         dur: "5 Days",  lvl: "Intermediate", desc: "Learn data analysis with Excel, Google Sheets, and basic Power BI — turning raw data into actionable business insights." },
  { id: "C04", cat: "Vocational",      icon: "🔧", title: "Electrical Installation Basics",        dur: "2 Weeks", lvl: "Beginner",     desc: "Hands-on training in residential and light commercial electrical installation, wiring standards, safety protocols, and tools." },
  { id: "C05", cat: "Vocational",      icon: "🏗",  title: "Construction Site Management",          dur: "1 Week",  lvl: "Intermediate", desc: "Site supervision fundamentals — planning, scheduling, labour coordination, materials management, and project documentation." },
  { id: "C06", cat: "Business",        icon: "📋", title: "Business Planning & Strategy",          dur: "4 Days",  lvl: "Intermediate", desc: "Develop a viable business plan — market analysis, financial projections, competitive strategy, and pitch preparation." },
  { id: "C07", cat: "Business",        icon: "🤝", title: "Leadership & People Management",        dur: "3 Days",  lvl: "Advanced",     desc: "Build leadership capacity, emotional intelligence, conflict resolution skills, and people management frameworks." },
  { id: "C08", cat: "Finance",         icon: "📈", title: "Personal Financial Planning",           dur: "2 Days",  lvl: "Beginner",     desc: "Budgeting, savings, debt management, and goal-based financial planning — practical tools for your financial future." },
  { id: "C09", cat: "Finance",         icon: "💰", title: "Investment Strategies for Beginners",   dur: "3 Days",  lvl: "Beginner",     desc: "Introduction to stocks, bonds, mutual funds, real estate investing, and risk assessment for new investors." },
  { id: "C10", cat: "Health & Safety", icon: "🛡",  title: "Workplace Safety Essentials",           dur: "2 Days",  lvl: "Beginner",     desc: "Core HSE concepts: hazard identification, PPE usage, incident reporting, and regulatory compliance for any workplace." },
  { id: "C11", cat: "Health & Safety", icon: "🩺", title: "Mental Health & Wellness at Work",      dur: "1 Day",   lvl: "Beginner",     desc: "Recognise signs of workplace stress and burnout. Learn mental health support strategies and wellness planning tools." },
  { id: "C12", cat: "ICT & Digital",   icon: "🌐", title: "Digital Entrepreneurship & E-Commerce", dur: "4 Days",  lvl: "Intermediate", desc: "Build and market an online business: e-commerce platforms, digital marketing basics, social media strategy, and payment integration." },
];

const lvlConfig = {
  Beginner:     { color: "#16a34a", bg: "rgba(22,163,74,0.08)",  border: "rgba(22,163,74,0.2)"  },
  Intermediate: { color: "#b8860b", bg: "rgba(184,134,11,0.08)", border: "rgba(184,134,11,0.2)" },
  Advanced:     { color: "#dc2626", bg: "rgba(220,38,38,0.08)",  border: "rgba(220,38,38,0.2)"  },
};

const stats = [
  { value: "12+", label: "Courses" },
  { value: "5",   label: "Disciplines" },
  { value: "500+",label: "Alumni" },
  { value: "95%", label: "Completion Rate" },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const CoursesPage = () => {
  const [cat, setCat]       = useState("All");
  const [search, setSearch] = useState("");
  const obsRef              = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("cs-visible")),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".cs-reveal").forEach((el) => obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  const filtered = courses.filter(
    (c) =>
      (cat === "All" || c.cat === cat) &&
      (c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <TrainingNavbar />

      <div className="courses-page">

        {/* ===== HERO ===== */}
        <section className="cs-hero">
          <div className="courses-container cs-hero__inner">
            <p className="cs-eyebrow">Course Catalogue — Bravelion Training Institute</p>
            <h1>
              Learn Skills That<br />
              <span className="cs-highlight">Actually Matter.</span>
            </h1>
            <p className="cs-hero__sub">
              12 professional development courses across five disciplines —
              designed for individuals and corporate teams seeking real,
              applicable skills.
            </p>
            <div className="cs-hero__actions">
              <Link to="/training/enroll" className="cs-btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <a href="#courses-grid" className="cs-btn-outline">
                Browse Courses
              </a>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="cs-stats cs-reveal">
          <div className="courses-container cs-stats__grid">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="cs-stat">
                  <span className="cs-stat__value">{s.value}</span>
                  <span className="cs-stat__label">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="cs-stat__divider" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===== COURSES GRID ===== */}
        <section className="cs-section" id="courses-grid">
          <div className="courses-container">

            <div className="cs-section__header cs-reveal">
              <span className="cs-eyebrow dark">All Programmes</span>
              <h2>Find the right course for you.</h2>
              <p>Filter by discipline or search by topic.</p>
            </div>

            {/* Controls */}
            <div className="cs-controls cs-reveal">
              <div className="cs-search-wrap">
                <Search size={15} className="cs-search-icon" />
                <input
                  className="cs-search"
                  type="text"
                  placeholder="Search courses…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button className="cs-search-clear" onClick={() => setSearch("")}>
                    ×
                  </button>
                )}
              </div>
              <div className="cs-filters">
                {categories.map((c) => (
                  <button
                    key={c}
                    className={`cs-filter${cat === c ? " cs-filter--active" : ""}`}
                    onClick={() => setCat(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            {search || cat !== "All" ? (
              <p className="cs-result-count cs-reveal">
                {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
                {cat !== "All" ? ` in ${cat}` : ""}
                {search ? ` for "${search}"` : ""}
              </p>
            ) : null}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="cs-empty cs-reveal">
                <p>No courses match your search.</p>
                <button className="cs-btn-ghost" onClick={() => { setCat("All"); setSearch(""); }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="cs-grid cs-reveal">
                {filtered.map((course) => {
                  const lvl = lvlConfig[course.lvl];
                  return (
                    <div className="cs-card" key={course.id}>
                      <div className="cs-card__top">
                        <span className="cs-card__icon">{course.icon}</span>
                        <span className="cs-card__id">{course.id}</span>
                      </div>

                      <div className="cs-card__meta">
                        <span
                          className="cs-card__lvl"
                          style={{ color: lvl.color, background: lvl.bg, borderColor: lvl.border }}
                        >
                          <BarChart2 size={10} /> {course.lvl}
                        </span>
                        <span className="cs-card__dur">
                          <Clock size={10} /> {course.dur}
                        </span>
                      </div>

                      <h3 className="cs-card__title">{course.title}</h3>
                      <p className="cs-card__desc">{course.desc}</p>

                      <div className="cs-card__foot">
                        <span className="cs-card__cat">{course.cat}</span>
                        <Link to="/training/enroll" className="cs-card__cta">
                          Enrol <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ===== CTA BAND ===== */}
        <section className="cs-cta cs-reveal">
          <div className="courses-container cs-cta__inner">
            <div className="cs-cta__text">
              <span className="cs-eyebrow light">Get Started</span>
              <h2>Ready to upskill?</h2>
              <p>
                Enrol as an individual or book a corporate cohort for your team.
              </p>
            </div>
            <div className="cs-cta__actions">
              <Link to="/training/enroll" className="cs-btn-primary">
                Enrol Now <ArrowRight size={15} />
              </Link>
              <Link to="/training/corporate" className="cs-btn-outline-gold">
                Corporate Programmes <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <TrainingFooter />
    </>
  );
};

export default CoursesPage;