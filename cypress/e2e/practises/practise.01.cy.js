/// <reference types="cypress"/>
describe("Practice01 - Validate Google Home Page", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });
  it("TASK-1: Validate the Google Home Page Title and URL", () => {
    cy.url("https://www.google.com/");
    cy.get("head > title").contains("Google");
  });

  it("TASK-2: Validate the Google Logo Presence", () => {
    cy.get('img[class="lnXdpd"').should("be.visible");
  });

  it("TASK-3: Validate the Google Search Results", () => {
    cy.get("#APjFqb").type("Cypress");
    cy.get('[class^="sbct"]').should("be.visible");
  });
  it("TASK-4: Validate the Google Search Autocomplete Suggestions", () => {
    cy.get("#APjFqb").type("Artificial Intelligence");
    cy.get(".sbct.PZPZlf.sbre")
      .click()
      .url()
      .should("contain", "q=artificial+intelligence");
  });
});
