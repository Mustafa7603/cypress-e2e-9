/// <reference types="cypress" />
import Tables from "../../pages/static.js";

const tables = new Tables();
describe("static tables", function () {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/tables");
    cy.fixture("table").then(function (data) {
      this.texts = data.texts;
    });
  });
  it("verify address", function () {
    tables.Locators().each(function (el, index) {
      cy.wrap(el).should("have.text", this.texts[index]);
    });
  });
});
