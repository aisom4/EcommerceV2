import React from "react";
// import "./componentStyling/soundWaves";

//creating the wave component that gets imported on the home.jsx page
const Waves = () => {
  return (
    <div className="soundContainer">
      <div className="box box1"></div>
      {/* <div className="box box1"></div> */}
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="box box4"></div>
      <div className="box box5"></div>
    </div>
  );
};

export default Waves;
