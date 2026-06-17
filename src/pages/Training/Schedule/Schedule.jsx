import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Schedule.css';

const scheduleData = [
  // ── APRIL 2026 ──────────────────────────────────────────────────
  {
    month: 'April 2026', week: 'Wk 1',
    course: 'Digital Skills Fundamentals',
    type: 'ICT', location: 'Lagos Centre', format: 'Classroom',
    spots: 8, duration: '3 Days', price: '₦85,000', instructor: 'Engr. T. Adeyemi',
  },
  {
    month: 'April 2026', week: 'Wk 1',
    course: 'Workplace Safety Essentials',
    type: 'HSE', location: 'Port Harcourt', format: 'On-site',
    spots: 12, duration: '2 Days', price: '₦65,000', instructor: 'Dr. F. Okafor',
  },
  {
    month: 'April 2026', week: 'Wk 2',
    course: 'Business Planning & Strategy',
    type: 'Business', location: 'Lagos Centre', format: 'Classroom',
    spots: 5, duration: '4 Days', price: '₦120,000', instructor: 'Mrs. C. Nwosu',
  },
  {
    month: 'April 2026', week: 'Wk 2',
    course: 'AutoCAD for Engineers',
    type: 'Engineering', location: 'Abuja', format: 'Classroom',
    spots: 10, duration: '5 Days', price: '₦145,000', instructor: 'Engr. B. Musa',
  },
  {
    month: 'April 2026', week: 'Wk 3',
    course: 'NEBOSH IGC Preparation (Part 1)',
    type: 'Certification', location: 'Lagos Centre', format: 'Classroom',
    spots: 10, duration: '5 Days', price: '₦200,000', instructor: 'Dr. K. Williams',
  },
  {
    month: 'April 2026', week: 'Wk 4',
    course: 'Real Estate Investment Analysis',
    type: 'Real Estate', location: 'Online', format: 'Virtual',
    spots: 20, duration: '2 Days', price: '₦55,000', instructor: 'Mr. O. Fashola',
  },

  // ── MAY 2026 ────────────────────────────────────────────────────
  {
    month: 'May 2026', week: 'Wk 1',
    course: 'Leadership & People Management',
    type: 'Business', location: 'Lagos Centre', format: 'Classroom',
    spots: 12, duration: '3 Days', price: '₦110,000', instructor: 'Mrs. C. Nwosu',
  },
  {
    month: 'May 2026', week: 'Wk 1',
    course: 'PMP Exam Bootcamp',
    type: 'Certification', location: 'Abuja', format: 'Classroom',
    spots: 8, duration: '5 Days', price: '₦250,000', instructor: 'Engr. R. Osei',
  },
  {
    month: 'May 2026', week: 'Wk 2',
    course: 'Fire Safety & Emergency Response',
    type: 'HSE', location: 'Abuja', format: 'On-site',
    spots: 2, duration: '2 Days', price: '₦70,000', instructor: 'Dr. F. Okafor',
  },
  {
    month: 'May 2026', week: 'Wk 2',
    course: 'Microsoft Excel for Business Analytics',
    type: 'ICT', location: 'Online', format: 'Virtual',
    spots: 30, duration: '3 Days', price: '₦45,000', instructor: 'Mr. S. Danjuma',
  },
  {
    month: 'May 2026', week: 'Wk 3',
    course: 'Construction Site Management',
    type: 'Engineering', location: 'Port Harcourt', format: 'On-site',
    spots: 6, duration: '4 Days', price: '₦130,000', instructor: 'Engr. B. Musa',
  },
  {
    month: 'May 2026', week: 'Wk 4',
    course: 'Property Valuation & Appraisal',
    type: 'Real Estate', location: 'Lagos Centre', format: 'Classroom',
    spots: 9, duration: '3 Days', price: '₦95,000', instructor: 'Mr. O. Fashola',
  },

  // ── JUNE 2026 ───────────────────────────────────────────────────
  {
    month: 'June 2026', week: 'Wk 1',
    course: 'ISO 45001 Occupational Health & Safety',
    type: 'Certification', location: 'Lagos Centre', format: 'Classroom',
    spots: 14, duration: '5 Days', price: '₦220,000', instructor: 'Dr. K. Williams',
  },
  {
    month: 'June 2026', week: 'Wk 1',
    course: 'Cyber Security Awareness',
    type: 'ICT', location: 'Online', format: 'Virtual',
    spots: 25, duration: '2 Days', price: '₦50,000', instructor: 'Engr. T. Adeyemi',
  },
  {
    month: 'June 2026', week: 'Wk 2',
    course: 'Agile & Scrum Project Management',
    type: 'Business', location: 'Abuja', format: 'Classroom',
    spots: 11, duration: '3 Days', price: '₦115,000', instructor: 'Engr. R. Osei',
  },
  {
    month: 'June 2026', week: 'Wk 3',
    course: 'Electrical Installations & Wiring',
    type: 'Engineering', location: 'Port Harcourt', format: 'On-site',
    spots: 7, duration: '5 Days', price: '₦140,000', instructor: 'Engr. B. Musa',
  },
  {
    month: 'June 2026', week: 'Wk 4',
    course: 'Risk Assessment & Hazard Control',
    type: 'HSE', location: 'Lagos Centre', format: 'Classroom',
    spots: 4, duration: '2 Days', price: '₦72,000', instructor: 'Dr. F. Okafor',
  },

  // ── JULY 2026 ───────────────────────────────────────────────────
  {
    month: 'July 2026', week: 'Wk 1',
    course: 'Real Estate Law & Contracts',
    type: 'Real Estate', location: 'Online', format: 'Virtual',
    spots: 18, duration: '2 Days', price: '₦60,000', instructor: 'Mr. O. Fashola',
  },
  {
    month: 'July 2026', week: 'Wk 1',
    course: 'Data Analysis with Power BI',
    type: 'ICT', location: 'Lagos Centre', format: 'Classroom',
    spots: 15, duration: '4 Days', price: '₦125,000', instructor: 'Mr. S. Danjuma',
  },
  {
    month: 'July 2026', week: 'Wk 2',
    course: 'NEBOSH IGC Preparation (Part 2)',
    type: 'Certification', location: 'Lagos Centre', format: 'Classroom',
    spots: 10, duration: '5 Days', price: '₦200,000', instructor: 'Dr. K. Williams',
  },
  {
    month: 'July 2026', week: 'Wk 3',
    course: 'Financial Management for Non-Finance Managers',
    type: 'Business', location: 'Abuja', format: 'Classroom',
    spots: 9, duration: '3 Days', price: '₦105,000', instructor: 'Mrs. C. Nwosu',
  },
  {
    month: 'July 2026', week: 'Wk 4',
    course: 'Plumbing Systems & Pipe Design',
    type: 'Engineering', location: 'Port Harcourt', format: 'On-site',
    spots: 6, duration: '5 Days', price: '₦135,000', instructor: 'Engr. B. Musa',
  },

  // ── AUGUST 2026 ─────────────────────────────────────────────────
  {
    month: 'August 2026', week: 'Wk 1',
    course: 'Environmental Impact Assessment',
    type: 'HSE', location: 'Lagos Centre', format: 'Classroom',
    spots: 13, duration: '4 Days', price: '₦100,000', instructor: 'Dr. F. Okafor',
  },
  {
    month: 'August 2026', week: 'Wk 2',
    course: 'Land Administration & GIS Mapping',
    type: 'Real Estate', location: 'Abuja', format: 'Classroom',
    spots: 8, duration: '3 Days', price: '₦90,000', instructor: 'Mr. O. Fashola',
  },
  {
    month: 'August 2026', week: 'Wk 3',
    course: 'Cloud Computing Fundamentals (AWS)',
    type: 'ICT', location: 'Online', format: 'Virtual',
    spots: 20, duration: '5 Days', price: '₦160,000', instructor: 'Engr. T. Adeyemi',
  },
  {
    month: 'August 2026', week: 'Wk 4',
    course: 'Strategic Procurement & Supply Chain',
    type: 'Business', location: 'Lagos Centre', format: 'Classroom',
    spots: 3, duration: '3 Days', price: '₦112,000', instructor: 'Mrs. C. Nwosu',
  },

  // ── SEPTEMBER 2026 ──────────────────────────────────────────────
  {
    month: 'September 2026', week: 'Wk 1',
    course: 'Structural Engineering Fundamentals',
    type: 'Engineering', location: 'Lagos Centre', format: 'Classroom',
    spots: 11, duration: '5 Days', price: '₦150,000', instructor: 'Engr. B. Musa',
  },
  {
    month: 'September 2026', week: 'Wk 2',
    course: 'PRINCE2 Foundation & Practitioner',
    type: 'Certification', location: 'Abuja', format: 'Classroom',
    spots: 8, duration: '5 Days', price: '₦260,000', instructor: 'Engr. R. Osei',
  },
  {
    month: 'September 2026', week: 'Wk 3',
    course: 'Property Development & Feasibility',
    type: 'Real Estate', location: 'Online', format: 'Virtual',
    spots: 16, duration: '2 Days', price: '₦58,000', instructor: 'Mr. O. Fashola',
  },
  {
    month: 'September 2026', week: 'Wk 4',
    course: 'Industrial Hygiene & Occupational Health',
    type: 'HSE', location: 'Port Harcourt', format: 'On-site',
    spots: 5, duration: '3 Days', price: '₦88,000', instructor: 'Dr. F. Okafor',
  },
];

const months = ['All', 'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026', 'September 2026'];
const types = ['All', 'ICT', 'HSE', 'Business', 'Certification', 'Engineering', 'Real Estate'];
const locations = ['All', 'Lagos Centre', 'Abuja', 'Port Harcourt', 'Online'];
const formats = ['All', 'Classroom', 'On-site', 'Virtual'];

const SchedulePage = () => {
  const [activeMonth, setActiveMonth] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');
  const [activeFormat, setActiveFormat] = useState('All');
  const [expandedRow, setExpandedRow] = useState(null);
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
    (activeMonth === 'All' || s.month === activeMonth) &&
    (activeType === 'All' || s.type === activeType) &&
    (activeLocation === 'All' || s.location === activeLocation) &&
    (activeFormat === 'All' || s.format === activeFormat)
  );

  const toggleRow = (i) => setExpandedRow(expandedRow === i ? null : i);

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

            <div className="filter-group">
              <span className="filter-label">Location</span>
              <div className="filter-options">
                {locations.map(l => (
                  <button
                    key={l}
                    className={`cert-filter ${activeLocation === l ? 'cert-filter--active' : ''}`}
                    onClick={() => setActiveLocation(l)}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-label">Format</span>
              <div className="filter-options">
                {formats.map(f => (
                  <button
                    key={f}
                    className={`cert-filter ${activeFormat === f ? 'cert-filter--active' : ''}`}
                    onClick={() => setActiveFormat(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="sched-results-meta">
            <span>{filtered.length} session{filtered.length !== 1 ? 's' : ''} found</span>
            {(activeMonth !== 'All' || activeType !== 'All' || activeLocation !== 'All' || activeFormat !== 'All') && (
              <button
                className="sched-clear-btn"
                onClick={() => {
                  setActiveMonth('All');
                  setActiveType('All');
                  setActiveLocation('All');
                  setActiveFormat('All');
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* SCHEDULE LIST */}
      <section className="sched-list-section">
        <div className="cert-container">
          <div className="sched-grid">
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <div key={i} className={`sched-row-wrapper cert-reveal ${item.spots <= 5 ? 'urgent' : ''}`}>
                  {/* Main row */}
                  <div className="sched-row" onClick={() => toggleRow(i)} role="button" aria-expanded={expandedRow === i}>
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
                        <span>🖥 {item.format}</span>
                        <span className="meta-divider">|</span>
                        <span>⏱ {item.duration}</span>
                      </div>
                    </div>

                    <div className="sched-col-status">
                      <div className="spots-counter">
                        <span className="spots-num">{item.spots}</span>
                        <span className="spots-text">Seats Left</span>
                      </div>
                      {item.spots <= 5 && <span className="urgent-badge">Filling Fast</span>}
                    </div>

                    <div className="sched-col-price">
                      <span className="sched-price">{item.price}</span>
                      <span className="sched-price-label">per participant</span>
                    </div>

                    <div className="sched-col-action">
                      <a href="/enroll" className="cert-btn-primary small" onClick={e => e.stopPropagation()}>Reserve</a>
                      <button className="sched-expand-btn" aria-label="Toggle details">
                        {expandedRow === i ? '▲' : '▼'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded detail panel */}
                  {expandedRow === i && (
                    <div className="sched-detail-panel">
                      <div className="sched-detail-grid">
                        <div className="sched-detail-item">
                          <span className="detail-label">Instructor</span>
                          <span className="detail-value">{item.instructor}</span>
                        </div>
                        <div className="sched-detail-item">
                          <span className="detail-label">Duration</span>
                          <span className="detail-value">{item.duration}</span>
                        </div>
                        <div className="sched-detail-item">
                          <span className="detail-label">Delivery Format</span>
                          <span className="detail-value">{item.format}</span>
                        </div>
                        <div className="sched-detail-item">
                          <span className="detail-label">Location</span>
                          <span className="detail-value">{item.location}</span>
                        </div>
                        <div className="sched-detail-item">
                          <span className="detail-label">Investment</span>
                          <span className="detail-value">{item.price} <em>per seat</em></span>
                        </div>
                        <div className="sched-detail-item">
                          <span className="detail-label">Seats Available</span>
                          <span className="detail-value">{item.spots}</span>
                        </div>
                      </div>
                      <div className="sched-detail-actions">
                        <a href="/enroll" className="cert-btn-primary">Reserve a Seat</a>
                        <a href="/contact" className="cert-btn-outline small">Enquire</a>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="sched-empty-state cert-reveal">
                <p>No sessions match the selected filters. Try adjusting your criteria above.</p>
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
              <p>Looking for a specific date or a private cohort for your organisation?</p>
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