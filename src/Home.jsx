import "./componentStyling/soundWaves.css";
import "./pageStyling/Home.css";
import "./componentStyling/homeCard.css";
import React from "react";
import Waves from "./components/soundWaves";
import { Link } from "react-router-dom";
import Card from "./components/homeCard";
import LongSlider from "./components/longSlider";

const Home = () => {
  return (
    <div>
      <div className="homeBackground">
        <div className="homeInfo">
          <h1 className="homeText">Your Key To The World</h1>
          <p className="homeSmallText">Music Connects Us All.</p>
          <Link to="/products">
            <button className="getStarted">Get Started</button>
          </Link>
        </div>
        <img
          src="/altbackground.png"
          alt="Songs Playing on a Phone"
          className="firstHomeImg"
        />
      </div>

      <div className="soundWaves">
        {/* Inseting the wave components */}
        <div className="waveContainer">
          <Waves />
          <h3>HighWave Sounds to Select Songs</h3>
          <p>
            The importance of sound quality in music cannot be overstated. It
            enhances the listening experience, allowing us to fully appreciate
            the intricacies and nuances of the music. Good sound quality brings
            depth, clarity, and emotional impact, transforming a simple melody
            into a powerful and immersive journey.
          </p>
        </div>
        <div className="waveContainer">
          <Waves />
          <h3>Listen Anytime Anywhere</h3>
          <p>
            The audience plays a vital role in music. It enriches our listening
            experience, enabling us to fully grasp the subtle details and
            complexities of the music. With good sound quality, melodies become
            profound, clear, and emotionally captivating, taking us on a
            transformative and immersive adventure.
          </p>
        </div>{" "}
        <div className="waveContainer">
          <Waves />
          <h3>Interactive Sounds with Handpicked Playlists</h3>
          <p>
            Renowned music artists leave an indelible legacy through their
            extraordinary talent, captivating audiences worldwide. Their iconic
            creations resonate deeply, transcending time and cultural barriers,
            making a lasting impact on the music landscape and shaping
            generations of listeners.
          </p>
        </div>
      </div>

      <div className="vvInfo">
        <h2>Connect Across The Globe</h2>
        <p className="vvText">
          Music has a remarkable ability to connect people across cultures,
          languages, and backgrounds. It transcends barriers and touches the
          depths of human emotions. Through melodies, rhythms, and lyrics, music
          creates a universal language that resonates with individuals on a
          profound level. It unites people by evoking shared experiences,
          fostering empathy, and facilitating communication. Whether in joyous
          celebrations, introspective moments, or collective movements, music
          bridges gaps, cultivates understanding, and brings people together in
          a harmonious embrace of our shared humanity.
        </p>
      </div>
      <div className="planOptions">
        {/* information is being pulled from the homeCard component and the dynamic information is being passed in and displayed on the home page. */}
        <Card
          title="Visionary Values"
          imageUrl="/tlop.jpeg"
          body="Music is a universal language that expresses emotions, inspires creativity, and brings people together. It uplifts spirits, provides comfort, and creates connections across cultures and generations. "
        />
        <Card
          title="Innovative Sounds"
          imageUrl="/pinkTape.jpeg"
          body="
          Innovative artists push boundaries, blending genres, experimenting with sound, and redefining music. They inspire with their creativity, shaping the future of music and audiences with their unique expressions. "
        />
        <Card
          title="Connection to the world"
          imageUrl="/higherPlace.jpeg"
          body="
          Music has the power to evoke emotions. It can ignite passion, engage an audience and convey a range of feelings. Command the attention of others and unlock your true potential. "
        />
        <Card
          title="Specially Curated Playlist"
          imageUrl="/gkmc.jpeg"
          body="
          A special music playlist is a curated collection of songs that holds personal significance. It has the ability to transport us to cherished memories, evoke emotions, and create a unique sonic journey. "
        />
      </div>
      <div className="slidingAlbums">
        {/* Long slider component to introduce the image slider to the page. */}
        <LongSlider />
        <div className="displayCards">
          <video autoPlay muted loop video width="320" height="240">
            <source src="/sideVid.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop video width="320" height="240">
            <source src="/slayterVid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
