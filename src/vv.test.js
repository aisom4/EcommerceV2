import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional jest-dom matchers
import Home from "./Home"; // Assuming this component contains the provided code

describe("Home Component", () => {
  it("renders the heading text correctly", () => {
    render(
      <div className="homeBackground">
        <div className="homeInfo">
          <h1 className="homeText">Your Key To The World</h1>
          <p className="homeSmallText">Music Connects Us All.</p>
          {/* <Link to="/products"> */}
          <button className="getStarted">Get Started</button>
          {/* </Link> */}
        </div>
        <img
          src="/altbackground.png"
          alt="Songs Playing on a Phone"
          className="firstHomeImg"
        />
      </div>
    );

    const headingElement = screen.getByText("Your Key To The World");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the small text correctly", () => {
    render(
      <div className="homeBackground">
        <div className="homeInfo">
          <h1 className="homeText">Your Key To The World</h1>
          <p className="homeSmallText">Music Connects Us All.</p>
          {/* <Link to="/products"> */}
          <button className="getStarted">Get Started</button>
          {/* </Link> */}
        </div>
        <img
          src="/altbackground.png"
          alt="Songs Playing on a Phone"
          className="firstHomeImg"
        />
      </div>
    );

    const smallTextElement = screen.getByText("Music Connects Us All.");
    expect(smallTextElement).toBeInTheDocument();
  });

  it('renders the "Get Started" button correctly', () => {
    render(
      <div className="homeBackground">
        <div className="homeInfo">
          <h1 className="homeText">Your Key To The World</h1>
          <p className="homeSmallText">Music Connects Us All.</p>
          <button className="getStarted">Get Started</button>
        </div>
        <img
          src="/altbackground.png"
          alt="Songs Playing on a Phone"
          className="firstHomeImg"
        />
      </div>
    );

    const buttonElement = screen.getByRole("button", { name: "Get Started" });
    expect(buttonElement).toBeInTheDocument();
  });
});

//another test
import React from "react";
import { render, screen } from "@testing-library/react";
import HomeCard from "./homeCard";

describe("HomeCard Component", () => {
  const mockProps = {
    title: "Test Title",
    imageUrl: "/path/to/image.jpg",
    body: "Test body content",
  };

  it("renders the HomeCard correctly with provided props", () => {
    render(<HomeCard {...mockProps} />);

    // Check the title
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();

    // Check the image
    const imageElement = screen.getByAltText(" ");
    expect(imageElement).toHaveAttribute("src", "/path/to/image.jpg");

    // Check the body content
    const bodyElement = screen.getByText("Test body content");
    expect(bodyElement).toBeInTheDocument();

    // Check the "View More" button
    const buttonElement = screen.getByRole("button", { name: "View More" });
    expect(buttonElement).toBeInTheDocument();
  });
});
