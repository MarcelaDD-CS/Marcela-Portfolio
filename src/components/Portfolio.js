import React from 'react';

function Portfolio() {
  return (
    <main>
      <div className="portfolio-header">
        <h2>Innovative Solutions</h2>
        <h1>My Cybersecurity Portfolio</h1>
        <p>Showcasing Projects That Secure and Transform</p>
      </div>
      <section className="portfolio-container">
        <div className="portfolio-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/portfolio/acx-hero-ab.png`}
            alt="Acunetix Project"
          />
          <div className="portfolio-content">
            <h2>Acunetix</h2>
            <p>
              I use Acunetix to analyze websites for potential
              vulnerabilities...
            </p>
          </div>
        </div>
        <div className="portfolio-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/portfolio/burp-suit.png`}
            alt="Burp Suite Project"
          />
          <div className="portfolio-content">
            <h2>Burp Suite</h2>
            <p>
              Burp Suite helps me identify vulnerabilities in websites using
              tools...
            </p>
          </div>
        </div>
        <div className="portfolio-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/portfolio/nmap.png`}
            alt="Nmap Project"
          />
          <div className="portfolio-content">
            <h2>Nmap</h2>
            <p>Nmap is a powerful network scanning tool...</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/portfolio/wireshark.png`}
            alt="Wireshark Project"
          />
          <div className="portfolio-content">
            <h2>Wireshark</h2>
            <p>Wireshark helps me capture and analyze network traffic...</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
