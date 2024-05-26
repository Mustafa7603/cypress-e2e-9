/// <reference types="Cypress"/>
describe("Assertions", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-4");
  });

  it("add product and close", () => {
    cy.get("#add_product_btn").click();
    cy.get(".modal-card").should("be.visible");
    cy.get(".delete").click();
    cy.get(".modal-card").should("not.exist");
  });
});
