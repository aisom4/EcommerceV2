import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("renders the navigation elements correctly", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    // Check the logo image
    const logoElement = screen.getByAltText("website logo");
    expect(logoElement).toBeInTheDocument();

    // Check the "Home" link
    const homeLinkElement = screen.getByRole("link", { name: "Home" });
    expect(homeLinkElement).toBeInTheDocument();
    expect(homeLinkElement.getAttribute("href")).toBe("/");

    // Check the "About" link
    const aboutLinkElement = screen.getByRole("link", { name: "About" });
    expect(aboutLinkElement).toBeInTheDocument();
    expect(aboutLinkElement.getAttribute("href")).toBe("/about");

    // Check the "Products" link
    const productsLinkElement = screen.getByRole("link", { name: "Products" });
    expect(productsLinkElement).toBeInTheDocument();
    expect(productsLinkElement.getAttribute("href")).toBe("/products");

    // Check the "Contact" link
    const contactLinkElement = screen.getByRole("link", { name: "Contact" });
    expect(contactLinkElement).toBeInTheDocument();
    expect(contactLinkElement.getAttribute("href")).toBe("/contact");

    // Check the "Log In" link
    const loginLinkElement = screen.getByRole("link", { name: "Log In" });
    expect(loginLinkElement).toBeInTheDocument();
    expect(loginLinkElement.getAttribute("href")).toBe("/");
  });
});
