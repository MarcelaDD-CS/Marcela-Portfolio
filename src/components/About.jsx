import React from 'react';

function About() {
  return (
    <main>
      <section className="about-section">
        <div className="about-me-left">
          <img
            src="/images/cs-diana.png"
            alt="Diana Daniels"
            className="profile-pic"
          />
        </div>
        <div className="about-description">
          <h2>Empowering Security Through Innovation</h2>
          <h1> My Journey</h1>
          <p>From Code to Cybersecurity: A Professional Story</p>
          <br />
          <p>
            I am an enthusiastic software developer who enjoys bringing ideas to
            life through code. I'm super excited to start my journey in
            cybersecurity...
          </p>
          <br />
          <button
            className="contact-button"
            onClick={() => (window.location.href = '/contact')}
          >
            Let's Talk
          </button>
        </div>
        <div className="about-me-right">
          <div className="profile-section">
            <h3>Certificates</h3>
            <p>5+ Certificates</p>
          </div>
          <div className="profile-section">
            <h3>Projects</h3>
            <p>4+ Completed</p>
          </div>
        </div>
      </section>
      <section className="level-section">
        <div className="profile-section">
          <h3>Level</h3>
          <table className="level-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Experience</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software Developer</td>
                <td>3+ Years</td>
                <td>
                  Experience in full-stack development, including front-end and
                  back-end technologies...
                </td>
              </tr>
              <tr>
                <td>Cybersecurity</td>
                <td>Beginner</td>
                <td>
                  Currently developing skills in security analysis, penetration
                  testing, and incident response...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        <div className="education-details">
          <div className="education-item">
            <h3>Indiana Wesleyan University</h3>
            <p>
              <strong>
                Bachelor of Science - Cybersecurity - Cyber Analyst
              </strong>
              <br />
              2023 to 2025 (Present)
              <br />
              GPA: 3.97
            </p>
          </div>
          <div className="education-item">
            <h3>Universidad de Caldas</h3>
            <p>
              <strong>Computer Systems Technology</strong>
              <br />
              1998 to 2002
              <br />
              GPA: 4.1
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
