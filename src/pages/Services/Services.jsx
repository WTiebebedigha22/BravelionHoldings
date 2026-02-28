import React from 'react';
import './Services.css';

const Services = () => {
  const serviceData = [
    {
      title: "Real Estate Development",
      description:
        "End-to-end property development solutions including land acquisition, architectural planning, construction management, and turnkey residential and commercial delivery.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      tags: [
        "Residential Estates",
        "Commercial Complexes",
        "Land Development",
        "Project Supervision"
      ]
    },
    {
      title: "Property Sales & Investment Advisory",
      description:
        "Strategic property acquisition and sales support with investment-focused advisory services to maximize capital appreciation and rental yield.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      tags: [
        "Property Brokerage",
        "Investment Structuring",
        "ROI Planning",
        "Portfolio Advisory"
      ]
    },
    {
      title: "Professional Training & Certification",
      description:
        "Industry-driven training programs designed to equip professionals with practical skills in safety management, project coordination, and technical operations.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      tags: [
        "HSE Training",
        "Project Management",
        "Technical Certification",
        "Corporate Workshops"
      ]
    },
    {
      title: "Facility & Asset Management",
      description: 
        "Comprehensive facility management services ensuring operational efficiency, preventive maintenance, and long-term asset sustainability.",
      image: 
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800", 
      tags: [
        "Facility Maintenance",
        "Asset Lifecycle Planning",
        "Operational Support",
        "Compliance Monitoring"
      ]
    },
    {
      title: "Business & Project Consultancy",
      description:
        "Strategic advisory services supporting feasibility studies, project execution frameworks, and organizational capacity development.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      tags: [
        "Feasibility Studies",
        "Project Structuring",
        "Risk Assessment",
        "Operational Strategy"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <div className="service-badge">Integrated Solutions</div>
          <h1>Diversified <br />Professional Services</h1>
          <p>
            We deliver real estate development, professional training,
            and strategic consultancy solutions designed to drive growth,
            sustainability, and long-term value.
          </p>
        </div>
      </section>

      <div className="body-wrapper">
        <section className="services-grid-section">
          <div className="section-intro">
            <div className="blue-anchor-bar"></div>
            <h2>Our Service Portfolio</h2>
            <p>
              A multidisciplinary approach combining development, training,
              and advisory expertise under one trusted brand.
            </p>
          </div>

          <div className="services-grid">
            {serviceData.map((service, index) => (
              <div className="service-card" key={index}>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.6)), url(${service.image})`
                  }}
                >
                  <div className="card-image-overlay">
                    <span className="service-number">0{index + 1}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tech-tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Advisory Section */}
        <section className="featured-solution-section">
          <div className="featured-solution-box">
            <div className="featured-text">
              <p className="overline">Strategic Advisory</p>
              <h3>Integrated Development & Training Framework</h3>
              <p>
                From property development to workforce capacity building,
                we provide the expertise and systems needed to deliver
                measurable results across sectors.
              </p>
              <button className="cta-button-light">
                Request Company Profile
              </button>
            </div>
            <div className="featured-image"></div>
          </div>
        </section>

        {/* Governance & Standards */}
        <div className="compliance-grid">
          <div className="compliance-item">
            <div className="blue-anchor-bar"></div>
            <h4>Governance & Compliance</h4>
            <p>
              We operate in alignment with national regulatory frameworks,
              ensuring ethical standards and operational transparency.
            </p>
          </div>
          <div className="compliance-item">
            <div className="blue-anchor-bar"></div>
            <h4>Quality Assurance</h4>
            <p>
              Structured quality control processes ensure consistent delivery,
              reliability, and client satisfaction across all divisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;