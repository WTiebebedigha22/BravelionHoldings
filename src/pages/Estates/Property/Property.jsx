import React, { useEffect, useRef, useState } from 'react';
import EstatesNavbar from '../components/Navbar/Navbar';
import EstateFooter from '../components/Footer/Footer';
import './Property.css';

const categories = ['All', 'Residential', 'Commercial', 'Land & Plots', 'Luxury Homes', 'Off-Plan'];

const properties = [
  {
    id: 'P01',
    cat: 'Residential',
    status: 'For Sale',
    title: '4-Bedroom Detached Duplex',
    location: 'Lekki Phase 1, Lagos',
    price: '₦85,000,000',
    beds: 4, baths: 4, sqft: '320 sqm',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    features: ['Swimming Pool', 'BQ', 'Covered Parking', 'Fully Tiled'],
    tag: 'Hot Listing',
  },
  {
    id: 'P02',
    cat: 'Luxury Homes',
    status: 'For Sale',
    title: '5-Bedroom Waterfront Villa',
    location: 'Banana Island, Lagos',
    price: '₦350,000,000',
    beds: 5, baths: 6, sqft: '680 sqm',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    features: ['Waterfront View', 'Home Theatre', 'Smart Home', 'Private Jetty'],
    tag: 'Premium',
  },
  {
    id: 'P03',
    cat: 'Commercial',
    status: 'For Lease',
    title: 'Grade A Office Space — Open Plan',
    location: 'Victoria Island, Lagos',
    price: '₦12,000,000 / yr',
    beds: null, baths: null, sqft: '450 sqm',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    features: ['24/7 Power', 'High-Speed Internet', 'Parking Deck', 'Reception Area'],
    tag: 'Available Now',
  },
  {
    id: 'P04',
    cat: 'Land & Plots',
    status: 'For Sale',
    title: 'Fenced Corner Plot — Dry Land',
    location: 'Ajah, Lagos',
    price: '₦18,500,000',
    beds: null, baths: null, sqft: '600 sqm',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    features: ['C of O', 'Fenced', 'Corner Piece', 'Good Road Access'],
    tag: 'C of O',
  },
  {
    id: 'P05',
    cat: 'Residential',
    status: 'For Rent',
    title: '3-Bedroom Apartment — Serviced',
    location: 'Ikeja GRA, Lagos',
    price: '₦4,500,000 / yr',
    beds: 3, baths: 3, sqft: '180 sqm',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    features: ['Fully Serviced', 'Estate Security', 'Generator', 'Fitted Kitchen'],
    tag: 'Serviced',
  },
  {
    id: 'P06',
    cat: 'Off-Plan',
    status: 'Off-Plan',
    title: 'The Meridian — 2 & 3 Bed Apartments',
    location: 'Eko Atlantic, Lagos',
    price: 'From ₦55,000,000',
    beds: '2–3', baths: '2–3', sqft: '110–200 sqm',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
    features: ['15% Deposit', 'Flexible Payment', 'Rooftop Pool', 'Ocean View'],
    tag: 'New Development',
  },
  {
    id: 'P07',
    cat: 'Commercial',
    status: 'For Sale',
    title: 'Retail Plaza — Fully Tenanted',
    location: 'Surulere, Lagos',
    price: '₦220,000,000',
    beds: null, baths: null, sqft: '1,200 sqm',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    features: ['Fully Tenanted', '12 Units', 'Ample Parking', 'Prime Location'],
    tag: 'Investment',
  },
  {
    id: 'P08',
    cat: 'Luxury Homes',
    status: 'For Sale',
    title: '6-Bedroom Smart Mansion',
    location: 'Maitama, Abuja',
    price: '₦280,000,000',
    beds: 6, baths: 7, sqft: '850 sqm',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
    features: ['Smart Automation', 'Indoor Pool', 'Home Cinema', 'Staff Quarters'],
    tag: 'Premium',
  },
  {
    id: 'P09',
    cat: 'Land & Plots',
    status: 'For Sale',
    title: 'Estate Land — Mixed Use Development',
    location: 'Kuje, Abuja',
    price: '₦8,000,000',
    beds: null, baths: null, sqft: '1,000 sqm',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    features: ['R of O', 'Survey Plan', 'Mixed Use Zone', 'Access Road'],
    tag: 'R of O',
  },
  {
    id: 'P10',
    cat: 'Residential',
    status: 'For Sale',
    title: '2-Bedroom Terrace House',
    location: 'Gwarinpa, Abuja',
    price: '₦32,000,000',
    beds: 2, baths: 2, sqft: '130 sqm',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
    features: ['Prepaid Meter', 'Estate', 'Parking Space', 'POP Ceiling'],
    tag: 'Affordable',
  },
  {
    id: 'P11',
    cat: 'Off-Plan',
    status: 'Off-Plan',
    title: 'Crown Court — Studio & 1 Bed',
    location: 'Yaba, Lagos',
    price: 'From ₦18,000,000',
    beds: '0–1', baths: '1', sqft: '45–75 sqm',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    features: ['Flexible Payment', 'Rooftop Lounge', 'Gym', 'Co-Working Space'],
    tag: 'New Development',
  },
  {
    id: 'P12',
    cat: 'Commercial',
    status: 'For Lease',
    title: 'Warehouse & Distribution Hub',
    location: 'Apapa, Lagos',
    price: '₦18,000,000 / yr',
    beds: null, baths: null, sqft: '3,500 sqm',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    features: ['Loading Bay', '24/7 Access', 'CCTV', 'Overhead Crane'],
    tag: 'Industrial',
  },
];

const statusColors = {
  'For Sale':  { bg: '#f0fdf4', color: '#15803d', border: 'rgba(21,128,61,0.2)' },
  'For Rent':  { bg: '#eff6ff', color: '#1d4ed8', border: 'rgba(29,78,216,0.2)' },
  'For Lease': { bg: '#fefce8', color: '#a16207', border: 'rgba(161,98,7,0.2)'  },
  'Off-Plan':  { bg: '#fdf4ff', color: '#7e22ce', border: 'rgba(126,34,206,0.2)'},
};

const tagColors = {
  'Premium':         { bg: 'rgba(201,168,76,0.12)', color: '#c9a84c' },
  'Hot Listing':     { bg: 'rgba(220,38,38,0.1)',   color: '#dc2626' },
  'New Development': { bg: 'rgba(37,99,235,0.1)',   color: '#1d4ed8' },
  'Investment':      { bg: 'rgba(13,27,42,0.08)',   color: '#0d1b2a' },
};

const PropertyPage = () => {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('pr-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.pr-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = properties.filter(p =>
    (cat === 'All' || p.cat === cat) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) ||
     p.location.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <EstatesNavbar />
      <div className="pr-page">

        {/* ══ HERO ══ */}
        <section className="pr-hero">
          <div className="pr-hero__bg" />
          <div className="pr-hero__inner">
            <div className="pr-hero__label-row">
              <span className="pr-label">Property Listings</span>
              <span className="pr-label pr-label--dim">Bravelion Estates</span>
            </div>
            <h1 className="pr-hero__title">
              Find Your<br />
              <em>Perfect</em><br />
              Property.
            </h1>
            <p className="pr-hero__sub">
              Residential, commercial, land, and luxury properties across
              Lagos and Abuja — each vetted, documented, and ready for
              seamless acquisition.
            </p>
            <div className="pr-hero__actions">
              <a href="/estates/contact" className="pr-btn pr-btn--gold">Speak to an Agent</a>
              <a href="#pr-listings" className="pr-btn pr-btn--ghost">View All Listings</a>
            </div>
          </div>

          {/* floating KPIs */}
          <div className="pr-hero__kpis">
            {[['12+','Active Listings'],['Lagos & Abuja','Locations'],['C of O','Verified Titles'],['₦8M+','Starting Price']].map(([n,l]) => (
              <div className="pr-hero__kpi" key={l}>
                <span className="pr-hero__kpi-num">{n}</span>
                <span className="pr-hero__kpi-label">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEARCH & FILTER ══ */}
        <section className="pr-controls pr-reveal" id="pr-listings">
          <div className="pr-controls__inner">
            <input
              className="pr-search"
              type="text"
              placeholder="Search by title or location…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="pr-filters">
              {categories.map(c => (
                <button
                  key={c}
                  className={`pr-filter ${cat === c ? 'pr-filter--active' : ''}`}
                  onClick={() => setCat(c)}
                >{c}</button>
              ))}
            </div>
            <div className="pr-controls__right">
              <span className="pr-results-count">{filtered.length} propert{filtered.length === 1 ? 'y' : 'ies'}</span>
              <select className="pr-sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* ══ LISTINGS GRID ══ */}
        <section className="pr-listings">
          <div className="pr-listings__inner">
            {filtered.length === 0 ? (
              <div className="pr-empty">
                <span>🏠</span>
                <p>No properties match your search. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="pr-grid pr-reveal">
                {filtered.map(p => {
                  const sc = statusColors[p.status] || statusColors['For Sale'];
                  const tc = tagColors[p.tag];
                  return (
                    <div className="pr-card" key={p.id}>

                      {/* Image */}
                      <div className="pr-card__img-wrap">
                        <div
                          className="pr-card__img"
                          style={{ backgroundImage: `url(${p.image})` }}
                        />
                        <span
                          className="pr-card__status"
                          style={{ background: sc.bg, color: sc.color, borderColor: sc.border }}
                        >{p.status}</span>
                        {p.tag && (
                          <span
                            className="pr-card__tag"
                            style={tc ? { background: tc.bg, color: tc.color } : {}}
                          >{p.tag}</span>
                        )}
                        <span className="pr-card__id">{p.id}</span>
                      </div>

                      {/* Body */}
                      <div className="pr-card__body">
                        <div className="pr-card__location">
                          <span className="pr-card__location-dot">📍</span>
                          {p.location}
                        </div>

                        <h3 className="pr-card__title">{p.title}</h3>

                        <p className="pr-card__price">{p.price}</p>

                        {/* Specs */}
                        <div className="pr-card__specs">
                          {p.beds && (
                            <span className="pr-card__spec">
                              <span>🛏</span>{p.beds} Bed{p.beds > 1 ? 's' : ''}
                            </span>
                          )}
                          {p.baths && (
                            <span className="pr-card__spec">
                              <span>🚿</span>{p.baths} Bath{p.baths > 1 ? 's' : ''}
                            </span>
                          )}
                          <span className="pr-card__spec">
                            <span>📐</span>{p.sqft}
                          </span>
                        </div>

                        {/* Features */}
                        <div className="pr-card__features">
                          {p.features.map(f => (
                            <span key={f} className="pr-card__feature">✓ {f}</span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="pr-card__foot">
                          <a href="/estates/contact" className="pr-card__cta">
                            Enquire →
                          </a>
                          <a href="/estates/contact" className="pr-card__cta-sec">
                            Book Viewing
                          </a>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="pr-cta pr-reveal">
          <div className="pr-cta__inner">
            <span className="pr-cta__eye">Can't Find What You Need?</span>
            <h2>Tell Us What You're Looking For.</h2>
            <p>
              Our property consultants have access to off-market listings, upcoming
              developments, and a wide network of verified vendors across Nigeria.
              Share your requirements and we'll find your match.
            </p>
            <div className="pr-cta__btns">
              <a href="/estates/contact" className="pr-btn pr-btn--gold">Submit Property Brief</a>
              <a href="/estates/why-us" className="pr-btn pr-btn--outline-lt">Why Bravelion Estates</a>
            </div>
          </div>
        </section>

      </div>
      <EstateFooter />
    </>
  );
};

export default PropertyPage;