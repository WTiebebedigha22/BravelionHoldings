import React, { useEffect, useRef, useState } from 'react';
import TrainingNavbar from '../components/Navbar/Navbar';
import TrainingFooter from '../components/Footer/Footer';
import './Schedule.css';

const schedule = [
  { month: 'April 2025',    week: 'Wk 1',  course: 'Digital Skills Fundamentals',        type: 'ICT',          spots: 8,  location: 'Lagos Centre',   format: 'Classroom' },
  { month: 'April 2025',    week: 'Wk 1',  course: 'Workplace Safety Essentials',         type: 'HSE',          spots: 12, location: 'Port Harcourt', format: 'On-site' },
  { month: 'April 2025',    week: 'Wk 2',  course: 'Business Planning & Strategy',        type: 'Business',     spots: 5,  location: 'Lagos Centre',   format: 'Classroom' },
  { month: 'April 2025',    week: 'Wk 2',  course: 'First Aid & Basic Life Support',      type: 'HSE',          spots: 15, location: 'Abuja',          format: 'Classroom' },
  { month: 'April 2025',    week: 'Wk 3',  course: 'NEBOSH IGC Preparation (Part 1)',     type: 'Certification', spots: 10, location: 'Lagos Centre',  format: 'Classroom' },
  { month: 'April 2025',    week: 'Wk 3',  course: 'Investment Strategies for Beginners', type: 'Finance',      spots: 20, location: 'Online',         format: 'Online' },
  { month: 'April 2025',    week: 'Wk 4',  course: 'Construction Site Management',        type: 'Vocational',   spots: 8,  location: 'Port Harcourt', format: 'On-site' },
  { month: 'April 2025',    week: 'Wk 4',  course: 'Cybersecurity Awareness',             type: 'ICT',          spots: 18, location: 'Online',         format: 'Online' },
  { month: 'May 2025',      week: 'Wk 1',  course: 'Leadership & People Management',      type: 'Business',     spots: 12, location: 'Lagos Centre',   format: 'Classroom' },
  { month: 'May 2025',      week: 'Wk 1',  course: 'ISO 45001 Lead Implementer',          type: 'Certification', spots: 6,  location: 'Lagos Centre',  format: 'Classroom' },
  { month: 'May 2025',      week: 'Wk 2',  course: 'Fire Safety & Emergency Response',    type: 'HSE',          spots: 20, location: 'Abuja',          format: 'On-site' },
  { month: 'May 2025',      week: 'Wk 2',  course: 'Data Analysis & Visualization',       type: 'ICT',          spots: 15, location: 'Online',         format: 'Online' },
  { month: 'May 2025',      week: 'Wk 3',  course: 'Personal Financial Planning',         type: 'Finance',      spots: 25, location: 'Online',         format: 'Online' },
  { month: 'May 2025',      week: 'Wk 3',  course: 'IOSH Managing Safely',                type: 'Certification', spots: 10, location: 'Lagos Centre',  format: 'Classroom' },
  { month: 'May 2025',      week: 'Wk 4',  course: 'Electrical Installation Basics',      type: 'Vocational',   spots: 10, location: 'Port Harcourt', format: 'Practical' },
  { month: 'June 2025',     week: 'Wk 1',  course: 'Mental Health & Wellness at Work',    type: 'HSE',          spots: 30, location: 'Online',         format: 'Online' },
  { month: 'June 2025',     week: 'Wk 2',  course: 'NEBOSH IGC Preparation (Part 2)',     type: 'Certification', spots: 10, location: 'Lagos Centre',  format: 'Classroom' },
  { month: 'June 2025',     week: 'Wk 3',  course: 'Digital Entrepreneurship & E-Commerce', type: 'ICT',       spots: 20, location: 'Online',         format: 'Online' },
];

const typeColors = {
  'ICT': 'goldenrod', 'HSE': '#16a34a', 'Business': '#7c3aed',
  'Finance': '#d97706', 'Vocational': '#0891b2', 'Certification': '#dc2626',
};

const months = ['All', 'April 2025', 'May 2025', 'June 2025'];
const types  = ['All', 'ICT', 'HSE', 'Business', 'Finance', 'Vocational', 'Certification'];

const SchedulePage = () => {
  const [month, setMonth] = useState('All');
  const [type, setType] = useState('All');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('tp-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.tp-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = schedule.filter(s =>
    (month === 'All' || s.month === month) && (type === 'All' || s.type === type)
  );

  return (
    <>
      <TrainingNavbar />
      <div className="tp">

        <section className="tp-hero">
          <div className="tp-hero__glow" />
          <div className="tp-hero__inner">
            <div className="tp-hero__label">📅 Training Schedule</div>
            <h1 className="tp-hero__title">Find Your<br /><em>Next Course.</em></h1>
            <p className="tp-hero__sub">Browse upcoming training sessions across all disciplines — classroom, on-site, and online. Limited seats available; early enrollment recommended.</p>
            <div className="tp-hero__actions">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Reserve Your Spot</a>
              <a href="#schedule-table" className="tp-btn tp-btn--ghost">View Schedule</a>
            </div>
          </div>
        </section>

        <div className="tp-stats tp-reveal">
          {[['18+','Sessions Scheduled'],['3','Locations'],['Online','& On-site'],['3-8 Months','Duration']].map(([n,l]) => (
            <div className="tp-stat" key={l}><span className="tp-stat__num">{n}</span><span className="tp-stat__label">{l}</span></div>
          ))}
        </div>

        {/* SCHEDULE TABLE */}
        <section className="tp-section" id="schedule-table">
          <div className="tp-section__header tp-reveal">
            <div className="tp-bar" /><h2>Upcoming Sessions</h2>
            <p>Filter by month or course type to find sessions that suit your schedule.</p>
          </div>

          <div className="sched-controls tp-reveal">
            <div className="sched-filter-group">
              <span className="sched-filter-label">Month</span>
              <div className="sched-filters">
                {months.map(m => <button key={m} className={`courses-filter ${month === m ? 'courses-filter--active' : ''}`} onClick={() => setMonth(m)}>{m}</button>)}
              </div>
            </div>
            <div className="sched-filter-group">
              <span className="sched-filter-label">Type</span>
              <div className="sched-filters">
                {types.map(t => <button key={t} className={`courses-filter ${type === t ? 'courses-filter--active' : ''}`} onClick={() => setType(t)}>{t}</button>)}
              </div>
            </div>
          </div>

          <div className="sched-table-wrap tp-reveal">
            <table className="sched-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Type</th>
                  <th>Month</th>
                  <th>Week</th>
                  <th>Location</th>
                  <th>Format</th>
                  <th>Spots Left</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="sched-empty">No sessions match your filters.</td></tr>
                ) : filtered.map((s, i) => (
                  <tr key={i} className={s.spots <= 5 ? 'sched-row--low' : ''}>
                    <td className="sched-course">{s.course}</td>
                    <td><span className="sched-type" style={{ background: typeColors[s.type] + '1a', color: typeColors[s.type], borderColor: typeColors[s.type] + '33' }}>{s.type}</span></td>
                    <td className="sched-month">{s.month}</td>
                    <td className="sched-week">{s.week}</td>
                    <td className="sched-location">📍 {s.location}</td>
                    <td><span className={`sched-format sched-format--${s.format.toLowerCase().replace('-','')}`}>{s.format}</span></td>
                    <td className={`sched-spots ${s.spots <= 5 ? 'sched-spots--low' : ''}`}>{s.spots} {s.spots <= 5 && <span className="sched-urgent">Filling fast!</span>}</td>
                    <td><a href="/training/enroll" className="sched-enroll">Enroll →</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="sched-legend tp-reveal">
            <span className="sched-legend__title">Format legend:</span>
            {[['Classroom','#f0fdf4','#16a34a'],['Online','#eff6ff','goldenrod'],['On-site','#fefce8','#d97706'],['Practical','#fdf4ff','#7c3aed']].map(([f,bg,c]) => (
              <span key={f} className="sched-legend__item" style={{ background: bg, color: c }}>● {f}</span>
            ))}
          </div>
        </section>

        <div className="tp-cta-strip tp-reveal">
          <div className="tp-cta-strip__inner">
            <span className="tp-cta-strip__eye">Don't Miss Out</span>
            <h2>Reserve Your Seat<br />Before It Fills Up.</h2>
            <p>Sessions fill fast. Secure your place now and we'll send confirmation and preparation materials.</p>
            <div className="tp-cta-strip__btns">
              <a href="/training/enroll" className="tp-btn tp-btn--green">Enroll Now</a>
              <a href="/training/corporate" className="tp-btn tp-btn--ghost">Corporate Bookings</a>
            </div>
          </div>
        </div>
      </div>
      <TrainingFooter />
    </>
  );
};

export default SchedulePage;