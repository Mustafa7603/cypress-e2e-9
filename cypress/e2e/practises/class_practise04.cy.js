import Wiki from "../../pages/wikiPage.js";
/// <reference types="cypress" />
const wiki = new Wiki();
describe("Wiki test", () => {
  beforeEach(() => {
    cy.visit("https://www.wikipedia.org/");
  });
  it("TASK-1: Validate the Wikipedia Logo and Slogan", () => {
    wiki.Logo().should("contain", "Wikipedia").and("be.visible");
    wiki.Slogan().should("contain", "The Free Encyclopedia").and("be.visible");
  });

  it("TASK-2: Validate the Wikipedia Top Ten Languages", () => {
    cy.get("nav > .central-featured-lang").each(($el, index) => {
      cy.wrap($el).should("be.visible");
    });
    cy.get("nav > .central-featured-lang").eq(0).should("contain", "English");
  });
  it("TASK-3: Validate the Wikipedia Search Results", () => {
    cy.get("div > #searchInput").type("Cypress{enter}");
    cy.title().should("contain", "Cypress");
    cy.url().should("contain", "Cypress");
    cy.get("#firstHeading").should("have.text", "Cypress");
  });

  it.only("TASK-4: Validate the Wikipedia Article Numbers for All Languages", () => {
    const numbers = [18, 53, 99, 126, 29];

    cy.get("#js-lang-list-button").click();
    for (let i = 0; i < 4; i++)
      cy.get(".hlist").eq(i).find("a").should("have.length", numbers[i]);
  });
});
