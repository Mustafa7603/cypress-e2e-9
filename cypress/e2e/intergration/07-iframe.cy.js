/// <reference types="Cypress"/>

// iframe is embedded html inside another html
// contents from another website

describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "IFrames").click();
  });

  it("iFrame", () => {
    // cy.get('#form_frame')
    // .its('0.contentDocument.body')
    // .should('not.be.empty')
    // .find('#first_name').type('MyName')

    const arr = ["tech", "global"];

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#first_name, #last_name")
      .each(($el, index) => {
        cy.wrap($el).type(arr[index]);
      });
  });
  const firstn = "John";
  const lastn = "Doe";
  it("john doe", () => {
    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#first_name")
      .type(firstn);

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#last_name")
      .type(lastn);

    cy.get("#form_frame").its("0.contentDocument.body").find("#submit").click();
    cy.get("#result").should("have.text", `You entered: ${firstn} ${lastn}`);
  });

  it("next", () => {});
});
