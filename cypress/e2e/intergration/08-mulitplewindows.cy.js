/// <reference types="Cypress"/>
describe("Handling multiple windows", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("Multiple Windows");
  });

  /*   it("iFrame", () => {
    cy.get("#microsoft").should("have.attr", "target", "_blank");

    cy.get("#microsoft").invoke("removeAttr", "target").click();

    cy.url().should("contains", "microsoft");
  }); */

  //to get rid of TARGET BLANK AND TURN WEB ELEMENT TO JAVASCRIPT ***************************

  it("multiple window and web element to js", () => {
    //cy.get("#apple").should("have.attr", "target", "_blank");

    cy.get("#apple").invoke("removeAttr", "target").click();

    cy.title().should("contains", "Apple");
    cy.go(-1);

    cy.title().then(($el) => {
      const el = $el.toLowerCase();
      cy.wrap(el).should("contain", "techglobal");
    });
  });

  it("practise", () => {});
});
