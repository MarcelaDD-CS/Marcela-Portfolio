import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false); // Close the menu on route change
  }, [location.pathname]);

  return (
    <header>
      <div className="header-content container">
        <Link to="/" aria-label="Home">
          <img src="/images/DMlogo.png" alt="Diana Daniels Logo" className="logo" />
        </Link>
        <div className="quick-links">
          <ul>
            <li>
              <a href="tel:+1234567890">
                <img className="icon" src="/images/icons8-call-64.png" alt="Call Me" />
                <span className="text">Call Me</span>
              </a>
            </li>
            <li>
              <a href="https://teams.microsoft.com/l/meetup-join/YOUR_TEAMS_MEETING_LINK" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={`${process.env.PUBLIC_URL}/images/icons8-microsoft-teams-2019-48.png`} alt="Join a Microsoft Teams Meeting" />
                <span className="text">Join a Teams Meeting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav>
        <div className="nav-container">
          <button className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;