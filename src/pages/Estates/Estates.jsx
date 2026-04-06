import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Building2, TrendingUp,
  ShieldCheck, Ruler, Users, MapPin
} from "lucide-react";
import EstatesNavbar from "./components/Navbar/Navbar";
import EstatesFooter from "./components/Footer/Footer";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Estates.css";

/* ─── DATA ─────────────────────────────────────────────────── */

const slides = [
  {
    tag: "Residential",
    title: "Building the Future\nof Urban Living.",
    subtitle: "Premium residential and commercial developments designed for lasting value across Nigeria.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
  },
  {
    tag: "Commercial",
    title: "Smart Infrastructure\nDevelopment.",
    subtitle: "Strategic property solutions powered by innovation, precision planning, and architectural excellence.",
    image: "https://images.unsplash.com/photo-1505842465776-3ac7a0c19d15?auto=format&fit=crop&q=80&w=2000",
  },
  {
    tag: "Investment",
    title: "Trusted Real Estate\nInvestment.",
    subtitle: "Delivering secure, high-return property opportunities in Africa's fastest-growing cities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
  },
];

const features = [
  {
    icon: Building2,
    tag: "Residential & Commercial",
    title: "Designed for modern living.",
    body: "Our developments prioritize functionality, aesthetics, and community growth — delivering spaces where people thrive and businesses grow. Every project is master-planned with long-term liveability in mind.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400",
    caption: "Premium Residential",
    cta: { label: "Speak to a Property Consultant", to: "/contact" },
  },
  {
    icon: TrendingUp,
    tag: "Investment & Returns",
    title: "Strategic investment opportunities.",
    body: "We identify high-growth locations and structure projects that maximise capital appreciation and rental yield. Rigorous feasibility analysis underpins every site selection decision.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1400",
    caption: "Smart Urban Planning",
    cta: { label: "View Our Projects", to: "/estates/property" },
  },
  {
    icon: Ruler,
    tag: "Mixed-Use Development",
    title: "Spaces that work harder.",
    body: "From mixed-use corridors to purpose-built logistics parks, our commercial portfolio delivers the infrastructure that growing enterprises need — designed to scale with Nigeria's expanding economy.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1400",
    caption: "Commercial & Industrial",
    cta: { label: "Explore Commercial Portfolio", to: "/estates/property" },
  },
];

const pillars = [
  { icon: ShieldCheck, title: "Structural Integrity", body: "Every build meets international structural and safety standards. We do not cut corners." },
  { icon: Ruler,       title: "Architectural Quality", body: "In-house design oversight ensures every project reflects our aesthetic and functional standards." },
  { icon: TrendingUp,  title: "Investment Security",   body: "Title verification, regulatory compliance, and transparent documentation on every transaction." },
  { icon: Users,       title: "Client-Led Process",    body: "Dedicated relationship managers guide you from site selection through to handover." },
];

const stats = [
  { value: "10+",  label: "Completed Projects" },
  { value: "4",    label: "States of Operation" },
  { value: "100%", label: "Title-Verified Plots" },
  { value: "₦15B+",label: "Development Value" },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Estates = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      <EstatesNavbar />

      <div className="estates-page">

        {/* ===== HERO SLIDER ===== */}
        <section className="estates-hero">
          <Swiper
            effect="fade"
            autoplay={{ delay: 6500, disableOnInteraction: false }}
            pagination={false}
            modules={[Autoplay, EffectFade, Pagination]}
            className="estates-swiper"
            onSlideChange={(s) => setActiveSlide(s.realIndex)}
            onSwiper={(s) => { swiperRef.current = s; }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div
                  className="estates-slide"
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom right,
                      rgba(11,29,46,0.82) 0%,
                      rgba(11,29,46,0.55) 60%
                    ), url(${slide.image})`,
                  }}
                >
                  <div className="estates-slide__content">
                    <span className="estates-slide__tag">{slide.tag}</span>
                    <h1 className="estates-slide__title">
                      {slide.title.split("\n").map((line, j) => (
                        <span key={j}>{line}<br /></span>
                      ))}
                    </h1>
                    <p className="estates-slide__sub">{slide.subtitle}</p>
                    <div className="estates-slide__actions">
                      <Link to="/estates/property" className="estates-btn-primary">
                        Explore Projects <ArrowRight size={15} />
                      </Link>
                      <Link to="/contact" className="estates-btn-outline">
                        Speak to Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slide counter + manual nav */}
          <div className="hero-controls">
            <div className="hero-counter">
              <span className="hero-counter__current">0{activeSlide + 1}</span>
              <span className="hero-counter__sep" />
              <span className="hero-counter__total">0{slides.length}</span>
            </div>
            <div className="hero-bullets">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-bullet${i === activeSlide ? " hero-bullet--active" : ""}`}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Scroll cue */}
          <div className="hero-scroll-cue">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </section>

        {/* ===== INTRODUCTION ===== */}
        <section className="estates-intro">
          <div className="estates-container">
            <div className="estates-intro__grid">
              <div className="estates-intro__text">
                <span className="estates-eyebrow">Bravelion Estates &amp; Development</span>
                <h2>Strategic Urban<br />Development.</h2>
                <p>
                  We deliver high-quality residential, commercial, and mixed-use
                  projects tailored for modern communities. Combining strategic
                  planning, architectural excellence, and long-term value creation
                  in every development.
                </p>
                <p>
                  From land acquisition to turnkey delivery — every step is
                  managed to ensure quality, sustainability, and investment security.
                </p>
                <Link to="/about" className="estates-link-arrow">
                  Capability Statement <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="estates-intro__stats">
                {stats.map((s) => (
                  <div className="estates-intro__stat" key={s.label}>
                    <span className="estates-intro__stat-value">{s.value}</span>
                    <span className="estates-intro__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE ROWS ===== */}
        <section className="estates-features">
          <div className="estates-container">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className={`feature-row${i % 2 !== 0 ? " feature-row--reverse" : ""}`} key={f.title}>
                  <div className="feature-row__image">
                    <img src={f.image} alt={f.caption} loading="lazy" />
                    <span className="feature-row__caption">
                      <MapPin size={11} /> {f.caption}
                    </span>
                  </div>
                  <div className="feature-row__text">
                    <span className="estates-eyebrow">{f.tag}</span>
                    <div className="feature-row__icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                    <Link to={f.cta.to} className="estates-link-arrow">
                      {f.cta.label} <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== BRAND PROMISE ===== */}
        <section className="estates-promise">
          <div className="estates-container">
            <div className="estates-promise__inner">
              <div className="estates-promise__text">
                <span className="estates-eyebrow light">Our Commitment</span>
                <h2>Built on Trust.<br />Designed for Growth.</h2>
                <p>
                  Our commitment to structural integrity, regulatory compliance,
                  and sustainable design ensures long-term value for homeowners
                  and investors alike. Every project is a reflection of who we are.
                </p>
                <Link to="/about" className="estates-btn-outline-gold">
                  Our Development Approach <ArrowRight size={14} />
                </Link>
              </div>
              <div className="estates-promise__pillars">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div className="promise-pillar" key={p.title}>
                      <div className="promise-pillar__icon">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="estates-cta">
          <div className="estates-container estates-cta__inner">
            <div className="estates-cta__text">
              <span className="estates-eyebrow">Get Started</span>
              <h2>Ready to invest<br />in your future?</h2>
              <p>Let's help you secure a property that grows in value and impact.</p>
            </div>
            <div className="estates-cta__actions">
              <Link to="/contact" className="estates-btn-primary">
                Book a Site Inspection <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="estates-btn-outline">
                Speak to Sales
              </Link>
            </div>
          </div>
        </section>

      </div>

      <EstatesFooter />
    </>
  );
};

export default Estates;