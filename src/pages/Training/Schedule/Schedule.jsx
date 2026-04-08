import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Schedule.css';

const scheduleData = [
  { month: 'April 2026', week: 'Wk 1', course: 'Digital Skills Fundamentals', type: 'ICT', spots: 8, location: 'Lagos Centre', format: 'Classroom' },
  { month: 'April 2026', week: 'Wk 1', course: 'Workplace Safety Essentials', type: 'HSE', spots: 12, location: 'Port Harcourt', format: 'On-site' },
  { month: 'April 2026', week: 'Wk 2', course: 'Business Planning & Strategy', type: 'Business', spots: 5, location: 'Lagos Centre', format: 'Classroom' },
  { month: 'April 2026', week: 'Wk 3', course: 'NEBOSH IGC Preparation (Part 1)', type: 'Certification', spots: 10, location: 'Lagos Centre', format: 'Classroom' },
  { month: 'May 2026', week: 'Wk 1', course: 'Leadership & People Management', type: 'Business', spots: 12, location: 'Lagos Centre', format: 'Classroom' },
  { month: 'May 2026', week: 'Wk 2', course: 'Fire Safety & Emergency Response', type: 'HSE', spots: 2, location: 'Abuja', format: 'On-site' },
];

const months = ['All', 'April 2026', 'May 2026', 'June 2026'];
const types = ['All', 'ICT', 'HSE', 'Business', 'Certification'];

const SchedulePage = () => {
  const [activeMonth, setActiveMonth] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('cert-visible')),
      { threshold: 0.05 }
    );
    document.querySelectorAll('.cert-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = scheduleData.filter(s =>
    (activeMonth === 'All' || s.month === activeMonth) && (activeType === 'All' || s.type === activeType)
  );

  return (
    <div className="cert-page">
      <TrainingNavbar />

      {/* HERO SECTION */}
      <section className="cert-hero sched-hero">
        <div className="cert-container">
          <div className="cert-hero__inner cert-reveal">
            <span className="cert-eyebrow light">Availability Calendar</span>
            <h1>Knowledge <br /> <span className="cert-highlight">Synchronized.</span></h1>
            <p className="cert-hero__sub">Explore our curated calendar of professional development sessions. Refined expertise, delivered at the pace of global industry.</p>
            <div className="cert-hero__actions">
              <a href="#calendar" className="cert-btn-primary">Browse Schedule</a>
              <a href="/training/corporate" className="cert-btn-outline">Corporate Groups</a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="sched-controls-section cert-reveal" id="calendar">
        <div className="cert-container">
          <div className="sched-filter-cluster">
            <div className="filter-group">
              <span className="filter-label">Timeline</span>
              <div className="filter-options">
                {months.map(m => (
                  <button 
                    key={m} 
                    className={`cert-filter ${activeMonth === m ? 'cert-filter--active' : ''}`} 
                    onClick={() => setActiveMonth(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="filter-label">Discipline</span>
              <div className="filter-options">
                {types.map(t => (
                  <button 
                    key={t} 
                    className={`cert-filter ${activeType === t ? 'cert-filter--active' : ''}`} 
                    onClick={() => setActiveType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE LIST */}
      <section className="sched-list-section">
        <div className="cert-container">
          <div className="sched-grid">
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <div key={i} className={`sched-row cert-reveal ${item.spots <= 5 ? 'urgent' : ''}`}>
                  <div className="sched-col-date">
                    <span className="sched-week">{item.week}</span>
                    <span className="sched-month-small">{item.month.split(' ')[0]}</span>
                  </div>
                  
                  <div className="sched-col-info">
                    <span className="cert-card__code">{item.type}</span>
                    <h3 className="sched-course-title">{item.course}</h3>
                    <div className="sched-meta">
                      <span>📍 {item.location}</span>
                      <span className="meta-divider">|</span>
                      <span>💻 {item.format}</span>
                    </div>
                  </div>

                  <div className="sched-col-status">
                    <div className="spots-counter">
                      <span className="spots-num">{item.spots}</span>
                      <span className="spots-text">Seats Left</span>
                    </div>
                    {item.spots <= 5 && <span className="urgent-badge">Filling Fast</span>}
                  </div>

                  <div className="sched-col-action">
                    <a href="/enroll" className="cert-btn-primary small">Reserve</a>
                  </div>
                </div>
              ))
            ) : (
              <div className="sched-empty-state cert-reveal">
                <p>No sessions align with the selected criteria. Please refine your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cert-cta">
        <div className="cert-container">
          <div className="cert-cta__inner cert-reveal">
            <div className="cert-cta__text">
              <span className="cert-eyebrow light">Strategic Planning</span>
              <h2>Bespoke Team Scheduling</h2>
              <p>Looking for a specific date or a private cohort for your organization?</p>
            </div>
            <div className="cert-cta__actions">
              <a href="/contact" className="cert-btn-primary">Request Private Date</a>
            </div>
          </div>
        </div>
      </section>

      <TrainingFooter />
    </div>
  );
};

export default SchedulePage;