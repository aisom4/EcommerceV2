import React from "react";

const AboutBox = () => {
  return (
    <div>
      <section className="middle-section">
        <div className="middle-container">
          <img
            src="/additional.png"
            className="section-middle-image"
            alt="background showing songs playing"
          />
          <div className="middle-info">
            <h1 className="middle-title">Clearly The Best Sound</h1>
            <p className="info">
              Vinyl Visions, a leading online platform for album sales, has
              revolutionized the way music enthusiasts discover and purchase
              their favorite albums. With its vast collection and user-friendly
              interface, it has become the go-to destination for music lovers
              worldwide. By bridging geographical barriers, Vinyl Visions has
              fostered a global community and amplified the cultural impact of
              music.
            </p>
            <div className="video-container">
              <video autoPlay muted loop video width="320" height="240">
                <source src="/ecommVid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="sounds-section">
        <div className="product-container">
          <div className="product-card">
            <img
              src="/takeCare.jpeg"
              className="product-image"
              alt="Take Care By Drake"
            />
            <p className="product-name">Take Care - Drake</p>
          </div>
          <div className="product-card">
            <img
              src="/SlimeLang.jpeg"
              className="product-image"
              alt="Slime Language By Thug"
            />
            <p className="product-name">Free Young Thug</p>
          </div>
          <div className="product-card">
            <img
              src="/onlyMe.jpeg"
              className="product-image"
              alt="Only Me By Lil Baby"
            />
            <p className="product-name">Only Me - Lil Baby</p>
          </div>
          <div className="product-card">
            <img
              src="/higherPlace.jpeg"
              className="product-image"
              alt="Higher Place By Skip Marley"
            />
            <p className="product-name">Prodigy Skip Marley</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBox;
