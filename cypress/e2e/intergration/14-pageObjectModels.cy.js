/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage.js";

const loginPage = new LoginPage();

describe("Login page test", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("Project - Login Function");
  });

  /*  it("Login without POM", () => {
    cy.get("#username").type(Cypress.env("UI_USERNAME"));

    cy.get("#password").type(Cypress.env("UI_PASSWORD"));

    cy.get("#login_btn").click();

    cy.get("#success_lgn").should("be.visible");
  }); */

  it("Login without POM", () => {
    loginPage.userLogin("TechGlobal", "Test1234");
    loginPage.getSuccessMessage().should("be.visible");
  });

  it.only("Login without POM", () => {
    loginPage.userLogin("Techglobal", "Test1234");
    loginPage
      .getErrorMessage()
      .should("have.text", "Invalid Username entered!");
  });
});
