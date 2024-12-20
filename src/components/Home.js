import React from 'react';

function Home() {
  return (
    <main>
      <section className="intro">
        <div className="profile-picture">
          <img
            src={`${process.env.PUBLIC_URL}/images/IMG_1760.JPG`}
            alt="Diana"
          />
        </div>
        <div className="intro-text">
          <h2>Building Secure Digital Futures</h2>
          <h1>Diana Daniels</h1>
          <p>Cybersecurity Expertise and Innovative Software Solutions</p>
          <div className="buttons">
            <a href={`${process.env.PUBLIC_URL}/pdf/ddcv.pdf`} className="btn">
              CV
            </a>
            <a href="/contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <section className="hobbies">
        <h2>Values and Hobbies I Live By</h2>
        <div className="hobbies-list">
          <div className="hobby">
            <img
              src={`${process.env.PUBLIC_URL}/images/Kind.png`}
              alt="Kindness"
            />
            <div className="hobby-description">
              <h3>Kindness</h3>
              <p>
                Being a skilled software engineer and cybersecurity analyst is
                important, but it's the kindness we show to others that truly
                defines our success...
              </p>
            </div>
          </div>
          <div className="hobby">
            <img
              src={`${process.env.PUBLIC_URL}/images/kindness.png`}
              alt="Collaboration"
            />
            <div className="hobby-description">
              <h3>Collaboration</h3>
              <p>Collaboration is key to innovation and success...</p>
            </div>
          </div>
          <div className="hobby">
            <img
              src={`${process.env.PUBLIC_URL}/images/event.png`}
              alt="Networking and Tech Events"
            />
            <div className="hobby-description">
              <h3>Networking and Tech Events</h3>
              <p>
                Attending and speaking at tech meetups, conferences, and
                webinars keeps me connected...
              </p>
            </div>
          </div>
          <div className="hobby">
            <img
              src={`${process.env.PUBLIC_URL}/images/solving.png`}
              alt="Puzzle Solving"
            />
            <div className="hobby-description">
              <h3>Puzzle Solving</h3>
              <p>
                Engaging in puzzles and strategic games enhances my analytical
                thinking...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
