import React, { Component } from "react";
import Slider from "./slider.jsx";

//defines the longSlider component and extends the component class from react

class LongSlider extends Component {
  // Constructor is a method that initializes the state with the empty slider array from the slider component.
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
    };
  }

  componentDidMount() {
    //setting up an array for the nine images in the image slider
    const imageUrls = [
      "./slider/age.jpeg",
      "./slider/candy.jpeg",
      "./slider/heart.jpeg",
      "./slider/herloss.jpeg",
      "./slider/hvv.jpeg",
      "./slider/infinity.jpeg",
      "./slider/lady.jpeg",
      "./slider/lemonade.jpeg",
      "./slider/sos.jpeg",
    ];
    //dynamically storing the generated slider components
    let new_slider = [];
    //centering the position of the slider and splitting the sides into two sides
    let center = {
      x: parseFloat(this.longSlider.style.width) / 2,
      y: parseFloat(this.longSlider.style.height) / 2,
    };

    //Setting the total number of slides.
    let total_number_of_slides = 9;
    //setting the index of the center slide
    let middle_slide_by_index = Math.floor(total_number_of_slides / 2);
    //variables to style the positioning of the slide.
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    let new_scale = 1;

    //a loop to generate each slide in the image slider.
    for (let i = 0; i < 9; i++) {
      //left side of the long slider
      if (i < middle_slide_by_index) {
        //calculating the left slides positioning
        new_x = center.x - 300 * (middle_slide_by_index - i);
        new_y = center.y;
        //offset the cards
        new_x = new_x + 0.333 * 300 * (middle_slide_by_index - i);
        //this portion is offsetting the cards to cascade the slides
        new_zIndex = i;
        //calculating the scale for the slides
        new_scale = Math.pow(0.9, middle_slide_by_index - i);
      } else {
        //right side of the longSlider. When the index of the slide is greater than the center slide this code will execute

        //calculating the right side positioning
        new_x = center.x + 300 * (i - middle_slide_by_index);
        new_y = center.y;
        //offset the cards to create the cascading effect
        new_x = new_x - 0.333 * 300 * (i - middle_slide_by_index);
        //cascade the slides using zIndex for the stacking order
        new_zIndex = i * -1.0;
        //scale the cards
        new_scale = Math.pow(0.9, i - middle_slide_by_index);
      }

      //creates a slider component for the current center slide.
      new_slider.push(
        <Slider
          key={i}
          color={color[i]}
          x={new_x}
          y={new_y}
          z_index={i === middle_slide_by_index ? 100 : new_zIndex} //middle card will stay on top
          scale={new_scale}
          image={imageUrls[i]} // Use your own image URL
        />
      );
    }
    //the state is updated with the dynamically generated sliders.
    this.setState({ sliders: new_slider });
  }

  handle_next = () => {
    //checking the progress of the animation if it is in progress the code will not run (it will immediately return and end the process)
    if (!this.animationInProgress) {
      this.animationInProgress = true; //setting the progress to true
      let slideChildren = this.longSlider.children; //grabbing all of the children of the image slider
      let lastSlide_left = slideChildren[slideChildren.length - 1].style.left; //storing the left position of the last slide
      let lastSlide_zIndex =
        slideChildren[slideChildren.length - 1].style.zIndex; //storing the zIndex of the last slide
      let lastSlide_transform =
        slideChildren[slideChildren.length - 1].style.transform; //storing the tranform animation for the last slide

      for (let i = slideChildren.length - 1; i > 0; i--) {
        // Loop through the slides in reverse order (except the first slide)
        slideChildren[i].style.transitionDuration = "1.0s"; // Set the transition duration to create a smooth animation
        slideChildren[i].style.left = slideChildren[i - 1].style.left; //Set the left position of the current slide to the left position of the previous slide
        slideChildren[i].style.zIndex = slideChildren[i - 1].style.zIndex; //Set the zIndex of the current slide to the zIndex of the previous slide
        slideChildren[i].style.transform = slideChildren[i - 1].style.transform; //Set the transform property of the current slide to the transform property of the previous slide
      }

      //special case when the first cards takes on properties of the last card
      slideChildren[0].style.transitionDuration = "0.2s"; //changes the transition duration for a quicker animation time
      slideChildren[0].style.transform = "translate(-50%, -50%) scale(0)"; //Shrinking the first slide to create a disappearing effect

      setTimeout(() => {
        slideChildren[0].style.transitionDuration = "0.0s"; // Set transition duration to 0 to immediately update the style
        slideChildren[0].style.left = lastSlide_left; // Move the first slide to the left position of the last slide
        slideChildren[0].style.zIndex = lastSlide_zIndex; // Set the zIndex of the first slide to the zIndex of the last slide

        this.longSlider.appendChild(slideChildren[0]); // Move the first slide to the end of the slider component

        setTimeout(() => {
          slideChildren[slideChildren.length - 1].style.transitionDuration =
            "0.2s"; // Set a shorter transition duration for a quicker animation
          slideChildren[slideChildren.length - 1].style.transform =
            lastSlide_transform; // Set the transform property of the last slide to its original value

          this.animationInProgress = false; // Set the animation in progress flag to false to allow the function to start over and run again if it is needed.  (Ensures one animation is performed at time, fully completed, and then another is executed.)
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  handle_previous = () => {
    if (!this.animationInProgress) {
      // Check if animation is not already in progress
      this.animationInProgress = true; // Set animation in progress flag to true
      let slideChildren = this.longSlider.children; // Get all the children of the longSlider component
      let firstSlide_left = slideChildren[0].style.left; // Store the left position of the first slide
      let firstSlide_zIndex = slideChildren[0].style.zIndex; // Store the zIndex of the first slide
      let firstSlide_transform = slideChildren[0].style.transform; // Store the transform property of the first slide

      for (let i = 0; i < slideChildren.length - 1; i++) {
        // Loop through the slides (except the last slide)
        slideChildren[i].style.transitionDuration = "1.0s"; // Set the transition duration to create a smooth animation
        slideChildren[i].style.left = slideChildren[i + 1].style.left; // Set the left position of the current slide to the left position of the next slide
        slideChildren[i].style.zIndex = slideChildren[i + 1].style.zIndex; // Set the zIndex of the current slide to the zIndex of the next slide
        slideChildren[i].style.transform = slideChildren[i + 1].style.transform; // Set the transform property of the current slide to the transform property of the next slide
      }

      //special case when the last card takes on properties of the first card
      slideChildren[slideChildren.length - 1].style.transitionDuration = "0.2s"; // Set a shorter transition duration for a quicker animation
      slideChildren[slideChildren.length - 1].style.transform =
        "translate(-50%, -50%) scale(0)"; // Shrink the last slide to create a disappearing effect

      setTimeout(() => {
        slideChildren[slideChildren.length - 1].style.transitionDuration =
          "0.0s"; // Set transition duration to 0 to immediately update the style
        slideChildren[slideChildren.length - 1].style.left = firstSlide_left; // Move the last slide to the left position of the first slide
        slideChildren[slideChildren.length - 1].style.zIndex =
          firstSlide_zIndex; // Set the zIndex of the last slide to the zIndex of the first slide

        this.longSlider.insertBefore(
          slideChildren[slideChildren.length - 1],
          slideChildren[0] // Move the last slide to the beginning of the slider component
        );

        setTimeout(() => {
          slideChildren[0].style.transitionDuration = "0.2s"; // Set a shorter transition duration for a quicker animation
          slideChildren[0].style.transform = firstSlide_transform; // Set the transform property of the first slide to its original value

          this.animationInProgress = false; // Set the animation in progress flag to false
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  render() {
    return (
      <div style={styles.sliderContainer}>
        {/* Button to move to the previous slide */}
        <button className="slideBtn" onClick={this.handle_previous}>
          Previous
        </button>
        {/* Button to move to the next slide */}
        <button className="slideBtn" onClick={this.handle_next}>
          Next
        </button>
        {/* The container for the long slider */}
        <div
          ref={(ref_id) => (this.longSlider = ref_id)}
          style={styles.longSlider}
        >
          {this.state.sliders} {/* Render the slider components */}
        </div>
      </div>
    );
  }
}

//colors for the background and base of the slider.
const color = [
  "yellow",
  "orange",
  "red",
  "blue",
  "green",
  "purple",
  "black",
  "white",
  "grey",
];

const styles = {
  sliderContainer: {
    position: "relative",
    overflow: "hidden", // Prevent slider images from overflowing the page view
  },
  longSlider: {
    position: "relative",
    top: "10rem",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "300px",
    width: "300px",
  },
};

export default LongSlider;
