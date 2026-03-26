import React, { useEffect, useRef, useState } from 'react';
import EstatesNavbar from '../components/Navbar/Navbar';
import EstateFooter from '../components/Footer/Footer';
import './Insights.css';

const featured = {
  id: 'I01',
  cat: 'Market Report',
  date: 'March 2025',
  readTime: '8 min read',
  title: 'Lagos Real Estate 2025: Where the Smart Money Is Moving',
  excerpt: 'After two years of recalibration, the Lagos property market is showing clear signals of where sustained value creation will occur. We break down the corridors, categories, and conditions shaping buying and investment decisions this year.',
  image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
  author: 'Bravelion Research Desk',
};

const articles = [
  {
    id: 'I02',
    cat: 'Investment',
    date: 'Feb 2025',
    readTime: '5 min read',
    title: 'Off-Plan Properties: The Case For and Against Buying Before Completion',
    excerpt: 'Off-plan investments offer attractive entry prices and flexible payment structures — but they carry real risks. Our analysis covers what to check before signing.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Estates',
  },
  {
    id: 'I03',
    cat: 'Legal & Title',
    date: 'Feb 2025',
    readTime: '6 min read',
    title: 'C of O, R of O, and Deed of Assignment: Understanding Nigerian Property Title',
    excerpt: 'Title documents remain one of the most misunderstood aspects of property acquisition in Nigeria. Here is a plain-language breakdown of what each document means and why it matters.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Legal Desk',
  },
  {
    id: 'I04',
    cat: 'Neighbourhood Guide',
    date: 'Jan 2025',
    readTime: '7 min read',
    title: 'Abuja Rising: The Neighbourhoods Outperforming Every Forecast',
    excerpt: "From Maitama to Gwarinpa, Abuja's residential landscape is shifting. We examine the areas where infrastructure investment is driving outsized property appreciation.",
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Research Desk',
  },
  {
    id: 'I05',
    cat: 'Finance',
    date: 'Jan 2025',
    readTime: '4 min read',
    title: 'How to Structure a Property Purchase with Fractional Equity',
    excerpt: 'More buyers are exploring co-ownership and fractional entry into premium assets. We outline the structures, risks, and legal frameworks that make this viable in Nigeria.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Estates',
  },
  {
    id: 'I06',
    cat: 'Design & Development',
    date: 'Dec 2024',
    readTime: '5 min read',
    title: "Smart Homes in Nigeria: What's Real, What's Hype, and What Adds Value.",
    excerpt: 'Home automation is increasingly marketed as a premium feature. We separate substance from sales pitch — and identify which technologies genuinely increase resale value.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Research Desk',
  },
  {
    id: 'I07',
    cat: 'Market Report',
    date: 'Dec 2024',
    readTime: '9 min read',
    title: 'Commercial Real Estate in Lagos: Vacancy Trends and What They Signal',
    excerpt: 'Office and retail vacancy rates in key Lagos corridors tell a story about business confidence and infrastructure. Our Q4 2024 commercial review examines what the numbers mean for investors.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    author: 'Bravelion Research Desk',
  },
];

const categories = ['All', 'Market Report', 'Investment', 'Legal & Title', 'Neighbourhood Guide', 'Finance', 'Design & Development'];

const catColors = {
  'Market Report':       '#c9a84c',
  'Investment':          '#16a34a',
  'Legal & Title':       'goldenrod',
  'Neighbourhood Guide': '#dc2626',
  'Finance':             '#7c3aed',
  'Design & Development':'#0891b2',
};

const InsightsPage = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('ins-visible')),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.ins-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  const filtered = articles.filter(a =>
    (activeCat === 'All' || a.cat === activeCat) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) ||
     a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <EstatesNavbar />
      <div className="ins-page">

        {/* ══ MASTHEAD ══ */}
        <section className="ins-masthead">
          <div className="ins-masthead__bg" />
          <div className="ins-masthead__inner">
            <div className="ins-masthead__meta">
              <span className="ins-masthead__issue">Bravelion Estates · Insights &amp; Opinion</span>
              <span className="ins-masthead__date">Q1 2025</span>
            </div>
            <h1 className="ins-masthead__title">
              Property.<br />
              <em>Intelligence.</em>
            </h1>
            <p className="ins-masthead__sub">
              Market analysis, investment perspectives, legal guidance, and neighbourhood
              intelligence — curated by the Bravelion Estates research desk.
            </p>
          </div>
          <div className="ins-masthead__rule" />
        </section>

        {/* ══ FEATURED ARTICLE ══ */}
        <section className="ins-featured ins-reveal">
          <div className="ins-featured__inner">
            <div className="ins-featured__image-wrap">
              <div
                className="ins-featured__image"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="ins-featured__image-overlay" />
              <span
                className="ins-featured__cat"
                style={{ color: catColors[featured.cat], borderColor: catColors[featured.cat] + '44' }}
              >{featured.cat}</span>
            </div>

            <div className="ins-featured__content">
              <div className="ins-featured__kicker">
                <span className="ins-kicker-line" />
                <span>Featured Article</span>
              </div>
              <h2 className="ins-featured__title">{featured.title}</h2>
              <p className="ins-featured__excerpt">{featured.excerpt}</p>
              <div className="ins-featured__byline">
                <span className="ins-byline-author">{featured.author}</span>
                <span className="ins-byline-dot">·</span>
                <span className="ins-byline-date">{featured.date}</span>
                <span className="ins-byline-dot">·</span>
                <span className="ins-byline-time">{featured.readTime}</span>
              </div>
              <a href="/estates/insights/I01" className="ins-read-btn">
                Read Full Article
                <span className="ins-read-btn__arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══ TICKER / TOPICS STRIP ══ */}
        <div className="ins-ticker ins-reveal">
          <span className="ins-ticker__label">Topics</span>
          <div className="ins-ticker__track">
            {[...categories.slice(1), ...categories.slice(1)].map((c, i) => (
              <button
                key={i}
                className={`ins-ticker__item ${activeCat === c ? 'ins-ticker__item--active' : ''}`}
                style={activeCat === c ? { color: catColors[c], borderColor: catColors[c] + '55' } : {}}
                onClick={() => setActiveCat(activeCat === c ? 'All' : c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ══ ARTICLES ══ */}
        <section className="ins-articles">
          <div className="ins-articles__inner">

            {/* Controls row */}
            <div className="ins-controls ins-reveal">
              <div className="ins-filters">
                {categories.map(c => (
                  <button
                    key={c}
                    className={`ins-filter ${activeCat === c ? 'ins-filter--active' : ''}`}
                    style={activeCat === c && c !== 'All' ? {
                      background: catColors[c] + '18',
                      color: catColors[c],
                      borderColor: catColors[c] + '44',
                    } : {}}
                    onClick={() => setActiveCat(c)}
                  >{c}</button>
                ))}
              </div>
              <input
                className="ins-search"
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="ins-empty ins-reveal">
                <span>📰</span>
                <p>No articles match your search. Try a different topic or keyword.</p>
              </div>
            ) : (
              <div className="ins-grid ins-reveal">
                {filtered.map((a, i) => (
                  <article
                    className={`ins-card ${i === 0 && activeCat === 'All' ? 'ins-card--wide' : ''}`}
                    key={a.id}
                  >
                    <div className="ins-card__img-wrap">
                      <div
                        className="ins-card__img"
                        style={{ backgroundImage: `url(${a.image})` }}
                      />
                      <span
                        className="ins-card__cat"
                        style={{ color: catColors[a.cat], borderColor: catColors[a.cat] + '44' }}
                      >{a.cat}</span>
                    </div>

                    <div className="ins-card__body">
                      <div className="ins-card__meta">
                        <span>{a.date}</span>
                        <span className="ins-card__dot">·</span>
                        <span>{a.readTime}</span>
                      </div>
                      <h3 className="ins-card__title">{a.title}</h3>
                      <p className="ins-card__excerpt">{a.excerpt}</p>
                      <div className="ins-card__foot">
                        <span className="ins-card__author">{a.author}</span>
                        <a href={`/estates/insights/${a.id}`} className="ins-card__link">
                          Read →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ══ NEWSLETTER ══ */}
        <section className="ins-newsletter ins-reveal">
          <div className="ins-newsletter__inner">
            <div className="ins-newsletter__left">
              <span className="ins-newsletter__issue">The Bravelion Estates Brief</span>
              <h2 className="ins-newsletter__title">
                Market Intelligence,<br />
                <em>Delivered Monthly.</em>
              </h2>
              <p className="ins-newsletter__sub">
                Property market reports, neighbourhood analyses, and investment
                perspectives — straight to your inbox, every month.
              </p>
            </div>
            <div className="ins-newsletter__right">
              <form className="ins-newsletter__form" onSubmit={e => e.preventDefault()}>
                <input
                  type="text"
                  className="ins-nl-input"
                  placeholder="Your full name"
                />
                <input
                  type="email"
                  className="ins-nl-input"
                  placeholder="Email address"
                />
                <button type="submit" className="ins-nl-btn">
                  Subscribe to the Brief →
                </button>
                <p className="ins-nl-note">
                  No spam. Unsubscribe anytime. We publish once a month.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="ins-cta ins-reveal">
          <div className="ins-cta__inner">
            <span className="ins-cta__eye">Ready to Act on the Intelligence?</span>
            <h2>Browse Our Current<br />Property Listings.</h2>
            <p>
              From Lekki to Maitama — residential, commercial, and luxury properties
              with verified titles and transparent pricing.
            </p>
            <div className="ins-cta__btns">
              <a href="/estates/property" className="ins-btn ins-btn--gold">View All Properties</a>
              <a href="/estates/contact" className="ins-btn ins-btn--ghost">Speak to an Agent</a>
            </div>
          </div>
        </section>

      </div>
      <EstateFooter />
    </>
  );
};

export default InsightsPage;