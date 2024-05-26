/// <reference types="Cypress"/>
/**
 * TEST CASE 1
 * Go to https://techglobal-training.com/frontend/dynamic-elements
 * Locate the below box is displayed
 * Box 1
 *
 * TEST CASE 2
 * Go to https://techglobal-training.com/frontend/dynamic-elements
 * Locate the below box is displayed
 * Box 2
 */
describe("CSS Locators", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });

  it("Test Case", () => {
    cy.visit("https://techglobal-training.com/frontend/dynamic-elements");
    cy.get('[id*="box_1"]');
    cy.get('[id*="box_2"]');
  });
});

// * = contains
// ^ = startswith
// $ = endswith

// comma between two or more elements gets element that have no relationship
