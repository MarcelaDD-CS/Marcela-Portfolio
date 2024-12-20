import React from 'react';

function Experience() {
  return (
    <main>
      <section className="experience">
        <h2>Crafting Resilient Systems</h2>
        <h1>My Professional Experience</h1>
        <p>A Chronicle of Skills, Achievements, and Impact</p>
      </section>
      <section className="experience-section">
        <div className="skills-section">
          <h2>Skills</h2>
          <table className="skills-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Languages</td>
                <td>Python, Java, JavaScript, C#</td>
              </tr>
              <tr>
                <td>Tools & Frameworks</td>
                <td>React, Laravel, ASP.NET, Git, VS Code</td>
              </tr>
              <tr>
                <td>Database Management</td>
                <td>MySQL, SQL Server, MongoDB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="learning-achievements-section">
          <h2>Learning and Achievements</h2>
          <div className="achievement-container">
            <div className="achievement-item">
              <img
                src="/images/udemycourse.png"
                alt="Udemy Web Developer Bootcamp Certificate"
                className="achievement-image"
              />
              <div className="achievement-description">
                <p>Completed the Web Developer Bootcamp on Udemy.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img
                src="/images/microsoft.png"
                alt="Microsoft Security Directions Certification"
                className="achievement-image"
              />
              <div className="achievement-description">
                <p>Certified in Microsoft Security Directions.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img
                src="/images/githubprojects.png"
                alt="GitHub Open Source Contribution"
                className="achievement-image"
              />
              <div className="achievement-description">
                <p>
                  Contributed to open-source projects with over 1000 stars on
                  GitHub.
                </p>
              </div>
            </div>
            <div className="achievement-item">
              <img
                src="/images/tech.png"
                alt="Tech Presentation"
                className="achievement-image"
              />
              <div className="achievement-description">
                <p>
                  Presented at local tech meetups on cybersecurity best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;
