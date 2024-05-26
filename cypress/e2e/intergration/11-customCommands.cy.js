/// <reference types="cypress" />

describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("HTML Elements");
  });

  it("parent commands", () => {
    selectDropdownOption("#company_dropdown1", "Apple");
  });

  it("parent commands", () => {
    selectDropdownOption("#company_dropdown1", "Apple");
  });

  it("login", () => {
    login();
  });

  it("childcommand", () => {
    cy.get("#main_heading").logText();
  });

  it("childcommand", () => {
    cy.get("#main_heading").logText();
  });
});
