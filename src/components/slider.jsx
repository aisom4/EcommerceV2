import React from "react";
// This page mainly holds the styling for the image slider
function Slider(props) {
  //prop is accepted as a component and passed through as a parameter in the slider function so that the individual elements can be displayed dynamically.
  return (
    <div
      style={{
        ...styles.slider,
        backgroundColor: props.color,
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: props.z_index,
        transform: `translate(-50%, -50%) scale(${props.scale})`,
      }}
    >
      <img style={styles.image} src={props.image} alt="react slider"></img>
    </div>
  );
}
const styles = {
  slider: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "200px",
    width: "300px",
    boxSizing: "border-box",
  },

  image: {
    width: "100%",
    height: "100%",
    boxShadow: "10px 10px 8px black",
  },
};
export default Slider;
