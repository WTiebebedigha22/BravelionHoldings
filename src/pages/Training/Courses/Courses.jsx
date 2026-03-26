import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Courses.css';

const categories = ['All', 'ICT & Digital', 'Vocational', 'Business', 'Finance', 'Health & Safety'];

const courses = [
  { id: 'C01', cat: 'ICT & Digital',  icon: '💻', title: 'Digital Skills Fundamentals',         dur: '3 Days',  lvl: 'Beginner',     desc: 'Master core digital tools: MS Office suite, email management, cloud storage, and productivity platforms used in modern workplaces.' },
  { id: 'C02', cat: 'ICT & Digital',  icon: '🔐', title: 'Cybersecurity Awareness',              dur: '2 Days',  lvl: 'Intermediate', desc: 'Understand threats, data protection best practices, secure browsing, phishing prevention, and organizational security policies.' },
  { id: 'C03', cat: 'ICT & Digital',  icon: '📊', title: 'Data Analysis & Visualization',        dur: '5 Days',  lvl: 'Intermediate', desc: 'Learn data analysis with Excel, Google Sheets, and basic Power BI — turning raw data into actionable business insights.' },
  { id: 'C04', cat: 'Vocational',     icon: '🔧', title: 'Electrical Installation Basics',       dur: '2 Weeks', lvl: 'Beginner',     desc: 'Hands-on training in residential and light commercial electrical installation, wiring standards, safety protocols, and tools.' },
  { id: 'C05', cat: 'Vocational',     icon: '🏗',  title: 'Construction Site Management',         dur: '1 Week',  lvl: 'Intermediate', desc: 'Site supervision fundamentals — planning, scheduling, labour coordination, materials management, and project documentation.' },
  { id: 'C06', cat: 'Business',       icon: '📋', title: 'Business Planning & Strategy',         dur: '4 Days',  lvl: 'Intermediate', desc: 'Develop a viable business plan — market analysis, financial projections, competitive strategy, and pitch preparation.' },
  { id: 'C07', cat: 'Business',       icon: '🤝', title: 'Leadership & People Management',       dur: '3 Days',  lvl: 'Advanced',     desc: 'Build leadership capacity, emotional intelligence, conflict resolution skills, and people management frameworks.' },
  { id: 'C08', cat: 'Finance',        icon: '📈', title: 'Personal Financial Planning',          dur: '2 Days',  lvl: 'Beginner',     desc: 'Budgeting, savings, debt management, and goal-based financial planning — practical tools for your financial future.' },
  { id: 'C09', cat: 'Finance',        icon: '💰', title: 'Investment Strategies for Beginners',  dur: '3 Days',  lvl: 'Beginner',     desc: 'Introduction to stocks, bonds, mutual funds, real estate investing, and risk assessment for new investors.' },
  { id: 'C10', cat: 'Health & Safety',icon: '🛡',  title: 'Workplace Safety Essentials',          dur: '2 Days',  lvl: 'Beginner',     desc: 'Core HSE concepts: hazard identification, PPE usage, incident reporting, and regulatory compliance for any workplace.' },
  { id: 'C11', cat: 'Health & Safety',icon: '🩺', title: 'Mental Health & Wellness at Work',     dur: '1 Day',   lvl: 'Beginner',     desc: 'Recognize signs of workplace stress and burnout. Learn mental health support strategies and wellness planning tools.' },
  { id: 'C12', cat: 'ICT & Digital',  icon: '🌐', title: 'Digital Entrepreneurship & E-Commerce',dur: '4 Days',  lvl: 'Intermediate', desc: 'Build and market an online business: e-commerce platforms, digital marketing basics, social media strategy, and payment integration.' },
];

const lvlColor = { Beginner: '#16a34a', Intermediate: 'goldenrod', Advanced: '#dc2626' };

const CoursesPage = () => {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('tp-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.tp-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = courses.filter(c =>
    (cat === 'All' || c.cat === cat) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <TrainingNavbar />
      <div className="tp">

        <section className="tp-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner">
            <div className="tp-hero__label">📚 Course Catalogue</div>
            <h1 className="tp-hero__title">Learn Skills That<br /><em>Actually Matter.</em></h1>
            <p className="tp-hero__sub">12 professional development courses across five disciplines — designed for individuals and corporate teams seeking real, applicable skills.</p>
            <div className="tp-hero__actions">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Enroll Now</a>
              <a href="#courses-grid" className="tp-btn tp-btn--ghost">Browse Courses</a>
            </div>
          </div>
        </section>

        <div className="tp-stats tp-reveal">
          {[['12+','Courses'],['5','Disciplines'],['500+','Alumni'],['95%','Completion']].map(([n,l]) => (
            <div className="tp-stat" key={l}><span className="tp-stat__num">{n}</span><span className="tp-stat__label">{l}</span></div>
          ))}
        </div>

        <section className="tp-section" id="courses-grid">
          <div className="tp-section__header tp-reveal">
            <div className="tp-bar" /><h2>All Courses</h2>
            <p>Filter by discipline or search by topic.</p>
          </div>

          <div className="courses-controls tp-reveal">
            <input className="courses-search" type="text" placeholder="Search courses…" value={search} onChange={e => setSearch(e.target.value)} />
            <div className="courses-filters">
              {categories.map(c => (
                <button key={c} className={`courses-filter ${cat === c ? 'courses-filter--active' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="courses-grid tp-reveal">
            {filtered.length === 0 ? <p className="courses-empty">No courses match your search.</p> : filtered.map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-card__header">
                  <span className="course-card__icon">{course.icon}</span>
                  <span className="course-card__id">{course.id}</span>
                </div>
                <div className="course-card__meta">
                  <span className="course-card__lvl" style={{ color: lvlColor[course.lvl] }}>● {course.lvl}</span>
                  <span className="course-card__dur">⏱ {course.dur}</span>
                </div>
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.desc}</p>
                <div className="course-card__foot">
                  <span className="tp-tag">{course.cat}</span>
                  <a href="/training/enroll" className="course-card__cta">Enroll →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="tp-cta-strip tp-reveal">
          <div className="tp-cta-strip__inner">
            <span className="tp-cta-strip__eye">Get Started</span>
            <h2>Ready to Upskill?</h2>
            <p>Enroll as an individual or book a corporate cohort for your team.</p>
            <div className="tp-cta-strip__btns">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Enroll Now</a>
              <a href="/training/corporate" className="tp-btn tp-btn--ghost">Corporate Programs</a>
            </div>
          </div>
        </div>
      </div>
      <TrainingFooter />
    </>
  );
};

export default CoursesPage;