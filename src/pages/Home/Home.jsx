import React from 'react';
import './Home.css';

const Home = () => {
  const subsidiaries = [
    {
      name: "Bravelion Services Ltd",
      description:
        "Delivering professional facility management, technical services, procurement solutions, and operational support tailored for modern enterprises.",
      link: "/services",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
    },
    {
      name: "Bravelion Estates & Development Ltd",
      description:
        "Innovative real estate development focused on premium residential, commercial, and mixed-use projects engineered for long-term value.",
      link: "/estates",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      name: "Bravelion Training & Consulting Ltd",
      description:
        "Professional development, corporate training, and strategic consulting services designed to empower individuals and transform organizations.",
      link: "/training",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    }
  ];

  return (
    <div className="home-page">

      {/* --- HERO SECTION --- */}
      <section className="home-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">
            Building Africa’s Future <br />
            <span className="text-highlight">Through Excellence.</span>
          </h1>
          <p className="hero-description">
            Bravelion Group is a diversified enterprise operating across 
            technical services, real estate development, and professional training — 
            delivering impact-driven solutions across Africa.
          </p>
        </div>
      </section>

      {/* --- SUBSIDIARIES SECTION --- */}
      <section className="subsidiaries-section">
        <div className="section-intro">
          <div className="blue-anchor-bar"></div>
          <h2>Our Companies</h2>
          <p>
            Three specialized divisions united by one vision: excellence, innovation, and sustainable growth.
          </p>
        </div>

        <div className="subsidiary-grid">
          {subsidiaries.map((item, index) => (
            <div key={index} className="subsidiary-card">
              <div
                className="subsidiary-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="subsidiary-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="subsidiary-link">
                  Explore Division →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GROUP CTA --- */}
      <section className="group-cta">
        <div className="cta-content">
          <h2>Partner With Bravelion Group</h2>
          <p>
            Let’s build strategic partnerships that create measurable value and sustainable growth.
          </p>
          <a href="/contact" className="cta-button">
            Contact Our Corporate Office
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;