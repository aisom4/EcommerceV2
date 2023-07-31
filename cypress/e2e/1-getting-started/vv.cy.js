describe("Running Tests on Ecommerce Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Successfully Loads and Has Correct Title Name", () => {
    cy.title().should("eq", "React App");
  });

  it("Heading Text should be valid", () => {
    cy.get(".homeText").should("contain", "Your Key To The World");
  });

  it("Wave Container Should Properly Render", () => {
    cy.get(".waveContainer").should("exist");
    cy.get("h3").should("contain", "HighWave Sounds to Select Songs");
  });
  it("Verifying that Image slider exist", () => {
    cy.get(".slidingAlbums").should("exist");
  });
});
