/// <reference types="Cypress"/>

describe("My First Tests", () => {
  it("Visit TechGlobal training app homepage", () => {
    cy.visit("https://www.techglobal-training.com/");
    cy.reload();
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.go("back");
    cy.go("forward");
    cy.go("back");
    cy.title().should("equal", "TechGlobal Training | Home");
    cy.url().should("contain", "techglobal-training");
  });

  it("My frist test", () => {
    cy.visit("https://www.techglobal-training.com/");

    cy.get("#logo").click();
    cy.get("#logo").should("be.visible");
  });
});
