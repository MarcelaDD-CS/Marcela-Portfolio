import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content container">
        <Link to="/" aria-label="Home">
          <img
            src="/images/DMlogo.png"
            alt="Diana Daniels Logo"
            className="logo"
          />
        </Link>
        <div className="quick-links">
          <ul>
            <li>
              <a href="tel:+1234567890">
                <img
                  className="icon"
                  src="/images/icons8-call-64.png"
                  alt="Call Me"
                />
                <span className="text">Call Me</span>
              </a>
            </li>
            <li>
              <a
                href="https://teams.microsoft.com/l/meetup-join/YOUR_TEAMS_MEETING_LINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={`${process.env.PUBLIC_URL}/images/icons8-microsoft-teams-2019-48.png`}
                  alt="Join a Microsoft Teams Meeting"
                />
                <span className="text">Join a Teams Meeting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="nav-container">
          <button className="nav-toggle" aria-label="Toggle navigation">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
