import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        <strong>Connect with me:</strong>
      </p>
      <div className="social-links">
        <a href="https://facebook.com" aria-label="Facebook">
          <img
            src={`${process.env.PUBLIC_URL}/images/facebook.webp`}
            alt="Facebook Icon"
            className="social-icon"
          />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <img
            src={`${process.env.PUBLIC_URL}/images/instagram.webp`}
            alt="Instagram Icon"
            className="social-icon"
          />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <img
            src={`${process.env.PUBLIC_URL}/images/linkedin.webp`}
            alt="LinkedIn Icon"
            className="social-icon"
          />
        </a>
        <a href="https://github.com" aria-label="GitHub">
          <img
            src={`${process.env.PUBLIC_URL}/images/github.webp`}
            alt="GitHub Icon"
            className="social-icon"
          />
        </a>
        <a href="/blog" aria-label="Blog">
          <img
            src={`${process.env.PUBLIC_URL}/images/blog.webp`}
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
