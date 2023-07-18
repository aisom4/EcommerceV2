import React from "react";
// Code wrapped in a functional component to show the cards at the top of the about page
const AboutCards = () => {
  return (
    <section className="featuresSection">
      <div className="container">
        <h2 className="sectionTitle">Discover the Features</h2>
        <div className="featureCards">
          <div className="featureCard">
            <img
              src="/wild&precious.jpeg"
              alt="Feature 1"
              className="featureImage"
            />
            <h3 className="featureTitle">Superior Sound Quality</h3>
            <p className="featureDescription">
              With our lossless audio experience and high-fidelity sound
              quality, stream music like you've never heard it before. No
              compromises. Just pure sound.
            </p>
          </div>
          <div className="featureCard">
            <img
              src="/fortunefavors.jpeg"
              alt="Feature 2"
              className="featureImage"
            />
            <h3 className="featureTitle">Deeper Connection with Fans</h3>
            <p className="featureDescription">
              Shining a spotlight on the industry’s unsung heroes, whose
              contributions are instrumental to music’s success — the
              songwriters, producers, and studio musicians, background vocalists
              and programmers.
            </p>
          </div>
          <div className="featureCard">
            <img src="/irl.jpeg" alt="Feature 3" className="featureImage" />
            <h3 className="featureTitle">Commitment to Art</h3>
            <p className="featureDescription">
              We’re creating space for artists to grow, thrive, and build their
              careers with purpose and confidence. Whether you’re looking for
              musical collaboration, creative knowledge, or industry connections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
