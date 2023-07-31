import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use custom matchers like toHaveStyle

import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the Footer correctly", () => {
    render(<Footer />);

    // Check the "Made By Aishah" text
    const madeByText = screen.getByText("Made By Aishah");
    expect(madeByText).toBeInTheDocument();

    // Check the footer links
    const homeLink = screen.getByText("Home");
    const contactUsLink = screen.getByText("Contact Us");
    const aboutUsLink = screen.getByText("About Us");
    const getStartedLink = screen.getByText("Get Started");

    expect(homeLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(getStartedLink).toBeInTheDocument();

    // Check the footer services links
    const appDesignLink = screen.getByText("App Design");
    const webDesignLink = screen.getByText("Web Design");
    const logoDesignLink = screen.getByText("Logo Design");
    const bannerDesignLink = screen.getByText("Banner Design");

    expect(appDesignLink).toBeInTheDocument();
    expect(webDesignLink).toBeInTheDocument();
    expect(logoDesignLink).toBeInTheDocument();
    expect(bannerDesignLink).toBeInTheDocument();

    // Check the footer account links
    const profileLink = screen.getByText("Profile");
    const myAccountLink = screen.getByText("My Account");
    const preferencesLink = screen.getByText("Prefrences");
    const purchasesLink = screen.getByText("Purchases");

    expect(profileLink).toBeInTheDocument();
    expect(myAccountLink).toBeInTheDocument();
    expect(preferencesLink).toBeInTheDocument();
    expect(purchasesLink).toBeInTheDocument();

    // Check the footer "Check Out More" links
    const shopLink = screen.getByText("Shop");
    const findMoreLink = screen.getByText("Find More");
    const preOrderLink = screen.getByText("PreOrder");
    const checkUsOutLink = screen.getByText("Check Us Out");

    expect(shopLink).toBeInTheDocument();
    expect(findMoreLink).toBeInTheDocument();
    expect(preOrderLink).toBeInTheDocument();
    expect(checkUsOutLink).toBeInTheDocument();

    // Check the Subscribe input and button
    const emailInput = screen.getByPlaceholderText("Enter your Email Here!");
    const subscribeButton = screen.getByRole("button", { name: "Subscribe!" });

    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });
});
