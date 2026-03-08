import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import EstatesNavbar from "./components/Navbar/Navbar";
import EstatesFooter from "./components/Footer/Footer";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Estates.css";

const Estates = () => {
  const slides = [
    {
      title: "Building the Future of Urban Living",
      subtitle:
        "Premium residential and commercial developments designed for lasting value.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "Smart Infrastructure Development",
      subtitle:
        "Strategic property solutions powered by innovation, planning, and excellence.",
      image:
        "https://images.unsplash.com/photo-1505842465776-3ac7a0c19d15?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "Trusted Real Estate Investment",
      subtitle:
        "Delivering secure, high-return property opportunities across Nigeria.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    },
  ];

  return (
    <>
      <EstatesNavbar />

      <div className="home-page">
        {/* --- HERO SLIDER --- */}
        <section className="hero-swiper-wrapper">
          <Swiper
            effect={"fade"}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="hero-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero-slide"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 30, 61, 0.35), rgba(0,30,61,0.7)), url(${slide.image})`,
                  }}
                >
                  <div className="hero-content-box">
                    <div className="accent-line"></div>
                    <span className="hero-tag">
                      Bravelion Estates & Development
                    </span>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <div className="hero-actions">
                      <a href="/services" className="pwr-btn pwr-btn-primary">
                        Explore Projects
                      </a>
                      <a href="/contact" className="pwr-btn pwr-btn-outline">
                        Speak to Sales
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="content-container">
          {/* --- INTRODUCTION SECTION --- */}
          <section className="intro-section">
            <div className="intro-grid">
              <div className="intro-main">
                <div className="blue-anchor-bar"></div>
                <h2 className="display-h2">
                  Strategic Urban <br />
                  Development.
                </h2>
                <p className="lead-text">
                  Bravelion Estates & Development delivers high-quality
                  residential, commercial, and mixed-use projects tailored for
                  modern communities. We combine strategic planning,
                  architectural excellence, and long-term value creation.
                </p>
              </div>

              <div className="intro-side">
                <div className="stat-box">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">
                    Completed & Ongoing Projects
                  </span>
                </div>

                <p className="side-p">
                  From land acquisition to turnkey delivery, we ensure every
                  development reflects quality, sustainability, and investment
                  security.
                </p>

                <a href="/about" className="text-link">
                  Capability Statement <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* --- FEATURE HIGHLIGHTS --- */}
          <section className="highlights-section">
            <div className="highlight-row">
              <div
                className="highlight-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="image-caption">Premium Developments</div>
              </div>

              <div className="highlight-text">
                <div className="icon-wrap">
                  <Building2 />
                </div>
                <h3>Designed for modern living.</h3>
                <p>
                  Our developments prioritize functionality, aesthetics, and
                  community growth — delivering spaces where people thrive and
                  businesses grow.
                </p>
                <a href="/contact" className="editorial-link">
                  Speak to a Property Consultant
                </a>
              </div>
            </div>

            <div className="highlight-row reverse">
              <div className="highlight-text">
                <div className="icon-wrap">
                  <TrendingUp />
                </div>
                <h3>Strategic investment opportunities.</h3>
                <p>
                  We identify high-growth locations and structure projects that
                  maximize capital appreciation and rental yield.
                </p>
                <a href="/services" className="editorial-link">
                  View Our Projects
                </a>
              </div>

              <div
                className="highlight-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=2000')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="image-caption">Smart Urban Planning</div>
              </div>
            </div>
          </section>

          {/* --- BRAND PROMISE SECTION --- */}
          <section className="qhse-banner">
            <div className="qhse-content">
              <h2>Built on Trust. Designed for Growth.</h2>
              <p>
                Our commitment to structural integrity, compliance, and
                sustainable design ensures long-term value for homeowners and
                investors alike.
              </p>
              <a href="/about" className="pwr-btn pwr-btn-outline-white">
                Our Development Approach
              </a>
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="final-cta">
            <div className="cta-inner">
              <h2>Ready to invest in your future?</h2>
              <p>
                Let's help you secure a property that grows in value and impact.
              </p>

              <div className="cta-buttons">
                <a href="/contact" className="pwr-btn pwr-btn-primary">
                  Book a Site Inspection
                </a>
                <a href="/contact" className="pwr-btn pwr-btn-ghost">
                  Speak to Sales
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <EstatesFooter />
    </>
  );
};

export default Estates;