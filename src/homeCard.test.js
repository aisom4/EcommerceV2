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
