import React from 'react';

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer>
      <p>
        <strong>Connect with me:</strong>
      </p>
      <div className="social-links">
        <a href="https://facebook.com" aria-label="Facebook">
          <img
            src={`${baseUrl}images/facebook.webp`}
            alt="Facebook Icon"
            className="social-icon"
          />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <img
            src={`${baseUrl}images/instagram.webp`}
            alt="Instagram Icon"
            className="social-icon"
          />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <img
            src={`${baseUrl}images/linkedin.webp`}
            alt="LinkedIn Icon"
            className="social-icon"
          />
        </a>
        <a href="https://github.com" aria-label="GitHub">
          <img
            src={`${baseUrl}images/github.webp`}
            alt="GitHub Icon"
            className="social-icon"
          />
        </a>
        <a href="/blog" aria-label="Blog">
          <img
            src={`${baseUrl}images/blog.webp`}
            alt="Blog Icon"
            className="social-icon"
          />
        </a>
      </div>
      <p>
        &copy; 2024 Diana Daniels <br />{' '}
        <a href="mailto:dimatoa29@icloud.com">dimatoa29@icloud.com</a>
      </p>
    </footer>
  );
}

export default Footer;
