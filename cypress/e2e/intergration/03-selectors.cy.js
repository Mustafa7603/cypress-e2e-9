/// <reference types="Cypress"/>

describe("Cypress Selectors", () => {
  /* before(() => {
runs only once
  }) */
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
  });

  it("selectors", () => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.get(".CardGrids_CardGrids__qDdyI").as("allCards");

    cy.get("@allCards");

    cy.get(".cards").first();
    cy.get(".cards").last();
    cy.get(".cards").eq(9);

    cy.contains("Html Elements");
    cy.contains(".cards", "Html Elements");
    cy.get("@allCards").contains("Html Elements");
  });

  it("Practises web elem using find", () => {
    cy.contains(".cards", "Html Elements").click();
    cy.get("div").contains("Paragraph");

    cy.get("#radio-button-group").find("div");
    cy.get("#radio-button-group > div");

    //locating siblings
    cy.get("div").contains("Paragraph").next();
    cy.get("div").contains("Paragraph").nextAll();
    cy.get("#testing_paragraph").prev();
    cy.get("#testing_paragraph").prevAll();
    cy.get("#testing_paragraph").parent();
    cy.get("#testing_paragraph").parents();
    cy.get("#testing_paragraph").parentsUntil();
    cy.get('[data-identifier="Paragraphs"]').children();
    cy.get("#checkbox-button-group")
      .next()
      .find("div")
      .first()
      .find("input")
      .parent()
      .parent()
      .parent()
      .prev();
  });
});
