import React from 'react';

function Blog() {
  return (
    <main className="blog">
      <div className="intro-blog">
        <h1>Insights from Diana Daniels on Cybersecurity</h1>
        <p>
          Explore the latest trends, best practices, and personal insights{' '}
          <br /> into cybersecurity and software development.
        </p>
      </div>
      <section className="blog-container">
        <div className="blog-item">
          <div className="blog-image">
            <img src="/images/blog/aim3.png" alt="Blog Post 3" />
          </div>
          <div className="blog-content">
            <h2>
              Navigating Parisian Wi-Fi: Staying Secure in the City of Love
            </h2>
            <div className="meta-info">
              <span>Aug 16, 2024</span>
              <span>Secure public Wi-Fi in Paris, 2024 Olympics.</span>
            </div>
            <p>
              Paris, the City of Love, is a destination that captures the hearts
              of millions...
            </p>
            <a href="/networkingblog">Read More</a>
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-image">
            <img src="/images/blog/aim.png" alt="Blog Post" />
          </div>
          <div className="blog-content">
            <h2>Securing AI Models as a Developer</h2>
            <div className="meta-info">
              <span>Aug 16, 2024</span>
              <span>Artificial Intelligence / Network Security</span>
            </div>
            <p>
              As a professional developer making the transition into the world
              of cybersecurity...
            </p>
            <a href="/aiModels">Read More</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
