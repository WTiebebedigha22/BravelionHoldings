import React from 'react';
import './Insights.css';

const Insights = () => {
  const posts = [
    {
      category: "Technical Paper",
      title: "The Future of Subsea Integrity: AI and Predictive Maintenance",
      excerpt: "How machine learning models are revolutionizing underwater asset lifespan predictions...",
      author: "Dr. Aris Thorne",
      date: "Oct 24, 2025",
      readTime: "8 min read"
    },
    {
      category: "Market Report",
      title: "Renewable Transition: Bridging the Gap in Offshore Wind",
      excerpt: "An analysis of the logistics challenges facing deep-water wind farm installations in 2026.",
      author: "Sarah Jenkins",
      date: "Nov 12, 2025",
      readTime: "12 min read"
    },
    {
      category: "Case Study",
      title: "Reducing Downtime: A 40% Efficiency Gain in the North Sea",
      excerpt: "A deep dive into how our NO-LEAK solution identified critical failures before they occurred.",
      author: "Engineering Team",
      date: "Dec 05, 2025",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="insights-page">
      <header className="insights-header">
        <h1 className="text-4xl font-bold tracking-tight">Industry Insights</h1>
        <p className="text-slate-500 mt-2">Expert analysis, technical white papers, and the latest in global energy trends.</p>
      </header>

      {/* Featured Insight */}
      <section className="featured-insight">
        <div className="featured-content">
          <span className="featured-badge">Featured Analysis</span>
          <h2 className="text-3xl font-bold mt-4 mb-4">Decarbonizing the Offshore Supply Chain: 2026 Strategy</h2>
          <p className="text-slate-300 mb-6">
            As global regulations tighten, the marine logistics sector faces a pivotal moment. 
            Explore our comprehensive framework for carbon-neutral offshore operations.
          </p>
          <button className="read-more-btn">Read Full Article</button>
        </div>
        <div className="featured-image-placeholder">
            {/* Replace with an actual image in production */}
            <div className="abstract-graphic"></div>
        </div>
      </section>

      {/* Insights Grid */}
      <div className="insights-grid">
        {posts.map((post, index) => (
          <article key={index} className="insight-card">
            <div className="card-category">{post.category}</div>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-excerpt">{post.excerpt}</p>
            <div className="card-footer">
              <div className="author-info">
                <span className="author-name">{post.author}</span>
                <span className="post-date">{post.date} • {post.readTime}</span>
              </div>
              <div className="arrow-link">→</div>
            </div>
          </article>
        ))}
      </div>

      <div className="newsletter-cta">
        <h3>Stay Ahead of the Curve</h3>
        <p>Get our monthly technical brief delivered to your inbox.</p>
        <div className="input-group">
          <input type="email" placeholder="Enter your work email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Insights;