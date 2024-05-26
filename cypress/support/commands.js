// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("clickCard", (link) => {
  cy.get(".cards").contains(link).click();
});

Cypress.Commands.add("selectDropdownOption", (element, option) => {
  cy.get(element).select(option);
});

Cypress.Commands.add("login", (email, name) => {
  cy.get().type(email);
  cy.get().type(name);
  cy.get().click();
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//always keep true    and subject is always unknown     child commands always come as then()// jquery element, you need to wrap it
Cypress.Commands.add("logText", { prevSubject: true }, (subject, options) => {
  const text = subject.text();

  cy.log(text);
});

Cypress.Commands.add("ValidAV", { prevSubject: true }, (element, value) => {
  cy.wrap(subject).should("have.text", value);
  if (cy.wrap(element).should("have.attr", "required"))
    return cy.wrap(value, true);
  else return cy.wrap(value, false);
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
