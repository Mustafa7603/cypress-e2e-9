//es6

/// <reference types="cypress" />

import BasePage from "./BasePage";

/* import LoginPage from "filepath" */

//commonJs
/* module.exports = LoginPage
const LoginPage = require('filepath')
 */

class LoginPage extends BasePage {
  // locators

  getUsernameField() {
    return cy.get("#username");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getSubmitButton() {
    return cy.get("#login_btn");
  }

  getSuccessMessage() {
    return cy.get("#success_lgn");
  }

  getErrorMessage() {
    return cy.get("#error_message");
  }

  //methods
  clickLoginButton() {
    this.getSubmitButton().click();
  }

  userLogin(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.clickLoginButton();
  }
}
export default LoginPage;
