import React from 'react';

function Contact() {
  return (
    <main>
      <section className="contact">
        <h1>Connect with Diana Daniels</h1>
        <p>Let's Discuss Professional Opportunities</p>
      </section>
      <section className="intro-contact">
        <div className="left-options">
          <div className="radio-container">
            <input
              type="radio"
              id="email-radio"
              name="contact-method"
              value="email"
            />
            <label htmlFor="email-radio">
              <img src="/images/icons8-email-48.png" alt="Email Icon" />
              <span>Email Diana Daniels</span>
            </label>
            <a
              href="mailto:dimatoa29@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="send-message-btn"
            >
              Send a message
            </a>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              id="messenger-radio"
              name="contact-method"
              value="messenger"
            />
            <label htmlFor="messenger-radio">
              <img src="/images/icons8-messenger-48.png" alt="Messenger Icon" />
              <span>Messenger Diana Daniels</span>
            </label>
            <a
              href="http://m.me/PAGE-NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="send-message-btn"
            >
              Send a message
            </a>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              id="linkedin-radio"
              name="contact-method"
              value="linkedin"
            />
            <label htmlFor="linkedin-radio">
              <img src="/images/icons8-linkedin.png" alt="LinkedIn Icon" />
              <span>LinkedIn Diana Daniels</span>
            </label>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="send-message-btn"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="contact-section">
          <h2>Contact Me</h2>
          <form
            className="contact-form"
            action="mailto:dimatoa29@icloud.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              <button type="reset" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
